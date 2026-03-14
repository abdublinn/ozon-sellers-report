# Лидеры мебельного рынка Ozon — лендинг отчёта

Отчёт по шести селлерам Ozon (март 2026): Уютная логика, Нонтон, Правила мебели, Диван босс, Бест, Много мебели.

## Разработка

```bash
npm install
npm run dev
```

## Сборка

```bash
npm run build
```

## Деплой на GitHub Pages

Деплой через **GitHub Actions** — сборка выполняется на серверах GitHub, Node.js локально не нужен.

1. Запушьте изменения (включая `.github/workflows/deploy.yml`):

```bash
git add .
git commit -m "Add GitHub Actions deploy"
git push
```

2. В настройках: **Settings → Pages → Source: GitHub Actions** (вместо "Deploy from a branch")

После каждого `git push` в ветку master сайт будет собираться и публиковаться автоматически.

URL: `https://abdublinn.github.io/ozon-sellers-report/`

## Структура

- Hero — заголовок, описание, фото автора
- Секции с таблицами и инсайтами из отчёта
- Footer — контакты, ссылки на Telegram и Дзен
