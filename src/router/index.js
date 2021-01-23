import Vue from "vue"
import VueRouter from "vue-router"
import Home from "../views/Home.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/agregar/",
    name: "AddProduct",
    component: () => import("../views/AddProduct.vue")
  },
  {
    path: "/actualizar/",
    name: "UpdateProduct",
    component: () => import("../views/UpdateProduct.vue")
  },
  {
    path: "/recuperar/:pass",
    name: "RecoveryPass",
    component: () => import("../views/RecoveryPass.vue")
  },
  {
    path: "/login/",
    name: "Login",
    component:() =>
    import("../views/Login.vue")
  },
  {
    path: "/crearusuario/",
    name: "CreateUser",
    component:() =>
    import("../views/CreateUser.vue")
  },
  { path: "/recuperar/",
    name: "Recovery",
    component: () => import("../views/Recovery.vue")
  }
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router
