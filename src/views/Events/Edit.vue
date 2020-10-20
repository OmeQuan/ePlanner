<template>
  <div><button @click="test">test guest list</button></div>
</template>

<script>
import { Timestamp } from "../../firebase"

export default {
  data() {
    return {
      guests: [
        {
          name: "guest1",
          present: false,
          guestId: 1,
          createdAt: Timestamp.now(),
        },
        {
          name: "guest2",
          present: false,
          guestId: 2,
          createdAt: Timestamp.now(),
        },
        {
          name: "guest3",
          present: false,
          guestId: 3,
          createdAt: Timestamp.now(),
        },
      ],
    }
  },
  methods: {
    test() {
      this.$store.dispatch("guest/createGuestList", this.guests)
    },
  },
}
</script>

<style></style>
