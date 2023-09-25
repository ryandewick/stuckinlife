<template>
  <div>
    <!-- Step 1: Email, Password & Confirm Password -->
    <div v-if="step === 1">
      <input v-model="email" placeholder="Email" />
      <input v-model="password" placeholder="Password" type="password" />
      <input
        v-model="confirmPassword"
        placeholder="Confirm Password"
        type="password"
      />
      <p v-if="authError" class="error">{{ authError }}</p>
      <button @click="signUp">Sign Up</button>
    </div>

    <!-- Step 2: Personal Details -->
    <div v-if="step === 2">
      <input v-model="firstName" placeholder="First Name" />
      <input v-model="lastName" placeholder="Last Name" />
      <input type="date" v-model="dateOfBirth" />
      <!-- ... other fields ... -->
      <button @click="updateUserProfile">Save Details</button>
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
      confirmPassword: "",
      firstName: "",
      lastName: "",
      dateOfBirth: null,
      // ... other data properties for additional steps ...
    };
  },
  computed: {
    authError() {
      return useAuthStore().authError;
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
          // ... other data properties ...
        });
        alert(
          "Profile updated successfully!",
          this.firstName,
          this.lastName,
          this.dateOfBirth
        );
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
