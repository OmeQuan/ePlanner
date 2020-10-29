<template>
  <div class="container mx-auto px-6">
    <router-link :to="{ name: 'index' }">
      <BaseIcon name="x" strokeWidth="2" />
    </router-link>

    <div class="w-full flex flex-col ">
      <h1 class="text-4xl font-semibold mb-8">Guest list</h1>
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

      <router-link :to="{ name: 'event.guests.add', params: { id: event.id } }">
        <p>Add new guests <BaseIcon name="plus" strokeWidth="2" /></p>
      </router-link>
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
