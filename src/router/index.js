import Vue from 'vue'
import VueRouter from 'vue-router'
import GamePage from '@/views/GamePage.vue'
import LoginPage from '@/views/LoginPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: `/`,
    component: GamePage
  },
  {
    path: `/login`,
    component: LoginPage
  }

]

const router = new VueRouter({
  routes
})

export default router
