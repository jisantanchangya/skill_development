import { createRouter, createWebHistory } from 'vue-router'

import skillView from '../views/skillView.vue'
import categoryView from '../views/categoryView.vue'
import contactView from '../views/contactView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'skillView',
      component: skillView,
    }, 
    {
      path: '/category',
      name: 'categoryView',
      component: categoryView,
    },
    {
      path: '/contact',
      name: 'contactView',
      component: contactView,
    }
  ],
})

export default router
