<template>
  <div class="field flex border-b border-gray-600 pb-2 mb-8">
    <label class="text-white text-lg w-20" v-if="label" :for="label" :class="{ 'text-gray-600': value }">
      {{ label }}
    </label>
    <input
      class="ml-8 flex-grow bg-transparent text-white text-lg focus:outline-none placeholder-gray-600"
      @input="updateValue"
      v-bind="$attrs"
      v-on="listeners"
      :value="value"
      :id="label"
    />
  </div>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: ""
    },
    value: [String, Number]
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.updateValue
      };
    }
  },
  methods: {
    updateValue(event) {
      this.$emit("input", event.target.value);
    }
  }
};
</script>

<style scoped>
label {
  transition: color 0.3s;
}

.field {
  width: calc(100vw - 1rem);
}

.error {
  border-bottom: 1px solid #ff3b30;
}

.error > label {
  color: #ff3b30;
}
</style>
