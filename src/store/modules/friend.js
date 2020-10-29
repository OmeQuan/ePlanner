import FriendsService from "@/services/FriendService"
const state = {
  friends: [],
}

const getters = {}

const mutations = {
  SET_FRIENDS(state, friends) {
    state.friends = friends
  },
}

const actions = {
  fetchFriends({ commit, rootState }) {
    return FriendsService.getFriends(rootState.user.user.id).then(response => {
      commit("SET_FRIENDS", response)
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
