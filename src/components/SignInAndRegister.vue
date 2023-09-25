<template>
  <div>
    <!-- Step 1: Email & Password -->
    <div v-if="step === 1">
      <input v-model="email" placeholder="Email" />
      <input v-model="password" placeholder="Password" />
      <p v-if="authError" class="error">{{ authError }}</p>
      <button @click="nextStep" :disabled="authError">Next</button>
    </div>

    <!-- Step 2: Personal Details -->
    <div v-if="step === 2">
      <input v-model="firstName" placeholder="First Name" />
      <input v-model="lastName" placeholder="Last Name" />
      <!-- ... other fields ... -->
      <button @click="nextStep">Next</button>
    </div>

    <!-- Step 3: Personality Traits & Hobbies -->
    <div v-if="step === 3">
      <!-- Add your input fields for personality traits and hobbies here -->
      <button v-if="!userProfile" @click="completeSignUp">Sign Up</button>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from "../stores/authStore";

export default {
  data() {
    return {
      step: 1,
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      // ... other data properties for additional steps ...
    };
  },
  computed: {
    authError() {
      return useAuthStore().authError;
    },

    userProfile() {
      return useAuthStore().userProfile;
    },
  },
  methods: {
    async nextStep() {
      if (this.step === 1) {
        // Reset the authError before attempting validation
        setTimeout(() => {
          useAuthStore().resetAuthError();
        }, 3000);

        try {
          // Validate the email and password
          await useAuthStore().validateEmailAndPassword(
            this.email,
            this.password
          );
          this.step++;
        } catch (error) {
          // Handle the error if needed, or just rely on the store's error state
        }
      } else {
        this.step++;
      }
    },
    async completeSignUp() {
      const authStore = useAuthStore();
      try {
        await authStore.signUp(this.email, this.password, {
          firstName: this.firstName,
          lastName: this.lastName,
          // ... other data properties ...
        });
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>
.error {
  color: red;
}
</style>
