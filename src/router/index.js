import Vue from "vue"
import VueRouter from "vue-router"
import store from "../store"
import Index from "../views/Index.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "index",
    component: Index,
  },
  {
    path: "/event/create",
    name: "events.create",
    component: () => import("../views/Events/Create.vue"),
  },
  {
    path: "/events/:id/edit",
    name: "events.edit",
    component: () => import("../views/Events/Edit.vue"),
    props: true,
    beforeEnter(routeTo, routeFrom, next) {
      store
        .dispatch("event/fetchEvent", routeTo.params.id)
        .then(event => {
          routeTo.params.event = event
          next()
        })
        .catch(error => {
          console.log("ERROR: " + error)
        })
    },
  },
  {
    path: "/events/:id",
    name: "events.index",
    component: () => import("../views/Events/Index.vue"),
    props: true,
    beforeEnter(routeTo, routeFrom, next) {
      store
        .dispatch("event/fetchEvent", routeTo.params.id)
        .then(event => {
          routeTo.params.event = event
          next()
        })
        .catch(error => {
          console.log("ERROR: " + error)
        })
    },
  },
  {
    path: "/events/:id/guests",
    name: "event.guests",
    component: () => import("../views/Events/Guests/Index.vue"),
    props: true,
    beforeEnter(routeTo, routeFrom, next) {
      store
        .dispatch("guest/fetchGuestList", routeTo.params.id)
        .then(guests => {
          routeTo.params.guests = guests
          next()
        })
        .catch(error => {
          console.log("ERROR: " + error)
        })
    },
  },
  {
    path: "/events/:id/guests/edit",
    name: "event.guests.edit",
    component: () => import("../views/Events/Guests/Edit.vue"),
    props: true,
    beforeEnter(routeTo, routeFrom, next) {
      store
        .dispatch("friend/fetchFriends")
        .then(friends => {
          routeTo.params.friends = friends
          next()
        })
        .catch(error => {
          console.log("ERROR: " + error)
        })
    },
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
