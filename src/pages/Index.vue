<template>
  <div class="index">
    <button @click="openSidebar">Open Sidebar</button>
    <sidebar v-if="sidebarOpen" />
    <span>{{ userProfile }}</span>
    <div class="container">
      <button v-if="user" @click="handleSignOut">Sign out</button>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from "@/stores/authStore";
import Sidebar from "@/components/Sidebar.vue";
export default {
  components: {
    Sidebar,
  },

  computed: {
    user() {
      return useAuthStore()?.user;
    },
    userProfile() {
      return useAuthStore()?.userProfile;
    },
    sidebarOpen() {
      return useAuthStore()?.sidebarOpen;
    },
  },

  methods: {
    handleSignOut() {
      useAuthStore().signOut();
    },

    openSidebar() {
      useAuthStore().sidebarOpen = true;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "src/assets/mixins/_variables.scss";
@import "src/assets/mixins/_breakpoints.scss";
</style>
