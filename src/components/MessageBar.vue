<template>
  <div
    class="message-bar"
    :style="{ '--animation-duration': animationDuration }"
  >
    <p class="message-bar__message" ref="message">
      {{ quote }}
    </p>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      quote: "",
      quotes: [],
    };
  },

  methods: {
    async getQuote() {
      const url = `https://api.api-ninjas.com/v1/dadjokes?limit=1`;
      const headers = {
        "X-Api-Key": import.meta.env.VITE_QUOTE_API_KEY,
      };
      axios
        .get(url, { headers })
        .then((response) => {
          this.quote = response.data[0].joke;
        })
        .catch((error) => {
          console.error(error);
        });
    },
  },

  computed: {
    animationDuration() {
      if (this.quote.length >= 80) {
        return "15s";
      } else if (this.quote.length >= 100) {
        return "20s";
      } else {
        return "10s";
      }
    },
  },

  mounted() {
    this.getQuote();
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/mixins/_variables.scss";
@import "@/assets/mixins/_breakpoints.scss";

.message-bar {
  border-top: $bg-color 2px solid;
  border-bottom: $bg-color 2px solid;
  text-align: center;
  padding: 6px 0;
  background-color: $light-color;
  overflow: hidden;

  &__message {
    font-size: 16px;
    color: $primary-color;
    font-weight: 700;
    white-space: nowrap;
    animation: marquee linear infinite;
    animation-duration: var(--animation-duration);

    @keyframes marquee {
      0% {
        transform: translateX(100%);
      }

      100% {
        transform: translateX(-100%);
      }
    }
  }
}
</style>
