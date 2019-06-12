import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apiUrl: "http://47.90.100.229:20000/api",
    token: null
  },
  mutations: {
    setToken: (state, payload) => {
      state.token = payload;
      localStorage.setItem("token", payload);
    },

    removeToken: state => {
      state.token = null;
      localStorage.removeItem("token");
    },
    setUserInfo: (state, payload) => {
      state.userInfo = payload;
    },
    setBankInfo: (state, payload) => {
      state.bankInfo = payload;
    }
  },
  actions: {
    setToken: (context, payload) => {
      context.commit("setToken", payload);
    },

    removeToken: context => {
      context.commit("removeToken");
    },
    setUserInfo: (context, payload) => {
      context.commit("setUserInfo", payload);
    },
    setBankInfo: (context, payload) => {
      context.commit("setBankInfo", payload);
    }
  }
});
