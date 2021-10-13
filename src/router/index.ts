import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Blog from '@/views/Blog.vue'
import Tools from '@/views/Tools.vue'
import About from '@/views/About.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: { path: '/blog/list' }
  },
  {
    path: '/blog/:name',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/tools',
    name: 'Tools',
    component: Tools
  },
  {
    path: '/About',
    name: 'About',
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ left: 0, top: 0 })
      }, 500)
    })
  }
})

export default router
