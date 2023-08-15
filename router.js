// router.js
import { createRouter, createWebHistory } from "vue-router";
import ComingSoon from "@/components/ComingSoon.vue";
import Home from "@/pages/Home.vue";
import Courses from "@/pages/Courses.vue";
import About from "@/pages/About.vue";
import FAQ from "@/pages/FAQ.vue";

const routes = [
  {
    path: "/",
    // redirect: "/coming-soon",
    component: Home,
  },
  {
    path: "/courses",
    component: Courses,
  },
  {
    path: "/about-us",
    component: About,
  },
  {
    path: "/faq",
    component: FAQ,
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
