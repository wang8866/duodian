import { api } from '@/api'
import storage from '@/utils/storage'

const user = {
  namespaced: true,
  state: {
    info: {},
    address: storage.getItem('address') || {},
    userAddress: []
  },
  getters: {},
  mutations: {
    SET_USERINFO (state, payload) {
      state.info = payload
    },
    SET_ADDERSS (state, payload) {
      state.address = payload
      storage.setItem('address', payload, 1000 * 60 * 60 * 3)
    },
    SET_USERADDRESS (state, payload) {
      state.userAddress = payload
    }
  },
  actions: {
    getUserInfo ({ commit, dispatch }) {
      const token = localStorage.getItem('token')
      if (token) {
        api.user.info().then((res) => {
          dispatch('getUserAddress')
          dispatch('car/getCarList', null, { root: true })
          commit('SET_USERINFO', res.data)
        })
      }
    },
    getUserAddress ({ commit }) {
      api.address.list().then((res) => {
        commit('SET_USERADDRESS', res.data)
      })
    }
  }
}

export default user
