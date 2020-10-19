import Vue from 'vue'
import Vuex from 'vuex'

import { vuexfireMutations } from 'vuexfire'

import event from '@/store/modules/event'
import user from '@/store/modules/user'

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
  },
})
