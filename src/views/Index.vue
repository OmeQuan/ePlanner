<template>
  <div class="container mx-auto px-6">
    <div class="w-full flex flex-col ">
      <h1 class="text-4xl font-semibold mb-8">Events</h1>
      <div v-for="event in events" :key="event.id">
        <EventCard :event="event" class="mb-4 border-b border-highlight pb-4" />
      </div>
    </div>

    <router-link :to="{ name: 'events.create' }"
      ><button
        class="bg-highlight rounded-full w-14 h-14 fixed bottom-0 right-0 mb-8 mr-8"
      >
        <BaseIcon class="w-8 h-8" name="plus" strokeWidth="2" />
      </button>
    </router-link>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import EventCard from '@/components/Events/EventCard'

export default {
  name: 'Index',
  components: {
    EventCard,
  },
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
