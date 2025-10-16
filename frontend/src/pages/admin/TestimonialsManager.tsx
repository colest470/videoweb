import React, { useEffect, useState } from 'react';
import { Trash2, Check, X } from 'lucide-react';
import Container from '../../components/ui/Container';
import Button from '../../components/ui/Button';

interface Testimonial {
  _id: number;
  id: number;
  author: string;
  position: string;
  quote: string;
  imageUrl: string;
  approved: boolean;
  createdAt: string;
}

const TestimonialsManager: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  // let dates = new Date();

  useEffect(() => {
    const getData = async () => {
      //const backendPort = 7865;
      const url = `https://elkay-backend.onrender.com/`;
  
      try {
        setIsLoading(true);
        setError(null);
        const response = await fetch(url);
    
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
    
        const data: Testimonial[] = await response.json(); 
        setTestimonials(data);
      } catch (error) {
        console.error('Error fetching testimonials:', error);
        setError('Failed to load testimonials. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    getData();
  }, [refreshTrigger]);

  const triggerRefresh = () => {
    setRefreshTrigger(prev => prev + 1);
  };

  const updateTestimonialStatus = async (id: number, approved: boolean) => {
    // const backendPort = 7865;
    const url = `https://elkay-backend.onrender.com/${id}/approve`; 
    try {
      const response = await fetch(url, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ approved }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      triggerRefresh();
    } catch (error) {
      console.error(`Error updating status for testimonial ${id}:`, error);
      setError('Failed to update testimonial status.');
    }

  };

  const deleteTestimonial = async (id: number) => {
    // const backendPort = 7865;
    const url = `https://elkay-backend.onrender.com/DELETE/testimonial/${id}`;
    try {
      const response = await fetch(url, {
        method: 'DELETE',
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      triggerRefresh();
    } catch (error) {
      console.error(`Error deleting testimonial ${id}:`, error);
      setError('Failed to delete testimonial.');
    }
  };

  const handleApprove = (id: number) => {
    updateTestimonialStatus(id, true);
  };

  const handleReject = (id: number) => {
    updateTestimonialStatus(id, false);
  };

  const handleDelete = (id: number) => {
    if (confirm('Are you sure you want to delete this testimonial?')) {
      deleteTestimonial(id);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 pt-20">
      <Container>
        <div className="py-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Manage Testimonials</h1>
            <Button onClick={triggerRefresh} className="px-4 py-2">
              Refresh List
            </Button>
          </div>

          {isLoading && <p className="text-center text-blue-500 dark:text-blue-400">Loading testimonials...</p>}
          {error && <p className="text-center text-red-500 dark:text-red-400">{error}</p>}

          {!isLoading && !error && testimonials.length === 0 && (
            <p className="text-center text-gray-600 dark:text-gray-400">No testimonials found.</p>
          )}

          {!isLoading && !error && testimonials.length > 0 && (
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 dark:bg-gray-700">
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Author
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Quote
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Status
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Date
                      </th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {testimonials.map((testimonial) => (
                      <tr key={testimonial.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <img
                              src={testimonial.imageUrl}
                              alt={testimonial.author}
                              className="h-10 w-10 rounded-full object-cover"
                            />
                            <div className="ml-3">
                              <p className="font-medium text-gray-900 dark:text-white">
                                {testimonial.author}
                              </p>
                              <p className="text-sm text-gray-500 dark:text-gray-400">
                                {testimonial.position}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <p className="text-gray-600 dark:text-gray-300 truncate max-w-md">
                            {testimonial.quote}
                          </p>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            testimonial.approved
                              ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                              : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' 
                          }`}>
                            {testimonial.approved ? 'Approved' : 'Pending'}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-gray-600 dark:text-gray-300">
                          {new Date(testimonial.createdAt).toLocaleDateString()} at {new Date(testimonial.createdAt).getHours()}:{new Date(testimonial.createdAt).getMinutes()}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right space-x-2">
                          {!testimonial.approved && (
                            <>
                              <Button
                                variant="outline"
                                className="text-green-600 hover:text-green-700"
                                onClick={() => handleApprove(testimonial._id)}
                              >
                                <Check className="h-4 w-4" />
                              </Button>
                              
                            </>
                          )}
                          {testimonial.approved && (
                            <>
                              <Button
                                  variant="outline"
                                  className="text-red-600 hover:text-red-700"
                                  onClick={() => handleReject(testimonial._id)}
                                >
                                  <X className="h-4 w-4" />
                                </Button>
                            </>
                          )}
                          <Button
                            variant="outline"
                            className="text-red-600 hover:text-red-700"
                            onClick={() => handleDelete(testimonial._id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default TestimonialsManager;