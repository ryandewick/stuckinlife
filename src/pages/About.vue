<template>
  <div class="about-us">
    <div class="about-us__hero-wrapper">
      <div class="container">
        <div class="about-us__hero">
          <div class="about-us__hero-content">
            <span class="about-us__hero-title">About us</span>
            <h1 class="about-us__hero-heading">
              Unlock Your Career Potential: 6 Powerful Strategies You Can't
              Ignore
            </h1>
            <p class="about-us__hero-description">
              Professionally envisioneer user-centric core competencies
              vis-a-vis real-time niches. Compellingly fashion
              principle-centered e-commerce for magnetic methods of empowerment.
              Collaboratively innovate exceptional technology rather than
              low-risk high-yield manufactured products. Energistically
              redefine.
            </p>
            <ul class="about-us__hero-list" v-for="x in stepsList" :key="x">
              <li class="about-us__hero-item">
                <strong>{{ x.title }}:</strong> {{ x.desc }}
              </li>
            </ul>
            <s-button class="about-us__hero-button" variant="secondary"
              >Learn more</s-button
            >
          </div>
          <div class="about-us__hero-girl-wrapper">
            <img
              class="about-us__hero-girl-img"
              src="../assets/about-us__girl.svg"
              alt="Description of the image"
            />
            <img
              class="about-us__hero-girl-wave"
              src="../assets/wave-about-us.svg"
              alt="wave"
            />
            <img
              class="about-us__hero-girl-dots"
              src="../assets/group-of-dots.svg"
              alt="group of dots"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="test">
      <Vue3Marquee>
        <span>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint sed in,
          animi tempora ad
        </span>
      </Vue3Marquee>
    </div>
  </div>
</template>

<script>
import { Vue3Marquee } from "vue3-marquee";
import sButton from "@/components/Button.vue";
export default {
  data() {
    return {
      stepsList: [
        {
          title: "Set clear goals",
          desc: "Know what you want to achieve",
        },
        {
          title: "Cultivate a strong professional network",
          desc: "Connect with other professionals at industry events",
        },
        {
          title: "Embrace continuous learning",
          desc: "Identify your strengths and weaknesses",
        },
        {
          title: "Find a mentor",
          desc: "Build relationships with more experienced professionals",
        },
      ],
    };
  },
  components: {
    sButton,
    Vue3Marquee,
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/mixins/_variables.scss";
@import "@/assets/mixins/_breakpoints.scss";

.about-us {
  &__hero {
    display: flex;
    flex-direction: column;
    align-items: center;

    @include tabletAndDesktop {
      flex-direction: row;
      align-items: flex-end;
      justify-content: space-between;
    }

    &-wrapper {
      margin: 80px 20px 0 20px;

      @include tablet {
        margin: 50px 40px 0 40px;
      }

      @include desktop {
        margin: 50px 80px 0 80px;
      }
    }

    span {
      color: $accent-color;
      font-size: 2rem;
      font-weight: 500;
    }

    h1 {
      color: $secondary-color;
      font-size: 3.5rem;
      font-weight: 600;
      line-height: 130%;
      margin: 16px 0;
    }

    p {
      display: block;
      color: $grey-color;
      font-size: 16px;
      font-style: normal;
      font-weight: 300;
      line-height: 160%;
      margin-bottom: 32px;

      @include tablet {
        display: none;
      }

      @include desktop {
        display: block;
      }
    }

    li {
      color: $secondary-color;
      font-size: 1.4rem;
      font-style: normal;
      font-weight: 400;
      line-height: 160%;
      list-style-image: url("../assets/checkmark-outline.svg");
      margin-bottom: 16px;
    }
    &-girl {
      &-wrapper {
        position: relative;
      }
      &-img {
        position: relative;
        width: 100%;
        bottom: -20px;

        @include tabletAndDesktop {
          width: 400px;
          bottom: 0;
        }
      }
      &-wave {
        position: absolute;
        top: 20px;
        right: 130px;
        width: 47px;

        @include tabletAndDesktop {
          top: 120px;
          right: 0;
          width: 100px;
        }
      }

      &-dots {
        position: absolute;
        bottom: 10px;
        left: 0;
        z-index: -1;

        @include tabletAndDesktop {
          left: -40px;
          bottom: -40px;
        }
      }
    }
    &-button {
      margin-top: 32px;
      margin-bottom: 46px;
    }
  }

  .marquee {
    transform: rotate(-1.6deg);
  }
  .test {
    width: 100%;
    padding-top: 16px;
    transform: rotate(-1.4deg);
    padding-bottom: 16px;
    white-space: nowrap;
    color: white;
    background: linear-gradient(90deg, #197ba0 -5.41%, #054963 110.37%);
    span {
      font-size: 1.6rem;

      @include tabletAndDesktop {
        font-size: 2rem;
      }
    }
  }
}
</style>
