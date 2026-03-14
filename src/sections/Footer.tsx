import { BookOpen, MessageCircle } from 'lucide-react';

export function Footer() {
  return (
    <footer id="about-author" className="bg-[#1A1A1A] text-white py-12 lg:py-16">
      <div className="container-main max-w-3xl">
        <div className="text-center mb-8">
          <h3 className="text-xl font-bold mb-2">Александр Борисович Дублин</h3>
          <p className="text-white/75 text-sm">
            Бизнес-аналитик и консультант. Аналитика маркетплейсов, стратегия, ассортимент.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-6 text-xs">
          <span className="px-2.5 py-1 rounded-full bg-white/10 text-white/85">Озон Аналитика</span>
          <span className="px-2.5 py-1 rounded-full bg-white/10 text-white/85">Селлеры</span>
          <span className="px-2.5 py-1 rounded-full bg-white/10 text-white/85">Интерьер</span>
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a
            href="https://t.me/ab_dublin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-sm"
          >
            <MessageCircle className="w-4 h-4" />
            Телеграмма- Й
          </a>
          <a
            href="https://dzen.ru/dbs_dubas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors text-sm"
          >
            <BookOpen className="w-4 h-4" />
            Блог на Дзене
          </a>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-white/40 text-xs">
            Отчёт основан на данных Ozon Analytics за период 14.02 — 14.03.2026 (28 дней)
          </p>
        </div>
      </div>
    </footer>
  );
}
