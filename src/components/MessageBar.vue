<template>
  <div class="message-bar">
    <span class="message-bar__message">Message of the day</span>
  </div>
</template>

<style lang="scss" scoped>
@import "@/assets/mixins/_variables.scss";
@import "@/assets/mixins/_breakpoints.scss";
.message-bar {
  text-align: center;
  padding: 2px 0;
  background-color: $dark-color;

  &__message {
    font-size: 16px;
    color: $light-color;
  }
}
</style>
