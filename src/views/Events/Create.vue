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
          label="Date/time"
          type="datetime-local"
          v-model="event.eventDate"
          :class="{ error: $v.event.eventDate.$error }"
          @blur="$v.event.eventDate.$touch()"
        />

        <BaseInput
          label="Location"
          type="text"
          placeholder="add"
          v-model="event.location"
          :class="{ error: $v.event.location.$error }"
          @blur="$v.event.location.$touch()"
        />

        <button
          class="bg-darkblue hover:bg-blue-700  py-2 px-4 rounded"
          type="submit"
        >
          Next <BaseIcon name="arrow-right" strokeWidth="2" />
        </button>
      </form>
    </div>
  </div>
</template>

<script>
import { required, maxLength, alphaNum } from 'vuelidate/lib/validators'

export default {
  data() {
    return {
      event: {
        title: '',
        eventDate: null,
        location: '',
      },
    }
  },
  validations: {
    event: {
      title: {
        required,
        alphaNum,
        maxLength: maxLength(12),
      },
      eventDate: {
        required,
      },
      location: {
        required,
        alphaNum,
        maxLength: maxLength(12),
      },
    },
  },
  methods: {
    createEvent() {
      this.$v.$touch()

      if (!this.$v.$invalid) {
        console.log('succes')
        console.log(this.event)
      } else {
        console.log('Not good')
      }
    },
  },
}
</script>

<style></style>
