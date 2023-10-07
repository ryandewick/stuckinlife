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
      <s-button
        text="Continue"
        @click="checkForValidEmail"
        variant="secondary"
      />
    </div>

    <!-- Step 2: Personal Details -->
    <div v-if="step === 2">
      <div class="register__name">
        <s-input v-model="firstName" label="First Name:" placeholder="" />
        <s-input v-model="lastName" label="Last Name:" placeholder="" />
      </div>
      <s-input
        v-model="selectedGender"
        label="Gender:"
        type="select"
        placeholder="Choose a gender"
        :options="genderOptions"
      />
      <div class="register__ageAndLocation">
        <s-input
          v-model="dateOfBirth"
          type="date"
          label="DOB:"
          placeholder=""
        />
        <s-input v-model="location" label="City:" placeholder="" />
      </div>
      <s-button text="Continue" variant="secondary" @click="nextStep" />
    </div>

    <div v-if="step === 3">
      <span>step 3</span>
      <s-button text="Sign up" variant="secondary" @click="signUp" />
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
      genderOptions: [
        { label: "Male", value: "male" },
        { label: "Female", value: "female" },
        { label: "Other", value: "other" },
      ],
      selectedGender: "",
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
    nextStep() {
      this.step++;
      console.log(this.step);
    },

    async checkForValidEmail() {
      console.log("Method called");
      if (this.password !== this.confirmPassword) {
        useAuthStore().authError = "Passwords do not match.";
        return;
      }

      try {
        const emailExists = await useAuthStore().checkEmailExists(this.email);
        if (emailExists) {
          useAuthStore().authError = "This email is already in use.";
          return;
        }
        this.step++;
      } catch (error) {
        console.error(error);
      }
    },

    async signUp() {
      if (this.password !== this.confirmPassword) {
        useAuthStore().authError = "Passwords do not match.";
        return;
      }

      try {
        // Sign up the user with email and password
        await useAuthStore().signUp(this.email, this.password, {});

        // Update the user's profile using the email as the document ID
        await useAuthStore().updateUserProfile(this.email, {
          firstName: this.firstName,
          lastName: this.lastName,
          gender: this.selectedGender,
          dateOfBirth: this.dateOfBirth,
          location: this.location,
          // ... other data properties ...
        });

        useAuthStore().sidebarOpen = false;
        window.location.reload();
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

  &__name,
  &__ageAndLocation {
    display: flex;
    gap: 8px;
  }
}
.s-input {
  z-index: 2;
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
