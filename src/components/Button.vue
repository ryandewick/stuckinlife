<template>
  <button>
    <slot />
  </button>
</template>

<style lang="scss" scoped>
@import "@/assets/mixins/_variables.scss";
@import "@/assets/mixins/_breakpoints.scss";

button {
  cursor: pointer;
  border: none;
  border-radius: 4px;
  background: #0186ba;
  box-shadow: 0px 24px 50px -10px rgba(0, 0, 0, 0.44);
  padding: 16px 24px;
  font-size: 1.6rem;
  line-height: 160%;
  font-weight: 700;
  color: white;

  @include tabletAndDesktop {
    padding: 16px 40px;
  }

  &:hover {
    background-color: darken(#0186ba, 5%);
  }
}
</style>
