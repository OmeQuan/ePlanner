<template>
  <div>
    {{ invite.eventId }}
  </div>
</template>

<script>
import { mapState } from "vuex"

export default {
  props: {
    invite: {
      type: Object,
      required: true,
    },
  },
  computed: {
    ...mapState("user", ["user"]),
  },
}
</script>

<style></style>
