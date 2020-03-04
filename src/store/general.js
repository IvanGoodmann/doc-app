export default {
  state: {
    processing: false,
    error: null
  },
  getters: {
    getProcessing: (state) => state.processing,
    getError: (state) => state.error
  },
  mutations: {
    setProcessing (state, payload) {
      state.processing = payload
    },
    setError (state, payload) {
      state.error = payload
    },
    clean_Error (state) {
      state.error = null
    }
  },
  actions: {

  }
}
