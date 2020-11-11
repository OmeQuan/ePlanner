import { firestore } from "../firebase"

export default {
  getEvents(userId) {
    return firestore
      .collection(`users/${userId}/events`)
      .get()
      .then(querySnapshot => {
        return querySnapshot.docs.map(doc => {
          return { ...{ id: doc.id }, ...doc.data() }
        })
      })
  },
  getEvent(eventId) {
    return firestore
      .collection(`events`)
      .doc(eventId)
      .get()
      .then(doc => {
        if (doc.exists) {
          return { ...{ id: doc.id }, ...doc.data() }
        } else {
          console.log("Event not found!")
        }
      })
  },
  createEvent(event) {
    return firestore
      .collection(`events`)
      .add(event)
      .then(function(docRef) {
        return docRef.id
      })
      .catch(function(error) {
        console.log("ERROR: " + error)
      })
  },
  addEvent(payload) {
    console.log(payload)
    return firestore
      .collection(`users/${localStorage.getItem("userId")}/events`)
      .doc(payload.id)
      .set(payload)
  },
}
