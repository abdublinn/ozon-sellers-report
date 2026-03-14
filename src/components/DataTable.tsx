import { useEffect, useRef, useState } from 'react';

interface Column {
  key: string;
  label: string;
  align?: 'left' | 'right' | 'center';
  isNumber?: boolean;
}

interface DataTableProps {
  columns: Column[];
  data: Record<string, React.ReactNode>[];
  caption?: string;
}

export function DataTable({ columns, data, caption }: DataTableProps) {
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
    <div
      ref={ref}
      className={`my-8 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}
    >
      <div className="table-scroll -mx-6 px-6 lg:-mx-12 lg:px-12">
        <table className="data-table min-w-full">
          {caption && <caption className="text-left text-sm text-[#6B6B6B] mb-4 caption-top">{caption}</caption>}
          <thead>
            <tr>
              {columns.map((col) => (
                <th
                  key={col.key}
                  className={`${
                    col.align === 'right'
                      ? 'text-right'
                      : col.align === 'center'
                      ? 'text-center'
                      : 'text-left'
                  } ${col.isNumber ? 'font-mono' : ''}`}
                >
                  {col.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {columns.map((col) => (
                  <td
                    key={col.key}
                    className={`${
                      col.align === 'right'
                        ? 'text-right'
                        : col.align === 'center'
                        ? 'text-center'
                        : 'text-left'
                    } ${col.isNumber ? 'font-mono tabular-nums' : ''}`}
                  >
                    {row[col.key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
