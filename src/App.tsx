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

      </main>

      <Footer />
    </div>
  );
}

export default App;
