import { createStore } from 'vuex'

export default createStore({
  state: {
    tocData: [{
      name: '',
      level: 0
    }]
  },
  mutations: {
    setTocData(state, data) {
      state.tocData.pop()
      for (const item of data) {
        state.tocData.push({ name: item.content, level: item.level })
      }
    }
  },
  actions: {},
  modules: {}
})
