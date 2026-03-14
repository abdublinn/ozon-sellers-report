import { useEffect, useRef, useState } from 'react';

interface QuoteProps {
  children: React.ReactNode;
}

export function Quote({ children }: QuoteProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`py-12 lg:py-16 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
    >
      <div className="container-main max-w-3xl">
        <blockquote className="bg-[#F5F5F5] quote-border pl-6 pr-8 py-6 lg:pl-8 lg:py-8">
          <p className="text-lg lg:text-xl text-[#1A1A1A] italic leading-relaxed">
            {children}
          </p>
        </blockquote>
      </div>
    </div>
  );
}
