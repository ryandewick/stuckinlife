<template>
  <div class="index">
    <s-message-bar />
    <s-sidebar
      :isSidebarOpen="isSidebarOpen"
      @keydown.esc="toggleSidebar"
      class="index__sidebar"
    />
    <div class="container">
      <!-- <button v-if="!sidebarOpen && !user" @click="openSidebar">
        Open Sidebar
      </button>

      <h3 v-if="userProfile?.firstName">
        Hello {{ userProfile?.firstName }} {{ userProfile?.lastName }}
      </h3>
      <p v-if="userProfile?.location">Location: {{ userProfile?.location }}</p>

      <button v-if="user" @click="handleSignOut">Sign out</button> -->
      <div class="index__hero">
        <div class="index__header">
          <h1 class="index__header-title">
            Stuck in Life? We're Here for You!
          </h1>
          <p class="index__header-sub">
            We're dedicated to helping you discover the career that truly suits
            you.
          </p>
          <h2>First watch this video to show you how to get setup</h2>
        </div>
        <div class="index__video-wrapper">
          <!-- <video class="index__video" controls>
            <source src="" type="video/mp4" />
            Your browser does not support the video tag.
          </video> -->
          <span>video here</span>
        </div>
        <s-button text="Get Started" @click="toggleSidebar"></s-button>
      </div>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from "@/stores/authStore";
import sSidebar from "@/components/Sidebar.vue";
import sMessageBar from "../components/MessageBar.vue";
import sButton from "../components/Button.vue";
export default {
  components: {
    sSidebar,
    sMessageBar,
    sButton,
  },

  data() {
    return {
      isSidebarOpen: false,
    };
  },

  computed: {
    user() {
      return useAuthStore()?.user;
    },
    userProfile() {
      return useAuthStore()?.userProfile;
    },
  },

  methods: {
    handleSignOut() {
      useAuthStore().signOut();
    },

    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "src/assets/mixins/_variables.scss";
@import "src/assets/mixins/_breakpoints.scss";

.index {
  &__sidebar {
    z-index: 1000;
  }

  &__header {
    color: $light-color;

    &-title {
      width: 240px;
      margin-top: 8px;
      margin-bottom: 16px;
    }

    &-sub {
      font-weight: 400;
      color: $light-color;
      margin-bottom: 32px;
    }
  }

  &__video-wrapper {
    width: 100%;
    margin-top: 32px;
    margin-bottom: 32px;
  }
}
</style>
