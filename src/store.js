import Vue from "vue";
import Vuex from "vuex";
import { bus } from "@/main";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    apiUrl: "http://47.90.100.229:20000/api",
    token: null,
    isLogin: false,
    isExipired: false,
    userInfo: "",
    bankInfo: "",
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
    isLoginTrue: state => {
      state.isLogin = true;
    },
    isLoginFalse: state => {
      state.isLogin = false;
    },
    setExipredTrue: state => {
      state.isExipired = true;
    },
    setExipredFalse: state => {
      state.isExipired = false;
    },
    removeToken: state => {
      state.token = null;
      localStorage.removeItem("token");
    },
    setUserInfo: (state, payload) => {
      state.userInfo = payload;
      bus.$emit("doneSettingUserInfo");
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
    isLoginTrue: context => {
      context.commit("isLoginTrue");
    },
    isLoginFalse: context => {
      context.commit("isLoginFalse");
    },
    setExipredTrue: context => {
      context.commit("setExipredTrue");
    },
    setExipredFalse: context => {
      context.commit("setExipredFalse");
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
