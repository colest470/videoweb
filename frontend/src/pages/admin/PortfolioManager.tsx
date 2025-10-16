import React, { useState, useRef } from 'react';
import { Trash2, Plus, Image as ImageIcon } from 'lucide-react';
import Container from '../../components/ui/Container';
import Button from '../../components/ui/Button';

interface PortfolioItem {
  _id?: string; 
  title: string;
  description: string;
  category: string;
  thumbnailUrl: string;
  link: string;
} 

const PortfolioManager: React.FC = () => {
  const [items, setItems] = useState<PortfolioItem[]>([]);
  const [isAdding, setIsAdding] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [submittedImage, setSubmittedImage] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [newItem, setNewItem] = useState<PortfolioItem>({
    title: '',
    description: '',
    category: 'video',
    thumbnailUrl: '',
    link: '',
  });

  React.useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch('https://elkay-backend.onrender.com/portfolio');

        if (!response.ok) {
          throw new Error('Failed to fetch portfolio items');
        }
        const data = await response.json();

        setItems(data.data);
      } catch (err) {
        console.error('Error fetching items:', err);
        setError('Failed to load portfolio items.');
      }
    };
    fetchItems();
  }, []);

  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) {
      setError("Error! No image file selected.");
      setPreviewUrl("");
      return;
    }

    if (!file.type.match("image.*")) {
      setError("Please select an image file (png, jpg, jpeg, gif)");
      setPreviewUrl("");
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      setError("Image size should be less than 5MB");
      setPreviewUrl("");
      return;
    }

    const preview = URL.createObjectURL(file);
    setPreviewUrl(preview);
    setError(null);

    setUploading(true);
    setSubmittedImage(false);

    const formData = new FormData();
    formData.append('file', file);
    formData.append('upload_preset', 'videoweb');
    formData.append("cloud_name", "dzf8fcvop");

    try {
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/dzf8fcvop/image/upload`, {
          method: 'POST',
          body: formData,
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error?.message || 'Image upload failed');
      } else {
        setSubmittedImage(true);
      }

      const data = await response.json();
      setNewItem((prev) => ({ ...prev, thumbnailUrl: data.secure_url }));

    } catch (error: any) {
      console.error('Error uploading image:', error);
      setError(`Failed to upload image: ${error.message || 'Please try again.'}`);
      setPreviewUrl("");
    } finally {
      setUploading(false);
      setPreviewUrl("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!newItem.thumbnailUrl) {
      setError("Please upload a thumbnail image.");
      return;
    }
    if (!submittedImage) {
      setError("Please wait for the image to finish uploading or ensure it was successfully submitted.");
      return;
    }

    const url = "https://elkay-backend.onrender.com/POST/portfolio";

    try {
      const response = await fetch( url, {
        method: "POST",
        headers: {
          "Content-type": "application/json"
        },
        body: JSON.stringify(newItem)
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to add portfolio item');
      }

      const addedItem = await response.json();
      setItems((prevItems) => [...prevItems, addedItem]);

      // Reset form fields
      setNewItem({
        title: '',
        description: '',
        category: 'video',
        thumbnailUrl: '',
        link: '',
      });
      
      setIsAdding(false);
      setPreviewUrl('');
      setError(null);
      setSubmittedImage(false);
      alert('Portfolio item added successfully!');
      window.location.reload();
    } catch (error: any) {
      console.error('Error adding portfolio item:', error);
      setError(`Failed to add item: ${error.message || 'Please check your connection and try again.'}`);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this portfolio item?')) {
      try {
        const response = await fetch(`https://elkay-backend.onrender.com/DELETE/portfolio/${id}`, {
          method: "DELETE",
          // Add headers like 'Authorization' if your API requires it
          // headers: {
          //   'Authorization': 'Bearer YOUR_AUTH_TOKEN'
          // }
        });

        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || 'Delete failed! Check internet connection.');
        }

        setItems((prevItems) => prevItems.filter((item) => item._id !== id));
        setError(null);
        alert('Portfolio item deleted successfully!');

      } catch (error: any) {
        console.error('Error deleting portfolio item:', error);
        setError(`Failed to delete item: ${error.message || 'Please try again.'}`);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <Container>
        <div className="py-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Manage Portfolio</h1>
            <Button
              variant="primary"
              onClick={() => {
                setIsAdding(true);
                setNewItem({
                  title: '',
                  description: '',
                  category: 'video',
                  thumbnailUrl: '',
                  link: '',
                });
                setPreviewUrl(''); 
                setSubmittedImage(false); 
                setError(null); 
              }}
              className="flex items-center space-x-2"
            >
              <Plus className="h-5 w-5" />
              <span>Add New Item</span>
            </Button>
          </div>

          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
              <strong className="font-bold">Error!</strong>
              <span className="block sm:inline"> {error}</span>
              <span className="absolute top-0 bottom-0 right-0 px-4 py-3" onClick={() => setError(null)}>
                <svg className="fill-current h-6 w-6 text-red-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
              </span>
            </div>
          )}

          {isAdding && (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Add New Portfolio Item</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    required
                    value={newItem.title}
                    onChange={(e) => setNewItem({ ...newItem, title: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>

                <div>
                  <label htmlFor="category" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                    Category
                  </label>
                  <select
                    id="category"
                    required
                    value={newItem.category}
                    onChange={(e) => setNewItem({ ...newItem, category: e.target.value })} // Cast is not needed here
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  >
                    <option value="video">Video</option>
                    <option value="photo">Photo</option>
                    <option value="article">Article</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                    Description
                  </label>
                  <textarea
                    id="description"
                    required
                    value={newItem.description}
                    onChange={(e) => setNewItem({ ...newItem, description: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>

                <div>
                  <label htmlFor="link" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                    Link
                  </label>
                  <input
                    type="url"
                    id="link"
                    required
                    value={newItem.link}
                    onChange={(e) => setNewItem({ ...newItem, link: e.target.value })}
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                  />
                </div>

                <div>
                  <label htmlFor="thumbnail" className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                    Thumbnail
                  </label>
                  <div className="mt-1 flex items-center space-x-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => fileInputRef.current?.click()}
                      disabled={uploading}
                      className="flex items-center space-x-2"
                    >
                      {uploading ? (
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-blue-600"></div>
                      ) : (
                        <ImageIcon className="h-5 w-5" />
                      )}
                      <span>{uploading ? 'Uploading...' : 'Upload Thumbnail'}</span>
                    </Button>
                    <input
                      type="file"
                      ref={fileInputRef}
                      onChange={handleImageUpload}
                      accept="image/*"
                      className="hidden"
                    />
                    {previewUrl && (
                      <div className="relative w-20 h-20 rounded overflow-hidden">
                        <img
                          src={previewUrl}
                          alt="Thumbnail preview"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                     {submittedImage && !uploading && (
                      <span className="text-green-600 text-sm">Image uploaded!</span>
                    )}
                  </div>
                </div>

                <div className="flex justify-end space-x-3">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      setIsAdding(false);
                      setPreviewUrl('');
                      setError(null);
                    }}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" variant="primary" disabled={uploading || !submittedImage}>
                    Add Item
                  </Button>
                </div>
              </form>
            </div>
          )}

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-700">
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Thumbnail
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Title
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Category
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Link
                    </th>
                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {items.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="px-6 py-4 text-center text-gray-500 dark:text-gray-400">
                        No portfolio items yet. Add a new one!
                      </td>
                    </tr>
                  ) : (
                    items.map((item) => (
                      <tr key={item._id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="w-16 h-16 rounded overflow-hidden">
                            <img
                              src={item.thumbnailUrl}
                              alt={item.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <div>
                            <p className="font-medium text-gray-900 dark:text-white">
                              {item.title}
                            </p>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                              {item.description.substring(0, 100)}
                              {item.description.length > 100 ? '...' : ''}
                            </p>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                            {item.category}
                          </span>
                        </td>
                        <td className="px-6 py-4">
                          <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300"
                          >
                            View
                          </a>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right">
                          <Button
                            variant="outline"
                            className="text-red-600 hover:text-red-700"
                            onClick={() => item._id && handleDelete(item._id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default PortfolioManager;