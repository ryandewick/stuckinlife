<template>
  <div class="index">
    <div class="index__hero-wrapper">
      <div class="container">
        <div class="index__hero">
          <div class="index__hero-left">
            <h1>Unlock your career potential</h1>
            <p>Let’s find the perfect course for you!</p>
            <s-button>Get Started for FREE</s-button>
          </div>
          <img
            class="index__hero-logo"
            src="../assets/half-logo-hero.svg"
            alt="half of the stuck in life logo"
          />
          <div class="index__hero-woman-wrapper">
            <img
              class="index__hero-arrow"
              src="../assets/arrow-shape-hero.svg"
              alt=""
            />
            <img
              class="index__hero-woman"
              src="../assets/woman-hero.png"
              alt="a woman looking proud"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="index__stats-wrapper">
      <div class="container">
        <div class="index__stats">
          <div class="index__stats-item">
            <div class="index__stats-item__icon">
              <img
                src="../assets/home-2_counter-icon-1.svg"
                alt="webinar icon"
              />
            </div>
            <div>
              <h3>180+</h3>
              <p>Courses & Resources</p>
            </div>
          </div>
          <div class="index__stats-item">
            <div class="index__stats-item__icon">
              <img
                src="../assets/home-2_counter-icon-2.svg"
                alt="webinar icon"
              />
            </div>
            <div>
              <h3>24/7</h3>
              <p>Access anytime, anywhere</p>
            </div>
          </div>
          <div class="index__stats-item">
            <div class="index__stats-item__icon">
              <img
                src="../assets/home-2_counter-icon-3.svg"
                alt="webinar icon"
              />
            </div>
            <div>
              <h3>300</h3>
              <p>Top Certifications</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="index__steps-wrapper">
      <div class="container">test</div>
    </div> -->
  </div>
</template>

<script>
import { useAuthStore } from "@/stores/authStore";
import { mapState, mapActions } from "pinia";

import sButton from "@/components/Button.vue";
export default {
  components: {
    sButton,
  },

  data() {
    return {
      isMobile: window.innerWidth < 768,
    };
  },

  computed: {
    ...mapState(useAuthStore, ["user", "userProfile", "sidebarOpen"]),
  },

  methods: {
    ...mapActions(useAuthStore, {
      handleSignOut: "signOut",
      toggleSidebar: "toggleSidebar",
    }),

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
  &__hero {
    display: flex;
    flex-shrink: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;

    @include desktop {
      flex-direction: row;
      justify-content: space-between;
      text-align: left;
    }

    &-logo,
    &-arrow {
      position: absolute;
    }

    &-logo {
      top: 0;
      left: 0;
      height: 325px;

      @include tablet {
        top: 50px;
        height: 450px;
      }

      @include desktop {
        height: 588px;
      }
    }

    &-arrow {
      width: 82px;
      right: 0;

      @include tablet {
        width: 200px;
        right: -90px;
      }

      @include desktop {
        width: 255px;
        top: 180px;
        right: -140px;
      }
    }

    &-woman {
      width: 365px;

      @include tablet {
        width: 450px;
      }

      @include desktop {
        width: 595px;
      }

      &-wrapper {
        position: relative;
      }
    }

    &-wrapper {
      position: relative;
      background-color: $primary-color;

      .container {
        padding-bottom: 0;
      }
    }

    & > * {
      margin-top: 3.2rem;

      @include desktop {
        margin-top: 0;
      }
    }

    p {
      font-size: 1.8rem;
      margin-top: 2rem;
      margin-bottom: 3.2rem;

      @include tabletAndDesktop {
        font-size: 2.4rem;
      }

      @include desktop {
        margin-bottom: 4.8rem;
      }
    }

    button {
      margin-bottom: 3.2rem;

      @include desktop {
        margin-bottom: 0;
      }
    }
  }

  &__stats {
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;

    .container {
      padding-top: 0px;
    }

    &-wrapper {
      padding-top: 56px;
      padding-bottom: 88px;

      @include tabletAndDesktop {
        padding-top: 80px;
      }
    }

    &-item {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      border-right: 1px solid #dedede;
      flex: 1 1 0;
      // padding-inline: 0.6rem;

      @include desktop {
        text-align: left;
      }

      &:last-child {
        border-right: none;
      }

      h3 {
        color: $secondary-color;
        font-size: 3rem;
      }

      p {
        font-size: 1.4rem;
      }

      &__icon {
        display: none;

        @include desktop {
          display: block;
          margin-right: 2.4rem;
        }
      }
    }
  }
}
</style>
