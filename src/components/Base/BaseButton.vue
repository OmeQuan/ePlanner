<template>
  <button class="button w-full text-white text-lg font-bold">{{ text }}</button>
</template>

<script>
export default {
  props: {
    text: String
  }
};
</script>

<style scoped>
.button {
  background: #4a57fc;
  border-radius: 12px;
  height: 56px;
}
</style>
