import { firestore } from '../firebase'

export default {
  getUser(userId) {
    return firestore
      .collection(`users`)
      .where('name', '==', userId)
      .limit(1)
      .get()
      .then((querySnapshot) => {
        const [user] = querySnapshot.docs.map((doc) => {
          return { ...{ id: doc.id }, ...doc.data() }
        })

        return user
      })
  },
}
