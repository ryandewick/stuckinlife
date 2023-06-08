<template>
  <div>
    <coming-soon></coming-soon>
  </div>
</template>

<script lang="ts">
import ComingSoon from "./components/ComingSoon.vue";

export default {
  components: {
    ComingSoon,
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  font-size: 10px;
}

body {
  // height: 100dvh;
  // width: 100dvw;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  // background-color: rgb(36, 36, 36);
  background-color: #3d97c5;
}
</style>
