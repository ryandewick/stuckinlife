import { defineStore } from "pinia";
import { db } from "../../firebase.config";
import { collection, getDocs } from "firebase/firestore";

export const useDashboardStore = defineStore("dashboard", {
  state: () => ({
    allUsers: [],
    loading: false,
    error: null,
  }),

  actions: {
    async fetchAllUsers() {
      this.loading = true;
      try {
        const querySnapshot = await getDocs(collection(db, "users"));
        this.allUsers = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        this.error = null;
      } catch (error) {
        console.error("Error fetching all users:", error);
        this.error = error;
      } finally {
        this.loading = false;
      }
    },
  },
});
