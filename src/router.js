import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/about",
      name: "about",

      component: () => import("./views/About.vue")
    },
    {
      path: "/category",
      name: "category",
      component: () => import("./views/Category.vue")
    },
    {
      path: "/register",
      name: "register",
      component: () => import("./views/Register.vue")
    },
    {
      path: "/customer",
      name: "customer",
      component: () => import("./views/Customer.vue")
    },
    {
      path: "/login",
      name: "login",
      component: () => import("./views/Login.vue")
    },
    {
      path: "/usercenter",
      name: "usercenter",
      component: () => import("./components/UserCenter.vue")
    },
    {
      path: "/transferbalance",
      name: "transferbalance",
      component: () => import("./components/TransferBalance.vue")
    },
    {
      path: "/withdrawarea",
      name: "withdrawarea",
      component: () => import("./components/WithdrawArea.vue")
    },
    {
      path: "/paymentarea",
      name: "paymentarea",
      component: () => import("./components/PaymentArea.vue")
    },
    {
      path: "/usersetting",
      name: "usersetting",
      component: () => import("./components/UserSetting.vue")
    },
    {
      path: "/paymenthistory",
      name: "paymenthistory",
      component: () => import("./components/PaymentHistory.vue")
    }
  ]
});
