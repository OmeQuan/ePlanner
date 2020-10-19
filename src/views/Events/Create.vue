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
import { Timestamp } from '../../firebase'

export default {
  data() {
    return {
      event: {
        adminId: '4uLzNcL4zTWdVIKJuNy0',
        archived: false,
        eventDate: null,
        location: '',
        title: '',
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
        maxLength: maxLength(32),
      },
    },
  },
  methods: {
    createEvent() {
      this.$v.$touch()

      if (!this.$v.$invalid) {
        console.log('Yey!')
        this.$store.dispatch('event/createEvent', {
          ...this.event,
          createdAt: Timestamp.now(),
        })
      } else {
        console.log('Nie goed')
      }
    },
  },
}
</script>

<style></style>
