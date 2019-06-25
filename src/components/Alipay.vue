<template>
  <v-card class="firstPart">
    <div class="pa-2">
      <v-alert
        :value="true"
        type="info"
      >使用本方式充值, 系统赠送{{$store.state.depositeInfo[1].gift_rate}}, 最高{{$store.state.depositeInfo[1].gift_max}}, 只需一倍流水即可提款</v-alert>
      <v-form ref="form" v-model="valid" v-show="showAlipayForm">
        <v-flex>
          <v-text-field
            v-model="alipayAmount"
            prepend-inner-icon="fas fa-coins"
            type="number"
            :rules="alipayAmountRules"
            label="存入金额"
            required
          ></v-text-field>
        </v-flex>
        <v-btn
          :disabled="isDisabled"
          color="success"
          :loading="isLoading"
          block
          @click="submitDeposite"
        >下一步</v-btn>
      </v-form>
    </div>
    <div v-if="showQRcode">
      <QrCode/>
    </div>
  </v-card>
</template>
<script>
import axios from "axios";
const qs = require("qs");
import QrCode from "../views/QrCode.vue";
import { checkTokenMixin } from "../mixins/checkTokenMixin.js";
import TokenExpiredDialog from "./TokenExpiredDialog";
export default {
  name: "Alipay",
  components: {
    QrCode,
    TokenExpiredDialog
  },
  data: () => ({
    errorMessage: "",
    hasError: false,
    isLoading: false,
    valid: false,
    alipayAmount: "",
    showQRcode: false,
    showAlipayForm: true
  }),
  computed: {
    isDisabled() {
      if (this.valid === false || this.isLoading === true) {
        return true;
      } else {
        return false;
      }
    },
    alipayAmountRules() {
      return [
        v => !!v || "请输入金额",
        v =>
          (v &&
            v >= this.$store.state.depositeInfo[1].balanceStart &&
            v < this.$store.state.depositeInfo[1].balanceEnd) ||
          `限额 ${this.$store.state.depositeInfo[1].balanceStart} - ${
            this.$store.state.depositeInfo[1].balanceEnd
          }`
      ];
    }
  },
  methods: {
    submitDeposite() {
      this.isLoading = true;
      axios
        .post(
          `${this.$store.state.apiUrl}/account/deposit/online/ONLINE_ALIPAY`,
          qs.stringify({
            paytype: "ONLINE_ALIPAY",
            amount: this.alipayAmount
          }),
          {
            headers: {
              "X-Auth-Token": this.$store.state.token
            }
          }
        )
        .then(res => {
          // console.log(res.data);
          // eslint-disable-next-line
          // .replace('<script>document.myform.submit()<\/script>','')
          this.$store.dispatch("setQrHtml", res.data.result.html);
          this.isLoading = false;
          this.showQRcode = true;
          this.showAlipayForm = false;
        });
      // .catch(err => console.log(err));
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
<style>
.text {
  background-color: orange;
}

.p3 {
  text-align: center;
  font-size: 17px;
  padding-bottom: 10px;
}
.p1 {
  font-size: 17px;
  padding-left: 20px;
}
</style>
