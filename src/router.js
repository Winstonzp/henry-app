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
    },
    {
      path: "/withdrawhistory",
      name: "withdrawhistory",
      component: () => import("./components/WithdrawHistory.vue")
    },
    {
      path: "/transferhistory",
      name: "transferhistory",
      component: () => import("./components/TransferHistory.vue")
    },
    {
      path: "/bethistory",
      name: "bethistory",
      component: () => import("./components/BetHistory.vue")
    },
    {
      path: "/fundhistory",
      name: "fundhistory",
      component: () => import("./components/FundHistory.vue")
    },
    {
      path: "/securitysetting",
      name: "securitysetting",
      component: () => import("./components/SecuritySetting.vue")
    },
    {
      path: "/refreshcode",
      name: "refreshcode",
      component: () => import("./components/RefreshCode.vue")
    },
    {
      path: "/myagent",
      name: "myagent",
      component: () => import("./components/MyAgent.vue")
    },
    {
      path: "/offlinehistory",
      name: "offlinehistory",
      component: () => import("./components/OfflineHistory.vue")
    },
    {
      path: "/winlosehistory",
      name: "winlosehistory",
      component: () => import("./components/WinLoseHistory.vue")
    },
    {
      path: "/commissionhistory",
      name: "commissionhistory",
      component: () => import("./components/CommissionHistory.vue")
    },
    {
      path: "/agentinfo",
      name: "agentinfo",
      component: () => import("./components/AgentInfo.vue")
    },
    {
      path: "/addbankcard",
      name: "addbankcard",
      component: () => import("./components/AddBankCard.vue")
    },
    {
      path: "/logout",
      name: "logout",
      component: () => import("./components/Signout.vue")
    },
    {
      path: "/manualpayment",
      name: "manualpayment",
      component: () => import("./components/ManualPayment.vue")
    },
    {
      path: "/editloginpassword",
      name: "editloginpassword",
      component: () => import("./components/EditLoginPassword")
    },
    {
      path: "/editwithdrawpassword",
      name: "editwithdrawpassword",
      component: () => import("./components/EditWithdrawPassword")
    },
    {
      path: "/bankcardlist",
      name: "bankcardlist",
      component: () => import("./components/BankCardList")
    },
    {
      path: "/alipay",
      name: "alipay",
      component: () => import("./components/Alipay")
    }
  ]
});
