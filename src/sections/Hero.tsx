import { useEffect, useRef } from 'react';
import { ArrowDown, MessageCircle } from 'lucide-react';

const BASE = import.meta.env.BASE_URL;

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const children = hero.querySelectorAll('.animate-item');
    children.forEach((child, index) => {
      const el = child as HTMLElement;
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      setTimeout(() => {
        el.style.transition = 'opacity 600ms ease-out, transform 600ms ease-out';
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      }, 100 + index * 100);
    });
  }, []);

  const scrollToContent = () => {
    const element = document.getElementById('preface');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section ref={heroRef} className="relative pt-20 pb-10 overflow-hidden bg-[#0F2344]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(70,110,180,.35),transparent_45%),radial-gradient(circle_at_90%_15%,rgba(80,120,200,.25),transparent_40%)]" />
      <div className="absolute -left-32 top-1/2 h-px w-[160%] -translate-y-24 rotate-[-18deg] bg-white/10" />
      <div className="absolute -left-32 top-1/2 h-px w-[160%] translate-y-24 rotate-[-18deg] bg-white/10" />
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white/20 to-transparent" />

      <div className="container-main relative z-10">
        <div className="grid lg:grid-cols-[1fr_340px] gap-10 items-center max-w-6xl mx-auto">
          <div>
            <div className="animate-item">
              <span className="inline-block px-3 py-1 text-xs font-medium text-white/80 bg-white/10 rounded-full mb-6">
                Март 2026
              </span>
            </div>

            <h1 className="animate-item text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
              <span className="text-[#F59E0B]">Анатомия</span> мебельного
              <br />
              <span className="text-[#F59E0B]">Ozon</span>
            </h1>

            <p className="animate-item text-lg sm:text-xl text-white/80 mb-6 max-w-2xl">
              Объём, цены, видимость, реклама, концентрация продаж — данные за 28 дней, выводы для стратегии.
            </p>

            <div className="animate-item flex flex-wrap items-center gap-4">
              <button
                onClick={scrollToContent}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#F59E0B] text-white font-semibold rounded-lg hover:bg-amber-500 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                Читать отчёт
                <ArrowDown className="w-4 h-4" />
              </button>
              <a
                href="https://t.me/AleksandrBorisovich73"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white font-medium rounded-lg hover:bg-white/10 transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                Связаться с автором
              </a>
            </div>

          </div>

          <div className="animate-item hidden lg:block">
            <div className="w-64 xl:w-72 mx-auto rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
              <img
                src={`${BASE}images/author-hero.png`}
                alt="Александр Борисович Дублин"
                className="w-full h-[380px] object-cover"
              />
            </div>
            <p className="text-center text-white/70 mt-3 text-sm">Александр Дублин</p>
          </div>
        </div>
      </div>
    </section>
  );
}
