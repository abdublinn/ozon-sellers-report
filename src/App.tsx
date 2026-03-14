import { Navigation } from './components/Navigation';
import { Hero } from './sections/Hero';
import { Quote } from './sections/Quote';
import { Section } from './components/Section';
import { DataTable } from './components/DataTable';
import { Footer } from './sections/Footer';

const volumeColumns = [
  { key: 'indicator', label: 'Показатель' },
  { key: 'uyut', label: 'Уютная логика', align: 'right' as const, isNumber: true },
  { key: 'nonton', label: 'Нонтон', align: 'right' as const, isNumber: true },
  { key: 'pravila', label: 'Правила мебели', align: 'right' as const, isNumber: true },
  { key: 'divan', label: 'Диван босс', align: 'right' as const, isNumber: true },
  { key: 'best', label: 'Бест', align: 'right' as const, isNumber: true },
  { key: 'mnogo', label: 'Много мебели', align: 'right' as const, isNumber: true },
];

const volumeData = [
  { indicator: 'Заказано на сумму (брутто), млн ₽', uyut: '437,8', nonton: '362,1', pravila: '297,5', divan: '126,6', best: '58,0', mnogo: '50,0' },
  { indicator: 'Заказано, тыс. штук', uyut: '33,3', nonton: '29,6', pravila: '29,2', divan: '4,1', best: '2,3', mnogo: '1,9' },
  { indicator: 'SKU в отчёте', uyut: '694', nonton: '1 000 ⚠️', pravila: '1 000 ⚠️', divan: '334', best: '1 000 ⚠️', mnogo: '373' },
  { indicator: 'Заказано на 1 SKU (брутто), тыс. ₽', uyut: '631', nonton: '362', pravila: '298', divan: '379', best: '58', mnogo: '134' },
];

const revenueColumns = [
  { key: 'indicator', label: 'Показатель' },
  { key: 'uyut', label: 'Уютная логика', align: 'right' as const, isNumber: true },
  { key: 'nonton', label: 'Нонтон', align: 'right' as const, isNumber: true },
  { key: 'pravila', label: 'Правила мебели', align: 'right' as const, isNumber: true },
  { key: 'divan', label: 'Диван босс', align: 'right' as const, isNumber: true },
  { key: 'best', label: 'Бест', align: 'right' as const, isNumber: true },
  { key: 'mnogo', label: 'Много мебели', align: 'right' as const, isNumber: true },
];

const revenueData = [
  { indicator: 'Выкуп, %', uyut: '94,0', nonton: '92,5', pravila: '86,1', divan: '89,5', best: '89,8', mnogo: '90,9' },
  { indicator: '~Чистая выручка, млн ₽', uyut: '~411,5', nonton: '~335,0', pravila: '~256,2', divan: '~113,3', best: '~52,1', mnogo: '~45,5' },
  { indicator: 'Потери на возвратах, млн ₽', uyut: '~26,3', nonton: '~27,1', pravila: '~41,3', divan: '~13,3', best: '~5,9', mnogo: '~4,6' },
];

const priceColumns = [
  { key: 'indicator', label: 'Показатель' },
  { key: 'uyut', label: 'Уютная логика', align: 'right' as const },
  { key: 'nonton', label: 'Нонтон', align: 'right' as const },
  { key: 'pravila', label: 'Правила мебели', align: 'right' as const },
  { key: 'divan', label: 'Диван босс', align: 'right' as const },
  { key: 'best', label: 'Бест', align: 'right' as const },
  { key: 'mnogo', label: 'Много мебели', align: 'right' as const },
];

const priceData = [
  { indicator: 'Средняя цена, ₽', uyut: '17 354', nonton: '19 252', pravila: '19 575', divan: '36 157', best: '33 568', mnogo: '30 951' },
  { indicator: 'Разрыв ср./мин., %', uyut: '+29%', nonton: '+10%', pravila: '+12%', divan: '+11%', best: '+2%', mnogo: '+6%' },
  { indicator: 'Скидка за акции, %', uyut: '15,0', nonton: '85,0', pravila: '32,0', divan: '3,1', best: '25,6', mnogo: '4,1' },
];

const drrColumns = [
  { key: 'indicator', label: 'Показатель' },
  { key: 'uyut', label: 'Уютная логика', align: 'right' as const },
  { key: 'nonton', label: 'Нонтон', align: 'right' as const },
  { key: 'pravila', label: 'Правила мебели', align: 'right' as const },
  { key: 'divan', label: 'Диван босс', align: 'right' as const },
  { key: 'best', label: 'Бест', align: 'right' as const },
  { key: 'mnogo', label: 'Много мебели', align: 'right' as const },
];

