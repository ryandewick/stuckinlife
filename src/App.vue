<template>
  <metainfo>
    <template v-slot:title="{ content }">{{
      content ? `${content} | StuckInLife` : `StuckInLife`
    }}</template>
  </metainfo>
  <ComingSoon />
  <!-- <router-view></router-view> -->
  <footer class="coming-soon__footer">
    <a
      href="https://www.facebook.com/people/Stuckinlife/61550921294265/"
      target="_blank"
    >
      <img src="./assets/Facebook.svg" alt="Facebook Logo" />
    </a>
    <a href="http://Www.twitter.com/_stuckinlife" target="_blank">
      <img src="./assets/TwitterX.svg" alt="TwitterX Logo" />
    </a>
  </footer>
</template>

<script>
import { useMeta } from "vue-meta";
import ComingSoon from "./components/ComingSoon.vue";
export default {
  components: {
    ComingSoon,
  },
  created() {
    useMeta({
      title: "StuckInLife - Unlock Your Career Potential",
      description:
        "Feeling lost in your career journey? StuckInLife is here to guide you. We analyze your profile to match you with careers tailored to your passions and strengths.",
      meta: [
        {
          property: "og:title",
          content: "StuckInLife - Unlock Your Career Potential",
        },
        {
          property: "og:description",
          content:
            "Unlock your career potential with StuckInLife. Discover careers tailored to your passions and strengths.",
        },
        { property: "og:image", content: "./assets/stuckinlife.webp" },
        { property: "og:url", content: "https//stuckinlife.co.uk" },
      ],
    });
  },
};
</script>

<style lang="scss">
@import "./assets/mixins/_breakpoints.scss";

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  overflow: hidden;
}

footer {
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 1rem;

  img {
    width: 30px;

    @include tabletAndDesktop {
      width: 60px;
    }
  }

  @include tabletAndDesktop {
    padding: 2rem;
  }
}
</style>
