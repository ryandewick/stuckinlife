<template>
  <div class="sidebar">
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
  </div>
  <img
    class="sidebar__stuck-logo"
    src="@/assets/transparent-logo.svg"
    alt="stuckinlife logo"
  />
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
    };
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
  height: 100dvh;
  width: 100%;
  overflow: hidden;
  background-color: $primary-color;

  @include tabletAndDesktop {
    position: absolute;
    right: 0;
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
    color: $light-color;
    text-align: center;
    border: 1px solid $secondary-color;

    &--active {
      background-color: $secondary-color;
    }

    &:hover {
      background-color: $secondary-color;
    }
  }

  &__stuck-logo {
    position: absolute;
    bottom: 0;
    right: 0;
  }
}
</style>
