import { createRouter, createWebHistory } from 'vue-router'

import routes from '@/config/routes'

export default createRouter({
  history: createWebHistory(),
  routes: routes
})