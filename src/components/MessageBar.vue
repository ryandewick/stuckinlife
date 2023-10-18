<template>
  <div class="message-bar">
    <div class="container">
      <p
        class="message-bar__message"
        :class="{ 'scrolling-message': isMessageTooLong }"
        ref="message"
      >
        {{ quote }}
      </p>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      quote: "",
      quotes: [],
      isMessageTooLong: false,
    };
  },

  computed: {
    shouldScrollMessage() {
      return this.isMessageTooLong ? "scrolling-message" : "";
    },
  },

  methods: {
    async getQuote() {
      const url = `https://api.api-ninjas.com/v1/quotes?category=learning`;
      const headers = {
        "X-Api-Key": import.meta.env.VITE_QUOTE_API_KEY,
      };
      axios
        .get(url, { headers })
        .then((response) => {
          this.quote = response.data[0].quote;
          this.checkMessageLength();
        })
        .catch((error) => {
          console.error(error);
        });
    },
    checkMessageLength() {
      const container = document.querySelector(".container");
      const message = this.$refs.message;

      if (container && message) {
        this.isMessageTooLong = message.clientWidth < message.scrollWidth;
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
  background-color: $light-color;
  overflow: hidden;

  &__message {
    font-size: 16px;
    color: $primary-color;
    font-weight: 700;
    white-space: nowrap;
    animation: marquee 10s linear infinite;

    @include tabletAndDesktop {
      animation: marquee 30s linear infinite;
    }
  }

  .scrolling-message {
    animation-play-state: running;
  }

  @keyframes marquee {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
}
</style>
