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
    createEvent({ rootState }, event) {
        console.log(rootState)
        EventService.createEvent(event).catch(error => {
            console.log("ERROR: " + error)
        })
    },
    testEvent({ rootState }, event) {
        console.log(event)
        console.log(rootState)
    },
    bindEvents: firestoreAction(({ bindFirestoreRef }) => {
        return bindFirestoreRef("events", firestore.collection("events").where("archived", "==", false))
    }),
}

export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}
