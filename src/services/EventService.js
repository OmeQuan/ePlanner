import { firestore } from '../firebase'

export default {
  getEvents() {
    return firestore
      .collection(`events`)
      .get()
      .then((querySnapshot) => {
        return querySnapshot.docs.map((doc) => {
          return { ...{ id: doc.id }, ...doc.data() }
        })
      })
  },
  addGuestsEvent(eventId, guests) {
    return firestore.collection(`events/${eventId}/guests`).add(guests)
  },
  createEvent(event) {
    return firestore.collection(`events`).add(event)
  },
}
