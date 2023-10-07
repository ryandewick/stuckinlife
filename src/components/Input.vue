<template>
  <div class="s-input">
    <label v-if="label" class="s-input__label" :for="label + 'Id'">{{
      label
    }}</label>

    <input
      v-if="type !== 'select'"
      :id="label + 'Id'"
      class="s-input__input"
      :placeholder="placeholder"
      @input="handleInput"
      :type="type"
      :value="modelValue"
    />

    <!-- Custom Dropdown -->
    <div
      v-if="type === 'select'"
      class="s-input__input"
      @click="isOpen = !isOpen"
    >
      {{ selectedOption?.label || placeholder }}
    </div>
    <div v-if="isOpen" class="s-input__dropdown">
      <div
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option)"
        class="s-input__option"
      >
        {{ option.label }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "s-input",
  props: {
    placeholder: {
      type: String,
      default: "Enter text",
    },
    modelValue: {
      type: String,
      default: "",
    },
    type: {
      type: String,
      default: "text",
    },
    label: {
      type: String,
      default: "",
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      isOpen: false,
      selectedOption: null,
    };
  },
  methods: {
    handleInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
    selectOption(option) {
      this.selectedOption = option;
      this.isOpen = false;
      this.$emit("update:modelValue", option.value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/assets/mixins/_variables.scss";
@import "@/assets/mixins/_breakpoints.scss";
.s-input {
  position: relative;
  &__label {
    font-size: 16px;
  }

  input,
  &__input {
    background: #fff;
    padding: 10px 14px;
    width: 100%;
    font-size: 16px;
    border: 1px solid #ededed;
    color: #9ea5ad;
    margin-top: 8px;

    &:focus,
    &:active,
    &:hover {
      outline: none;
      color: $dark-color;
      border-color: $dark-color;
    }
  }
}

.s-input__dropdown {
  position: relative;
  // top: 100%;
  // left: 0;
  font-size: 16px;
  width: 100%;
  border: 1px solid #ededed;
  background-color: #fff;
  z-index: 10;
}

.s-input__option {
  padding: 10px 14px;
  cursor: pointer;
  &:hover {
    background-color: #ededed;
  }
}
</style>
