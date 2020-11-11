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
}
