import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    children: []
  },

  mutations: {
    setUser (state, userData) {
      state.user.name = userData.name
      state.user.age = userData.age
    },

    setChildren (state, childrenData) {
      state.children = childrenData
    }
  },

  getters: {
    getUser: state => {
      return state.user
    },
    getChildren: state => {
      return state.children
    }
  }
})
