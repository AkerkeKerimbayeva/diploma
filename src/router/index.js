import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import MenuPage from  "../views/MenuPage.vue";
import Product from "../views/Product.vue"
import Rebate from "../views/Rebate.vue"
import Order from "../views/Order.vue"
import Sign from "../views/Sign.vue"
import Login from "../views/Login.vue"
import About from "../views/About.vue"
import Contacts from "../views/Contacts.vue"
import Reservation from "../views/Reservation.vue"
import account from "../views/account.vue"
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
    path: "/meal/:slug",
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
    component: Order,
    meta: {
      requiresAuth: true
  }
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
  {
    path: "/contacts",
    name: "Contacts",
    component: Contacts
  },
  {
    path: "/reservation",
    name: "Reservation",
    component: Reservation,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "/account",
    name: "account",
    component: account,
    meta: {
      requiresAuth: true
    }
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  // document.title = `${process.env.VUE_APP_TITLE} - ${to.name}`;
  if(to.matched.some(record => record.meta.requiresAuth)) {
    if (localStorage.getItem('access_token')) {
      console.log('asasxs');
      next()
    } else {
      console.log('dddd');      
      next({ name: 'Login' })
      return
    }
  } else {
    next()
  }
});

export default router;
