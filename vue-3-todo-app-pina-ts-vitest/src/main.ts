import { createApp } from 'vue'
import { createPinia } from 'pinia'
import posthog from 'posthog-js' // Імпортуємо PostHog [cite: 494]
import App from './App.vue'

import './index.css'

// Ініціалізація з твоїм API Key та Host [cite: 495, 496]
posthog.init('phc_d3iSi4oqvlJplx9crZyuHDeoxWgefz7WsNI8j8erO45', {
  api_host: window.location.origin + '/ingest', // Тепер дані йдуть через сервер
  ui_host: 'https://eu.posthog.com',
  person_profiles: 'always'
})

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
