<template>
  <button
    :class="[
      'button',
      {
        'button--primary': variant === 'primary',
        'button--secondary': variant === 'secondary',
      },
    ]"
  >
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      required: true,
      validator: (value) => ["primary", "secondary"].includes(value),
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/mixins/_variables.scss";
@import "@/assets/mixins/_breakpoints.scss";

.button {
  cursor: pointer;
  border: none;
  border-radius: 4px;
  box-shadow: 0px 24px 50px -10px rgba(0, 0, 0, 0.44);
  padding: 16px 24px;
  font-size: 1.6rem;
  line-height: 160%;
  font-weight: 700;
  color: white;

  @include tabletAndDesktop {
    padding: 16px 40px;
  }

  &--primary {
    background: #0186ba;

    &:hover,
    &:focus {
      background-color: darken(#0186ba, 5%);
    }
  }

  &--secondary {
    background: #115e7c;

    &:hover,
    &:focus {
      background-color: darken(#115e7c, 5%);
    }
  }
}
</style>
