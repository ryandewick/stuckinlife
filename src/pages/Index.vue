<template>
  <div class="container">
    <sign-in />
    <register v-if="!user" />
    <div v-if="userProfile">
      <h1>Hello {{ userProfile.firstName }} {{ userProfile.lastName }}</h1>
      <span>{{ userProfile.dateOfBirth }}</span>
    </div>
    <button v-if="user" @click="handleSignOut">Sign out</button>
  </div>
</template>

<script>
import { useAuthStore } from "@/stores/authStore";
import Register from "@/components/Register.vue";
import SignIn from "@/components/SignIn.vue";
export default {
  components: {
    Register,
    SignIn,
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
