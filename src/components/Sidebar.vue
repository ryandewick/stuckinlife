<template>
  <transition name="slide">
    <div v-if="sidebarOpen" class="overlay">
      <div v-if="sidebarOpen" class="sidebar">
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
        <div class="sidebar__container">
          <sign-in v-if="tabOpen === 'Sign In'" />
          <register v-if="tabOpen === 'Register'" />
        </div>
        <img
          class="sidebar__stuck-logo"
          src="@/assets/transparent-logo.svg"
          alt="stuckinlife logo"
        />
      </div>
    </div>
  </transition>
</template>

<script>
import { useAuthStore } from "@/stores/authStore";
import SignIn from "@/components/SignIn.vue";
import Register from "@/components/Register.vue";
import { mapActions, mapState } from "pinia";
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
    };
  },

  computed: {
    ...mapState(useAuthStore, ["user", "userProfile", "sidebarOpen"]),
  },

  methods: {
    ...mapActions(useAuthStore, {
      toggleSidebar: "toggleSidebar",
    }),

    handleTabClick(tab) {
      this.tabOpen = tab.name;
    },

    handleOutsideClick(event) {
      const sidebar = document.querySelector(".sidebar");
      if (this.sidebarOpen && sidebar && !sidebar.contains(event.target)) {
        this.toggleSidebar();
      }
    },
  },

  beforeMount() {
    window.removeEventListener("mousedown", this.handleOutsideClick);
  },

  mounted() {
    window.addEventListener("mousedown", this.handleOutsideClick);
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/mixins/_variables.scss";
@import "@/assets/mixins/_breakpoints.scss";

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(51, 51, 51, 0.5);
  z-index: 10;
}

.sidebar {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  overflow: hidden;
  background-color: #f3f3f3;
  border-left: 1px solid $primary-color;
  border-top-left-radius: 24px;
  border-bottom-left-radius: 24px;
  z-index: 2000;

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
    background-color: $primary-color;
    color: #f3f3f3;
    text-align: center;

    &--active {
      color: $primary-color;
      background-color: #f3f3f3;
    }

    &:hover {
      color: $primary-color;
      background-color: #f3f3f3;
    }
  }

  &__stuck-logo {
    position: absolute;
    bottom: 0;
    right: 0;
    filter: brightness(-100%);
  }

  &__container {
    padding-inline: 40px;
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
