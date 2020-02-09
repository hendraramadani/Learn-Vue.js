import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import LoginComponent from "../views/Login.vue";
import SecureComponent from "../views/Secure.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/test",
    name: "Test",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/test.vue")
  },
  {
    path: "/login",
    name: "login",
    component: LoginComponent
  },
  {
    path: "/secure",
    name: "secure",
    component: SecureComponent
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
