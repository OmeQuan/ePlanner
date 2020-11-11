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
    meta: { userRequired: true },
    component: () => import("../views/Events/Create.vue"),
  },
  {
    path: "/events/:id/edit",
    name: "events.edit",
    meta: { userRequired: true, eventRequired: true },
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
    name: "event.index",
    meta: { userRequired: true },
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
    path: "/invite/:id",
    name: "invite.index",
    meta: { userRequired: true },
    component: () => import("../views/Invites/Index.vue"),
    props: true,
    beforeEnter(routeTo, routeFrom, next) {
      store
        .dispatch("invite/fetchInvite", routeTo.params.id)
        .then(invite => {
          routeTo.params.invite = invite
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
    meta: { userRequired: true, eventRequired: true },
    component: () => import("../views/Guests/Index.vue"),
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
    path: "/events/:id/invite",
    name: "event.guests.add",
    meta: { userRequired: true, eventRequired: true },
    component: () => import("../views/Guests/Add.vue"),
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

const fetchEventAndUser = async (eventId, userId) => {
  await store.dispatch("event/fetchEvent", eventId)
  await store.dispatch("user/fetchUser", userId)
}

const fetchUser = async userId => {
  await store.dispatch("user/fetchUser", userId)
}

router.beforeEach(async (to, from, next) => {
  const userRequired = to.matched.some(record => record.meta.userRequired)
  const eventRequired = to.matched.some(record => record.meta.eventRequired)
  const userId = store.state.user.user.id
  const eventId = store.state.event.event.id
  const storedUserId = localStorage.getItem("userId")
  const storedEventId = localStorage.getItem("eventId")

  if (userRequired) {
    if (eventRequired) {
      if (userId && eventId) {
        next()
      } else if (!eventId && storedEventId && storedUserId) {
        await fetchEventAndUser(storedEventId, storedUserId)
        next()
      } else {
        next("/")
      }
    } else {
      if (userId) {
        next()
      } else if (!userId && storedUserId) {
        await fetchUser(storedUserId)
        next()
      } else {
        next("/")
      }
    }
  } else {
    next()
  }
})

export default router
