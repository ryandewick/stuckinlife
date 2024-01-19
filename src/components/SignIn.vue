<template>
  <div class="sign-in">
    <h4>Log in your account</h4>
    <form @submit.prevent="signIn">
      <s-input
        class="sign-in__email"
        v-model="email"
        type="email"
        label="Email:"
        placeholder="Enter your email"
      />

      <s-input
        class="sign-in__password"
        v-model="password"
        type="password"
        label="Password:"
        placeholder=""
      />
      <span>{{ authError }}</span>

      <div class="sign-in__buttons">
        <s-button
          class="sign-in__button-cancel"
          @click="toggleSidebar"
          variant="secondary"
        >
          Cancel
        </s-button>
        <s-button variant="accent" class="sign-in__button-login" @click="signIn"
          >Login</s-button
        >
      </div>
    </form>
  </div>
</template>

<script>
import { useAuthStore } from "@/stores/authStore";
import { mapActions, mapState } from "pinia";

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
    ...mapState(useAuthStore, ["authError", "sidebarOpen"]),
  },

  methods: {
    ...mapActions(useAuthStore, {
      toggleSidebar: "toggleSidebar",
    }),
    async signIn() {
      try {
        await useAuthStore().signIn(this.email, this.password);

        this.$router.push("/courses");
        this.sidebarOpen = false;
        window.location.reload();
      } catch (error) {
        this.sidebarOpen = true;
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
  position: relative;
  z-index: 2;
  h4 {
    color: $dark-color;
    font-weight: 400;
    margin-top: 40px;
    margin-bottom: 24px;
  }

  &__email {
    margin-bottom: 32px;
  }

  &__buttons {
    display: flex;
    flex-direction: column-reverse;
    gap: 16px;
    z-index: 2;
    margin-top: 40px;
  }
}

.s-input {
  z-index: 2;
}
</style>
