<template>
  <div class="container mx-auto px-6">
    <router-link :to="{ name: 'event.guests', params: { id: event.id } }">
      <BaseIcon name="x" strokeWidth="2" />
    </router-link>

    <div class="w-full flex flex-col ">
      <h1 class="text-4xl font-semibold mb-8">Friend list</h1>
      <table>
        <tr class="text-left border-b border-highlight">
          <th>Name</th>
          <th>Invite?</th>
        </tr>
        <tr v-for="friend in friends" :key="friend.id">
          <td>{{ friend.name }}</td>
          <td><input type="checkbox" class="w-4 h-4" v-model="friend.invite" /></td>
        </tr>
      </table>
    </div>
    <button @click="addGuests">add</button>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  data() {
    return {
      guestlist: [],
      payload: {},
    }
  },
  props: {
    friends: {
      type: Array,
      required: true,
    },
  },
  methods: {
    addGuests() {
      this.friends.forEach(friend => {
        if (friend.invite == true) {
          delete friend.invite
          delete friend.id
          friend.status = "absent"
          this.guestlist.push(friend)
        }
      })
      if (this.guestlist.length != 0) {
        this.$store.dispatch("guest/createGuestList", this.guestlist)
        this.guestlist.forEach(guest => {
          this.$store.dispatch("event/addEvent", { ...this.payload, event: this.eventInfo, guestId: guest.userId })
        })

        this.$router.push({ name: "event.guests", params: { id: this.event.id } })
      } else {
        console.log("none selected")
      }
    },
  },

  computed: {
    ...mapState("event", ["event"]),
    eventInfo: function() {
      return {
        eventId: this.event.id,
        status: "absent",
        title: this.event.title,
        dateTime: this.event.eventDate,
      }
    },
  },
}
</script>

<style></style>
