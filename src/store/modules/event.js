import EventService from '@/services/EventService'
//import { intervalToDuration } from 'date-fns'
import { firestoreAction } from 'vuexfire'
import { firestore } from '../../firebase'

const state = {
  events: [],
}

const getters = {
  getEventById: (state) => (id) => {
    return state.events.find((event) => event.id == id)
  },
}

const mutations = {
  SET_EVENTS(state, events) {
    state.events = events
  },
  ADD_EVENT(state, event) {
    state.events.push(event)
  },
}

const actions = {
  fetchEvents({ commit }) {
    EventService.getEvents()
      .then((response) => {
        commit('SET_EVENTS', response)
        console.log(state.events)
      })
      .catch((error) => {
        console.log('ERROR ' + error)
      })
  },
  createEvent(event) {
    EventService.createEvent(event).catch((error) => {
      console.log('ERROR: ' + error)
    })
  },
  addGuestsEvent({ rootState }, guests) {
    EventService.addGuestsEvent(rootState.event.event.id, guests).catch(
      (error) => {
        console.log('ERROR: ' + error)
      }
    )
  },
  bindEvents: firestoreAction(({ bindFirestoreRef }) => {
    return bindFirestoreRef(
      'events',
      firestore.collection('events').where('archived', '==', false)
    )
  }),
}

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
}
