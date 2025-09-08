# Sanity CMS Setup для Vladi Store

## Настройка Sanity

### 1. Создание проекта Sanity

1. Перейдите на [sanity.io](https://sanity.io) и создайте аккаунт
2. Создайте новый проект:
   ```bash
   npx sanity@latest init
   ```
3. Выберите:
   - Project name: `vladi-store`
   - Dataset: `production`
   - Template: `Clean project with no predefined schemas`

### 2. Настройка переменных окружения

Создайте файл `.env.local` в корне проекта:

```env
# Sanity Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id_here
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_READ_TOKEN=your_read_token_here
SANITY_API_WRITE_TOKEN=your_write_token_here

# Sanity Studio
NEXT_PUBLIC_SANITY_STUDIO_URL=http://localhost:3000/studio
```

### 3. Получение токенов API

1. В Sanity Studio перейдите в Settings → API
2. Создайте новый токен с правами:
   - **Read token**: для чтения данных
   - **Write token**: для записи данных (опционально)

### 4. Запуск проекта

```bash
# Установка зависимостей
yarn install

# Запуск Next.js приложения
yarn dev

# Запуск Sanity Studio (в отдельном терминале)
yarn studio
```

### 5. Доступ к Sanity Studio

- **Локально**: http://localhost:3333
- **В Next.js приложении**: http://localhost:3000/studio

## Структура данных

### Продукты (Product)
- `title` - Название продукта
- `slug` - URL-слаг
- `description` - Описание
- `mainImage` - Главное изображение
- `composition` - Состав материала
- `sizes` - Доступные размеры
- `weight` - Вес
- `productVariants` - Варианты продукта
- `subcategory` - Ссылка на подкатегорию
- `featured` - Рекомендуемый продукт

### Категории (Category)
- `title` - Название категории
- `slug` - URL-слаг
- `description` - Описание
- `image` - Изображение категории
- `order` - Порядок отображения

### Подкатегории (SubCategory)
- `title` - Название подкатегории
- `slug` - URL-слаг
- `description` - Описание
- `category` - Ссылка на родительскую категорию
- `order` - Порядок отображения

### Сертификаты (Certificate)
- `title` - Название сертификата
- `description` - Описание
- `image` - Изображение сертификата
- `order` - Порядок отображения

### Партнеры (Partner)
- `name` - Название партнера
- `logo` - Логотип партнера
- `website` - Сайт партнера
- `order` - Порядок отображения

### Услуги (Service)
- `title` - Название услуги
- `description` - Описание услуги
- `image` - Изображение услуги
- `order` - Порядок отображения

## API функции

Все функции для работы с данными находятся в `lib/sanity-queries.ts`:

- `getAllProducts()` - Получить все продукты
- `getProductBySlug(slug)` - Получить продукт по слагу
- `getProductsBySubcategory(subcategoryId)` - Получить продукты по подкатегории
- `getFeaturedProducts()` - Получить рекомендуемые продукты
- `getAllCategories()` - Получить все категории
- `getAllSubcategories()` - Получить все подкатегории
- `getSubcategoriesByCategory(categoryId)` - Получить подкатегории по категории
- `getAllCertificates()` - Получить все сертификаты
- `getAllPartners()` - Получить всех партнеров
- `getAllServices()` - Получить все услуги

## Контекст каталога

Обновленный `CatalogProvider` теперь:
- Загружает данные из Sanity
- Поддерживает состояния загрузки и ошибок
- Предоставляет функцию обновления данных
- Автоматически фильтрует продукты по подкатегориям

## Развертывание

### Развертывание Sanity Studio

```bash
yarn deploy-studio
```

### Развертывание Next.js приложения

Настройте переменные окружения в вашем хостинге и разверните как обычное Next.js приложение.

## Полезные ссылки

- [Sanity Documentation](https://www.sanity.io/docs)
- [Next.js Sanity Integration](https://www.sanity.io/guides/nextjs-app-router-live-preview)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
