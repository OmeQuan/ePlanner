<template>
  <div>
    <div class="fixed top-0 z-0">
      <div class="w-screen h-32 backimg"></div>
      <div class="w-screen bg-background h-6 rounded-t-full -mt-6"></div>
      <div class="flex">
        <router-link :to="{ name: 'events.edit' }" v-if="user.id == event.adminId">
          <BaseIcon name="edit" strokeWidht="2" class="fixed right-0 -mt-2 mr-12"
        /></router-link>
        <router-link :to="{ name: 'index' }">
          <BaseIcon name="x" strokeWidht="2" class="fixed right-0 -mt-2 mr-4"
        /></router-link>
      </div>
    </div>
    <div class="container mx-auto px-6 mt-24 z-10">
      <div class="flex">
        <p class="rounded-lg bg-grey-500 text-sm font-bold px-2 opacity-75 text-creme">
          {{ event.eventDate }}
        </p>
      </div>
      <h1 class="text-4xl font-semibold">{{ event.title }}</h1>
      <h3 class="text-creme text-base font thin text-opacity-50">By:</h3>
      <h3 class=" text-creme text-base font-thin">{{ event.host }}</h3>

      <div class="mt-4">
        <h3></h3>
        <h3 class="text-opacity-50 text-creme text-base font-light">Details:</h3>
        <div class="flex flex-col">
          <div class=" mt-2 flex-row flex">
            <BaseIcon name="clock" strokeWidht="1" />
            <h3 class="ml-2">{{ event.startTime }} - {{ event.endTime }}</h3>
          </div>
          <div class="mt-2 flex flex-row">
            <BaseIcon name="map-pin" strokeWidht="1" />
            <h3 class="ml-2">{{ event.location }}</h3>
          </div>
        </div>
      </div>
      <div class="mt-4">
        <h3 class="text-opacity-50 text-creme text-sm font-thin">Info</h3>
        <h2 class="text-creme">{{ event.info }}</h2>
      </div>
      <div class="mt-4">
        <h3 class="text-opacity-50 text-creme text-sm font-thin">Task:</h3>
        <h2 class="text-creme">{{ event.eventTask }}</h2>
      </div>
      <br />
      <div class="flex ">
        <div class="flex-grow">
          <button class=" bg-btn-green hover:bg-blue-700  py-2 px-4 rounded">
            Status <BaseIcon name="check" strokeWidht="2" class="ml-2" />
          </button>
        </div>

        <div class="flex-grow text-right">
          <router-link :to="{ name: 'event.guests' }" class="">
            <h3 class="py-2 px-4">Guestlist <BaseIcon name="chevron-right" strokeWidht="2" class="ml-2" /></h3>
          </router-link>
        </div>
      </div>
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
  computed: {
    ...mapState("user", ["user"]),
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
