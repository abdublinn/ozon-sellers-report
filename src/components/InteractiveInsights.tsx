import { Bar, BarChart, CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from 'recharts';
import {
  ChartContainer,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from '@/components/ui/chart';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const demandShiftData = [
  { category: 'Диван', yandex: 454457, wb: 1380000, ozon: 888000 },
  { category: 'Шкаф', yandex: 314374, wb: 1299000, ozon: 790000 },
  { category: 'Кухня', yandex: 391538, wb: 387000, ozon: 1011000 },
  { category: 'Матрас', yandex: 229332, wb: 939000, ozon: 615000 },
];

const revenueData = [
  { category: 'Диваны', wb: 2330, ozon: 2320 },
  { category: 'Шкафы', wb: 2069, ozon: 2307 },
  { category: 'Комоды', wb: 1967, ozon: 1706 },
  { category: 'Столы', wb: 1407, ozon: 2630 },
  { category: 'Стулья', wb: 2116, ozon: 2001 },
  { category: 'Кухни', wb: 960, ozon: 908 },
];

const avgCheckData = [
  { category: 'Диваны', wb: 20382, ozon: 28646 },
  { category: 'Шкафы', wb: 9747, ozon: 14424 },
  { category: 'Комоды', wb: 4374, ozon: 7441 },
  { category: 'Кухни', wb: 6200, ozon: 10823 },
  { category: 'Столы', wb: 6660, ozon: 10606 },
  { category: 'Стулья', wb: 10236, ozon: 7463 },
];

const yandexTrendData = [
  { query: 'купить диван', y2020: 883855, y2026: 454457 },
  { query: 'купить шкаф', y2020: 509652, y2026: 314374 },
  { query: 'купить кухню', y2020: 857248, y2026: 391538 },
  { query: 'купить матрас', y2020: 453584, y2026: 229332 },
];

const chartConfig = {
  yandex: { label: 'Яндекс', color: '#6B7280' },
  wb: { label: 'Wildberries', color: '#8E24AA' },
  ozon: { label: 'Ozon', color: '#1976D2' },
  y2020: { label: '2020', color: '#9CA3AF' },
  y2026: { label: '2026', color: '#E53935' },
} satisfies ChartConfig;

export function InteractiveInsights() {
  return (
    <section className="section-padding border-t border-gray-100">
      <div className="container-main">
        <h2 className="text-2xl lg:text-3xl font-bold mb-3">Интерактивная визуализация</h2>
        <p className="text-[#6B6B6B] mb-6 max-w-3xl">
          Ниже интерактивные графики к ключевым таблицам отчета: наведение показывает точные
          значения, а переключатели позволяют быстро смотреть разные срезы.
        </p>

        <Tabs defaultValue="demand" className="gap-4">
          <TabsList className="w-full md:w-auto h-auto flex-wrap">
            <TabsTrigger value="demand">Спрос</TabsTrigger>
            <TabsTrigger value="revenue">Выручка</TabsTrigger>
            <TabsTrigger value="avg-check">Средний чек</TabsTrigger>
            <TabsTrigger value="yandex">Яндекс 2020-2026</TabsTrigger>
          </TabsList>

          <TabsContent value="demand" className="mt-2">
            <div className="rounded-lg border border-gray-200 p-4">
              <ChartContainer config={chartConfig} className="h-[360px] w-full">
                <BarChart data={demandShiftData}>
                  <CartesianGrid vertical={false} />
                  <XAxis dataKey="category" tickLine={false} axisLine={false} />
                  <YAxis tickFormatter={(v) => `${Math.round(v / 1000)}k`} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend content={<ChartLegendContent />} />
                  <Bar dataKey="yandex" fill="var(--color-yandex)" radius={4} />
                  <Bar dataKey="wb" fill="var(--color-wb)" radius={4} />
                  <Bar dataKey="ozon" fill="var(--color-ozon)" radius={4} />
                </BarChart>
              </ChartContainer>
            </div>
          </TabsContent>

          <TabsContent value="revenue" className="mt-2">
            <div className="rounded-lg border border-gray-200 p-4">
              <ChartContainer config={chartConfig} className="h-[360px] w-full">
                <BarChart data={revenueData}>
                  <CartesianGrid vertical={false} />
                  <XAxis dataKey="category" tickLine={false} axisLine={false} />
                  <YAxis tickFormatter={(v) => `${v}м`} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend content={<ChartLegendContent />} />
                  <Bar dataKey="wb" fill="var(--color-wb)" radius={4} />
                  <Bar dataKey="ozon" fill="var(--color-ozon)" radius={4} />
                </BarChart>
              </ChartContainer>
            </div>
          </TabsContent>

          <TabsContent value="avg-check" className="mt-2">
            <div className="rounded-lg border border-gray-200 p-4">
              <ChartContainer config={chartConfig} className="h-[360px] w-full">
                <LineChart data={avgCheckData}>
                  <CartesianGrid vertical={false} />
                  <XAxis dataKey="category" tickLine={false} axisLine={false} />
                  <YAxis tickFormatter={(v) => `${Math.round(v / 1000)}k`} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend content={<ChartLegendContent />} />
                  <Line
                    dataKey="wb"
                    type="monotone"
                    stroke="var(--color-wb)"
                    strokeWidth={2}
                    dot={{ fill: 'var(--color-wb)' }}
                  />
                  <Line
                    dataKey="ozon"
                    type="monotone"
                    stroke="var(--color-ozon)"
                    strokeWidth={2}
                    dot={{ fill: 'var(--color-ozon)' }}
                  />
                </LineChart>
              </ChartContainer>
            </div>
          </TabsContent>

          <TabsContent value="yandex" className="mt-2">
            <div className="rounded-lg border border-gray-200 p-4">
              <ChartContainer config={chartConfig} className="h-[360px] w-full">
                <BarChart data={yandexTrendData}>
                  <CartesianGrid vertical={false} />
                  <XAxis dataKey="query" tickLine={false} axisLine={false} />
                  <YAxis tickFormatter={(v) => `${Math.round(v / 1000)}k`} />
                  <ChartTooltip content={<ChartTooltipContent />} />
                  <Legend content={<ChartLegendContent />} />
                  <Bar dataKey="y2020" fill="var(--color-y2020)" radius={4} />
                  <Bar dataKey="y2026" fill="var(--color-y2026)" radius={4} />
                </BarChart>
              </ChartContainer>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
