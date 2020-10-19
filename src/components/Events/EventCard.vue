<template>
  <div class="event-card flex">
    <div class="w-32 bg-btn-blue h-20 rounded-lg"><img src="" alt="" /></div>
    <div class="flex flex-col ml-6">
      <h1 class="text-xl font-bold mb-1 ">{{ event.title }}</h1>
      <div class="flex">
        <div class="flex flex-col">
          <h3 class="text-opacity-50 text-creme text-sm font-thin">Date</h3>
          <h3>Wed, 9 September</h3>
        </div>
        <div class="flex flex-col ml-2">
          <h3 class="text-opacity-50 text-creme text-sm">Time</h3>
          <h3 class="font-medium">21:00</h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    event: Object,
  },
}
</script>

<style></style>
