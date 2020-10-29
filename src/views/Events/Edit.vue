<template>
  <div><button @click="test">test guest list</button></div>
</template>

<script>
export default {
  data() {
    return {
      guests: [
        {
          name: "guest1",
          status: "absent",
          guestId: "1",
        },
        {
          name: "guest2",
          status: "absent",
          guestId: "2",
        },
        {
          name: "guest3",
          status: "absent",
          guestId: "3",
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
