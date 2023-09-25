import { defineStore } from "pinia";
import { auth, db } from "../../firebase.config";
import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";

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

        this.authError = null;
      } catch (error) {
        this.handleAuthError(error);
        throw error;
      }
    },

    async signIn(email, password) {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          email,
          password
        );
        this.user = userCredential.user;
        this.authError = null;
      } catch (error) {
        this.handleAuthError(error);
        throw error;
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

    // This is tracking if the user is logged in.
    initialiseAuth() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          this.user = user;
          this.fetchUserProfile();
        } else {
          this.user = null;
          this.userProfile = null;
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

    async updateUserProfile(uid, additionalData) {
      try {
        const userDocRef = doc(db, "users", uid);
        await setDoc(userDocRef, additionalData, { merge: true });
      } catch (error) {
        console.error("Error updating user profile:", error);
        throw error;
      }
    },

    resetAuthError() {
      this.authError = null;
    },

    handleAuthError(error) {
      switch (error.code) {
        case "auth/email-already-in-use":
          this.authError = "This email is already in use.";
          break;
        case "auth/weak-password":
          this.authError = "The password is too weak.";
          break;
        case "auth/user-not-found":
          this.authError = "No user found with this email.";
          break;
        case "auth/wrong-password":
          this.authError = "Incorrect password.";
          break;
        default:
          this.authError = error.message;
      }
      console.error("Error in authStore:", this.authError);
    },
  },
});
