import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apiUrl: "http://47.90.100.229:20000/api",
    token: null,
    isLogin: false,
    qrHtml: "",
    depositeInfo: [
      {
        balanceEnd: 2000000,
        balanceStart: 100,
        code: "OFFLINE_BANK",
        name: "快速入款",
        gift_rate: 1,
        gift_max: 388
      },
      {
        balanceEnd: 2999,
        balanceStart: 1,
        code: "ONLINE_ALIPAY",
        name: "支付宝扫码",
        gift_rate: 1,
        gift_max: 388
      }
    ]
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
    },
    setDepositeInfo: (state, payload) => {
      state.depositeInfo = payload;
    },
    setQrHtml: (state, payload) => {
      state.qrHtml = payload;
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
    },
    setDepositeInfo: (context, payload) => {
      context.commit("setDepositeInfo", payload);
    },
    setQrHtml: (context, payload) => {
      context.commit("setQrHtml", payload);
    }
  }
});
