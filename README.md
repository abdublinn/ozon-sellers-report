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

1. Создайте репозиторий на GitHub (например `ozon-sellers-report`).
2. Инициализируйте git в папке `app`:

```bash
cd app
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/abdublinn/ozon-sellers-report.git
git push -u origin main
```

3. Установите gh-pages и задеплойте:

```bash
npm install
npm run deploy
```

Сайт будет доступен по адресу `https://abdublinn.github.io/ozon-sellers-report/`.

## Структура

- Hero — заголовок, описание, фото автора
- Секции с таблицами и инсайтами из отчёта
- Footer — контакты, ссылки на Telegram и Дзен
