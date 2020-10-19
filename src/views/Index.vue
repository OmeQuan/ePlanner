<template>
  <div class="container mx-auto px-6">
    <div class="w-full flex flex-col ">
      <h1 class="text-4xl font-semibold">Events</h1>
      <div v-for="event in events" :key="event.id">
        <p>{{ event.title }}</p>
      </div>
    </div>
    <router-link :to="{ name: 'events.create' }" class="bg">
      <BaseButton
        class="fixed bottom-0 right-0 mb-8 mr-8"
        text="new event"
        :to="{ name: 'events.create' }"
      />
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'Index',

  async created() {
    await this.$store.dispatch('event/bindEvents')
    this.$store.dispatch('user/fetchUser')
  },
  computed: {
    ...mapState('event', ['events']),
  },
}
</script>

<style></style>
