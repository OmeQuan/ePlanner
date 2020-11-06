import { firestore } from "../firebase"

export default {
  getFriends(userId) {
    return firestore
      .collection(`users/${userId}/friends`)
      .get()
      .then(querySnapshot => {
        return querySnapshot.docs.map(doc => {
          return { ...{ id: doc.id }, ...doc.data() }
        })
      })
  },
}
