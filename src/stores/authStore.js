import { defineStore } from "pinia";
import { auth } from "../../firebase.config";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../../firebase.config";

export const useAuthStore = defineStore({
  id: "auth",
  state() {
    return {
      user: null,
      authError: null,
      userProfile: null,
    };
  },
  actions: {
    async validateEmailAndPassword(email, password) {
      try {
        await createUserWithEmailAndPassword(auth, email, password);

        // This is just for validation; the user will be created again in the final step
        const currentUser = auth.currentUser;
        if (currentUser) {
          await currentUser.delete();
        }
      } catch (error) {
        switch (error.code) {
          case "auth/email-already-in-use":
            this.authError = "This email is already in use.";
            break;
          case "auth/weak-password":
            this.authError = "The password is too weak.";
            break;
          default:
            this.authError = error.message;
        }
        console.error(
          "Error in authStore validateEmailAndPassword:",
          this.authError
        );
        throw error;
      }
    },

    async signUp(email, password, additionalData) {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        this.user = userCredential.user;

        // Store additional data in Firestore
        const userDocRef = doc(db, "users", this.user.uid);
        await setDoc(userDocRef, additionalData);

        this.authError = null; // Clear any previous error
      } catch (error) {
        switch (error.code) {
          case "auth/email-already-in-use":
            this.authError = "This email is already in use.";
            break;
          case "auth/weak-password":
            this.authError = "The password is too weak.";
            break;
          default:
            this.authError = error.message;
        }
        console.error("Error in authStore signUp:", this.authError);
        throw error; // Re-throwing the error to handle it in the component if needed
      }
    },

    resetAuthError() {
      this.authError = null;
    },

    initialiseAuth() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in
          this.user = user;
          this.fetchUserProfile(); // Fetch the user's profile data
        } else {
          // User is signed out
          this.user = null;
          this.userProfile = null; // Clear the user's profile data
        }
      });
    },

    async fetchUserProfile() {
      if (this.user) {
        const userDocRef = doc(db, "users", this.user.uid);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          this.userProfile = userDoc.data();
        }
      }
    },

    async signOut() {
      try {
        await signOut(auth);
        this.user = null;
        this.userProfile = null;
      } catch (error) {
        console.error("Error signing out:", error);
        throw error;
      }
    },

    // ... other actions ...
  },
});
