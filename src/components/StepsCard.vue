<template>
  <div class="steps-card">
    <div class="steps-card__wrapper">
      <img :src="img" :alt="imgAlt" />
      <h3>{{ title }}</h3>
      <p>{{ info }}</p>
    </div>
    <p class="steps-card__step">{{ step }}</p>
  </div>
</template>

<script>
export default {
  name: "StepsCard",
  props: {
    img: {
      type: String,
      required: true,
    },
    imgAlt: {
      type: String,
      default: "Alt tag here",
    },
    title: {
      type: String,
      default: "Title here",
    },
    info: {
      type: String,
      default:
        "Write as much info here as you want, I tend to go for about 3 lines of text.",
    },
    step: {
      type: String,
      default: "Step 1",
    },
  },
};
</script>

<style lang="scss" scoped>
@import "src/assets/mixins/_variables.scss";
@import "src/assets/mixins/_breakpoints.scss";
.steps-card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  @include tabletAndDesktop {
    height: 354px;
    width: 380px;
  }
  &__wrapper {
    padding: 50px 40px;
    background-color: rgba(239, 247, 250, 0.5);
    text-align: center;

    @include tabletAndDesktop {
      padding: 50px 35px 24px;
    }

    img {
      width: 80px;
      aspect-ratio: 1/1;
    }

    h3 {
      font-size: 2.4rem;
      font-weight: 600;
      color: #222;
      margin-top: 50px;
      margin-bottom: 16px;
    }

    p {
      line-height: 160%;
    }
  }

  &__step {
    padding-top: 4px;
    padding-bottom: 8px;
    padding-inline: 64px;
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
    background: #deeccf;
    text-align: center;
    color: #222;
  }
}
</style>
