import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MenuPage from  "../views/MenuPage.vue";
import Product from "../views/Product.vue"
import Rebate from "../views/Rebate.vue"
import Order from "../views/Order.vue"
import Sign from "../views/Sign.vue"
import Login from "../views/Login.vue"
import About from "../views/About.vue"
import "../assets/style/main.scss";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/menu",
    name: "menu",
    component: MenuPage
  },
  {
    path: "/meal",
    name: "Meal",
    component: Product
  },
  {
    path: "/hits",
    name: "Rebate",
    component: Rebate
  },
  {
    path: "/order",
    name: "order",
    component: Order
  },
  {
    path: "/sign-in",
    name: "Sign",
    component: Sign
  },
  {
    path: "/login-page",
    name: "Login",
    component: Login
  },
  {
    path: "/about-us",
    name: "About",
    component: About
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
