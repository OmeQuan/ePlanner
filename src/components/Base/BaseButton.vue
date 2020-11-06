<template>
  <button class="button w-auto px-4 text-cream text-lg bg-darkblue">
    {{ text }}
  </button>
</template>

<script>
export default {
  props: {
    text: String,
  },
}
</script>

<style scoped>
.button {
  border-radius: 8px;
  height: 52px;
}
</style>
