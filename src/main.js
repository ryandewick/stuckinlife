import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "../router.js";

import { useAuthStore } from "./stores/authStore";

import Vue3TouchEvents from "vue3-touch-events";

import "./style.scss";

const app = createApp(App);

const pinia = createPinia();
app.use(pinia);

const authStore = useAuthStore();
authStore.initialiseAuth();

app.use(Vue3TouchEvents);

app.use(router);
app.mount("#app");
