import { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const navLinks = [
  { label: 'Главная', href: '#hero' },
  { label: 'Цитата', href: '#quote' },
  { label: 'Отчёт', href: '#full-report' },
  { label: 'Об авторе', href: '#about-author' },
];

const blockLinks = [
  { num: 1, title: 'Объём и масштаб', id: 'block-1' },
  { num: 2, title: 'Ценовая политика', id: 'block-2' },
  { num: 3, title: 'Качество продаж и логистика', id: 'block-3' },
  { num: 4, title: 'Видимость и трафик', id: 'block-4' },
  { num: 5, title: 'Промо и реклама', id: 'block-5' },
  { num: 6, title: 'Динамика портфеля', id: 'block-6' },
  { num: 7, title: 'Логистическая схема', id: 'block-7' },
  { num: 8, title: 'Возраст ассортимента', id: 'block-8' },
  { num: 9, title: 'Итоговая матрица', id: 'block-9' },
  { num: 10, title: 'Концентрация продаж', id: 'block-10' },
  { num: 11, title: 'Категории 3-го уровня', id: 'block-11' },
  { num: 12, title: 'Скидка от цены', id: 'block-12' },
  { num: 13, title: 'Когортный анализ ДРР', id: 'block-13' },
  { num: 14, title: 'Стратегические выводы', id: 'block-14' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBlocksOpen, setIsBlocksOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const blocksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setIsBlocksOpen(false);

      const sections = navLinks.map((l) => l.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (blocksRef.current && !blocksRef.current.contains(e.target as Node)) {
        setIsBlocksOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    document.addEventListener('click', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsBlocksOpen(false);
    setIsMobileMenuOpen(false);
  };

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    if (href === '#hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const target = document.querySelector(href);
      if (target) {
        const offset = 80;
        const top = (target as HTMLElement).getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    }
    setIsMobileMenuOpen(false);
  };

  const handleBlockClick = (blockId: string) => {
    const report = document.getElementById('full-report');
    if (report) {
      report.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setTimeout(() => scrollTo(blockId), 400);
  };

  const linkClass = (href: string) =>
    `px-3 py-2 text-sm font-medium rounded-lg transition-colors whitespace-nowrap ${
      activeSection === href.slice(1)
        ? 'text-[#E53935] bg-red-50'
        : isScrolled
        ? 'text-gray-600 hover:text-[#1A1A1A] hover:bg-gray-100'
        : 'text-white/85 hover:text-white hover:bg-white/10'
    }`;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="container-main">
          <div className="flex items-center justify-between h-14 min-h-[3.5rem]">
            <a
              href="#hero"
              onClick={(e) => handleLinkClick(e, '#hero')}
              className={`text-sm font-bold transition-colors ${
                isScrolled ? 'text-[#1A1A1A] hover:text-[#E53935]' : 'text-white hover:text-white/90'
              }`}
            >
              Анатомия мебельного Ozon
            </a>

            <div className="hidden sm:flex items-center gap-0.5">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={linkClass(link.href)}
                >
                  {link.label}
                </a>
              ))}
              <div className="relative" ref={blocksRef}>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsBlocksOpen(!isBlocksOpen);
                  }}
                  className={linkClass('#full-report') + ' flex items-center gap-1'}
                >
                  Блоки
                  <ChevronDown
                    className={`size-4 transition-transform ${isBlocksOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isBlocksOpen && (
                  <div
                    className="absolute top-full left-0 mt-1 py-2 w-64 max-h-[70vh] overflow-y-auto bg-white rounded-lg border border-gray-200 shadow-lg"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {blockLinks.map((b) => (
                      <button
                        key={b.id}
                        type="button"
                        onClick={() => handleBlockClick(b.id)}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <span className="text-gray-400 font-medium">{b.num}.</span> {b.title}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`sm:hidden p-2 rounded transition-colors ${
                isScrolled ? 'text-[#1A1A1A] hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Меню"
            >
              {isMobileMenuOpen ? <X className="size-6" /> : <Menu className="size-6" />}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 sm:hidden transition-opacity duration-300 ${
          isMobileMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/30 transition-opacity ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-80 max-w-[85vw] bg-white shadow-xl transition-transform duration-300 overflow-y-auto ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="pt-20 pb-8 px-4">
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
              Разделы лендинга
            </p>
            <div className="flex flex-col gap-0.5 mb-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === link.href.slice(1)
                      ? 'text-[#E53935] bg-red-50'
                      : 'text-[#1A1A1A] hover:bg-gray-100'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
              Блоки отчёта
            </p>
            <div className="flex flex-col gap-0.5 max-h-64 overflow-y-auto">
              {blockLinks.map((b) => (
                <button
                  key={b.id}
                  type="button"
                  onClick={() => handleBlockClick(b.id)}
                  className="text-left px-4 py-2.5 rounded-lg text-sm text-gray-700 hover:bg-gray-100"
                >
                  <span className="text-gray-400 font-medium">{b.num}.</span> {b.title}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
