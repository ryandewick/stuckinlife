import { defineStore } from "pinia";

export const useBlogsStore = defineStore("blogs", {
  state: () => ({
    blogs: [],
  }),

  actions: {
    addBlog(blog) {
      this.blogs.push({
        id: this.blogs.length + 1,
        image: blog.image,
        title: blog.title,
        metaDescription: blog.metaDescription,
        content: blog.content,
        slug: blog.title.toLowerCase().replace(/\s+/g, "-"),
      });
    },
    deleteBlog(id) {
      this.blogs = this.blogs.filter((blog) => blog.id !== id);
    },
  },
});
