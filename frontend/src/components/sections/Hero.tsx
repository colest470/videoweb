import React, { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button';
import Container from '../ui/Container';

const Hero: React.FC = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elements = [titleRef.current, subtitleRef.current, ctaRef.current];
    
    elements.forEach((el, index) => {
      if (el) {
        setTimeout(() => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }, 400 * index);
      }
    });
  }, []);

  return (
    <div className="relative min-h-screen flex items-center justify-center text-white overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-black/70 z-10" />
        <img 
          src="/IMG_20250408_215927.jpg"
          alt="Studio setup" 
          className="w-full h-full object-cover"
        />
      </div>

      <Container className="relative z-10 py-20 md:py-0">
        <div className="max-w-3xl mx-auto text-center">
          <h1 
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight transition-all duration-700 ease-out opacity-0 transform translate-y-8"
          >
            Bring Your <span className="text-blue-400">Creative Vision</span> to Life
          </h1>
          
          <p 
            ref={subtitleRef}
            className="mt-6 text-xl md:text-2xl text-gray-200 transition-all duration-700 ease-out opacity-0 transform translate-y-8"
          >
            Professional video production, photography, and article writing services for brands that want to stand out.
          </p>
          
          <div 
            ref={ctaRef}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 ease-out opacity-0 transform translate-y-8"
          >
            <Link to="/portfolio">
              <Button size="lg" variant="primary">
                View Our Work <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
                Get in Touch
              </Button>
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Hero;