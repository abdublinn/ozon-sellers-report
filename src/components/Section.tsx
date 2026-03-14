interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
  wide?: boolean;
}

export function Section({ id, title, subtitle, children, className = '', wide }: SectionProps) {
  return (
    <section
      id={id}
      className={`section-padding ${className}`}
    >
      <div
        className={`container-main ${wide ? 'max-w-6xl' : 'max-w-3xl'}`}
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
