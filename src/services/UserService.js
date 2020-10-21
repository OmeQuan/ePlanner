import { firestore } from "../firebase"

export default {
  getUser(userId) {
    return firestore
      .collection(`users`)
      .where("name", "==", userId)
      .get()
      .then(querySnapshot => {
        const [user] = querySnapshot.docs.map(doc => {
          return { ...{ id: doc.id }, ...doc.data() }
        })

        return user
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
