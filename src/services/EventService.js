import { firestore } from "../firebase"

export default {
    getEvents() {
        return firestore
            .collection(`events`)
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
        console.log(event)
        return firestore.collection(`events`).add(event)
    },
}
