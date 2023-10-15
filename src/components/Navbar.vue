<template>
  <nav>
    <div class="container">
      <div class="navbar">
        <div class="navbar-brand">
          <a class="navbar__brand-name" href="/">Stuckinlife </a>
          <a
            role="button"
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            @click="toggleMenu"
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <!-- <div class="navbar-menu" :class="{ 'is-active': isMenuActive }">
          <div class="navbar-end">
            <a class="navbar-item" href="/"> Home </a>
            <a class="navbar-item" href="/about"> About </a>
            <a class="navbar-item" href="/contact"> Contact </a>
          </div>
        </div> -->
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isMenuActive: false,
    };
  },
  methods: {
    toggleMenu() {
      this.isMenuActive = !this.isMenuActive;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/mixins/_variables.scss";
@import "@/assets/mixins/_breakpoints.scss";

nav {
  background-color: $primary-color;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;

  &__brand-name {
    font-size: 20px;
    font-weight: 700;
    color: $light-color;
  }
}
</style>
