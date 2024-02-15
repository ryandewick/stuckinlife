import { defineStore } from "pinia";
import { db } from "../../firebase.config";
import {
  doc,
  getDocs,
  setDoc,
  collection,
  deleteDoc,
} from "firebase/firestore";

export const useBlogsStore = defineStore("blogs", {
  state: () => ({
    blogs: [],
  }),

  actions: {
    async getBlogs() {
      try {
        const blogsRef = collection(db, "blogs");
        const snapshot = await getDocs(blogsRef);
        this.blogs = snapshot.docs.map((doc) => doc.data());
      } catch (error) {
        console.error("Error getting blogs:", error);
      }
    },

    async addBlog(blog) {
      try {
        const blogRef = doc(db, "blogs", blog?.id);
        await setDoc(blogRef, blog);
      } catch (error) {
        console.error("Error adding blog:", error);
      }
    },

    async deleteBlog(id) {
      try {
        const blogRef = doc(db, "blogs", id);
        await deleteDoc(blogRef);
        this.blogs = this.blogs.filter((blog) => blog.id !== id);
      } catch (error) {
        console.error("Error deleting blog:", error);
      }
    },
  },
});
