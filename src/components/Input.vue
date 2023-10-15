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
      :required="required"
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
    <div v-if="isOpen && !isMultiSelect" class="s-input__dropdown">
      <div
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option)"
        class="s-input__option"
      >
        {{ option.label }}
      </div>
    </div>
    <div v-if="isOpen && isMultiSelect" class="s-input__dropdown">
      <div
        v-for="option in options"
        :key="option.value"
        @click="toggleSelection(option)"
        class="s-input__option"
      >
        <span class="s-input__option__checkbox-label">{{ option.label }}</span>
        <input
          class="s-input__option__checkbox"
          type="checkbox"
          :checked="isSelected(option)"
        />
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
      default: null,
    },
    type: {
      type: String,
      default: "text",
    },
    label: {
      type: String,
      default: "",
    },
    required: {
      type: Boolean,
      default: false,
    },
    options: {
      type: Array,
      default: () => [],
    },
    isMultiSelect: {
      type: Boolean,
      default: false,
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
    isSelected(option) {
      return Array.isArray(this.modelValue)
        ? this.modelValue.includes(option.value)
        : false;
    },
    toggleSelection(option) {
      const selected = this.modelValue || [];
      if (this.isSelected(option)) {
        selected.splice(selected.indexOf(option.value), 1);
      } else {
        selected.push(option.value);
      }
      this.$emit("update:modelValue", selected);
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
  font-size: 16px;
  width: 100%;
  max-height: 160px;
  border: 1px solid #ededed;
  background-color: #fff;
  z-index: 10;
  overflow-y: auto;
}

.s-input__option {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 10px 14px;
  cursor: pointer;
  &:hover {
    background-color: #ededed;
  }
}

input[type="date"] {
  display: block;
  -webkit-appearance: none;
  -moz-appearance: none;
  min-height: 40px;
}
</style>
