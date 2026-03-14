import { Navigation } from './components/Navigation';
import { FullReportMarkdown } from './components/FullReportMarkdown';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Hero } from './sections/Hero';
import { Quote } from './sections/Quote';
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

        <section id="full-report" className="py-8 lg:py-10">
          <div className="container-main max-w-6xl">
            <ErrorBoundary>
              <FullReportMarkdown />
            </ErrorBoundary>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}

export default App;
