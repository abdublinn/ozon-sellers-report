import { Navigation } from './components/Navigation';
import { FullReportMarkdown } from './components/FullReportMarkdown';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Hero } from './sections/Hero';
import { Quote } from './sections/Quote';
import { Section } from './components/Section';
import { Footer } from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main>
        <Hero />
        
        <Quote>
          Не ассортимент и не бюджет — а структура категории и качество карточки
          <br />
          определяют, сколько вы платите за каждый заказ.
        </Quote>

        <Section id="full-report" title="Полный отчёт" wide>
          <p className="mb-6">
            Ниже полный текст отчёта — все блоки, таблицы и инсайты без сокращений.
          </p>
          <ErrorBoundary>
            <FullReportMarkdown />
          </ErrorBoundary>
        </Section>

        <Section id="about-author" title="Об авторе">
          <p className="mb-4">
            Александр Борисович Дублин. Бизнес-аналитик и консультант. Аналитика маркетплейсов Ozon и WB, селлеры, стратегия ассортимента.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="https://t.me/AleksandrBorisovich73" target="_blank" rel="noopener noreferrer" className="text-[#E53935] hover:underline font-medium">Telegram</a>
            <a href="https://t.me/ab_dublin" target="_blank" rel="noopener noreferrer" className="text-[#E53935] hover:underline font-medium">Telegram-канал</a>
            <a href="https://dzen.ru/dbs_dubas" target="_blank" rel="noopener noreferrer" className="text-[#E53935] hover:underline font-medium">Блог на Дзене</a>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
