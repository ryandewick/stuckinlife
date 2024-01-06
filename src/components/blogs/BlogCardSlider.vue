<template>
  <div class="blog-card-slider">
    <div class="slider-container" ref="sliderContainer">
      <div
        class="blog-card-slider__cards"
        v-for="blog in blogs"
        :key="blog.id"
        :style="sliderStyle"
        v-touch:swipe.left="nextSlide"
        v-touch:swipe.right="prevSlide"
      >
        <blog-card :blog="blog" />
      </div>
    </div>
    <button @click="prevSlide">Prev</button>
    <button @click="nextSlide">Next</button>
  </div>
</template>

<script>
import BlogCard from "@/components/blogs/BlogCard.vue";

export default {
  components: {
    BlogCard,
  },

  props: {
    blogs: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      currentSlide: 0,
    };
  },
  computed: {
    sliderStyle() {
      return {
        transform: `translateX(-${this.currentSlide * 100}%)`,
      };
    },
  },
  methods: {
    nextSlide() {
      if (this.currentSlide < this.blogs.length - 1) {
        this.currentSlide++;
      }
    },
    prevSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--;
      }
    },
    swipeHandler() {
      console.log("swipe");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/mixins/_variables.scss";
@import "@/assets/mixins/_breakpoints.scss";
.blog-card-slider {
  .slider-container {
    overflow: hidden;
    display: flex;
    align-items: flex-start;
    gap: 8px;
  }

  .blog-card-slider__cards {
    transition: transform 0.3s ease-in-out;
    width: 100%;
  }
}
</style>
