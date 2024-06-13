import { createMemoryHistory, createRouter } from 'vue-router'

import AppHome from './pages/AppHome.vue'
import AppPortfolio from './pages/AppPortfolio.vue'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: '/',component: AppHome },
    { path: '/Portfolio',component: AppPortfolio }
  ]
})

export default router