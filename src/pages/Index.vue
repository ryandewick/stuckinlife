<template>
  <div class="index">
    <s-message-bar />
    <s-sidebar
      :isSidebarOpen="sidebarOpen"
      @keydown.esc="toggleSidebar"
      class="index__sidebar"
    />
    <div class="container">
      <!-- <button v-if="!sidebarOpen && !user" @click="openSidebar">
        Open Sidebar
      </button>

      <h3 v-if="userProfile?.firstName">
        Hello {{ userProfile?.firstName }} {{ userProfile?.lastName }}
      </h3>
      <p v-if="userProfile?.location">Location: {{ userProfile?.location }}</p>

      <button v-if="user" @click="handleSignOut">Sign out</button> -->
      <div class="index__hero">
        <div>
          <div class="index__header">
            <img
              class="index__header-image"
              src="../assets/stuckinlife.webp"
              alt="stuckinlife logo"
            />
            <div>
              <h1 class="index__header-title">StuckInLife</h1>
              <h2 class="index__header-sub">
                Celebrating Small Wins on Your Journey to Success!
              </h2>
            </div>
          </div>
          <div class="index__header-cta-wrapper">
            <s-button
              v-if="!isMobile"
              text="Get Started"
              variant="secondary"
              @click="toggleSidebar"
            ></s-button>
            <div>
              <span>Watch this video to show you how to get setup</span>
              <br />
              <svg
                class="index__header-cta-arrow"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 327 24"
                fill="none"
              >
                <path
                  d="M326.065 13.0574C326.648 12.4698 326.645 11.5201 326.057 10.9361L316.475 1.4196C315.887 0.835616 314.938 0.83854 314.354 1.42613C313.771 2.01371 313.774 2.96345 314.362 3.54743L322.879 12.0065L314.425 20.5179C313.841 21.1055 313.845 22.0552 314.433 22.6392C315.021 23.2232 315.97 23.2202 316.554 22.6327L326.065 13.0574ZM0.200629 14.5L325.006 13.5L324.994 10.5L0.189508 11.5L0.200629 14.5Z"
                  fill="white"
                />
              </svg>
            </div>
          </div>
        </div>

        <div class="index__video-wrapper">
          <!-- <video class="index__video" controls>
            <source src="" type="video/mp4" />
            Your browser does not support the video tag.
          </video> -->
          <img src="../assets/video-template.svg" alt="" />
        </div>
        <s-button
          v-if="isMobile"
          text="Get Started"
          variant="secondary"
          @click="toggleSidebar"
        ></s-button>
      </div>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from "@/stores/authStore";
import sSidebar from "@/components/Sidebar.vue";
import sMessageBar from "../components/MessageBar.vue";
import sButton from "../components/Button.vue";
export default {
  components: {
    sSidebar,
    sMessageBar,
    sButton,
  },

  data() {
    return {
      sidebarOpen: false,
      isMobile: window.innerWidth < 768,
    };
  },

  computed: {
    user() {
      return useAuthStore()?.user;
    },
    userProfile() {
      return useAuthStore()?.userProfile;
    },
  },

  methods: {
    handleSignOut() {
      useAuthStore().signOut();
    },

    toggleSidebar() {
      this.sidebarOpen = !this.sidebarOpen;
      window.scrollTo(0, 0);
    },

    updateIsMobile() {
      this.isMobile = window.innerWidth < 768;
    },
  },

  mounted() {
    window.addEventListener("resize", this.updateIsMobile);
  },

  beforeDestroy() {
    window.removeEventListener("resize", this.updateIsMobile);
  },
};
</script>

<style lang="scss" scoped>
@import "src/assets/mixins/_variables.scss";
@import "src/assets/mixins/_breakpoints.scss";

.index {
  background-color: $primary-color;

  &__sidebar {
    z-index: 1000;
  }

  &__hero {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-evenly;

    @include desktop {
      flex-direction: row;
    }
  }

  &__header {
    display: flex;
    align-items: center;
    justify-content: center;
    color: $light-color;

    @include desktop {
      justify-content: revert;
    }

    &-image {
      width: 80px;
      filter: brightness(1000%);
      margin-right: 24px;
      margin-bottom: 32px;

      @include tabletAndDesktop {
        width: 100px;
        margin-bottom: 0px;
      }
    }

    &-title {
      margin-top: 8px;
      margin-bottom: 8px;
    }

    &-sub {
      width: auto;
      font-style: italic;
      font-size: 1.6rem;
      // color: rgba(0, 0, 0, 0.25);
      color: $light-color;
      margin-bottom: 32px;

      @include tabletAndDesktop {
        width: 380px;
        font-size: 2rem;
        margin-bottom: 0;
      }
    }

    &-cta-wrapper {
      margin-top: 24px;
      display: flex;

      gap: 16px;
      color: $light-color;

      @include tabletAndDesktop {
        margin-top: 40px;
        width: 720px;
      }
    }
  }

  &__video-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 32px;
    margin-bottom: 32px;

    img {
      width: 100%;
    }

    // @include tablet {
    //   width: 500px;
    // }

    // @include desktop {
    //   width: 700px;
    // }
  }
}
</style>
