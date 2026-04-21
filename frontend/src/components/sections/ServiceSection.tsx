import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Camera, Video, PenTool } from 'lucide-react';
import Container from '../ui/Container';
import Button from '../ui/Button';

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  imageUrl: string;
}

const ServiceSection: React.FC = () => {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);

  const services: Service[] = [
    {
      icon: <Video className="h-8 w-8 text-blue-600" />,
      title: 'Video Production',
      description: 'From concept to final cut, we create engaging videos that tell your story.',
      features: [
        'Promotional Videos',
        'Corporate Films',
        'Event Coverage',
        'Social Media Content',
        'Drone Videography'
      ],
      imageUrl: 'https://images.pexels.com/photos/2608519/pexels-photo-2608519.jpeg'
    },
    {
      icon: <Camera className="h-8 w-8 text-indigo-600" />,
      title: 'Photography',
      description: 'Professional photography services for products, events, and corporate needs.',
      features: [
        'Product Photography',
        'Corporate Portraits',
        'Event Photography',
        'Architectural Shots',
        'Creative Concepts'
      ],
      imageUrl: '/IMG-20250319-WA0039.jpg'
    },
    {
      icon: <PenTool className="h-8 w-8 text-purple-600" />,
      title: 'Article Writing',
      description: 'Compelling articles and content that engage your audience and boost your SEO.',
      features: [
        'Blog Posts',
        'SEO Content',
        'Technical Writing',
        'Press Releases',
        'Social Media Copy'
      ],
      imageUrl: 'https://images.pexels.com/photos/6238297/pexels-photo-6238297.jpeg'
    }
  ];

  return (
    <section className="py-24 bg-gray-50">
      <Container>
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Professional Services</h2>
          <p className="text-xl text-gray-600">
            We offer a comprehensive suite of content creation services to help your brand communicate effectively.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="relative bg-white rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl"
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(null)}
            >
              <div className="h-48 relative overflow-hidden">
                <img 
                  src={service.imageUrl} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-in-out"
                  style={{
                    transform: hoverIndex === index ? 'scale(1.05)' : 'scale(1)'
                  }}
                />
              </div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  {service.icon}
                  <h3 className="ml-3 text-xl font-semibold text-gray-900">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <span className="inline-block h-5 w-5 rounded-full bg-blue-100 text-blue-600 mr-2 flex-shrink-0 text-center leading-5 text-sm">✓</span>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/services" className="inline-flex items-center text-blue-600 font-medium hover:text-blue-700 transition-colors">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link to="/services">
            <Button variant="primary" size="lg">
              Explore All Services
            </Button>
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default ServiceSection;