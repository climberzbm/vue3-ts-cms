import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    component: () => import('@/components/login/login.vue')
  },
  {
    path: '/home',
    component: () => import('@/components/home.vue')
  }
]

export default createRouter({
  routes,
  history: createWebHashHistory()
})
