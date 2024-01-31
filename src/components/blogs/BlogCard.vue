<template>
  <div class="blog-card">
    <div class="blog-card__image">
      <img :src="blog?.image" :alt="blog?.altTag" />
    </div>
    <div class="blog-card__content">
      <div class="blog-card__title">{{ blog?.title }}</div>
      <div class="blog-card__description">
        {{ capLength(blog?.description, 50) }}
      </div>
      <div class="blog-card__read-more">
        <a :href="`/blogs/${blog.id}`">Read more ></a>
      </div>
    </div>
  </div>
</template>

<script>
import { capLength } from "@/../helper";
export default {
  props: {
    blog: {
      type: Object,
    },
  },
  methods: {
    capLength,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/mixins/_variables.scss";
@import "@/assets/mixins/_breakpoints.scss";

.blog-card {
  width: 280px;
  border-radius: 4px;

  @include tabletAndDesktop {
    width: 284px;
  }

  &__image {
    img {
      width: 280px;
      aspect-ratio: 16/9;
      object-fit: cover;
      border-radius: 5px 5px 0px 0px;

      @include tabletAndDesktop {
        width: 284px;
      }
    }
  }

  &__content {
    padding: 22px 20px 20px;

    @include tabletAndDesktop {
      padding: 24px 24px 32px;
    }
  }

  &__title {
    color: $secondary-color;
    font-size: 1.6rem;
    font-weight: 600;
    line-height: 24px;
  }

  &__description {
    color: $grey-color;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    margin-top: 8px;
    margin-bottom: 16px;

    @include tabletAndDesktop {
      margin-bottom: 26px;
    }
  }

  &__read-more {
    font-size: 1.4rem;
    color: $secondary-color;
  }
}
</style>
