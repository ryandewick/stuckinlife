<template>
  <div class="sign-in">
    <h4>Sign In</h4>
    <form @submit.prevent="signIn">
      <s-input
        class="sign-in__email"
        v-model="email"
        type="email"
        label="Email"
        placeholder="Enter your email"
      />

      <s-input
        v-model="password"
        type="password"
        label="Password"
        placeholder=""
      />
      <span>{{ authError }}</span>

      <s-button
        class="sign-in__button"
        text="Login"
        variant="secondary"
        @click="signIn"
      />
    </form>
  </div>
</template>

<script>
import { useAuthStore } from "@/stores/authStore";

import sInput from "./Input.vue";
import sButton from "./Button.vue";

export default {
  components: {
    sInput,
    sButton,
  },
  data() {
    return {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      dateOfBirth: null,
      isOpen: true,
    };
  },
  computed: {
    authError() {
      return useAuthStore().authError;
    },
  },
  methods: {
    async signIn() {
      try {
        await useAuthStore().signIn(this.email, this.password);
        // Optionally, redirect to a different page after successful sign-in
        // this.$router.push('/dashboard');
      } catch (error) {
        console.error("Error during sign-in:", error.message);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/mixins/_variables.scss";
@import "@/assets/mixins/_breakpoints.scss";
.sign-in {
  h4 {
    color: $light-color;
    font-weight: 400;
    margin-bottom: 24px;
  }

  &__email {
    margin-bottom: 12px;
  }

  &__button {
    z-index: 2;
    margin-top: 40px;
  }
}

:deep(.s-input__label) {
  color: $light-color;
}
</style>
