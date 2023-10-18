<template>
  <nav>
    <div class="container">
      <div class="navbar">
        <div class="navbar__brand">
          <img
            class="navbar__brand-logo"
            src="../assets/stuckinlife.webp"
            alt=""
          />
          <a class="navbar__brand-name" href="/">Stuckinlife </a>
        </div>
        <div class="navbar__links">
          <router-link
            class="navbar__link"
            :to="item.url"
            v-for="item in navLinks"
            :key="item.name"
            >{{ item.name }}</router-link
          >
        </div>
        <div class="navbar__button-wrapper">
          <s-button text="Register / Login" variant="secondary" />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import sButton from "./Button.vue";

export default {
  components: {
    sButton,
  },
  data() {
    return {
      isMenuActive: false,
      navLinks: [
        {
          name: "About us",
          url: "/about-us",
        },
        {
          name: "Blog",
          url: "/blog",
        },
      ],
    };
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

  &__brand {
    display: flex;
    align-items: center;

    &-logo {
      width: 50px;
      filter: brightness(1000%);
      margin-right: 12px;
    }

    &-name {
      font-size: 20px;
      font-weight: 700;
      color: $light-color;
    }
  }

  &__link {
    color: $light-color;
    margin-right: 24px;
    font-size: 1.6rem;
    text-decoration: none;

    &:hover {
      color: $secondary-color;
    }
  }

  &__button-wrapper {
    display: none;

    @include tabletAndDesktop {
      display: block;
    }
  }
}
</style>
