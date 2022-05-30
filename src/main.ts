import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { createI18n } from 'vue-i18n'
import routes from 'virtual:generated-pages'
import App from './App.vue'

import './styles/main.css'
import 'virtual:windi.css'

const app = createApp(App)
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})
app.use(router)

const messages = Object.fromEntries(
  Object.entries(
    import.meta.globEager('../locales/*.json'))
    .map(([key, value]) => {
      return [key.slice(11, -5), value.default]
    }),
)

const i18n = createI18n({
  legacy: false,
  locale: 'en',
  messages,
  fallbackLocale: 'en',
})

app.use(i18n)

app.mount('#app')
