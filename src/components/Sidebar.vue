<template>
  <transition name="slide">
    <div v-if="isSidebarOpen" class="sidebar" tabindex="0">
      <ul class="sidebar__tabs">
        <li
          v-for="tab in tabs"
          :key="tab"
          class="sidebar__tab"
          :class="{ 'sidebar__tab--active': tabOpen === tab.name }"
          @click="handleTabClick(tab)"
        >
          {{ tab.name }}
        </li>
      </ul>
      <div class="container">
        <sign-in v-if="tabOpen === 'Sign In'" />
        <register v-if="tabOpen === 'Register'" />
      </div>
      <img
        class="sidebar__stuck-logo"
        src="@/assets/transparent-logo.svg"
        alt="stuckinlife logo"
      />
    </div>
  </transition>
</template>

<script>
import { useAuthStore } from "@/stores/authStore";
import SignIn from "@/components/SignIn.vue";
import Register from "@/components/Register.vue";
export default {
  components: {
    SignIn,
    Register,
  },

  data() {
    return {
      tabs: [
        {
          name: "Sign In",
          component: SignIn,
        },
        {
          name: "Register",
          component: Register,
        },
      ],
      tabOpen: "Sign In",
      isSidebarOpen: false,
    };
  },

  props: {
    isSidebarOpen: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    user() {
      return useAuthStore().user;
    },
    userProfile() {
      return useAuthStore().userProfile;
    },
  },

  methods: {
    handleTabClick(tab) {
      this.tabOpen = tab.name;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/mixins/_variables.scss";
@import "@/assets/mixins/_breakpoints.scss";

.sidebar {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  background-color: $light-color;
  border-left: 1px solid $primary-color;

  @include tabletAndDesktop {
    width: 400px;
  }

  &__tabs {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
  }

  &__tab {
    cursor: pointer;
    padding: 16px;
    font-size: 16px;
    width: 100%;
    color: $primary-color;
    text-align: center;
    border-left: 1px solid $primary-color;
    border-right: 1px solid $primary-color;

    &--active {
      color: $light-color;
      background-color: $primary-color;
    }

    &:hover {
      color: $light-color;
      background-color: $primary-color;
    }
  }

  img {
    z-index: 1;
  }

  &__stuck-logo {
    position: absolute;
    bottom: 0;
    right: 0;
    filter: brightness(-100%);
  }
}

/* Slide-in animation */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%); /* Slide in from the right */
}
</style>
