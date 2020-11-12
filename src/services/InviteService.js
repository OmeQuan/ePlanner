import { firestore } from "../firebase"

export default {
  createInvite(invite) {
    return firestore
      .collection(`invites`)
      .add(invite)
      .then(function(docRef) {
        console.log(docRef.id)
        return docRef.id
      })
      .catch(function(error) {
        console.log("ERROR: " + error)
      })
  },
  getInvite(inviteId) {
    return firestore
      .collection(`invites`)
      .doc(inviteId)
      .get()
      .then(doc => {
        if (doc.exists) {
          return { ...doc.data() }
        } else {
          console.log("Invite not found, id: " + inviteId)
        }
      })
  },
  responseToInvite(userId, event) {
    return firestore
      .collection(`users/${userId}/events`)
      .doc(event.id)
      .set(event)
  },
}
