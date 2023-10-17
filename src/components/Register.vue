<template>
  <div class="register">
    <h4>Register</h4>
    <!-- Step 1: Email, Password & Confirm Password -->
    <div v-if="step === 1">
      <s-input
        v-model="email"
        :required="true"
        label="Email:"
        type="email"
        placeholder=""
      />
      <s-input
        v-model="password"
        :required="true"
        type="password"
        label="Password:"
        placeholder=""
      />
      <s-input
        v-model="confirmPassword"
        :required="true"
        type="password"
        label="Confirm Password:"
        placeholder=""
      />
      <p v-if="authError" class="error">{{ authError }}</p>
      <s-button text="Continue" @click="checkForValidEmail" />
    </div>

    <!-- Step 2: Personal Details -->
    <div v-if="step === 2">
      <div class="register__name">
        <s-input
          v-model="firstName"
          :required="true"
          label="First Name:"
          placeholder=""
        />
        <s-input
          v-model="lastName"
          :required="true"
          label="Last Name:"
          placeholder=""
        />
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
          :required="true"
          type="date"
          label="DOB:"
          placeholder=""
        />
        <s-input
          v-model="location"
          :required="true"
          label="City:"
          placeholder=""
        />
      </div>
      <s-button text="Continue" @click="nextStep" />
    </div>

    <div v-if="step === 3">
      <span>step 3</span>
      <s-input
        :model-value="multiSelectedValues"
        placeholder="Hobbies / Interests"
        v-model="multiSelectedValues"
        label="Hobbies / Interests:"
        :options="interestOptions"
        type="select"
        :is-multi-select="true"
      ></s-input>
      <s-button text="Sign up" @click="signUp" />
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
      multiSelectedValues: [],
      interestOptions: [
        { value: "option1", label: "Option 1" },
        { value: "option2", label: "Option 2" },
        { value: "option3", label: "Option 3" },
        { value: "option4", label: "Option 4" },
        { value: "option5", label: "Option 5" },
        { value: "option6", label: "Option 6" },
        { value: "option7", label: "Option 7" },
        { value: "option8", label: "Option 8" },
        { value: "option9", label: "Option 9" },
        { value: "option10", label: "Option 10" },
        { value: "option11", label: "Option 11" },
        { value: "option12", label: "Option 12" },
        { value: "option13", label: "Option 13" },
        { value: "option14", label: "Option 14" },
        { value: "option15", label: "Option 15" },
        { value: "option16", label: "Option 16" },
        { value: "option17", label: "Option 17" },
        { value: "option18", label: "Option 18" },
        { value: "option19", label: "Option 19" },
        { value: "option20", label: "Option 20" },
        { value: "option21", label: "Option 21" },
        { value: "option22", label: "Option 22" },
        { value: "option23", label: "Option 23" },
        { value: "option24", label: "Option 24" },
        { value: "option25", label: "Option 25" },
        { value: "option26", label: "Option 26" },
        { value: "option27", label: "Option 27" },
        { value: "option28", label: "Option 28" },
        { value: "option29", label: "Option 29" },
        { value: "option30", label: "Option 30" },
        { value: "option31", label: "Option 31" },
        { value: "option32", label: "Option 32" },
        { value: "option33", label: "Option 33" },
        { value: "option34", label: "Option 34" },
      ],
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

    getCurrentDate() {
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, "0"); // Months are 0-based
      const day = String(today.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
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

  mounted() {
    this.dateOfBirth = this.getCurrentDate();
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
    font-weight: 400;
    margin-bottom: 24px;
  }

  &__name,
  &__ageAndLocation {
    display: flex;
    gap: 8px;
  }

  &__ageAndLocation {
    width: 100%;

    & > * {
      width: 50%;
    }
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
</style>
