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
          <a v-if="!user" class="navbar__brand-name" href="/"
            >StuckIn<strong>Life</strong></a
          >
          <a v-if="user" class="navbar__brand-name" href="/courses"
            >StuckIn<strong>Life</strong></a
          >
        </div>
        <button
          @click="toggleMobileMenu"
          class="navbar__toggle"
          v-show="isMobile"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div
          class="navbar__links"
          :class="{ 'navbar__links--active': isMenuOpen }"
        >
          <router-link
            class="navbar__link"
            :to="item.url"
            v-for="item in computedNavLinks"
            :key="item.name"
          >
            {{ item.name }}
          </router-link>
        </div>
        <div class="navbar__button-wrapper"></div>
      </div>
    </div>
  </nav>
</template>

<script>
import { useAuthStore } from "@/stores/authStore";
import { mapState, mapActions } from "pinia";

export default {
  data() {
    return {
      navLinks: [
        {
          name: "About Us",
          url: "/about-us",
        },
        {
          name: "Blog",
          url: "/blog",
        },
        // ... add more links as needed
      ],
      isMobile: false,
      isMenuOpen: false,
    };
  },

  created() {
    this.handleResize();
    window.addEventListener("resize", this.handleResize);
  },

  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },

  computed: {
    ...mapState(useAuthStore, ["user", "userProfile"]),

    computedNavLinks() {
      let links = [...this.navLinks];
      if (this.userProfile?.admin) {
        links.push({
          name: "Admin Dashboard",
          url: "/admin",
        });
      }
      return links;
    },

    greetingsMessage() {
      return `Hello ${this.userProfile?.firstName}!`;
    },
  },

  methods: {
    ...mapActions(useAuthStore, {
      toggleSidebar: "toggleSidebar",
    }),

    handleResize() {
      this.isMobile = window.innerWidth < 768;
    },

    toggleMobileMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },

    goToProfile() {
      this.$router.push("/profile");
    },
    // ... any additional methods
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/mixins/_variables.scss";
@import "@/assets/mixins/_breakpoints.scss";

nav {
  background-color: $primary-color;

  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;

    &__brand {
      display: flex;
      align-items: center;
      width: 100%;

      &-logo {
        width: 40px;
        filter: brightness(1000%);
        margin-right: 10px;
      }

      &-name {
        font-size: 18px;
        color: #f3f3f3;
      }
    }

    &__toggle {
      display: block;
      cursor: pointer;
      border: none;
      background: none;

      span {
        display: block;
        width: 25px;
        height: 3px;
        background-color: #f3f3f3;
        margin: 5px 0;
        transition: 0.4s;
      }
    }

    &__links {
      display: none;
      flex-direction: column;
      width: 100%;
      align-items: center;

      &--active {
        display: flex;
      }
    }

    &__link {
      color: #f3f3f3;
      margin: 10px 0;
      font-size: 1.6rem;
      text-decoration: none;

      &:hover {
        color: $secondary-color;
      }
    }

    &__button-wrapper {
      display: none;
    }

    @include tabletAndDesktop {
      &__toggle {
        display: none;
      }

      &__links {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-end;
      }

      &__link {
        margin: 0 12px;
      }

      &__button-wrapper {
        display: block;
      }

      &__brand-logo {
        width: 50px;
        margin-right: 12px;
      }

      &__brand-name {
        font-size: 20px;
      }
    }
  }
}
</style>
