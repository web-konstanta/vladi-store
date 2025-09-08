# 🚀 Быстрый старт с Sanity

## Шаг 1: Инициализация Sanity проекта

```bash
# Запустите скрипт инициализации
yarn init-sanity
```

Или вручную:
```bash
npx sanity@latest init
```

## Шаг 2: Настройка переменных окружения

Создайте файл `.env.local` в корне проекта:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=ваш_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=ваш_read_token
SANITY_API_WRITE_TOKEN=ваш_write_token
NEXT_PUBLIC_SANITY_STUDIO_URL=http://localhost:3000/studio
```

## Шаг 3: Запуск приложения

```bash
# Установка зависимостей
yarn install

# Запуск Next.js приложения
yarn dev

# В отдельном терминале - запуск Sanity Studio
yarn studio
```

## Шаг 4: Доступ к админке

- **Sanity Studio**: http://localhost:3333
- **Next.js приложение**: http://localhost:3000
- **Studio в Next.js**: http://localhost:3000/studio

## Шаг 5: Создание контента

1. Откройте Sanity Studio
2. Создайте категории
3. Создайте подкатегории
4. Добавьте продукты
5. Загрузите изображения

## Готово! 🎉

Ваш магазин Vladi Store теперь работает с Sanity CMS!

### Полезные команды

```bash
# Развертывание Studio
yarn deploy-studio

# Проверка линтера
yarn lint

# Сборка проекта
yarn build
```

### Структура файлов

```
vladi-store/
├── sanity/
│   ├── schemas/          # Схемы данных
│   └── config.ts         # Конфигурация Sanity
├── lib/
│   ├── sanity.ts         # Sanity клиент
│   ├── sanity-queries.ts # GROQ запросы
│   └── image-utils.ts    # Утилиты для изображений
├── app/studio/           # Sanity Studio в Next.js
└── context/
    └── catalog-context.tsx # Контекст каталога
```
