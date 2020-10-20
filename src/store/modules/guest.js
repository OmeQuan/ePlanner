import GuestService from "@/services/GuestService"
const state = {
  guests: [],
}

const getters = {}

const mutations = {
  SET_GUESTS(state, guests) {
    state.guests = guests
  },
}

const actions = {
  createGuestList({ rootState }, guests) {
    console.log(guests)
    guests.forEach(guest => {
      console.log(guest)
      GuestService.addGuest(rootState.event.event.id, guest).catch(error => {
        console.log("ERROR: " + error)
      })
    })
  },
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
