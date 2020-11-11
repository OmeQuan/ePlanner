<template>
  <svg
    class="feather-icon"
    :width="width"
    :height="height"
    :stroke-width="strokeWidth"
    xmlns="http://www.w3.org/2000/svg"
  >
    <use v-bind="{ 'xlink:href': '/img/feather-sprite.svg#' + name }" />
  </svg>
</template>

<script>
export default {
  name: "BaseIcon",
  props: {
    name: String,
    width: {
      type: [Number, String],
      default: 24
    },
    height: {
      type: [Number, String],
      default: 24
    },
    strokeWidth: {
      type: [Number, String],
      default: 1.5
    }
  }
};
</script>

<style scoped>
.feather-icon {
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  display: inline-block;
}
</style>
