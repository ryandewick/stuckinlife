<template>
  <div class="menu">
    <ul>
      <li
        v-for="item in menu"
        :key="item.tab"
        :class="[
          'menu__item',
          { 'menu__item--active': item.tab === activeTab },
        ]"
        @click="handleTabClick(item.tab)"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeTab: "users",
    };
  },
  props: {
    menu: {
      type: Array,
      required: true,
    },
  },

  methods: {
    handleTabClick(tab) {
      this.activeTab = tab;
      this.$emit("tab", this.activeTab);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/mixins/_variables.scss";
@import "@/assets/mixins/_breakpoints.scss";
.menu {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  background-color: rgba(0, 26, 36, 1);
  z-index: 50;

  &__item {
    padding-inline: 80px;
    padding-top: 40px;
    padding-bottom: 40px;
    font-size: 2rem;
    color: white;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    &:hover,
    &:focus {
      background-color: lighten(rgba(0, 26, 36, 0.9), 5%);
    }
    &--active {
      background-color: lighten(rgba(0, 26, 36, 0.9), 5%);
    }
  }
}
</style>
