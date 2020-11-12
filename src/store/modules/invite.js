import InviteService from "@/services/InviteService"

const state = {
  invite: {},
}

const getters = {}

const mutations = {
  SET_INVITE(state, invite) {
    state.invite = invite
  },
}

const actions = {
  fetchInvite({ commit }, id) {
    return InviteService.getInvite(id)
      .then(response => {
        commit("SET_INVITE", response)
        return response
      })
      .catch(error => {
        console.log("ERROR: " + error)
      })
  },
  responseToInvite({ rootState }, event) {
    console.log(rootState.user.user.id)
    InviteService.responseToInvite(rootState.user.user.id, event).catch(error => {
      console.log("ERROR: " + error)
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
