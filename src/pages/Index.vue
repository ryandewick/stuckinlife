<template>
  <div class="container">
    <sign-in-and-register />
    <div v-if="user">
      <h1>Hello {{ userProfile.firstName }} {{ userProfile.lastName }}</h1>
    </div>
    <button v-if="user" @click="handleSignOut">Sign out</button>
  </div>
</template>

<script>
import { useAuthStore } from "../stores/authStore";
import SignInAndRegister from "@/components/SignInAndRegister.vue";
export default {
  components: {
    SignInAndRegister,
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
    handleSignOut() {
      useAuthStore().signOut();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "src/assets/mixins/_variables.scss";
@import "src/assets/mixins/_breakpoints.scss";

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
</style>
