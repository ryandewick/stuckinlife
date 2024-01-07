<template>
  <div class="index">
    <div class="index__hero-wrapper">
      <div class="container">
        <div class="index__hero">
          <div class="index__hero-left">
            <h1>Unlock your career potential</h1>
            <p>Let’s find the perfect course for you!</p>
            <s-button variant="primary">Get Started for FREE</s-button>
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
            <div class="index__stats-item-icon">
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
            <div class="index__stats-item-icon">
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
            <div class="index__stats-item-icon">
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
    <div class="index__steps-wrapper">
      <div class="container">
        <h2>3 easy steps unlock your career</h2>
        <div class="index__steps">
          <s-steps-card
            v-for="item in stepsInfo"
            :key="item"
            :img="item.img"
            :imgAlt="item.imgAlt"
            :title="item.title"
            :info="item.info"
            :step="item.step"
          />
        </div>
      </div>
    </div>
    <div class="index__what-is-stuckinlife-wrapper">
      <div class="container">
        <div class="index__what-is-stuckinlife">
          <div class="index__what-is-stuckinlife__img-wrapper">
            <div class="index__what-is-stuckinlife__img-green-shape"></div>
            <div class="index__what-is-stuckinlife__img-info">
              <p>75%</p>
              <span>Of people learning</span>
            </div>
            <img
              class="index__what-is-stuckinlife__img"
              src="../assets/man-holding.svg"
              alt="a man holding something he has made"
            />
          </div>
          <div class="index__what-is-stuckinlife__info">
            <h2>What is StuckInLife?</h2>
            <p>
              StuckInLife or Stuck in Life is your personalised career navigator
              in the vast landscape of professional opportunities. Have you ever
              felt adrift, unsure of which path to take? That's where we come
              in. At StuckInLife, we delve deep into your personal profile to
              identify a career that truly aligns with your passions and
              strengths
            </p>
            <p class="index__what-is-stuckinlife__subheader">
              But our support doesn't stop at mere suggestions.
            </p>
            <p>
              We further equip you with a curated list of courses, ensuring
              you're well-prepared for your chosen field. The journey is yours
              to command: learn at your own pace, set distinct milestones, and
              track your progress through a tailored roadmap. With StuckInLife,
              career planning becomes not just a necessity, but a thrilling
              adventure!
            </p>
            <s-button variant="secondary">Learn More</s-button>
          </div>
        </div>
      </div>
    </div>
    <div class="index__blogs-wrapper">
      <div class="container">
        <div class="index__blogs-header">
          <h2>Latest Blogs</h2>
          <a href="/blogs">View All</a>
        </div>
        <div class="index__blogs-slider">
          <blog-card-slider :blogs="blogs" />
          <a href="/blogs">View All</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useAuthStore } from "@/stores/authStore";
import { mapState, mapActions } from "pinia";

