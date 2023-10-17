<template>
  <div class="message-bar">
    <span class="message-bar__message">Message of the day</span>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/mixins/_variables.scss";
@import "@/assets/mixins/_breakpoints.scss";
.message-bar {
  border-top: $bg-color 2px solid;
  border-bottom: $bg-color 2px solid;
  text-align: center;
  padding: 6px 0;
  background-color: $light-color;

  &__message {
    font-size: 16px;
    color: $primary-color;
    font-weight: 700;
  }
}
</style>
