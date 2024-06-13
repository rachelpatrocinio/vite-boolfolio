import { createMemoryHistory, createRouter } from 'vue-router'

import AppHome from './pages/AppHome.vue'
import AppProjects from './pages/AppProjects.vue'

const router = createRouter({
  history: createMemoryHistory(),
  routes: [
    { path: '/',component: AppHome },
    { path: '/projects',component: AppProjects }
  ]
})

export default router