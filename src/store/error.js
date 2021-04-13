export default {
  state: {
    error: ''
  },
  mutations: {
    setError(state, error) {
      state.error = error
    }
  },
  actions: {
    setError({ commit }, error) {
      commit('setError', error)
    }
  },
  getters: {
    error: s => s.error
  }
}
