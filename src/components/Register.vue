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
      <div class="register__buttons">
        <s-button
          variant="outline"
          class="register__button-cancel"
          @click="toggleSidebar"
        >
          Cancel
        </s-button>
        <s-button variant="secondary" @click="checkForValidEmail"
          >Continue</s-button
        >
      </div>
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
      <div class="register__buttons">
        <s-button
          class="register__button-cancel"
          @click="toggleSidebar"
          variant="outline"
        >
          Cancel
        </s-button>
        <s-button variant="secondary" @click="nextStep">Continue</s-button>
      </div>
    </div>

    <div v-if="step === 3">
      <span
        class="register__hobbies-tag"
        v-for="value in multiSelectedValues"
        :key="value"
      >
        {{ value }}</span
      >
      <s-input
        :model-value="multiSelectedValues"
        placeholder="Hobbies / Interests"
        v-model="multiSelectedValues"
        label="Hobbies / Interests:"
        :options="interestOptions"
        type="select"
        :is-multi-select="true"
      ></s-input>

      <div class="register__buttons">
        <s-button
          class="register__button-cancel"
          @click="toggleSidebar"
          variant="outline"
          >Cancel</s-button
        >

        <s-button variant="secondary" @click="signUp">Sign up</s-button>
      </div>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from "../stores/authStore";
import { mapState, mapActions } from "pinia";

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
      ],
      // ... other data properties for additional steps ...
    };
  },
  computed: {
    ...mapState(useAuthStore, ["sidebarOpen", "authError"]),
  },
  methods: {
    ...mapActions(useAuthStore, {
      toggleSidebar: "toggleSidebar",
      handleAuthError: "handleAuthError",
      checkEmailExists: "checkEmailExists",
    }),

    nextStep() {
      this.step++;
    },

    getCurrentDate() {
      const today = new Date();
      const year = today.getFullYear();
      const month = String(today.getMonth() + 1).padStart(2, "0");
      const day = String(today.getDate()).padStart(2, "0");
      return `${year}-${month}-${day}`;
    },

    async checkForValidEmail() {
      const emailExists = await this.checkEmailExists(this.email);
      if (emailExists) {
        return;
      }
      this.step++;
    },

    async signUp() {
      if (this.password !== this.confirmPassword) {
        this.authError = "Passwords do not match.";
        return;
      }

      try {
        // Sign up the user with email and password
        await useAuthStore().signUp(this.email, this.password, {});

        // Update the user's profile using the email as the document ID
        await useAuthStore().updateUserProfile(this.email, {
          firstName: this.firstName,
          lastName: this.lastName,
          dateOfBirth: this.dateOfBirth,
          location: this.location,
          hobbies: this.multiSelectedValues,
          // ... other data properties ...
        });

        this.toggleSidebar();
        window.location.reload();
      } catch (error) {
        this.handleAuthError(error);
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
    margin-top: 40px;
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

  &__hobbies-tag {
    display: inline-block;
    background-color: $primary-color;
    color: #f3f3f3;
    padding: 4px 8px;
    margin-right: 8px;
    margin-bottom: 8px;
    border-radius: 4px;
  }

  &__buttons {
    position: relative;
    display: flex;
    flex-direction: column-reverse;
    gap: 16px;
    z-index: 2;
    margin-top: 40px;
  }
}
.s-input {
  z-index: 2;
  margin-bottom: 12px;
}

// .s-button {
//   z-index: 2;
//   margin-top: 40px;
// }
</style>
