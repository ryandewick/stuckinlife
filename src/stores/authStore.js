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
      sidebarOpen: false,
      tabOpen: "Sign In",
    };
  },

  actions: {
    getUserDocRef(email) {
      return doc(db, "users", email.toLowerCase());
    },

    async checkEmailExists(email) {
      const userDocRef = this.getUserDocRef(email);
      console.log(userDocRef);
      const userDoc = await getDoc(userDocRef);
      if (userDoc.exists()) {
        this.authError = "This email is already in use.";
      }
      return userDoc.exists();
    },

    async signUp(email, password, additionalData) {
      try {
        // Create a new user in Firebase Authentication
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          email,
          password
        );
        this.user = userCredential.user;

        // Store user details in Firestore under the "users" collection using email as the document ID
        const userDocRef = this.getUserDocRef(email);
        await setDoc(userDocRef, additionalData);

        this.authError = null;
      } catch (error) {
        this.handleAuthError(error);
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
        const userDocRef = this.getUserDocRef(this.user.email);
        const userDoc = await getDoc(userDocRef);
        if (userDoc.exists()) {
          this.userProfile = userDoc.data();
        }
      }
    },

    async updateUserProfile(email, additionalData) {
      try {
        const userDocRef = this.getUserDocRef(email);
        await setDoc(userDocRef, additionalData, { merge: true });
      } catch (error) {
        throw error;
      }
    },
    resetAuthError() {
      this.authError = null;
    },

    handleAuthError(error) {
      switch (error.code) {
        case "auth/invalid-login-credentials":
          this.authError =
            "The email or the password you have entered is incorrect.";
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
        case "auth/too-many-requests":
          this.authError =
            "Too many failed login attempts. Please try again later.";
          break;
        default:
          this.authError = error;
      }
    },
    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
    },
    setTabOpen(tabName) {
      this.tabOpen = tabName;
    },
  },
});
