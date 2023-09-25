<template>
  <div>
    <h2>Sign In</h2>

    <input v-model="email" placeholder="Email" />
    <input v-model="password" placeholder="Password" type="password" />

    <p v-if="authError" class="error">{{ authError }}</p>

    <button @click="signIn">Sign In</button>

    <br />
    <div>
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
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      dateOfBirth: null,
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
