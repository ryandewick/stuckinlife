<template>
  <div class="container">
    <div v-if="blogData" class="blog">
      <div class="blog__image-container">
        <img
          :src="blogData.image"
          :alt="`Image of ${blogData.title}`"
          class="blog__image"
        />
        <div class="blog__title-container">
          <h2 class="blog__title">{{ blogData.title }}</h2>
        </div>
      </div>
      <div class="blog__content">
        <p class="blog__description">{{ blogData.description }}</p>
      </div>
    </div>
    <div v-else class="loading">Loading...</div>
  </div>
</template>

<script>
import { useBlogsStore } from "@/stores/blogs";

export default {
  data() {
    return {
      blogData: null,
    };
  },
  computed: {
    blogs() {
      return useBlogsStore().blogs;
    },
  },
  async created() {
    const blogId = Number(this.$route.params.id);
    this.blogData = this.blogs.find((blog) => blog.id === blogId);
  },
};
</script>

<style lang="scss" scoped>
.container {
  max-width: 100%;
  margin: 0 auto;
  padding: 0;
  font-family: "Arial", sans-serif;
}

.blog {
  &__image-container {
    width: 100%;
    overflow: hidden;
    position: relative;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.5);
    }
  }

  &__image {
    width: 100%;
    height: auto;
    height: 400px;
    object-fit: cover;
    display: block;
  }

  &__title-container {
    position: absolute;
    z-index: 5;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: center;
    padding: 0 16px;
  }

  &__title {
    font-size: 32px;
    margin: 0;
  }

  &__content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }

  &__description {
    font-size: 18px;
    line-height: 1.6;
    color: #555;
  }
}

.loading {
  text-align: center;
  font-size: 20px;
  color: #666;
}
</style>
