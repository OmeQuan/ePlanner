<template>
  <div>
    <div class="fixed top-0 z-0">
      <div class="w-screen h-32 backimg"></div>
      <div class="w-screen bg-background h-6 rounded-t-full -mt-6"></div>
      <div class="flex">
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
        <div class="flex justify-between">
          <button class=" bg-btn-blue hover:bg-blue-700  py-2 px-2 rounded" @click="storeInvite">
            Maybe <BaseIcon name="help-circle" strokeWidht="2" class="ml-2" />
          </button>
          <button class=" bg-btn-green hover:bg-blue-700  py-2 px-2 rounded" @click="acceptInvite">
            Present <BaseIcon name="check" strokeWidht="2" class="ml-2" />
          </button>

          <button class=" bg-btn-red hover:bg-blue-700  py-2 px-2 rounded" @click="declineInvite">
            Absent <BaseIcon name="x" strokeWidht="2" class="ml-2" />
          </button>
        </div>
      </div>

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
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
import { Timestamp } from "../../firebase"

export default {
  props: {
    invite: {
      type: Object,
      required: true,
    },
  },
  methods: {
    acceptInvite() {
      this.event.status = "present"
      this.event.respondedAt = Timestamp.now()
      this.event.invitedAt = this.invite.createdAt
      console.log(this.user)
      this.$store.dispatch("invite/responseToInvite", this.event)
    },
    declineInvite() {
      this.event.status = "absent"
      this.event.respondedAt = Timestamp.now()
      this.event.invitedAt = this.invite.createdAt
      console.log(this.user)
      this.$store.dispatch("invite/responseToInvite", this.event)
    },
    storeInvite() {
      this.event.status = "maybe"
      this.event.invitedAt = this.invite.createdAt
      console.log(this.user)
      this.$store.dispatch("invite/responseToInvite", this.event)
    },
  },
  computed: {
    ...mapState("user", ["user"]),
    ...mapState("event", ["event"]),
  },
  created() {
    this.$store.dispatch("event/fetchEvent", this.invite.eventId)
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
