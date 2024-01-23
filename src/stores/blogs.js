import { defineStore } from "pinia";

export const useBlogsStore = defineStore("blogs", {
  state: () => ({
    blogs: [
      {
        id: 1,
        title: "Blog 1",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolores eius facere ipsa praesentium ea, a magni, consequuntur hic at voluptate? ",
      },
      {
        id: 2,
        title: "Blog 2",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolores eius facere ipsa praesentium ea, a magni, consequuntur hic at voluptate?.",
      },
      {
        id: 3,
        title: "Blog 3",
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore dolores eius facere ipsa praesentium ea, a magni, consequuntur hic at voluptate?",
      },
    ],
  }),
});
