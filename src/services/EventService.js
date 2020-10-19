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
  createEvent(event) {
    return firestore.collection(`events`).add(event)
  },
}
