a<template>
  <div class="container mx-auto px-6">
    <div class=" ">
      <h1 class="text-4xl font-semibold">New event</h1>

      <form @submit.prevent="createEvent" class="mt-8">
        <BaseInput
          label="Title"
          type="text"
          placeholder="new event"
          v-model="event.title"
          :class="{ error: $v.event.title.$error }"
          @blur="$v.event.title.$touch()"
        />
        <BaseInput
          label="Location"
          type="text"
          placeholder="add location"
          v-model="event.location"
          :class="{ error: $v.event.location.$error }"
          @blur="$v.event.location.$touch()"
        />
        <BaseInput
          label="Date"
          type="date"
          v-model="event.eventDate"
          :class="{ error: $v.event.eventDate.$error }"
          @blur="$v.event.eventDate.$touch()"
        />
        <div class="flex ">
          <BaseInput
            class="flex-grow"
            label="Time - Start"
            type="time"
            v-model="event.startTime"
            :class="{ error: $v.event.startTime.$error }"
            @blur="$v.event.startTime.$touch()"
          />
          <BaseInput
            class="ml-4 flex-grow"
            label="Time - End"
            type="time"
            v-model="event.endTime"
            :class="{ error: $v.event.endTime.$error }"
            @blur="$v.event.endTime.$touch()"
          />
        </div>
        <BaseInput
          label="Extra info"
          type="text"
          placeholder="add info"
          v-model="event.info"
          :class="{ error: $v.event.info.$error }"
          @blur="$v.event.info.$touch()"
        />
        <BaseInput
          class="w-full"
          label="Add task"
          type="text"
          placeholder="slowest guest has to..."
          v-model="event.eventTask"
          :class="{ error: $v.event.eventTask.$error }"
          @blur="$v.event.eventTask.$touch()"
        />
        <div class="flex justify-between mt-16">
          <router-link :to="{ name: 'index' }">
            <button class="bg-btn-red hover:bg-blue-700  py-2 px-4 rounded mr-4">
              Cancel <BaseIcon name="x" strokeWidth="2" />
            </button>
          </router-link>
          <button class="bg-btn-blue hover:bg-blue-700  py-2 px-4 rounded" type="submit">
            Next <BaseIcon name="arrow-right" strokeWidth="2" />
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { required, maxLength } from "vuelidate/lib/validators"
import { Timestamp } from "../../firebase"

export default {
  data() {
    return {
      user: {
        userId: "4uLzNcL4zTWdVIKJuNy0",
        name: "Coen Breg",
      },
      payload: {},
      event: {
        adminId: "4uLzNcL4zTWdVIKJuNy0",
        archived: false,
        eventDate: null,
        startTime: null,
        endTime: null,
        eventTask: "",
        location: "",
        title: "",
        info: "",
        host: "Coen Breg",
        invitedCount: 1,
        inviteReactionsCount: 1,
      },
    }
  },
  validations: {
    event: {
      title: {
        required,
        maxLength: maxLength(32),
      },
      eventDate: {
        required,
      },
      startTime: {
        required,
      },
      endTime: {
        required,
      },
      location: {
        required,
        maxLength: maxLength(32),
      },
      eventTask: {
        required,
        maxLength: maxLength(500),
      },
      info: {
        required,
        maxLength: maxLength(500),
      },
    },
  },
  methods: {
    createEvent() {
      this.$v.$touch()

      if (!this.$v.$invalid) {
        this.event.createdAt = Timestamp.now()
        this.$store.dispatch("event/createEvent", this.event)
        //this.$store.dispatch("event/testEvent", { ...this.event, createdAt: Timestamp.now() })
        //this.$store.dispatch("event/addEvent", { ...this.payload, event: this.event, guestId: this.user.userId })
      } else {
        console.log("Nie goed")
      }
    },
    getAdminId() {
      //TODO:
    },
    getHostName() {
      //TODO
    },
  },
}
</script>

<style></style>
