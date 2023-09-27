<template>
  <div class="s-input">
    <label v-if="label" class="s-input__label" :for="label + 'Id'">{{
      label
    }}</label>
    <input
      :id="label + 'Id'"
      class="s-input__input"
      :placeholder="placeholder"
      @input="handleInput"
      :type="type"
      :value="modelValue"
    />
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
  },
  methods: {
    handleInput(event) {
      this.$emit("update:modelValue", event.target.value);
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

  input {
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
</style>
