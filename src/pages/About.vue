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

          <img
            class="about-us__hero-girl-img"
            src="../assets/about-us__girl.svg"
            alt="Description of the image"
          />
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

    @include tabletAndDesktop {
      flex-direction: row;
      align-items: center;
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
      color: $grey-color;
      font-size: 16px;
      font-style: normal;
      font-weight: 300;
      line-height: 160%;
      margin-bottom: 32px;
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
    &-girl-img {
      display: flex;
      align-items: flex-end;
      position: relative;
      width: 100%;

      @include tablet {
        height: 500px;
      }

      @include desktop {
        height: 600px;
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
      font-size: 2rem;
    }
  }
}
</style>
