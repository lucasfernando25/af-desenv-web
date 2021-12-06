import Vue from 'vue'
import VueRouter from 'vue-router'
import Food from '../views/Food.vue'
import Restaurants from '../views/Restaurants.vue'
import Inicio from '../views/Home.vue'
import About from '../views/AboutUs.vue'



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Inicio', 
    component: Inicio
  },
  {
    path: '/food',
    name: 'Food',
    component: Food
  },
  {
    path: '/restaurants',
    name: 'Restaurants', 
    component: Restaurants
  },
  {
    path: '/about-us',
    name: 'About', 
    component: About
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
