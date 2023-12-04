<template>
  <div class="contact-us">
    <button @click="showModal">Contact us</button>
    <div class="test" v-if="modalOpen">love you</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modalOpen: false,
    };
  },
  methods: {
    showModal() {
      this.modalOpen = true;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/mixins/_variables.scss";
@import "@/assets/mixins/_breakpoints.scss";

button {
  cursor: pointer;
  color: white;
  border-radius: 20px 20px 0px 0px;
  background: linear-gradient(180deg, #5ead0f 0%, #3e7d00 100%);
  box-shadow: 0px 16px 50px 0px rgba(36, 73, 0, 0.62);
  padding: 12px 28px;
  border: none;
  transform: rotate(270deg);
  font-size: 2.4rem;

  @include tabletAndDesktop {
    font-size: 3.2rem;
  }
}

.test {
  position: fixed;
  font-size: 2rem;
  display: grid;
  place-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: $primary-color;
  color: white;
}
</style>
