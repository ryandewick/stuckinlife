<template>
  <div class="blog-control-card__wrapper">
    <div class="blog-control-card">
      <div class="blog-control-card__image">
        <img
          src="../../../public/assets/test-blog-image1.svg"
          :alt="blog?.altTag"
        />
      </div>
      <div class="blog-control-card__content">
        <div class="blog-control-card__content-title">{{ blog?.title }}</div>
        <div class="blog-control-card__content-description">
          {{ blog?.description }}
        </div>
        <s-button class="blog-control-card__content-edit" variant="accent"
          >Edit</s-button
        >
        <s-button class="blog-control-card__content-remove" variant="primary"
          >Remove</s-button
        >
      </div>
    </div>
  </div>
</template>

<script>
import sButton from "@/components/Button.vue";
export default {
  props: {
    blog: {
      type: Object,
    },
  },
  components: {
    sButton,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/mixins/_variables.scss";
@import "@/assets/mixins/_breakpoints.scss";
.blog-control-card {
  display: flex;
  flex-direction: column;
  padding: 4px;
  margin-bottom: 24px;

  @include tabletAndDesktop {
    flex-direction: row;
  }

  &__image {
    margin-right: 24px;
    img {
      width: 280px;
      aspect-ratio: 16/9;
      object-fit: cover;
      border-radius: 5px 5px 0px 0px;
    }
  }

  &__content {
    &-title {
      font-size: 24px;
      line-height: 32px;
      font-weight: 700;
      color: $secondary-color;
      margin-bottom: 4px;
      width: 100%;
    }

    &-description {
      font-size: 16px;
      line-height: 24px;
      font-weight: 400;
      color: $grey-color;
      margin-bottom: 8px;
    }

    &-remove {
      margin-left: 16px;
    }
  }
}
</style>
