import { defineStore } from "pinia";

export const useBlogsStore = defineStore("blogs", {
  state: () => ({
    blogs: [
      {
        id: 1,
        image: "../../../assets/test-blog-image1.svg",
        title: "Career Exploration Essentials: Discover Your Path to Success",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolores eius facere ipsa praesentium ea, a magni, consequuntur hic at voluptate? Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolores eius facere ipsa praesentium ea, a magni, consequuntur hic at voluptate? Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolores eius facere ipsa praesentium ea, a magni, consequuntur hic at voluptate?",
      },
      {
        id: 2,
        image: "../../../assets/test-blog-image1.svg",
        title: "Career Exploration Essentials: Discover Your Path to Success",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor veniam nisi labore illum excepturi consectetur quos ratione doloribus, iste vitae perspiciatis aliquam voluptatibus numquam illo quaerat incidunt? Recusandae sit excepturi quasi nulla at. Cumque, provident voluptates nisi explicabo magni at perspiciatis reiciendis maiores ab quidem labore libero pariatur molestiae sequi qui consectetur voluptatem omnis. Sit, quas optio. Harum, mollitia aliquid, perferendis maxime unde magni molestias excepturi porro accusantium vitae illo aut adipisci itaque numquam necessitatibus nobis. Cupiditate culpa quis, placeat rerum minus asperiores ullam quibusdam incidunt enim ipsam ipsa, optio at dicta blanditiis nostrum ratione assumenda quo velit? Ea provident omnis mollitia perferendis hic asperiores, error obcaecati inventore rem libero blanditiis distinctio dolore, cum aperiam sunt, sed quia dolor. Aperiam, debitis dolorum! Ullam aliquam tempore architecto aut odio laboriosam excepturi libero! Accusamus aliquam reiciendis distinctio ex expedita libero odit quidem suscipit aut autem nesciunt, doloremque sunt saepe odio, dolores minus sapiente. Cumque impedit quos optio facere quaerat, doloribus magni animi quis minus soluta praesentium, quasi molestiae voluptatem consectetur, alias laborum debitis accusantium vitae enim. Aperiam, laudantium autem voluptates a corporis quaerat ratione quas illum aliquam vel molestias harum dignissimos magnam soluta consequatur magni? Ipsa, quod! Labore nihil voluptas quis incidunt!",
      },
      {
        id: 3,
        image: "../../../assets/test-blog-image1.svg",
        title: "Career Exploration Essentials: Discover Your Path to Success",
        description:
          "Just testing this to see whats going on and where its being capped at. I'm now just typing for the sake of typing and have no idea what to actually type. I'm just going to keep typing and typing again until I reach the character limit so I can see if my functionality actually works",
      },
      {
        id: 4,
        image: "../../../assets/test-blog-image1.svg",
        title: "Career Exploration Essentials: Discover Your Path to Success",
        description:
          "Just testing this to see whats going on and where its being capped at. I'm now just typing for the sake of typing and have no idea what to actually type. I'm just going to keep typing and typing again until I reach the character limit so I can see if my functionality actually works",
      },
      {
        id: 5,
        image: "../../../assets/test-blog-image1.svg",
        title: "Career Exploration Essentials: Discover Your Path to Success",
        description:
          "Just testing this to see whats going on and where its being capped at. I'm now just typing for the sake of typing and have no idea what to actually type. I'm just going to keep typing and typing again until I reach the character limit so I can see if my functionality actually works",
      },
      {
        id: 6,
        image: "../../../assets/test-blog-image1.svg",
        title: "Career Exploration Essentials: Discover Your Path to Success",
        description:
          "Just testing this to see whats going on and where its being capped at. I'm now just typing for the sake of typing and have no idea what to actually type. I'm just going to keep typing and typing again until I reach the character limit so I can see if my functionality actually works",
      },
    ],
  }),

  actions: {
    addBlog(blog) {
      this.blogs.push({
        id: this.blogs.length + 1,
        image: blog.image,
        title: blog.title,
        description: blog.description,
      });
    },
    deleteBlog(id) {
      this.blogs = this.blogs.filter((blog) => blog.id !== id);
    },
  },
});
