import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/agregar',
    name: 'AddProduct',
    component: () => import('../views/AddProduct.vue')
  },
  { path: '/recuperar',
    name: 'Recovery',
    component: () => import('../views/Recovery.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
