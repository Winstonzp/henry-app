<template>
  <v-container class="pa-0">
    <v-layout row>
      <v-toolbar dark color="#EFB33A">
        <v-btn icon dark @click="backToHome">
          <v-icon>keyboard_arrow_left</v-icon>
        </v-btn>
        <v-toolbar-title>存款专区</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
    </v-layout>
    <v-layout row>
      <v-flex xs6 class="d-flex py-3">
        <v-btn @click="displayNormalPay" color="#FFC236">
          <span style="color:blue">
            <i class="far fa-credit-card fa-2x pr-3"></i>
          </span>
          <span style="color:white">{{ $store.state.depositeInfo[0].name }}</span>
        </v-btn>
      </v-flex>
      <v-flex xs6 class="d-flex py-3">
        <v-btn @click="displayAliPay" color="#FFC236">
          <span style="color:#0EA5DE">
            <i class="fab fa-alipay fa-2x pr-3"></i>
          </span>
          <span style="color:white">{{ $store.state.depositeInfo[1].name }}</span>
        </v-btn>
      </v-flex>
    </v-layout>

    <ManualPayment v-if="showNormalPay"/>
    <Alipay v-if="showAliPay"/>
  </v-container>
</template>
<script>
import Alipay from "./Alipay.vue";
import ManualPayment from "./ManualPayment.vue";
import { checkTokenMixin } from "../mixins/checkTokenMixin.js";
import TokenExpiredDialog from "../components/TokenExpiredDialog";
export default {
  name: "PaymentArea",
  components: {
    Alipay,
    ManualPayment,
    TokenExpiredDialog
  },
  data: () => ({
    showNormalPay: true,
    showAliPay: false
  }),
  methods: {
    displayNormalPay() {
      this.showNormalPay = true;
      this.showAliPay = false;
      this.showQRcode = false;
      this.showTable = false;
    },
    backToHome() {
      dialog: false;
      this.$router.push("/usercenter");
    },
    displayAliPay() {
      this.showAliPay = true;
      this.showNormalPay = false;
      this.showTable = false;
    }
  },
  mounted() {
    if (localStorage.getItem("token") != null) {
      this.$store.dispatch("setToken", localStorage.getItem("token"));
      this.checkToken(localStorage.getItem("token"));
    }
  },
  mixins: [checkTokenMixin]
};
</script>

