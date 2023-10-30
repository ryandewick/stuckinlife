// router.js
import { createRouter, createWebHistory } from "vue-router";
import Index from "@/pages/Index.vue";
// import ComingSoon from "@/components/ComingSoon.vue";
// import Home from "@/pages/Home.vue";
import Courses from "@/pages/Courses.vue";
import About from "@/pages/About.vue";
// import FAQ from "@/pages/FAQ.vue";

// import { useAuthStore } from "@/stores/authStore";

// const authStore = useAuthStore();

const routes = [
  {
    path: "/",
    // redirect: "/coming-soon",
    component: Index,
  },
  {
    path: "/courses",
    component: Courses,
  },
  {
    path: "/about-us",
    component: About,
  },
  // {
  //   path: "/faq",
  //   component: FAQ,
  // },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
