import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loginState: 'ok'
  },
  mutations: {
    changeLoginState (state, data) {
      state.loginState = data
    }
  },
  actions: {

  }
})
