import { createStore } from 'vuex'

export default createStore({
  state: {
    tocData: {},
    markdownData: {},
    nowPage: 0
  },
  mutations: {
    setTocData(state, data) {
      state.tocData = data
    },
    setMarkdownData(state, data) {
      state.markdownData = data
    },
    setNowPage(state, data) {
      state.nowPage = data
    }
  },
  actions: {},
  modules: {}
})
