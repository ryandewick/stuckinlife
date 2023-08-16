<template>
  <header>
    <stuck-header />
    <stuck-nav
      class="stuck-nav"
      :nav-items="navItems"
      :button-text="buttonText"
    />
  </header>
</template>

<script>
import { stuckHeader, stuckNav } from "stuckinlife-components";
export default {
  components: {
    stuckHeader,
    stuckNav,
  },

  data() {
    return {
      navItems: [
        {
          name: "Courses",
          link: "/courses",
        },
        {
          name: "About Us",
          link: "/about-us",
        },
        {
          name: "FAQ",
          link: "/faq",
        },
        {
          name: "Videos",
          link: "/videos",
        },
        {
          name: "Test",
          link: "/test",
        },
      ],
      buttonText: {
        name: "Hello there, Ryan Dewick!",
        link: "/profile",
      },
    };
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/mixins/breakpoints";

.stuck-nav {
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 50;
  margin-top: -5px;

  @include desktop {
    position: relative;
  }
}
</style>
