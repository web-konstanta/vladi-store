#!/usr/bin/env node

/**
 * Скрипт для инициализации Sanity проекта
 * Запустите этот скрипт после создания проекта в Sanity
 */

const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

console.log("🚀 Инициализация Sanity для Vladi Store...\n");

// Проверяем, есть ли уже конфигурация Sanity
if (fs.existsSync("sanity.config.ts")) {
  console.log("✅ Sanity уже настроен!");
  console.log("\n📋 Следующие шаги:");
  console.log("1. Создайте проект на sanity.io");
  console.log("2. Скопируйте Project ID в .env.local");
  console.log("3. Запустите: yarn studio");
  console.log("4. Создайте токены API в Sanity Studio");
  process.exit(0);
}

try {
  console.log("📦 Инициализация Sanity...");

  // Инициализируем Sanity проект
  execSync("npx sanity@latest init --yes", {
    stdio: "inherit",
    cwd: process.cwd()
  });

  console.log("\n✅ Sanity успешно инициализирован!");
  console.log("\n📋 Следующие шаги:");
  console.log("1. Скопируйте Project ID из вывода выше");
  console.log("2. Создайте файл .env.local с переменными окружения");
  console.log("3. Запустите: yarn studio");
  console.log("4. Создайте токены API в Sanity Studio");
  console.log("5. Начните добавлять контент!");
} catch (error) {
  console.error("❌ Ошибка при инициализации Sanity:", error.message);
  console.log("\n🔧 Попробуйте запустить вручную:");
  console.log("npx sanity@latest init");
  process.exit(1);
}
