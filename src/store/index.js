import Vue from "vue"
import Vuex from "vuex"

import { vuexfireMutations } from "vuexfire"

import event from "@/store/modules/event"
import user from "@/store/modules/user"
import guest from "@/store/modules/guest"
import invite from "@/store/modules/invite"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {
    ...vuexfireMutations,
  },
  actions: {},
  modules: {
    event,
    user,
    guest,
    invite,
  },
})
