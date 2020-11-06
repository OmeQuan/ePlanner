import EventService from "@/services/EventService"
import { firestoreAction } from "vuexfire"
import { firestore } from "../../firebase"

const state = {
  events: [],
  event: {},
}

const getters = {
  getEventById: state => id => {
    return state.events.find(event => event.id == id)
  },
}

const mutations = {
  SET_EVENTS(state, events) {
    state.events = events
  },
  SET_EVENT(state, event) {
    state.event = event
  },
  ADD_EVENT(state, event) {
    state.events.push(event)
  },
}

const actions = {
  fetchEvents({ commit }) {
    EventService.getEvents()
      .then(response => {
        commit("SET_EVENTS", response)
        console.log(state.events)
      })
      .catch(error => {
        console.log("ERROR " + error)
      })
  },
  fetchEvent({ commit }, id) {
    return EventService.getEvent(id).then(response => {
      commit("SET_EVENT", response)
      return response
    })
  },
  createEvent({ rootState }, event) {
    console.log(rootState)
    EventService.createEvent(event).catch(error => {
      console.log("ERROR: " + error)
    })
  },
  addEvent({ rootState }, payload) {
    console.log(rootState)
    EventService.addEvent(payload).catch(error => {
      console.log("ERROR: " + error)
    })
  },
  bindEvents: firestoreAction(({ bindFirestoreRef }, userId) => {
    console.log(userId)
    return bindFirestoreRef("events", firestore.collection(`events`))
  }),
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
