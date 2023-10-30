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
          <a v-if="!user" class="navbar__brand-name" href="/">Stuckinlife</a>
          <a v-if="user" class="navbar__brand-name" href="/courses"
            >Stuckinlife</a
          >
        </div>
        <div class="navbar__links">
          <router-link
            class="navbar__link"
            :to="item.url"
            v-for="item in computedNavLinks"
            :key="item.name"
          >
            {{ item.name }}
          </router-link>
        </div>
        <div class="navbar__button-wrapper">
          <s-button
            v-if="!user"
            text="Register / Login"
            variant="secondary"
            @click="toggleSidebar"
          />
          <s-button
            v-else
            :text="greetingsMessage"
            variant="secondary"
            @click="goToProfile"
          />
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import { useAuthStore } from "@/stores/authStore";
import { mapState, mapActions } from "pinia";

import sButton from "./Button.vue";

export default {
  components: {
    sButton,
  },
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
      ],
    };
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

    goToProfile() {
      this.$router.push("/profile");
    },
  },

  mounted() {
    console.log(this.baseNavLinks);
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
