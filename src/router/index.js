import { createRouter, createWebHashHistory } from 'vue-router'
import Game from '@/views/Game.vue'
import About from '@/views/About.vue'

const routes = [
  {
    path: '/',
    name: 'gamePage',
    component: Game
  },
  {
    path: '/about',
    name: 'aboutPage',
    component: About
  },

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
