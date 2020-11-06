<template>
  <div class="container mx-auto px-6">
    <div class="w-full flex flex-col ">
      <div class="flex flex-row">
        <div class="flex-grow">
          <h1 class="text-4xl font-semibold ">Guestlist</h1>
        </div>
        <div class="py-4">
          <router-link :to="{ name: 'event.index', params: { id: event.id } }">
            <BaseIcon name="x" strokeWidth="2" />
          </router-link>
        </div>
      </div>
      <div class="mb-4">
        <h4 class="text-creme opacity-75 text-sm font-light -mt-2">{{ event.title }}</h4>
      </div>
      <div v-if="guests.length == 0">
        <h1 class="text-center text-3xl opacity-75 text-creme">No Guests yet</h1>
      </div>
      <div v-if="guests.length != 0">
        <table>
          <tr class="text-left border-b border-highlight">
            <th>Name</th>
            <th>Status</th>
          </tr>
          <tr v-for="guest in guests" :key="guest.id">
            <td>{{ guest.name }}</td>
            <td>{{ guest.status }}</td>
          </tr>
        </table>
      </div>
      <div class="mt-4">
        <router-link :to="{ name: 'event.guests.add', params: { id: event.id } }">
          <button class="bg-btn-blue hover:bg-blue-700  py-2 px-4 rounded">
            Add guests <BaseIcon name="plus" strokeWidth="2" class="ml-2" />
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  props: {
    guests: {
      type: Array,
      required: true,
    },
  },
  computed: {
    ...mapState("event", ["event"]),
  },
}
</script>

<style></style>
