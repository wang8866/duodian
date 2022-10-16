import { api } from '@/api'

const car = {
  namespaced: true,
  state: {
    list: []
  },
  getters: {
    count (state) {
      return state.list.reduce((prev, item) => {
        return prev + item.num
      }, 0)
    }
  },
  mutations: {
    SET_CAR_LIST (state, payload) {
      state.list = payload
    }
  },
  actions: {
    getCarList ({ commit, dispatch }) {
      api.car.list().then((res) => {
        commit('SET_CAR_LIST', res.data)
      })
    }
  }
}

export default car
