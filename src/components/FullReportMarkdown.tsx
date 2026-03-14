import React, { useMemo, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import reportContent from '@/content/report.md?raw';
import * as AccordionPrimitive from '@radix-ui/react-accordion';
import { Plus, ChevronLeft, ChevronRight, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

const BLOCK_RE = /^## БЛОК (\d+)\. (.+)$/gm;

interface Block {
  num: number;
  title: string;
  content: string;
  id: string;
}

function parseBlocks(content: string): { intro: string; blocks: Block[] } {
  const blocks: Block[] = [];
  let intro = '';
  let lastEnd = 0;
  let m: RegExpExecArray | null;

  while ((m = BLOCK_RE.exec(content)) !== null) {
    const start = m.index;
    const num = parseInt(m[1], 10);
    const title = m[2].trim();
    if (blocks.length === 0) {
      intro = content.slice(0, start).trim();
    } else {
      blocks[blocks.length - 1].content = content.slice(lastEnd, start).trim();
    }
    blocks.push({ num, title, content: '', id: `block-${num}` });
    lastEnd = start;
  }

  if (blocks.length > 0) {
    blocks[blocks.length - 1].content = content.slice(lastEnd).trim();
  }

  return { intro, blocks };
}

const proseClasses =
  'prose prose-lg max-w-none prose-table:text-sm prose-th:bg-gray-100 prose-th:px-3 prose-th:py-2 prose-td:px-3 prose-td:py-2 prose-blockquote:border-l-amber-500 prose-blockquote:bg-amber-50 prose-blockquote:py-2 prose-blockquote:px-4 prose-pre:bg-[#0F2344] prose-pre:text-[#E8EEFF] prose-pre:border prose-pre:border-[#2C4B7A] prose-pre:shadow-md prose-pre:text-sm prose-pre:overflow-x-auto prose-code:text-inherit';

export function FullReportMarkdown() {
  const content = typeof reportContent === 'string' ? reportContent : '';
  const { intro, blocks } = useMemo(() => parseBlocks(content), [content]);

  const scrollToBlock = useCallback((id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, []);

  const goPrev = useCallback(() => {
    if (blocks.length === 0) return;
    const firstBelowTop = blocks.findIndex((b) => {
      const el = document.getElementById(b.id);
      return el ? el.getBoundingClientRect().top > 100 : false;
    });
    const currentIdx = firstBelowTop < 0 ? blocks.length - 1 : Math.max(0, firstBelowTop - 1);
    const prevIdx = Math.max(0, currentIdx - 1);
    scrollToBlock(blocks[prevIdx].id);
  }, [blocks, scrollToBlock]);

  const goNext = useCallback(() => {
    if (blocks.length === 0) return;
    const firstBelowTop = blocks.findIndex((b) => {
      const el = document.getElementById(b.id);
      return el ? el.getBoundingClientRect().top > 100 : false;
    });
    const nextIdx = firstBelowTop < 0 ? blocks.length - 1 : Math.min(firstBelowTop, blocks.length - 1);
    scrollToBlock(blocks[nextIdx].id);
  }, [blocks, scrollToBlock]);

  if (!content) {
    return <p className="text-[#6B6B6B]">Нет данных отчёта.</p>;
  }

  return (
    <div className="flex flex-col lg:flex-row gap-8 -mx-4 px-4 lg:-mx-12 lg:px-12 overflow-x-auto">
      {/* Sticky navigation */}
      <aside className="shrink-0 lg:w-56">
        <nav
          className="sticky top-24 rounded-lg border border-gray-200 bg-gray-50/80 p-3 text-sm"
          aria-label="Навигация по блокам"
        >
          <div className="flex items-center gap-2 mb-2 text-gray-600 font-medium">
            <Menu className="size-4" />
            Блоки отчёта
          </div>
          <div className="flex items-center gap-1 mb-3">
            <button
              type="button"
              onClick={goPrev}
              className="flex-1 flex items-center justify-center gap-1 py-2 rounded border border-gray-200 bg-white hover:bg-gray-50 text-gray-600 text-xs font-medium"
            >
              <ChevronLeft className="size-3.5" />
              Пред.
            </button>
            <button
              type="button"
              onClick={goNext}
              className="flex-1 flex items-center justify-center gap-1 py-2 rounded border border-gray-200 bg-white hover:bg-gray-50 text-gray-600 text-xs font-medium"
            >
              След.
              <ChevronRight className="size-3.5" />
            </button>
          </div>
          <ul className="space-y-0.5 max-h-[50vh] overflow-y-auto">
            {blocks.map((b) => (
              <li key={b.id}>
                <button
                  type="button"
                  onClick={() => scrollToBlock(b.id)}
                  className="w-full text-left py-1.5 px-2 rounded hover:bg-white hover:shadow-sm transition-colors text-gray-700 hover:text-[#0F2344]"
                >
                  <span className="font-medium text-gray-500">{b.num}.</span>{' '}
                  {b.title}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>

      {/* Content with accordion — blocks collapsed by default */}
      <div className="flex-1 min-w-0">
        <AccordionPrimitive.Root
          type="multiple"
          defaultValue={[]}
          className="space-y-2"
        >
          {blocks.map((block) => (
            <AccordionPrimitive.Item
              key={block.id}
              value={block.id}
              id={block.id}
              className="rounded-lg border border-gray-200 bg-white overflow-hidden data-[state=open]:border-amber-200 data-[state=open]:shadow-sm"
            >
              <AccordionPrimitive.Header className="flex">
                <AccordionPrimitive.Trigger
                  className={cn(
                    'flex flex-1 items-center justify-between gap-3 w-full py-3 px-4 text-left font-semibold',
                    'text-gray-800 hover:text-[#0F2344] hover:bg-gray-50',
                    'transition-colors group'
                  )}
                >
                  <span>
                    БЛОК {block.num}. {block.title}
                  </span>
                  <span className="flex size-8 shrink-0 items-center justify-center rounded border border-gray-200 bg-gray-50 text-gray-600 transition-transform duration-200 group-data-[state=open]:rotate-45">
                    <Plus className="size-4" />
                  </span>
                </AccordionPrimitive.Trigger>
              </AccordionPrimitive.Header>
              <AccordionPrimitive.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                <div className="border-t border-gray-100 px-4 pb-4 pt-2">
                  <article className={proseClasses}>
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {block.content}
                    </ReactMarkdown>
                  </article>
                </div>
              </AccordionPrimitive.Content>
            </AccordionPrimitive.Item>
          ))}
        </AccordionPrimitive.Root>
      </div>
    </div>
  );
}
