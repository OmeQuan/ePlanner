<template>
  <div class="container mx-auto px-6">
    <router-link :to="{ name: 'index' }">
      <BaseIcon name="x" strokeWidth="2" />
    </router-link>

    <div class="w-full flex flex-col ">
      <h1 class="text-4xl font-semibold mb-8">Guest list</h1>
      <table>
        <tr class="text-left border-b border-highlight">
          <th>Name</th>
          <th>Present</th>
        </tr>
        <tr v-for="guest in guests" :key="guest.id">
          <td>{{ guest.name }}</td>
          <td v-if="guest.present == true"><BaseIcon name="check" strokeWidth="2" /></td>
          <td v-if="guest.present == false"><BaseIcon name="x" strokeWidth="2" /></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    guests: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style></style>
