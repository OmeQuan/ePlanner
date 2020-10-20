import { firestore } from "../firebase"

export default {
  getGuestList(eventId) {
    return firestore
      .collection(`events/${eventId}/guests`)
      .orderBy("name", "desc")
      .get()
      .then(querySnapshot => {
        return querySnapshot.docs.map(doc => {
          return { ...{ id: doc.id }, ...doc.data() }
        })
      })
  },
  addGuest(eventId, guest) {
    return firestore.collection(`events/${eventId}/guests`).add(guest)
  },
  //updateGuestList(eventId, guests) {},
}
