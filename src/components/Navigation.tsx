import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Предисловие', href: '#preface' },
  { label: '1. Объём', href: '#block1' },
  { label: '2. Цены', href: '#block2' },
  { label: '3. Качество', href: '#block3' },
  { label: '4. Видимость', href: '#block4' },
  { label: '5. Реклама', href: '#block5' },
  { label: '9. Матрица', href: '#block9' },
  { label: '10. Портреты', href: '#block10' },
  { label: '11. Концентрация', href: '#block11' },
  { label: 'Ограничения', href: '#limitations' },
  { label: 'Об авторе', href: '#about-author' },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
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

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };

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
          <div className="flex items-center justify-between h-16">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`text-sm font-semibold transition-colors ${
                isScrolled ? 'text-[#1A1A1A] hover:text-[#E53935]' : 'text-white hover:text-white/80'
              }`}
            >
              Ozon селлеры
            </a>

            <div className="hidden xl:flex items-center gap-1 overflow-x-auto max-w-3xl">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-2 py-1.5 text-xs font-medium rounded transition-colors whitespace-nowrap ${
                    activeSection === link.href.slice(1)
                      ? 'text-[#E53935] bg-red-50'
                      : isScrolled
                      ? 'text-[#6B6B6B] hover:text-[#1A1A1A] hover:bg-gray-100'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`xl:hidden p-2 transition-colors ${
                isScrolled ? 'text-[#1A1A1A] hover:text-[#E53935]' : 'text-white hover:text-white/80'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`fixed inset-0 z-40 xl:hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/20 backdrop-blur-sm transition-opacity duration-300 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={`absolute right-0 top-0 h-full w-72 bg-white shadow-xl transition-transform duration-300 overflow-y-auto ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="pt-20 pb-6 px-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(e, link.href)}
                  className={`px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                    activeSection === link.href.slice(1)
                      ? 'text-[#E53935] bg-red-50'
                      : 'text-[#1A1A1A] hover:bg-gray-100'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
