import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import details from '../views/details.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: "/details/:title",
    name:'details',
    component: details,
    props: true
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
