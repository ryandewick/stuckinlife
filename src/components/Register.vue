<template>
  <div class="register">
    <h4>Register</h4>
    <!-- Step 1: Email, Password & Confirm Password -->
    <div v-if="step === 1">
      <s-input v-model="email" label="Email:" type="email" placeholder="" />
      <s-input
        v-model="password"
        type="password"
        label="Password:"
        placeholder=""
      />
      <s-input
        v-model="confirmPassword"
        type="password"
        label="Confirm Password:"
        placeholder=""
      />
      <p v-if="authError" class="error">{{ authError }}</p>
      <s-button text="Continue" @click="signUp" variant="secondary" />
    </div>

    <!-- Step 2: Personal Details -->
    <div v-if="step === 2">
      <s-input v-model="firstName" label="First Name:" placeholder="" />
      <s-input v-model="lastName" label="Last Name:" placeholder="" />
      <s-input v-model="dateOfBirth" type="date" label="DOB:" placeholder="" />
      <s-input v-model="location" label="City:" placeholder="" />
      <s-button
        text="Continue"
        variant="secondary"
        @click="updateUserProfile"
      />
      <!-- <input v-model="firstName" placeholder="First Name" />
      <input v-model="lastName" placeholder="Last Name" />
      <input type="date" v-model="dateOfBirth" /> -->
      <!-- ... other fields ... -->
      <!-- <button @click="updateUserProfile">Save Details</button> -->
    </div>
  </div>
</template>

<script>
import { useAuthStore } from "../stores/authStore";

import sInput from "./Input.vue";
import sButton from "./Button.vue";

export default {
  components: {
    sInput,
    sButton,
  },
  data() {
    return {
      step: 1,
      email: "",
      password: "",
      confirmPassword: "",
      firstName: "",
      lastName: "",
      dateOfBirth: null,
      location: "",
      // ... other data properties for additional steps ...
    };
  },
  computed: {
    authError() {
      return useAuthStore().authError;
    },
    sideBarOpen() {
      return useAuthStore().sidebarOpen;
    },
  },
  methods: {
    async signUp() {
      if (this.password !== this.confirmPassword) {
        useAuthStore().authError = "Passwords do not match.";
        return;
      }

      try {
        await useAuthStore().signUp(this.email, this.password, {});
        this.step++;
      } catch (error) {
        console.error(error);
      }
    },
    async updateUserProfile() {
      try {
        await useAuthStore().updateUserProfile(useAuthStore().user.uid, {
          firstName: this.firstName,
          lastName: this.lastName,
          dateOfBirth: this.dateOfBirth,
          location: this.location,
          // ... other data properties ...
        });
        useAuthStore().sidebarOpen = false;
        window.location.reload();
        // this.step++;
      } catch (error) {
        useAuthStore().sidebarOpen = true;
        console.error(error);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/mixins/_variables.scss";
@import "@/assets/mixins/_breakpoints.scss";
/* .error {
  color: red;
} */

.register {
  h4 {
    color: $light-color;
    font-weight: 400;
    margin-bottom: 24px;
  }
}
.s-input {
  margin-bottom: 12px;
}

.s-button {
  z-index: 2;
  margin-top: 40px;
}

:deep(.s-input__label) {
  color: $light-color;
}
</style>
