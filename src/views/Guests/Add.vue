<template>
  <div class="container mx-auto px-6">
    <div class="w-full flex flex-col ">
      <div class="flex flex-row">
        <div class="flex-grow">
          <h1 class="text-4xl font-semibold ">New invite</h1>
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
      <div>
        <p class="text-sm font-light">
          Anyone with an account can follow this link to your event. Only share with people you trust
        </p>
        <p class="mt-2">
          Invite link: <br />
          <a :href="inviteLink" class="text-blue-400 font-light font-sans text-xs" id="link" ref="mylink">
            {{ inviteLink }}
          </a>
        </p>
      </div>
      <div class="mt-4">
        <div class=" my-4">
          <a class="flex" :href="`whatsapp://send?text=${inviteLink}`" data-action="share/whatsapp/share"
            ><BaseIcon name="message-circle" strokeWidth="1" class="h-8 w-8" />
            <h2 class="text-lg ml-4 mt-1">Share link via WhatsApp</h2></a
          >
        </div>
        <hr class="ml-12 opacity-50" />
        <div class="flex my-4" @click="copyLink">
          <BaseIcon name="copy" strokeWidth="1" class="h-8 w-8" />
          <h2 class="text-lg ml-4 mt-1">Copy link</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
import InviteService from "@/services/InviteService"
import { Timestamp } from "../../firebase"

export default {
  data() {
    return {
      inviteLink: "bruh",
      invite: {},
    }
  },
  methods: {
    copyLink() {
      this.$clipboard(this.inviteLink)
      alert("Link copied")
    },
  },
  computed: {
    ...mapState("event", ["event"]),
    newInviteLink() {
      return this.inviteLink
    },
  },
  created() {
    this.invite.createdAt = Timestamp.now()
    this.invite.eventId = this.event.id
    InviteService.createInvite(this.invite).then(
      Response => (this.inviteLink = `http://localhost:8081/invite/${Response}`)
    )
  },
}
</script>

<style></style>
