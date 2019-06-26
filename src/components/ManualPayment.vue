<template>
  <v-card class="firstPart">
    <div>
      <v-form ref="form" v-model="valid" class="pa-2" v-show="showForm">
        <v-alert
          :value="true"
          type="info"
        >使用本方式充值, 系统赠送{{$store.state.depositeInfo[0].gift_rate}}, 最高{{$store.state.depositeInfo[0].gift_max}}, 只需一倍流水即可提款</v-alert>
        <v-flex>
          <v-text-field
            v-model="selectAmount"
            prepend-inner-icon="fas fa-coins"
            type="number"
            :rules="selectAmountRules"
            label="存入金额"
            required
          ></v-text-field>
        </v-flex>

        <v-text-field
          v-model="username"
          :rules="usernameRules"
          label="存款人姓名"
          prepend-inner-icon="account_circle"
          required
        ></v-text-field>
        <br>
        <span style="color:#0EA5DE ; font-size:2em">
          <i class="fas fa-hand-holding-usd"></i>
        </span>
        付款方式
        <v-radio-group v-model="payWay" row>
          <v-layout row>
            <v-flex xs6 md6>
              <v-radio label="网线转账" color="#0EA5DE" value="网线转账"></v-radio>
            </v-flex>
            <v-flex xs6 md6>
              <v-radio label="支付宝转账" color="#0EA5DE" value="支付宝转账"></v-radio>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs6 md6>
              <v-radio label="微信转账" color="#0EA5DE" value="微信转账"></v-radio>
            </v-flex>
            <v-flex xs6 md6>
              <v-radio label="手机银行转账" color="#0EA5DE" value="手机银行转账"></v-radio>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs6 md6>
              <v-radio label="ATM转账" color="#0EA5DE" value="ATM转账"></v-radio>
            </v-flex>
            <v-flex xs6 md6>
              <v-radio label="柜台转账" color="#0EA5DE" value="柜台转账"></v-radio>
            </v-flex>
          </v-layout>
        </v-radio-group>

        <v-btn
          :disabled="isDisabled"
          color="success"
          :loading="isLoading"
          block
          v-on:click="fastDeposite()"
        >下一步</v-btn>
      </v-form>
    </div>
    <div v-show="showTable">
      <template>
        <v-data-table :items="dataInfo" hide-actions hide-headers dark>
          <template v-slot:items="props">
            <td>{{ props.item.name }}</td>
            <td>{{ props.item.result }}</td>
          </template>
        </v-data-table>
      </template>
    </div>
    <v-flex xs12>
      <v-alert
        v-model="hasAlert"
        :value="true"
        type="info"
        icon="warning"
        outline
        dismissible
      >{{alertMessage}}</v-alert>
    </v-flex>
  </v-card>
</template>
<script>
import ConfirmationDialog from "./ConfirmationDialog.vue";
import { checkTokenMixin } from "../mixins/checkTokenMixin.js";
import TokenExpiredDialog from "./TokenExpiredDialog";
import axios from "axios";
import { constants } from "crypto";
const qs = require("qs");

export default {
  name: "ManualPayment",
  components: {
    ConfirmationDialog,
    TokenExpiredDialog
  },
  data: () => ({
    alertMessage: "",
    hasAlert: false,
    dataInfo: [
      { name: "订单编号", result: "" },
      { name: "存款金额", result: "" },
      { name: "银行", result: "" },
      { name: "账号", result: " " },
      { name: "开户名", result: "" },
      { name: "分行名称", result: "" }
    ],
    items: [],

    isLoading: false,
    valid: false,
    selectAmount: "",
    username: "",
    usernameRules: [v => !!v || "请输入存款人姓名"],
    showTable: false,
    showForm: true,
    payWay: "网线转账",
    orderId: ""
  }),
  computed: {
    isDisabled() {
      if (this.valid === false || this.isLoading === true) {
        return true;
      } else {
        return false;
      }
    },
    selectAmountRules() {
      return [
        v => !!v || "请输入金额",
        v =>
          (v &&
            v >= this.$store.state.depositeInfo[0].balanceStart &&
            v < this.$store.state.depositeInfo[0].balanceEnd) ||
          `限额 ${this.$store.state.depositeInfo[0].balanceStart} - ${
            this.$store.state.depositeInfo[0].balanceEnd
          }`
      ];
    }
  },
  methods: {
    displayTable: function() {
      this.showTable = !this.showTable;
      this.showForm = !this.showForm;
    },
    fastDeposite() {
      this.isLoading = true;
      axios
        .post(
          `${this.$store.state.apiUrl}/account/deposit/fast`,
          qs.stringify({
            paytype: "OFFLINE_BANK",
            amount: this.selectAmount,
            name: this.username,
            payway: this.payWay
          }),
          {
            headers: {
              "X-Auth-Token": this.$store.state.token
            }
          }
        )
        .then(res => {
          this.isLoading = false;
          if (res.data.msg === "ok") {
            // this.hasAlert = true;
            // this.alertMessage = "成功";
            this.isLoading = false;
            this.showTable = true;
            this.showForm = false;
            this.dataInfo[0].result = res.data.result.bill_no;
            this.dataInfo[1].result = res.data.result.amount;
            this.dataInfo[2].result = res.data.result.bank_name;
            this.dataInfo[3].result = res.data.result.bank_no;
            this.dataInfo[4].result = res.data.result.name;
            this.dataInfo[5].result = res.data.result.bank_address;
            this.orderId = res.data.result.id;
          } else {
            this.hasAlert = true;
            this.alertMessage = res.data.msg;
          }
        });
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

