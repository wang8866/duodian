import Vue from 'vue'
import Vuex from 'vuex'
import user from './user'
import car from './car'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    a: 123,
    b: 321,
    c: 456,
    d: 789
  },
  getters: {
    getab (state) {
      return state.a + state.b
    }
  },
  mutations: {
    SET_A (state, payload) {
      state.a = payload
    }
  },
  actions: {
    seta (context, payload) {
      setTimeout(() => {
        context.commit('SET_A', payload)
      }, 2000)
    }
  },
  modules: {
    user,
    car
  }
})
window.store = store
export default store
