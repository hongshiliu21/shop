import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/views/Home.vue")
  },
  {
    path: "/category",
    name: "category",
    component: () => import("@/views/Category.vue")
  },
  {
    path: "/cart",
    name: "cart",
    component: () => import("@/views/Cart.vue")
  },
  {
    path: "/profile",
    name: "profile",
    component: () => import("@/views/Profile.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;
