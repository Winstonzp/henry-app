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
    }
  },
  actions: {
    setToken: (context, payload) => {
      context.commit("setToken", payload);
    },

    removeToken: context => {
      context.commit("removeToken");
    }
  }
});
