import UserService from "@/services/UserService"
//import { intervalToDuration } from 'date-fns'
//import { firestoreAction } from 'vuexfire'
//import { firestore } from '../../firebase'

const state = {
  user: {},
  users: {},
}

const getters = {}

const mutations = {
  SET_USER(state, user) {
    state.user = user
  },
  SET_USERS(state, users) {
    state.users = users
  },
}

const actions = {
  fetchUser({ commit }) {
    return UserService.getUser("quan")
      .then(response => {
        commit("SET_USER", response)
      })
      .catch(error => {
        console.log("ERROR: " + error)
      })
  },
  fetchUsers({ commit }) {
    return UserService.getUsers()
      .then(response => {
        commit("SET_USERS", response)
      })
      .catch(error => {
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
