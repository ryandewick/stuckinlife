<template>
  <div class="blog-card-slider">
    <div class="blog-card-slider__container" ref="sliderContainer">
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
    <div class="blog-card-slider__buttons">
      <button @click="prevSlide">Prev</button>
      <button @click="nextSlide">Next</button>
    </div>
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
      isMobile: window.innerWidth < 768,
    };
  },
  computed: {
    sliderStyle() {
      const gap = 8;
      return {
        transform: `translateX(calc(-${this.currentSlide * 100}% - ${
          this.currentSlide * gap
        }px))`,
      };
    },
  },

  methods: {
    nextSlide() {
      if (!this.isMobile && this.currentSlide < this.blogs.length - 4) {
        this.currentSlide++;
      } else if (this.isMobile && this.currentSlide < this.blogs.length - 1.2) {
        this.currentSlide++;
      } else {
        this.currentSlide = 0;
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

  mounted() {
    window.addEventListener("resize", () => {
      this.isMobile = window.innerWidth < 768;
    });
  },

  beforeDestroy() {
    window.removeEventListener("resize", () => {
      this.isMobile = window.innerWidth < 768;
    });
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/mixins/_variables.scss";
@import "@/assets/mixins/_breakpoints.scss";
.blog-card-slider {
  position: relative;
  &__container {
    overflow: hidden;
    display: flex;
    gap: 8px;
  }

  &__cards {
    transition: transform 0.3s ease-in-out;
  }

  &__buttons {
    display: none;

    @include tabletAndDesktop {
      display: flex;
      position: absolute;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      top: 160px;
    }
  }
}
</style>