const drrData = [
  { indicator: 'ДРР к заказам, %', uyut: '16,41', nonton: '15,41', pravila: '11,31', divan: '10,26', best: '5,22', mnogo: '8,31' },
  { indicator: 'ДРР к выкупам, %', uyut: '17,47', nonton: '16,65', pravila: '13,13', divan: '11,45', best: '5,81', mnogo: '9,14' },
  { indicator: 'Расчётные рекл. расходы, млн ₽', uyut: '71,9', nonton: '55,8', pravila: '33,6', divan: '13,0', best: '3,0', mnogo: '4,1' },
];

const matrixColumns = [
  { key: 'metric', label: 'Показатель' },
  { key: 'leader', label: 'Лидер' },
  { key: 'outsider', label: 'Аутсайдер' },
];

const matrixData = [
  { metric: 'Заказано (брутто)', leader: 'Уютная логика (437,8 млн)', outsider: 'Много мебели (50,0 млн)' },
  { metric: 'Заказано на SKU', leader: 'Уютная логика (631 тыс.)', outsider: 'Бест (58 тыс.)' },
  { metric: 'Доля выкупа', leader: 'Уютная логика (94,0%)', outsider: 'Правила мебели (86,1%)' },
  { metric: 'Скорость доставки', leader: 'Нонтон (39 ч)', outsider: 'Правила мебели (55 ч)' },
  { metric: 'Конверсия карточки→корзина', leader: 'Уютная логика (5,84%)', outsider: 'Диван босс (4,04%)' },
  { metric: 'ДРР к заказам', leader: 'Бест (5,2%) — низкий', outsider: 'Уютная логика (16,4%) — высокий' },
  { metric: 'Органика (% выручки без рекламы)', leader: 'Уютная логика (17,2%)', outsider: 'Правила мебели (0,6%)' },
];

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

        <Section id="preface" title="Предисловие">
          <p className="mb-4">
            Этот отчёт — полное сравнение шести лидеров мебельного рынка Ozon за 28 дней (14.02 — 14.03.2026). Уютная логика, Нонтон, Правила мебели, Диван босс, Бест, Много мебели — их объёмы, цены, качество продаж, видимость, промо, реклама, концентрация, категории, скидки и стратегические портреты.
          </p>
          <p className="mb-4">
            Все стоимостные показатели — суммы заказов брутто (включая возвраты и отмены). Чистая выручка рассчитана как брутто × коэффициент выкупа.
          </p>
          <p>
            Ozon Analytics выгружает максимум 1 000 SKU на продавца. Нонтон, Правила мебели и Бест показывают ровно 1 000 — реальный ассортимент каждого из них больше. Выводы по ним — нижняя граница.
          </p>
        </Section>

        <Section id="block1" title="Блок 1. Объём и масштаб">
          <DataTable columns={volumeColumns} data={volumeData} />
          <DataTable columns={revenueColumns} data={revenueData} caption="Расчётная чистая выручка (брутто × коэффициент выкупа)" />
          <div className="bg-amber-50 border-l-4 border-amber-500 pl-6 py-4 my-6">
            <p className="text-[#1A1A1A] font-medium mb-1">Инсайт</p>
            <p className="text-sm text-[#6B6B6B]">
              После корректировки на выкуп разрыв между Уютной логикой и Правилами мебели увеличивается: 411 млн vs 256 млн — разница в 1,6 раза. Правила мебели теряют на возвратах 41,3 млн ₽ за 28 дней — полноценный маркетинговый бюджет среднего игрока.
            </p>
          </div>
        </Section>

        <Section id="block2" title="Блок 2. Ценовая политика">
          <DataTable columns={priceColumns} data={priceData} />
          <div className="bg-amber-50 border-l-4 border-amber-500 pl-6 py-4 my-6">
            <p className="text-[#1A1A1A] font-medium mb-1">Инсайт — две полярные стратегии</p>
            <p className="text-sm text-[#6B6B6B]">
              Уютная логика даёт акционную скидку 15% при 100% выручки через акции — работают с минимальными скидками. Нонтон — 85% скидка при тех же 100%. Это high-low pricing: базовая цена завышена, скидка создаёт эффект выгоды.
            </p>
          </div>
        </Section>

        <Section id="block3" title="Блок 3. Качество продаж и логистика">
          <p className="mb-4">
            Выкуп 86% у Правил мебели — это ~14% возвратов и отказов. При средней цене ~19 500 ₽ это значительные затраты на обратную логистику. Нонтон доставляет за 39 часов, Правила мебели — за 55. При прочих равных это влияет на конверсию: «доставка послезавтра» vs «через три дня».
          </p>
        </Section>

        <Section id="block4" title="Блок 4. Видимость и трафик">
          <p className="mb-4">
            Конверсия «показ → заказ» у Беста 0,07% — в 3,5–7 раз выше остальных. При этом показов на SKU — 16 057 (в 18 раз меньше, чем у Нонтона). Трафик у Беста целевой и точечный, но его катастрофически мало. Бест не имеет проблемы с качеством карточки — у него проблема с масштабом трафика.
          </p>
          <p>
            У Диван босс конверсия карточки в корзину 4,04% — самая низкая. При цене 36 тыс. ₽ это нормально, но разрыв с Уютной логикой (5,84%) — повод проверить качество фотографий и описания.
          </p>
        </Section>

        <Section id="block5" title="Блок 5. Промо и реклама">
          <DataTable columns={drrColumns} data={drrData} />
          <div className="bg-amber-50 border-l-4 border-amber-500 pl-6 py-4 my-6">
            <p className="text-[#1A1A1A] font-medium mb-1">Ключевые инсайты</p>
            <p className="text-sm text-[#6B6B6B] mb-2">
              Уютная логика: 68% SKU без рекламы, но 17,2% суммы заказов (75 млн ₽) — сильная органика.
            </p>
            <p className="text-sm text-[#6B6B6B] mb-2">
              Правила мебели: 99,3% SKU рекламируются, органика — 0,6%. Отключить рекламу = потерять бизнес.
            </p>
            <p className="text-sm text-[#6B6B6B]">
              Уютная логика тратит на рекламу ~72 млн ₽ в месяц — больше годовой выручки Беста.
            </p>
          </div>
        </Section>

        <Section id="block9" title="Блок 9. Итоговая матрица эффективности">
          <DataTable columns={matrixColumns} data={matrixData} />
        </Section>

        <Section id="block10" title="Блок 10. Стратегические портреты">
          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-5">
              <h4 className="font-bold text-[#E53935] mb-2">Уютная логика — вертикальный доминант</h4>
              <p className="text-sm text-[#6B6B6B]">
                437,8 млн брутто / ~411 млн нетто | ДРР к выкупам: 17,47% | Выкуп: 94% | 87% выручки — шкаф распашной. 472 SKU из 694 не рекламируются — алгоритм Ozon сам продвигает доминанта категории.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h4 className="font-bold text-[#E53935] mb-2">Нонтон — медиабизнес с мебельным ассортиментом</h4>
              <p className="text-sm text-[#6B6B6B]">
                362,1 млн брутто | 288 млн показов — в 1,5 раза больше Уютной логики при меньшей выручке. High-low pricing (скидка 85%). 39 категорий. Скорость доставки 39 ч — лучшая.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h4 className="font-bold text-[#E53935] mb-2">Правила мебели — без органики</h4>
              <p className="text-sm text-[#6B6B6B]">
                297,5 млн брутто | 99,3% SKU рекламируются | Выкуп 86,1% — худший. Потери на возвратах 41,3 млн/мес.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h4 className="font-bold text-[#E53935] mb-2">Диван босс — деградирующий портфель</h4>
              <p className="text-sm text-[#6B6B6B]">
                126,6 млн брутто | 48,5% SKU падают | Конверсия карточки 4,04% — самая низкая. Нужна ротация ассортимента и улучшение карточек.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h4 className="font-bold text-[#E53935] mb-2">Бест — дремлющий премиум</h4>
              <p className="text-sm text-[#6B6B6B]">
                58 млн брутто | Конверсия органических SKU 0,159% — в 3,5 раза выше всех. ДРР 5,81% — минимум. Три монопольные ниши: Гардеробная система, Шкаф-кровать, Шкаф книжный.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-5">
              <h4 className="font-bold text-[#E53935] mb-2">Много мебели — правильная ставка</h4>
              <p className="text-sm text-[#6B6B6B]">
                50 млн брутто | Динамика +180% | Один товар даёт 7% выручки — риск концентрации. Тот же сегмент, что Диван босс, но растёт быстрее при меньшем ДРР.
              </p>
            </div>
          </div>
        </Section>

        <Section id="block11" title="Блок 11. Концентрация продаж">
          <p className="mb-4">
            Много мебели: топ-10 SKU = 26,6% выручки, один «Уют» — 7%. Диван босс: топ-100 = 83,7%. Уютная логика: топ-62 = 50% — здоровая структура. Бест: топ-10 = 4,4%, топ-100 = 24% — максимально равномерное распределение, но нет флагмана.
          </p>
        </Section>

        <Section id="limitations" title="Ограничения">
          <p className="mb-4">
            Период: 14.02–14.03.2026 (28 дней). Данные: Ozon Analytics. Брутто включает отмены и возвраты. Маржинальность, внешние каналы и доля soffinancing Ozon в скидках — за рамками отчёта.
          </p>
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
