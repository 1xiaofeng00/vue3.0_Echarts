import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [

  {
    path: '/page',
    name: 'page',
    component: () => import('../views/homePage.vue')
  },
  {
    path:"/",
    redirect:"/page"
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
