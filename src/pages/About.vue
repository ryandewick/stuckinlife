<template>
  <div class="about-us">
    <div class="about-us__hero">
      <div class="container">
        <span>About us</span>
        <h1>
          Unlock Your Career Potential: 6 Powerful Strategies You Can't Ignore
        </h1>
        <p>
          Professionally envisioneer user-centric core competencies vis-a-vis
          real-time niches. Compellingly fashion principle-centered e-commerce
          for magnetic methods of empowerment. Collaboratively innovate
          exceptional technology rather than low-risk high-yield manufactured
          products. Energistically redefine.
        </p>
        <ul v-for="x in stepsList" :key="x">
          <li>
            <strong>{{ x.title }}:</strong> {{ x.desc }}
          </li>
        </ul>
      </div>
      <img
        class="about-us__hero-girl-img"
        src="../assets/about-us__girl.svg"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stepsList: [
        {
          title: "Set clear goals",
          desc: "Know what you want to achieve",
        },
        {
          title: "Develop a growth mindset",
          desc: "Keep an open mind",
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
        {
          title: "Get involved in your industry",
          desc: "Attend industry conferences",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/mixins/_variables.scss";
@import "@/assets/mixins/_breakpoints.scss";

.about-us {
  &__hero {
    padding: 80px 20px 0 20px;

    @include tablet {
      padding: 50px 40px 0 40px;
    }

    @include desktop {
      padding: 50px 80px 0 80px;
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
      width: 100%;

      @include tabletAndDesktop {
        width: 602px;
      }
    }
  }
}
</style>
