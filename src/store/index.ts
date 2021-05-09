import { createStore } from 'vuex'

export default createStore({
  state: {
    tocData: {},
    blogItem: {
      title: '',
      index: -1,
      contentSrc: ''
    }
  },
  mutations: {
    setTocData(state, data) {
      state.tocData = data
    },
    setBlogItem(state, data) {
      state.blogItem = data
    }
  },
  actions: {},
  modules: {}
})
