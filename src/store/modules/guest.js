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
    guests.forEach(guest => {
      GuestService.addGuest(rootState.event.event.id, guest).catch(error => {
        console.log("ERROR: " + error)
      })
    })
  },
  fetchGuestList({ commit }, id) {
    return GuestService.getGuestList(id).then(response => {
      commit("SET_GUESTS", response)
      return response
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
