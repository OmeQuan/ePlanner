<template>
  <div class="flex pb-2 mb-2 flex-col ">
    <label class="text-cream text-sm w-20" v-if="label" :for="label" :class="{ 'text-gray-600': value }">
      {{ label }}
    </label>
    <input
      class="bg-transparent text-cream text-lg placeholder-gray-600"
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
      default: "",
    },
    value: [String, Number],
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        input: this.updateValue,
      }
    },
  },
  methods: {
    updateValue(event) {
      this.$emit("input", event.target.value)
    },
  },
}
</script>

<style scoped>
label {
  transition: color 0.3s;
}

.error > label {
  color: #ff3b30;
}
</style>
