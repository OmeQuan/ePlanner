<template>
  <div class="container mx-auto px-6">
    <router-link :to="{ name: 'index' }">
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
          <td><BaseIcon name="check" strokeWidth="2" /></td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    friends: {
      type: Array,
      required: true,
    },
  },
}
</script>

<style></style>
