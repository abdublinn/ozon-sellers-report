import { useEffect, useRef, useState } from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

export function Section({ id, title, subtitle, children, className = '' }: SectionProps) {
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
      { threshold: 0.05 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id={id}
      ref={ref}
      className={`section-padding ${className}`}
    >
      <div
        className={`container-main max-w-3xl transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        <h2 className="text-2xl lg:text-3xl font-bold text-[#1A1A1A] mb-4">
          {title}
        </h2>
        {subtitle && (
          <p className="text-lg text-[#6B6B6B] mb-8">{subtitle}</p>
        )}
        <div className="prose prose-lg max-w-none">
          {children}
        </div>
      </div>
    </section>
  );
}
