import Vue from "vue";
import "./plugins/vuetify";
import "@fortawesome/fontawesome-free/css/all.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import MarqueeText from "vue-marquee-text-component";
import "material-design-icons-iconfont/dist/material-design-icons.css";

Vue.config.productionTip = false;
Vue.component("marquee-text", MarqueeText);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
