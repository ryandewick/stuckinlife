// router.js
import { createRouter, createWebHistory } from "vue-router";
import ComingSoon from "./src/components/ComingSoon.vue";

const routes = [
  {
    path: "/",
    redirect: "/coming-soon",
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
