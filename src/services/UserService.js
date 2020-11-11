import { firestore } from "../firebase"

export default {
  getUser(userId) {
    return firestore
      .collection(`users`)
      .doc(userId)
      .get()
      .then(doc => {
        if (doc.exists) {
          return { ...{ id: doc.id }, ...doc.data() }
        } else {
          console.log("User not found")
        }
      })
  },
  getUsers() {
    return firestore
      .collection(`users`)
      .orderBy("name", "desc")
      .get()
      .then(querySnapshot => {
        const [user] = querySnapshot.docs.map(doc => {
          return { ...{ id: doc.id }, ...doc.data() }
        })
        return user
      })
  },
}
