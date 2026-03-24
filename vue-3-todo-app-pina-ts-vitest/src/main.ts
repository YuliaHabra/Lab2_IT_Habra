import { createApp } from 'vue'
import { createPinia } from 'pinia'
import posthog from 'posthog-js' // Імпортуємо PostHog [cite: 494]
import * as Sentry from "@sentry/vue"; // Імпортуємо SDK Sentry [cite: 75]
import App from './App.vue'

import './index.css'

// Ініціалізація з твоїм API Key та Host [cite: 495, 496]
posthog.init('phc_d3iSi4oqvlJplx9crZyuHDeoxWgefz7WsNI8j8erO45', {
  api_host: window.location.origin + '/ingest', // Тепер дані йдуть через сервер
  ui_host: 'https://eu.posthog.com',
  person_profiles: 'always'
})

const app = createApp(App)

// Додаємо ініціалізацію Sentry [cite: 76, 112]
Sentry.init({
  app,
  // Твій персональний DSN ключ [cite: 71, 79]
  dsn: "https://00a15e4bb3de8649d48e0a89b6a05b70@o4511101256335360.ingest.de.sentry.io/4511101292445776",
  
  integrations: [
    Sentry.browserTracingIntegration(), // Відстеження продуктивності [cite: 82, 345]
    Sentry.replayIntegration(),        // Запис сесій користувача [cite: 83]
  ],

  // Tracing: Записувати 100% транзакцій для лабораторної роботи [cite: 84, 86]
  tracesSampleRate: 1.0,

  // Важливо для звіту: вказуємо середовище [cite: 87, 88]
  environment: "development",

  // Дозволяє збирати IP та дані для аналізу (PII)
  sendDefaultPii: true,
});

// Додаємо ідентифікацію користувача для Кроку 3
Sentry.setUser({
  id: "6-semester-student", // твій унікальний ID
  email: "yulia@example.com", // твій email для звіту
  username: "YuliaHabra"     // твоє ім'я/нікнейм
});

app.use(createPinia())

app.mount('#app')
