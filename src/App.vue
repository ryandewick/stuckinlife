<template>
  <div>
    <navbar />
    <contact-us v-if="showContactUs" class="contact-us"></contact-us>
    <router-view></router-view>
    <main-footer />
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import MainFooter from "@/components/Footer.vue";
import ContactUs from "@/components/ContactUs.vue";
export default {
  name: "App",
  components: {
    Navbar,
    MainFooter,
    ContactUs,
  },
  data() {
    return {
      showContactUs: false,
    };
  },

  mounted() {
    setTimeout(() => {
      this.showContactUs = true;
    }, 4000);
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/mixins/_variables.scss";
@import "@/assets/mixins/_breakpoints.scss";
.contact-us {
  z-index: 100;
  position: fixed;
  top: 70%;
  right: -60px;
  opacity: 0;
  animation: fadeIn 0.5s ease-in-out forwards;

  @include tabletAndDesktop {
    right: -74px;
  }
}

@keyframes fadeIn {
  from {
    opacity: 0; /* Start with 0 opacity */
  }
  to {
    opacity: 1; /* End with 1 opacity */
  }
}
</style>
