<template>
  <div class="container">
    <div class="coming-soon">
      <img src="../assets/stuckinlife.webp" />
      <h1 class="coming-soon__header">COMING SOON!</h1>
      <span class="coming-soon__motto"
        >A helping hand and guidance for those lost in life</span
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "src/assets/mixins/_variables.scss";
@import "src/assets/mixins/_breakpoints.scss";

img {
  filter: brightness(10) saturate(100%);
  width: 200px;
}

.coming-soon {
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &__header {
    color: white;
    font-size: $h1-font-size;
    margin: 16px 0;
    @include tabletAndDesktop {
      font-size: $h1-font-size-desktop;
    }
  }

  &__motto {
    color: white;
    font-size: 2rem;
    text-align: center;
  }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
</style>
