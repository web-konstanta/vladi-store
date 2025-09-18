"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

export type Locale = "ua" | "en";

interface TranslationContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: (key: string) => string;
}

const translations = {
  ua: {
    // Header
    "header.about": "Про компанію",
    "header.services": "Послуги",
    "header.catalog": "Каталог",
    "header.contact": "Зв'язатися",
    "header.back_to_catalog": "В каталог",

    // Product Details
    "product.home": "Головна",
    "product.product": "Продукт",
    "product.size": "Розмір",
    "product.composition": "Склад виробу",
    "product.weight": "Вага",
    "product.care": "Догляд",
    "product.you_may_like": "Вас можуть зацікавити",
    "product.products_not_found": "Товари не знайдені",
    "product.product_not_found": "Продукт не знайдено",
    "product.loading": "Завантаження...",

    // About section
    "about.title": "ПРО КОМПАНІЮ",
    "about.subtitle": "Дізнайтеся більше про нашу компанію",
    "about.company_vladi": "Компанія VLADI",
    "about.company_description":
      "Один з провідних європейських виробників пледів і ковдр вищої якості. Компанія об'єднує традиційну текстильну майстерність з сучасними технологіями, щоб створювати вироби, що дарують тепло, комфорт і затишок щодня.",
    "about.quality_tested": "Якість, перевірена часом",
    "about.quality_description":
      "Наші вироби виготовляються з добірного кашеміру, мериноса, тонкої та надтонкої новозеландської вовни, бавовни. Наш асортимент включає покривала, стьобані та класичні ковдри, пледи з чистої вовни, напіввовни та бавовни.",
    "about.wide_range": "Широкий асортимент",
    "about.wide_range_description":
      "Продукція VLADI представлена в провідних торгових мережах по всій Україні, а також доступна через наших офіційних партнерів. В асортименті - покривала, стьобані та класичні ковдри, пледи з чистої вовни, напіввовни та бавовни.",
    "about.individual_solutions": "Індивідуальні рішення",
    "about.individual_description":
      "Компанія VLADI пропонує корпоративним клієнтам та рекламним агенціям ексклюзивну продукцію для подарунків, промо-акцій та брендованих кампаній.",
    "about.where_to_find": "Де знайти нашу продукцію",
    "about.where_description":
      "Продукція VLADI представлена в провідних торгових мережах по всій Україні, а також доступна через наших офіційних партнерів. В асортименті - покривала, стьобані та класичні ковдри, пледи з чистої вовни, напіввовни та бавовни.",

    // Hero section
    "hero.description":
      "Натуральні ковдри та пледи з України. Відкрийте для себе нашу колекцію, створену з любов'ю та турботою.",
    "hero.start_button": "Почніть зараз",

    // Services section
    "services.title": "VLADI ПОСЛУГИ",
    "services.subtitle": "Ми надаємо найякісніші послуги на ринку",
    "services.individual_design": "Індивідуальний дизайн виробів",
    "services.individual_design_description":
      "Ми виготовляємо вироби відповідно до ваших побажань та технічних вимог. Однотонні, в клітинку, з жакардовими візерунками.",
    "services.branded_packaging": "Брендована упаковка для вашої продукції",
    "services.branded_packaging_description":
      "Розробляємо та виготовляємо персоналізовану упаковку відповідно до вашого дизайну. Підкресліть унікальність вашого бренду!",
    "services.yarn_production": "Виробництво пряжі",
    "services.yarn_production_description":
      "Пропонуємо професійне виготовлення пряжі високої якості для різноманітних потреб текстильного виробництва.",
    "services.nonwoven_production": "Виробництво нетканого полотна",
    "services.nonwoven_production_description":
      "Здійснюємо виробництво нетканих матеріалів, зокрема синтепону, для використання в різних галузях промисловості.",

    // Catalog section
    "catalog.title": "НАШ КАТАЛОГ",
    "catalog.subtitle": "Ми пропонуємо продукти, перевірені часом",
    "catalog.loading_products": "Завантаження продуктів...",
    "catalog.no_products_found": "Продукти для цієї категорії не знайдено.",

    // Videos section
    "videos.title": "ВІДЕОРОЛИКИ VLADI",
    "videos.subtitle": "Погляньте на наше виробництво глибше",
    "videos.production_magic": "Магія нашого виробництва",
    "videos.production_magic_description":
      "Кожен виріб проходить ретельний, практичний виробничий цикл: розкрій, зшивання, деталізація та контроль якості. Ми поєднуємо сучасні технології з кваліфікованою майстерністю, щоб гарантувати, що кожна ковдра, плед чи аксесуар відповідає нашим стандартам комфорту, довговічності та краси.",
    "videos.blankets_production": "Виробництво пледів та ковдр",
    "videos.blankets_production_description":
      "Вибір матеріалів - це місце, де творчість зустрічається з досвідом. Ми ретельно обираємо тканини та кольорові палітри, які не лише чудово виглядають, але й підносять інтер'єр. Це поєднання дизайнерської інтуїції, обізнаності в тенденціях та глибокого розуміння позачасового стилю.",

    // Certificates section
    "certificates.title": "СЕРТИФІКАТИ",
    "certificates.subtitle": "Офіційні підтвердження наших стандартів",
    "certificates.no_certificates": "Сертифікати не знайдені.",
    "certificates.iso_14001": "Certification ISO 14001:2015",
    "certificates.iso_14001_description":
      "Наша компанія успішно пройшла сертифікацію ISO 14001:2015, повністю відповідаючи стандартам системи екологічного менеджменту, включаючи зниження відходів тканини на 20%, оптимізацію споживання води та енергії на 15% і використання екологічних матеріалів для виробництва пледів. Це підтверджує нашу прихильність до сталого розвитку та мінімізації вуглецевого сліду.",
    "certificates.oeko_tex": "OEKO-TEX® Standard 100",
    "certificates.oeko_tex_description":
      "Компанія успішно отримала сертифікацію OEKO-TEX® Standard 100, повністю відповідаючи вимогам безпеки текстильних виробів, включаючи відсутність шкідливих речовин, таких як азобарвники і формальдегід, в матеріалах пледів (номер сертифіката 74773 OETI). Це гарантує здоров'я споживачів і зміцнює наші позиції на міжнародних ринках текстильної індустрії.",
    "certificates.sedex": "Certification Sedex",
    "certificates.sedex_description":
      "Наша компанія успішно пройшла сертифікацію Sedex, повністю відповідаючи стандартам SMETA, включаючи безпечні умови праці, заборону примусової праці та екологічне управління відходами при виробництві пледів. Це відкриває доступ до глобальних ринків і підтверджує нашу прихильність етичним принципам у ланцюжку поставок вовни, бавовни та флісу.",

    // Partners section
    "partners.title": "НАШІ ПАРТНЕРИ",
    "partners.subtitle": "Компанії вже оцінили якість VLADI",

    // Footer section
    "footer.contact_text":
      "Ми завжди готові розглянути можливість співпраці та запропонувати найкращі умови для нашої спільної роботи",
    "footer.contact_button": "Зв'язатися",
    "footer.phone_label": "Наш номер телефону",
    "footer.copyright": "© VLADI, Inc. All Rights Reserved",

    // FAQ Modal
    "faq.contacts": "Контакти",
    "faq.warehouse_address": "Адреса складу",
    "faq.address_country": "61157, Україна",
    "faq.address_city": "Харків, вул. Олександра Шпейєра,18",
    "faq.send_request": "Відправити запит",
    "faq.name_placeholder": "Ваше ім'я",
    "faq.email_placeholder": "E-Mail адреса",
    "faq.message_placeholder": "Напишіть ваше запитання або пропозицію…",
    "faq.send_button": "Надіслати",
    "faq.sending": "Надсилається...",
    "faq.success_message": "Ваше повідомлення надіслано!",
    "faq.error_message": "Помилка при відправленні, спробуйте ще раз.",
    "faq.server_error": "Сервер недоступний.",

    // Common
    "common.loading": "Завантаження...",
    "common.error": "Помилка",
    "common.categories_loading": "Завантаження категорій...",
    "common.categories_error": "Помилка завантаження категорій",
    "common.all_categories": "Всі категорії",
    "common.learn_more": "Дізнатися більше",
    "common.error_occurred": "Сталася помилка",
    "common.try_again": "Спробувати знову"
  },
  en: {
    // Header
    "header.about": "About company",
    "header.services": "Services",
    "header.catalog": "Catalog",
    "header.contact": "Contact",
    "header.back_to_catalog": "To catalog",

    // Product Details
    "product.home": "Home",
    "product.product": "Product",
    "product.size": "Size",
    "product.composition": "Composition",
    "product.weight": "Weight",
    "product.care": "Care",
    "product.you_may_like": "You may be interested",
    "product.products_not_found": "Products not found",
    "product.product_not_found": "Product not found",
    "product.loading": "Loading...",

    // About section
    "about.title": "ABOUT THE COMPANY",
    "about.subtitle": "Learn more about our company",
    "about.company_vladi": "VLADI Company",
    "about.company_description":
      "One of the leading European manufacturers of high-quality plaids and blankets. The company combines traditional textile craftsmanship with modern technologies to create products that provide warmth, comfort and coziness every day.",
    "about.quality_tested": "Quality, time-tested",
    "about.quality_description":
      "Our products are made from selected cashmere, merino, fine and superfine New Zealand wool, cotton. Our range includes bedspreads, quilted and classic blankets, throws made of pure wool, semi-wool and cotton.",
    "about.wide_range": "Wide range",
    "about.wide_range_description":
      "VLADI products are presented in leading retail chains throughout Ukraine, and also available through our official partners. In the assortment - bedspreads, quilted and classic blankets, throws made of pure wool, semi-wool and cotton.",
    "about.individual_solutions": "Individual solutions",
    "about.individual_description":
      "VLADI company offers corporate clients and advertising agencies exclusive products for gifts, promotional campaigns and branded campaigns.",
    "about.where_to_find": "Where to find our products",
    "about.where_description":
      "VLADI products are presented in leading retail chains throughout Ukraine, and also available through our official partners. In the assortment - bedspreads, quilted and classic blankets, throws made of pure wool, semi-wool and cotton.",

    // Hero section
    "hero.description":
      "Natural blankets and plaids from Ukraine. Discover our collection, created with love and care.",
    "hero.start_button": "Start now",

    // Services section
    "services.title": "VLADI SERVICES",
    "services.subtitle": "We provide the highest quality services on the market",
    "services.individual_design": "Individual product design",
    "services.individual_design_description":
      "We manufacture products according to your wishes and technical requirements. Solid colors, checkered, with jacquard patterns.",
    "services.branded_packaging": "Branded packaging for your products",
    "services.branded_packaging_description":
      "We develop and manufacture personalized packaging according to your design. Emphasize the uniqueness of your brand!",
    "services.yarn_production": "Yarn production",
    "services.yarn_production_description":
      "We offer professional production of high-quality yarn for various textile manufacturing needs.",
    "services.nonwoven_production": "Non-woven fabric production",
    "services.nonwoven_production_description":
      "We carry out the production of non-woven materials, including synthetic padding, for use in various industries.",

    // Catalog section
    "catalog.title": "OUR CATALOG",
    "catalog.subtitle": "We offer time-tested products",
    "catalog.loading_products": "Loading products...",
    "catalog.no_products_found": "No products found for this category.",

    // Videos section
    "videos.title": "VLADI VIDEOS",
    "videos.subtitle": "Take a deeper look at our production",
    "videos.production_magic": "The magic of our production",
    "videos.production_magic_description":
      "Each product goes through a thorough, practical production cycle: cutting, sewing, detailing and quality control. We combine modern technologies with skilled craftsmanship to ensure that every blanket, plaid or accessory meets our standards of comfort, durability and beauty.",
    "videos.blankets_production": "Production of plaids and blankets",
    "videos.blankets_production_description":
      "Material selection is where creativity meets experience. We carefully choose fabrics and color palettes that not only look great, but also enhance the interior. This is a combination of designer intuition, trend awareness and deep understanding of timeless style.",

    // Certificates section
    "certificates.title": "CERTIFICATES",
    "certificates.subtitle": "Official confirmations of our standards",
    "certificates.no_certificates": "No certificates found.",
    "certificates.iso_14001": "Certification ISO 14001:2015",
    "certificates.iso_14001_description":
      "Our company has successfully passed ISO 14001:2015 certification, fully complying with environmental management system standards, including 20% reduction in fabric waste, 15% optimization of water and energy consumption, and use of eco-friendly materials for plaid production. This confirms our commitment to sustainable development and carbon footprint minimization.",
    "certificates.oeko_tex": "OEKO-TEX® Standard 100",
    "certificates.oeko_tex_description":
      "The company has successfully obtained OEKO-TEX® Standard 100 certification, fully complying with textile product safety requirements, including the absence of harmful substances such as azo dyes and formaldehyde in plaid materials (certificate number 74773 OETI). This guarantees consumer health and strengthens our position in international textile industry markets.",
    "certificates.sedex": "Certification Sedex",
    "certificates.sedex_description":
      "Our company has successfully passed Sedex certification, fully complying with SMETA standards, including safe working conditions, prohibition of forced labor, and environmental waste management in plaid production. This opens access to global markets and confirms our commitment to ethical principles in the wool, cotton and fleece supply chain.",

    // Partners section
    "partners.title": "OUR PARTNERS",
    "partners.subtitle": "Companies have already appreciated VLADI quality",

    // Footer section
    "footer.contact_text":
      "We are always ready to consider cooperation opportunities and offer the best conditions for our joint work",
    "footer.contact_button": "Contact",
    "footer.phone_label": "Our phone number",
    "footer.copyright": "© VLADI, Inc. All Rights Reserved",

    // FAQ Modal
    "faq.contacts": "Contacts",
    "faq.warehouse_address": "Warehouse address",
    "faq.address_country": "61157, Ukraine",
    "faq.address_city": "Kharkiv, Alexander Shpeyer str., 18",
    "faq.send_request": "Send request",
    "faq.name_placeholder": "Your name",
    "faq.email_placeholder": "E-Mail address",
    "faq.message_placeholder": "Write your question or suggestion…",
    "faq.send_button": "Send",
    "faq.sending": "Sending...",
    "faq.success_message": "Your message has been sent!",
    "faq.error_message": "Error sending message, please try again.",
    "faq.server_error": "Server unavailable.",

    // Common
    "common.loading": "Loading...",
    "common.error": "Error",
    "common.categories_loading": "Loading categories...",
    "common.categories_error": "Error loading categories",
    "common.all_categories": "All categories",
    "common.learn_more": "Learn more",
    "common.error_occurred": "An error occurred",
    "common.try_again": "Try again"
  }
};

const TranslationContext = createContext<TranslationContextType | undefined>(undefined);

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (context === undefined) {
    throw new Error("useTranslation must be used within a TranslationProvider");
  }
  return context;
};

interface TranslationProviderProps {
  children: ReactNode;
}

export const TranslationProvider: React.FC<TranslationProviderProps> = ({ children }) => {
  const [locale, setLocale] = useState<Locale>("ua");

  const toggleLocale = () => {
    setLocale((prev) => (prev === "ua" ? "en" : "ua"));
  };

  const t = (key: string): string => {
    return translations[locale][key as keyof (typeof translations)[typeof locale]] || key;
  };

  const value: TranslationContextType = {
    locale,
    setLocale,
    toggleLocale,
    t
  };

  return <TranslationContext.Provider value={value}>{children}</TranslationContext.Provider>;
};
