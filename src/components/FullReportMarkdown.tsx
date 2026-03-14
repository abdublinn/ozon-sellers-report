import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const REPORT_URL = `${import.meta.env.BASE_URL}ozon_sellers_fullmetrics_march2026.md`;

export function FullReportMarkdown() {
  const [content, setContent] = useState('');

  useEffect(() => {
    fetch(REPORT_URL)
      .then((res) => res.text())
      .then(setContent)
      .catch(() => setContent(''));
  }, []);

  if (!content) {
    return <p className="text-[#6B6B6B]">Загрузка полного отчёта...</p>;
  }
  return (
    <div className="-mx-4 px-4 lg:-mx-12 lg:px-12">
      <article className="prose prose-lg max-w-none prose-table:text-sm prose-th:bg-gray-100 prose-th:px-3 prose-th:py-2 prose-td:px-3 prose-td:py-2 prose-blockquote:border-l-amber-500 prose-blockquote:bg-amber-50 prose-blockquote:py-2 prose-blockquote:px-4 prose-pre:bg-gray-100 prose-pre:text-sm prose-pre:overflow-x-auto">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </article>
    </div>
  );
}
