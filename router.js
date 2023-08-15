// router.js
import { createRouter, createWebHistory } from "vue-router";
import ComingSoon from "./src/components/ComingSoon.vue";
import Home from "./src/pages/Home.vue";

const routes = [
  {
    path: "/",
    // redirect: "/coming-soon",
    component: Home,
  },
  {
    path: "/coming-soon",
    name: "ComingSoon",
    component: ComingSoon,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
