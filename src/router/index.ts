import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Blog from '../views/Blog.vue'
import Tools from '../views/Tools.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/blog',
    name: 'Blog',
    component: Blog
  },
  {
    path: '/tools',
    name: 'Tools',
    components: Tools
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
