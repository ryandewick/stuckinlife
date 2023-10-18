<template>
  <div class="message-bar">
    <p class="message-bar__message">{{ quote }}</p>
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
      // const url = "https://type.fit/api/quotes";

      // try {
      //   const response = await axios.get(url);
      //   this.quotes = response.data;

      //   if (this.quotes.length > 0) {
      //     const randomIndex = Math.floor(Math.random() * this.quotes.length);
      //     this.quote = this.quotes[randomIndex].text;
      //   } else {
      //     this.quote = "No quotes available"; // Handle the case where there are no quotes
      //   }
      // } catch (error) {
      //   console.error("Error fetching a quote:", error);
      // }
      const url = `https://api.api-ninjas.com/v1/quotes?category=happiness`;
      const headers = {
        "X-Api-Key": import.meta.env.VITE_QUOTE_API_KEY,
      };
      axios
        .get(url, { headers })
        .then((response) => {
          this.quote = response.data[0].quote;
        })
        .catch((error) => {
          console.error(error);
        });
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

  &__message {
    font-size: 16px;
    color: $primary-color;
    font-weight: 700;
  }
}
</style>
