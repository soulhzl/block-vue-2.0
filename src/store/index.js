import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    workspace: null,
    echart: null
  },
  mutations: {
    // 初始化workspace
    initWorkspace(state, workspace){
      state.workspace = workspace
    },
    // 初始化echart
    initEchart(state, echart){
      state.echart = echart
    }
  },
  actions: {
  },
  modules: {
  }
})
