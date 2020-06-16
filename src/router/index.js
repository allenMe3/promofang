import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/prolist",
    name: "prolist",
    component: () =>
      import("../views/Prolist.vue")
  },
  {
    path: "/prolistji",
    name: "prolistji",
    component: () =>
      import("../views/Prolistji.vue")
  },
  {
    path: "/newpro",
    name: "newpro",
    component: () =>
      import("../views/Newpro.vue")
  },
  {
    path: "/prodet",
    name: "prodet",
    component: () =>
      import("../views/prodet.vue")
  },
  {
    path: "/subsucces",
    name: "subsucces",
    component: () =>
      import("../views/subsucces.vue")
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
