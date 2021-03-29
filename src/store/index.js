import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    workspace: null,
    echart: null,
    isAuth: false
  },
  mutations: {
    // 初始化workspace
    initWorkspace(state, workspace) {
      state.workspace = workspace
    },
    // 初始化echart
    initEchart(state, echart) {
      state.echart = echart
    },
    setAuth(state, isAuth) {
      if (isAuth) {
        state.isAuth = isAuth
      } else {
        state.isAuth = false
      }
    }
  },
  actions: {
    setAuth: ({
      commit
    }, isAuth) => {
      commit("setAuth", isAuth)
    }
  },
  modules: {
  }
})
