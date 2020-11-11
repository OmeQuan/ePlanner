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
        //console.log(state.events)
      })
      .catch(error => {
        console.log("ERROR " + error)
      })
  },
  fetchEvent({ commit }, id) {
    return EventService.getEvent(id).then(response => {
      commit("SET_EVENT", response)
      localStorage.setItem("eventId", response.id)
      return response
    })
  },
  createEvent({ rootState }, event) {
    console.log(rootState)
    EventService.createEvent(event)
      .then(response => EventService.getEvent(response).then(response => EventService.addEvent(response)))
      .catch(error => {
        console.log("ERROR: " + error)
      })
  },
  bindEvents: firestoreAction(({ bindFirestoreRef }, userId) => {
    console.log(userId) //TODO: get only user events
    return bindFirestoreRef("events", firestore.collection(`users/${userId}/events`))
  }),
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
