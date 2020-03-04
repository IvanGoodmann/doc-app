import firebase from 'firebase'

export default {
  state: {
    user: {
      isAuthenticated: false,
      uid: null
    }
  },
  mutations: {
    setUser (state, payload) {
      state.user.isAuthenticated = true
      state.user.uid = payload
    }
  },
  actions: {
    SIGNUP ({ commit }, payload) {
      commit('setProcessing', true)
      firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          commit('setProcessing', false)
          commit('setUser', user.uid)
        })
        .catch(function (error) {
          commit('setProcessing', false)
          commit('setError', error.message)
        })
    },
    SIGNIN ({ commit }, payload) {
      commit('setProcessing', true)
      firebase.auth().signInWithEmailAndPassword(payload.email, payload.password)
        .then(user => {
          commit('setProcessing', false)
          commit('setUser', user.uid)
        })
        .catch(function (error) {
          commit('setProcessing', false)
          commit('setError', error.message)
        })
    }
  },
  getters: {
    isUserAuthenticated: (state) => state.user.isAuthenticated
  }
}
