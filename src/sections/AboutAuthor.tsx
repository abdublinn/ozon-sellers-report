import { ArrowRight, BarChart3, BookOpen, Brain, MessageCircle, Target } from 'lucide-react';

const expertiseItems = [
  {
    icon: BarChart3,
    title: 'Управленческий учет и системы отчетности',
  },
  {
    icon: Target,
    title: 'Стратегическое позиционирование и миссия бренда',
  },
  {
    icon: Brain,
    title: 'Анализ данных и маркетинг с большой буквы М',
  },
  {
    icon: MessageCircle,
    title: 'Прямые консультации для мебельного бизнеса',
  },
];

export function AboutAuthor() {
  return (
    <section id="about-author" className="section-padding bg-[#F8FAFC] border-t border-gray-100">
      <div className="container-main max-w-5xl">
        <h2 className="text-2xl lg:text-3xl font-bold mb-3">Об авторе</h2>
        <p className="text-[#6B6B6B] max-w-3xl mb-8">
          Александр Борисович Дублин. Бизнес-аналитик и консультант. Работаю на стыке аналитики,
          кибернетики и теории систем, помогаю фабрикам строить стратегию выхода на маркетплейсы,
          а не только тактику карточек и рекламных ставок.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-8">
          {expertiseItems.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-3 p-4 rounded-lg border border-gray-200 bg-white hover:shadow-sm transition-shadow"
            >
              <div className="p-2 rounded-lg bg-red-50">
                <item.icon className="w-5 h-5 text-[#E53935]" />
              </div>
              <span className="text-sm text-[#1A1A1A] leading-snug">{item.title}</span>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          <a
            href="https://t.me/AleksandrBorisovich73"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#E53935] text-[#E53935] hover:bg-red-50 transition-colors text-sm font-medium"
          >
            <MessageCircle className="w-4 h-4" />
            Написать напрямую
            <ArrowRight className="w-4 h-4" />
          </a>
          <a
            href="https://t.me/ab_dublin"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 text-[#1A1A1A] hover:bg-gray-50 transition-colors text-sm font-medium"
          >
            <BookOpen className="w-4 h-4" />
            Telegram-канал
          </a>
          <a
            href="https://dzen.ru/dbs_dubas"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-300 text-[#1A1A1A] hover:bg-gray-50 transition-colors text-sm font-medium"
          >
            <BookOpen className="w-4 h-4" />
            Блог на Дзене
          </a>
        </div>
      </div>
    </section>
  );
}
