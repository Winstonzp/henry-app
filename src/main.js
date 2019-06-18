import Vue from "vue";
import "./plugins/vuetify";
import "@fortawesome/fontawesome-free/css/all.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import MarqueeText from "vue-marquee-text-component";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import axios from "axios";
Vue.config.productionTip = false;
Vue.component("marquee-text", MarqueeText);
export const bus = new Vue();
export const apiMethods = {
  checkToken() {
    axios
      .get(`${store.state.apiUrl}/check`, {
        headers: {
          "X-Auth-Token": store.state.token
        }
      })
      .then(res => {
        //login exipred
        if (res.data.code === 101) {
          store.dispatch("setToken", "");
          localStorage.removeItem("token");
          store.dispatch("isLoginFalse");
          // alert('登陆已过期，请重新登陆')
          store.dispatch("setExipredTrue");
        }
        if (res.data.msg === "ok") {
          store.dispatch("isLoginTrue");
        }
        if (res.data.msg === "refresh") {
          store.dispatch("setToken", res.data.result.token);
          store.dispatch("isLoginTrue");
        }
      });
    // .catch(err => console.log(err));
  }
};
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
