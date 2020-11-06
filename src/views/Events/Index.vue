<template>
  <div>
    <div class="fixed top-0 z-0">
      <div class="w-screen h-32 backimg"></div>
      <div class="w-screen bg-background h-6 rounded-t-full -mt-6"></div>
      <router-link :to="{ name: 'events.edit' }" v-if="user.id == event.adminId">
        <BaseIcon name="edit" strokeWidht="2" class="fixed right-0 -mt-2 mr-12"
      /></router-link>
      <router-link :to="{ name: 'index' }">
        <BaseIcon name="x" strokeWidht="2" class="fixed right-0 -mt-2 mr-4"
      /></router-link>
    </div>
    <div class="container mx-auto px-6 mt-24 z-10">
      <h1 class="text-4xl font-semibold">{{ event.title }}</h1>
      <h3 class="text-opacity-50 text-creme text-sm font-thin">{{ date }}</h3>
      <div class="mt-4">
        <h3 class="text-opacity-50 text-creme text-sm font-thin">Location</h3>
        <h2 class="text-creme">{{ event.location }}</h2>
      </div>
      <div class="mt-4">
        <h3 class="text-opacity-50 text-creme text-sm font-thin">Info</h3>
        <h2 class="text-creme">{{ event.info }}</h2>
      </div>
      <div class="mt-4">
        <h3 class="text-opacity-50 text-creme text-sm font-thin">Time</h3>
        <h2 class="text-creme">{{ time }}</h2>
      </div>
      <div class="mt-4">
        <h3 class="text-opacity-50 text-creme text-sm font-thin">Host</h3>
        <h2 class="text-creme">{{ event.host }}</h2>
      </div>
      <br />
      <router-link :to="{ name: 'event.guests' }">
        <button class="bg-btn-blue hover:bg-blue-700  py-2 px-4 rounded">
          Guest list <BaseIcon name="users" strokeWidht="2" class="ml-2" />
        </button>
      </router-link>
    </div>
    <div></div>
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  props: {
    event: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {
      date: this.computedDate(),
      time: this.computedTime(),
    }
  },
  computed: {
    ...mapState("user", ["user"]),
  },
  methods: {
    computedDate() {
      var resp = this.event.eventDate.split("T", 2)
      var date = resp[0]
      return date
    },
    computedTime() {
      var resp = this.event.eventDate.split("T", 2)
      var time = resp[1]
      return time
    },
  },
}
</script>

<style>
.backimg {
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url(https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80);
}
</style>
