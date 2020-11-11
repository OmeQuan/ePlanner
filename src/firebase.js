import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAlRIz8wRM4LwEC5VfKLPRGUrz6s-p-70I',
  authDomain: 'eplanner-95980.firebaseapp.com',
  databaseURL: 'https://eplanner-95980.firebaseio.com',
  projectId: 'eplanner-95980',
  storageBucket: 'eplanner-95980.appspot.com',
  messagingSenderId: '134545260221',
  appId: '1:134545260221:web:97d606bcab7bbafb97c1d4',
  measurementId: 'G-JL6XVD55EB',
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore()

// Export types that exists in Firestore
export const { Timestamp } = firebase.firestore
