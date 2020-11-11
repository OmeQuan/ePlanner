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
          { invite link }
        </p>
      </div>
      <div class="mt-4">
        <div class="flex my-4">
          <BaseIcon name="message-circle" strokeWidth="1" class="h-8 w-8" />
          <h2 class="text-lg ml-4 mt-1">Share link via WhatsApp</h2>
        </div>
        <hr class="ml-12 opacity-50" />
        <div class="flex my-4">
          <BaseIcon name="copy" strokeWidth="1" class="h-8 w-8" />
          <h2 class="text-lg ml-4 mt-1">Copy link</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex"
export default {
  computed: {
    ...mapState("event", ["event"]),
  },
}
</script>

<style></style>
