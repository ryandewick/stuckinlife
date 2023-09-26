<template>
  <button
    class="s-button"
    :class="{
      's-button--primary': variant === 'primary',
      's-button--secondary': variant === 'secondary',
    }"
    @click="handleClick"
  >
    {{ text }}
  </button>
</template>

<script>
export default {
  name: "s-button",
  props: {
    text: {
      type: String,
      default: "Click me",
    },
    variant: {
      type: String,
      default: "primary",
    },
  },
  methods: {
    handleClick() {
      this.$emit("click");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/mixins/_variables.scss";
@import "@/assets/mixins/_breakpoints.scss";
.s-button {
  padding: 8px 40px;
  width: 100%;
  font-size: 20px;
  font-weight: 400;
  border: none;
  cursor: pointer;

  &--primary {
    background-color: $primary-color; // Primary background color
    color: $light-color; // Primary text color
  }

  &--secondary {
    background-color: #dde2e3; // Secondary background color
    color: $primary-color; // Secondary text color
  }
}
</style>
