<template>
  <nav>
    <div class="container">
      <div class="navbar">
        <div class="navbar__brand">
          <a v-if="!user" class="navbar__brand-name" href="/">
            <img
              class="navbar__brand-logo"
              src="../assets/stuckinlife.webp"
              alt=""
            />
            StuckIn<strong>Life</strong>
          </a>
          <a v-if="user" class="navbar__brand-name" href="/courses">
            <img
              class="navbar__brand-logo"
              src="../assets/stuckinlife.webp"
              alt=""
            />
            StuckIn<strong>Life</strong>
          </a>
        </div>
        <!-- <button
          @click="toggleMobileMenu"
          class="navbar__toggle"
          v-show="isMobile"
        >
          <span></span>
          <span></span>
          <span></span>
        </button> -->
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
        <div v-if="!user" class="navbar__cta">
          <button class="navbar__cta-register">Register</button>
          <button class="navbar__cta-login" @click="toggleSidebar">
            Login
          </button>
        </div>
        <div v-if="user" class="navbar__cta">
          <button class="navbar__cta-register" @click="goToProfile">
            {{ greetingsMessage }}
          </button>
          <button class="navbar__cta-login" @click="logout">Logout</button>
        </div>
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
          name: "Home",
          url: "/",
        },
        {
          name: "About us",
          url: "/about-us",
        },
        {
          name: "Courses",
          url: "/courses",
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
      signOut: "signOut",
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
    logout() {
      this.signOut();
      this.$router.push("/");
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/mixins/_variables.scss";
@import "@/assets/mixins/_breakpoints.scss";

nav {
  position: relative;
  background-color: $primary-color;

  .navbar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px;

    &__brand {
      &-logo {
        width: 40px;
        filter: brightness(1000%);
        margin-right: 10px;
      }

      &-name {
        display: flex;
        align-items: center;
        width: 100%;
        font-size: 18px;
        font-weight: 300;
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
      // width: 100%;
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
    &__cta {
      display: flex;
      align-items: center;
      gap: 12px;

      &-register {
        text-decoration: underline;
        background: transparent;
        border: none;
        color: #fff;
        font-weight: 300;
        font-size: 1.6rem;
        cursor: pointer;
      }

      &-login {
        padding: 12px 32px;
        color: #fff;
        background-color: $accent-color;
        border: none;
        border-radius: 4px;
        font-size: 1.6rem;
        cursor: pointer;

        &:hover {
          background-color: darken($accent-color, 10%);
        }
      }
    }
  }
}
</style>