import sButton from "@/components/Button.vue";
import sStepsCard from "@/components/StepsCard.vue";
import BlogCardSlider from "@/components/blogs/BlogCardSlider.vue";
export default {
  components: {
    sButton,
    sStepsCard,
    BlogCardSlider,
  },

  data() {
    return {
      blogs: [
        {
          id: 1,
          title: "Career Exploration Essentials: Discover Your Path to Success",
          author: "Ryan Dewick",
          date: new Date().toLocaleDateString(),
          image: "/assets/test-blog-image.svg",
          description:
            "Continually restore premier e-business via prospective results.",
        },
        {
          id: 1,
          title: "Career Exploration Essentials: Discover Your Path to Success",
          author: "Ryan Dewick",
          date: new Date().toLocaleDateString(),
          image: "/assets/test-blog-image1.svg",
          description:
            "Continually restore premier e-business via prospective results.",
        },
        {
          id: 2,
          title: "Career Exploration Essentials: Discover Your Path to Success",
          author: "Ryan Dewick",
          date: new Date().toLocaleDateString(),
          image: "/assets/test-blog-image2.svg",
          description:
            "Continually restore premier e-business via prospective results.",
        },
        {
          id: 1,
          title: "Career Exploration Essentials: Discover Your Path to Success",
          author: "Ryan Dewick",
          date: new Date().toLocaleDateString(),
          image: "/assets/test-blog-image3.svg",
          description:
            "Continually restore premier e-business via prospective results.",
        },
        {
          id: 2,
          title: "Career Exploration Essentials: Discover Your Path to Success",
          author: "Ryan Dewick",
          date: new Date().toLocaleDateString(),
          image: "/assets/test-blog-image2.svg",
          description:
            "Continually restore premier e-business via prospective results.",
        },
        {
          id: 1,
          title: "Career Exploration Essentials: Discover Your Path to Success",
          author: "Ryan Dewick",
          date: new Date().toLocaleDateString(),
          image: "/assets/test-blog-image3.svg",
          description:
            "Continually restore premier e-business via prospective results.",
        },
      ],
      isMobile: window.innerWidth < 768,
      stepsInfo: [
        {
          img: "../assets/section-2_steps_icon-1.svg",
          imgAlt: "Improvement icon",
          title: "Discover Your Potential",
          info: "Uncover the possibilities within you and identify the career that aligns with your unique strengths.",
          step: "Step 1",
        },
        {
          img: "../assets/section-2_steps_icon-2.svg",
          imgAlt: "Online learning icon",
          title: "Explore Tailored Courses",
          info: "Embark on a tailored learning journey, equipping you with skills for success in your role.",
          step: "Step 2",
        },
        {
          img: "../assets/section-2_steps_icon-3.svg",
          imgAlt: "Consulting icon",
          title: "Connect with Experts",
          info: "Tap into the wisdom of industry professionals who are here to guide you through the challenges and successes.",
          step: "Step 3",
        },
      ],
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
  overflow-x: hidden;
  &__hero {
    display: flex;
    flex-shrink: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: white;
    z-index: 1000;

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
    justify-content: space-between;

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

      @include desktop {
        text-align: left;
      }

      &:last-child {
        border-right: none;
      }

      h3 {
        color: $secondary-color;
        font-size: 3rem;
        margin-bottom: 4px;
      }

      p {
        font-size: 1.4rem;
      }

      &-icon {
        display: none;

        @include desktop {
          display: block;
          margin-right: 2.4rem;
        }
      }
    }
  }

  &__steps {
    display: flex;
    align-items: flex-start;
    // justify-content: sp;
    flex-direction: column;
    gap: 24px;

    @include desktop {
      flex-direction: row;
      gap: 32px;
    }

    &-wrapper {
      padding-top: 90px;
      padding-bottom: 90px;
      h2 {
        font-size: 3.2rem;
        color: $secondary-color;
        margin-bottom: 24px;
        text-align: center;

        @include tabletAndDesktop {
          font-size: 4rem;
          margin-bottom: 32px;
        }
      }
    }
  }

  &__what-is-stuckinlife {
    display: flex;
    align-items: center;
    flex-direction: column;

    @include tabletAndDesktop {
      flex-direction: row;
    }

    @include tablet {
      gap: 80px;
    }

    @include desktop {
      gap: 120px;
    }

    &-wrapper {
      background-color: #f8f8f8;
      padding-top: 90px;
      padding-bottom: 90px;
    }

    &__img {
      width: 310px;

      @include desktop {
        width: 465px;
      }
      &-wrapper {
        position: relative;
        margin-bottom: 72px;
        margin-left: 32px;
        width: 310px;

        @include desktop {
          width: 465px;
        }
      }

      &-green-shape {
        position: absolute;
        left: -30px;
        bottom: 12px;
        width: 30px;
        height: 328px;
        border-radius: 4px 0 0 4px;
        background: $accent-color;

        @include tablet {
          top: 12px;
        }

        @include desktop {
          top: 56px;
          left: -38px;
          width: 39px;
          height: 423px;
        }
      }

      &-info {
        position: absolute;
        bottom: -42px;
        right: 16px;
        padding: 16px 12px;
        text-align: center;
        background: white;
        box-shadow: 0px 10px 50px 0px rgba(0, 0, 0, 0.08);
        border-radius: 4px;
        @include desktop {
          padding: 16px 24px;
        }
        p {
          font-weight: 700;
          font-size: 32px;
          color: $secondary-color !important;

          @include desktop {
            font-size: 4rem;
          }
        }
        span {
          font-size: 1.4rem;
          color: #454545;
          @include desktop {
            font-size: 1.6rem;
          }
        }
      }
    }

    h2 {
      color: $secondary-color;
      margin-bottom: 16px;
      font-size: 3.2rem;
    }

    p {
      color: $grey-color;
    }

    &__subheader {
      font-weight: 700;
      font-size: 1.6rem;
      color: #222;
      margin-top: 16px;
      margin-bottom: 8px;
    }

    .button {
      margin-top: 32px;
    }
  }

  &__blogs {
    &-wrapper {
      padding-top: 90px;
      padding-bottom: 380px;
      @include tabletAndDesktop {
        padding-top: 130px;
        padding-bottom: 160px;
      }
    }

    &-header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 48px;

      h2 {
        color: $secondary-color;
      }

      a {
        display: none;
        @include tabletAndDesktop {
          display: block;
          font-size: 1.6rem;
          text-decoration: underline;
          color: $secondary-color;
          transition: 0.3s;
        }

        &:hover {
          color: darken($secondary-color, 10%);
        }
      }
    }

    &-slider {
      a {
        display: block;
        font-size: 1.6rem;
        text-decoration: underline;
        text-align: center;
        color: $secondary-color;
        transition: 0.3s;

        @include tabletAndDesktop {
          display: none;
        }
      }
    }
  }
}
</style>
