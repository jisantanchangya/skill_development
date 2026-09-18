import { createRouter, createWebHistory } from 'vue-router'

import PublicView from '@/layouts/publicLayout.vue'
import LoginView from '@/modules/auth/views/loginview.vue'
import RegisterView from '@/modules/auth/views/registerView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'public',
      component: PublicView
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView
    }

  ],
})

export default router
