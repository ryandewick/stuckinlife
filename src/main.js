import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "../router.js";

import { useAuthStore } from "./stores/authStore";

import "./style.scss";

const app = createApp(App);

const pinia = createPinia();
app.use(pinia);

const authStore = useAuthStore();
authStore.initialiseAuth();

app.use(router);
app.mount("#app");
