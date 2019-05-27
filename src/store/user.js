import axios from 'axios'
export default {
  state: {
    user: {
      isAuthenticated: false,
      userId: null
    }
  },
  mutations: {
    SET_USER (state, payload) {
      state.user.isAuthenticated = true
      state.user.userId = payload
    }
  },
  actions: {
    SIGNUP ({
      commit
    }, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({
          url: 'http://localhost:3000/register',
          data: user,
          method: 'POST'
        })
          .then(resp => {
            const token = resp.data.token
            const user = resp.data.user
            localStorage.setItem('token', token)
            axios.defaults.headers.common['Authorization'] = token
            commit('SET_USER', token, user)
            resolve(resp)
          })
          .catch(err => {
            commit('SET_ERROR', err)
            localStorage.removeItem('token')
            reject(err)
          })
      })
    },
    SIGNIN ({
      commit
    }, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({
          url: 'http://localhost:3000/register',
          data: user,
          method: 'GET'
        })
          .then(resp => {
            const token = resp.data.token
            const user = resp.data.user
            localStorage.setItem('token', token)
            axios.defaults.headers.common['Authorization'] = token
            commit('GET_USER', token, user)
            resolve(resp)
          })
          .catch(err => {
            commit('SET_ERROR', err)
            localStorage.removeItem('token')
            reject(err)
          })
      })
    }

    // logout({ commit }) {
    //   return new Promise((resolve, reject) => {
    //     commit('logout')
    //     localStorage.removeItem('token')
    //     delete axios.defaults.headers.common['Authorization']
    //     resolve()
    //   })
    // }
  },
  getters: {
    isUserAuthenticated: (state) => state.user.isAuthenticated
  }

}
