import { createWebHistory, createRouter } from 'vue-router'

import AppHome from './pages/AppHome.vue'
import AppPortfolio from './pages/AppPortfolio.vue'
import AppContact from './pages/AppContact.vue'
import AppProject from './pages/AppProject.vue'
import AppNotFound from './pages/AppNotFound.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/',component: AppHome },
    { path: '/portfolio',component: AppPortfolio },
    { path: '/portfolio/:slug', name: 'singleProject', component: AppProject, props: true },
    { path: '/contact',component: AppContact },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: AppNotFound }
  ]
})

export default router