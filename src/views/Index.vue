<template>
  <div class="container mx-auto px-6">
    <div class="w-full flex flex-col ">
      <h1 class="text-4xl font-semibold mb-8">Events</h1>
      <template v-for="event in events">
        <router-link :key="event.eventId" :to="{ name: 'event.index', params: { id: event.id } }">
          <EventCard :event="event" class="mb-4 border-b border-card pb-4" />
        </router-link>
      </template>
    </div>

    <router-link :to="{ name: 'events.create' }"
      ><button class="bg-card rounded-full w-14 h-14 fixed bottom-0 right-0 mb-8 mr-8 new-btn">
        <BaseIcon class="w-8 h-8" name="plus" strokeWidth="2" />
      </button>
    </router-link>
  </div>
</template>

<script>
import { mapState } from "vuex"
import EventCard from "@/components/Events/EventCard"

export default {
  name: "Index",
  data() {
    return {
      userId1: "4uLzNcL4zTWdVIKJuNy0",
      userId2: "SYDdZ6fziAzhpAsani1M",
    }
  },
  components: {
    EventCard,
  },
  async created() {
    await this.$store.dispatch("event/bindEvents", this.userId2)
    this.$store.dispatch("user/fetchUser", this.userId2)
  },
  computed: {
    ...mapState("event", ["events"]),
  },
}
</script>

<style>
.new-btn {
  box-shadow: 4px 8px 8px rgba(0, 0, 0, 0.16);
}
</style>
