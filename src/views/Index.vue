<template>
  <div class="container mx-auto px-6">
    <div class="w-full flex flex-col ">
      <h1 class="text-4xl font-semibold">Events</h1>
      <div v-for="event in events" :key="event.id">
        <p>{{ event.name }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Index',

  async created() {
    await this.$store.dispatch('event/bindEvents')
  },
  computed: {
    ...mapState('event', ['events']),
  },
}
</script>

<style></style>
