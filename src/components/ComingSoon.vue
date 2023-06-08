<template>
  <div class="coming-soon">
    <img src="../assets/stuckinlife.webp" />
    <p class="coming-soon__header">COMING SOON!</p>
    <span class="coming-soon__motto"
      >A helping hand and guidance for those lost in life</span
    >
  </div>
</template>

<style lang="scss" scoped>
img {
  filter: brightness(10) saturate(100%);
  width: 200px;
}

.coming-soon {
  &__header {
    color: white;
    font-size: 4rem;
  }

  &__motto {
    color: white;
    font-size: 2rem;
  }
}
</style>
