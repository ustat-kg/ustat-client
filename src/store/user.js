import axios from "axios";
import {
  SIGNIN_URL,
  SIGNUP_URL,
  SET_TEACHER_RATING_URL,
  // SET_TEACHER_REVIEW_URL,
  SET_TEACHER_INFO_URL
} from "../config/urls";
export default {
  state: {
    user: {
      isAuthenticated: false,
      userId: null
    }
  },
  mutations: {
    SET_USER(state, payload) {
      state.user.isAuthenticated = true;
      state.user.userId = payload;
    },
    auth_request(state, payload) {
      state.user.isAuthenticated = true;
      state.user.userId = payload;
    },
    SET_ERROR(state, payload) {
      state.user.isAuthenticated = true;
      state.user.userId = payload;
    },
    TEACHER_RATING(state, payload) {
      // Vue.set(state.users[payload.userId], 'rating', payload.rating)
    },
    TEACHER_REVIEW(state, payload) {
      // Vue.set(state.users[payload.userId], 'rating', payload.rating)
    },
    TEACHER_INFO(state, payload) {
      // Vue.set(state.users[payload.userId], 'rating', payload.rating)
    }
  },
  actions: {
    SIGNUP({ commit }, user) {
      console.log(user);
      return new Promise((resolve, reject) => {
        commit("auth_request");
        axios({
          url: SIGNUP_URL,
          data: user,
          method: "POST"
        })
          .then(resp => {
            const token = resp.data.token;
            const user = resp.data.user;
            localStorage.setItem("token", token);
            axios.defaults.headers.common["Authorization"] = token;
            commit("auth_request", token, user);
            resolve(resp);
          })
          .catch(err => {
            commit("SET_ERROR", err);
            localStorage.removeItem("token");
            reject(err);
          });
      });
    },
    SIGNIN({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit("auth_request");
        axios({
          url: SIGNIN_URL,
          data: user,
          method: "GET"
        })
          .then(resp => {
            const token = resp.data.token;
            const user = resp.data.user;
            localStorage.setItem("token", token);
            axios.defaults.headers.common["Authorization"] = token;
            commit("GET_USER", token, user);
            resolve(resp);
          })
          .catch(err => {
            commit("SET_ERROR", err);
            localStorage.removeItem("token");
            reject(err);
          });
      });
    },
    SET_TEACHER_RATING({ commit, getters }, payload) {
      //  [`users.${payload.userId}.rating`] payload.rating
      return new Promise((resolve, reject) => {
        commit("TEACHER_RATING");
        axios({
          url: SET_TEACHER_RATING_URL,
          // data: user,
          method: "POST"
        })
          .then(resp => {
            const token = resp.data.token;
            const user = resp.data.user;
            localStorage.setItem("token", token);
            axios.defaults.headers.common["Authorization"] = token;
            commit("TEACHER_RATING", token, user);
            resolve(resp);
          })
          .catch(err => {
            commit("SET_ERROR", err);
            localStorage.removeItem("token");
            reject(err);
          });
      });
    },
    SET_TEACHER_REVIEW({ commit, getters }, payload) {
      //  [`users.${payload.userId}.rating`] payload.rating
      return new Promise((resolve, reject) => {
        commit("TEACHER_REVIEW");
        axios({
          // url: SET_TEACHER_REVIEW_URL,
          // data: user,
          method: "POST"
        })
          .then(resp => {
            const token = resp.data.token;
            const user = resp.data.user;
            localStorage.setItem("token", token);
            axios.defaults.headers.common["Authorization"] = token;
            commit("TEACHER_REVIEW", token, user);
            resolve(resp);
          })
          .catch(err => {
            commit("SET_ERROR", err);
            localStorage.removeItem("token");
            reject(err);
          });
      });
    },
    SET_TEACHER_INFO({ commit, getters }, payload) {
      //  [`users.${payload.userId}.rating`] payload.rating
      return new Promise((resolve, reject) => {
        commit("TEACHER_INFO");
        axios({
          url: SET_TEACHER_INFO_URL,
          // data: user,
          method: "POST"
        })
          .then(resp => {
            const token = resp.data.token;
            const user = resp.data.user;
            localStorage.setItem("token", token);
            axios.defaults.headers.common["Authorization"] = token;
            commit("TEACHER_INFO", token, user);
            resolve(resp);
          })
          .catch(err => {
            commit("SET_ERROR", err);
            localStorage.removeItem("token");
            reject(err);
          });
      });
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
    isUserAuthenticated: state => state.user.isAuthenticated
  }
};
