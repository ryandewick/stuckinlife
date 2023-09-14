import { createApp } from "vue";
import App from "./App.vue";
import router from "../router.js";
import { createMetaManager } from "vue-meta";

import "./style.scss";

const app = createApp(App)
  .use(router)
  .use(createMetaManager(), { refreshOnceOnNavigation: true })
  .mount("#app");
