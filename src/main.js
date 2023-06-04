import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import AOS from "aos";
import axios from "axios";
import "aos/dist/aos.css"

axios.defaults.baseURL = 'https://admin-foodtuck.devup.kz/api/';

AOS.init();

createApp(App).use(store).use(router).mount("#app");
