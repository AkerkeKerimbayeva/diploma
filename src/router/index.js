import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MenuPage from  "../views/MenuPage.vue";
import Product from "../views/Product.vue"
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
