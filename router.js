// router.js
import { createRouter, createWebHistory } from "vue-router";
import Index from "@/pages/Index.vue";
// import ComingSoon from "@/components/ComingSoon.vue";
import Courses from "@/pages/Courses.vue";
import About from "@/pages/About.vue";
import AdminDashboard from "@/dashboard/index.vue";

import { useAuthStore } from "@/stores/authStore";

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
  {
    path: "/admin",
    component: AdminDashboard,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  // Check if the route requires the user to be an admin
  if (to.path === "/admin") {
    // Check if the user is logged in and is an admin
    if (authStore.user && authStore.userProfile?.admin) {
      next(); // Allow access
    } else {
      next("/"); // Redirect to home
    }
  } else {
    next(); // Allow access to other routes
  }
});

export default router;
