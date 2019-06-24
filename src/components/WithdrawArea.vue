<template>
  <v-container class="pa-0">
    <v-flex>
      <v-toolbar dark color="warning">
        <v-btn icon dark @click="backToHome">
          <v-icon>keyboard_arrow_left</v-icon>
        </v-btn>
        <v-toolbar-title>提款专区</v-toolbar-title>
      </v-toolbar>
    </v-flex>

    <v-flex xs12 sm12>
      <v-card class="py-4">
        <v-alert :value="$store.state.userInfo.real_name === null" type="info">
          提款金额需要真实姓名
          <v-btn block @click="redirectEditUserInfo">返回到设置真实姓名</v-btn>
        </v-alert>
        <v-alert :value="$store.state.userInfo.money_password === 'no'" type="info">
          提款金额需要提款密码
          <v-btn block @click="redirectEditWithdrawPassword">返回到设置提款密码</v-btn>
        </v-alert>
        <v-alert :value="withdrawInfo.bankCardList.length < 1" type="info">
          提款金额需要银行卡
          <v-btn block @click="redirectAddBankCard">返回到添加银行卡</v-btn>
        </v-alert>
        <v-alert :value="withdrawInfo.need_xima != 0" type="info">剩余打码量需要为 0</v-alert>
        <v-alert :value="withdrawInfo.has_drawing != 0" type="info">提款在审核中，请通过后再次申请提款</v-alert>

        <v-form ref="form" v-model="valid" class="px-4" v-if="showForm">
          <v-flex>
            <v-select
              v-model="bankId"
              prepend-icon="credit_card"
              :items="withdrawInfo.bankCardList"
              :rules="bankRules"
              item-text="cardNumber"
              item-value="id"
              label="收款银行卡"
              required
            ></v-select>
            <v-btn color="success" @click.native="redirectAddBankCard">
              <i class="fas fa-plus"></i>添加银行卡
            </v-btn>
          </v-flex>
          <v-text-field
            v-model="amount"
            :rules="amountRules"
            label="提款金额"
            type="number"
            prepend-icon="fas fa-coins"
            required
          ></v-text-field>

          <v-text-field
            v-model="password"
            :append-icon="show ? 'visibility' : 'visibility_off'"
            :rules="[rules.required]"
            :type="show ? 'text' : 'password'"
            label="取款密码"
            prepend-icon="lock"
            @click:append="show = !show"
            required
          ></v-text-field>

          <v-container fluid>
            <v-layout row>
              <v-flex xs12>
                <v-btn
                  :disabled="isDisabled"
                  color="success"
                  :loading="isLoading"
                  block
                  @click.native="withdraw"
                >立即提交</v-btn>
              </v-flex>
            </v-layout>
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
          </v-container>
        </v-form>
      </v-card>
    </v-flex>
  </v-container>
</template>
<script>
import axios from "axios";
const qs = require("qs");
import { checkTokenMixin } from "../mixins/checkTokenMixin.js";
import TokenExpiredDialog from "../components/TokenExpiredDialog";

export default {
  name: "WithdrawArea",
  components: { TokenExpiredDialog },
  data: () => ({
    alertMessage: "",
    hasAlert: false,
    bankId: "",
    isLoading: false,
    valid: false,
    amount: "",
    amountRules: [v => !!v || "请输入提款金额"],

    mainbankNumber: "",
    bankRules: [v => !!v || "请选择收款银行卡"],

    show: false,
    password: "",
    rules: {
      required: value => !!value || "请输入取款密码"
    },
    withdrawInfo: {
      balance: 0,
      name: "",
      accountPassword: false,
      bankCardList: [],
      balanceDay: 2000000,
      balanceStart: 100,
      balanceEnd: 200000,
      has_drawing: 0,
      today_num: 0,
      fee: 0,
      need_xima: 0
    }
  }),
  computed: {
    isDisabled() {
      if (this.valid === false || this.isLoading === true) {
        return true;
      } else {
        return false;
      }
    },
    token() {
      return this.$store.state.token;
    },
    showForm() {
      this.getUserInfo();
      if (
        this.$store.state.userInfo.real_name != null &&
        this.$store.state.userInfo.money_password === "yes" &&
        this.withdrawInfo.bankCardList.length > 0 &&
        this.withdrawInfo.need_xima == 0 &&
        this.withdrawInfo.has_drawing == 0
      ) {
        return true;
      } else {
        return false;
      }
    }
  },
  watch: {
    token(data) {
      this.getWithdrawInfo(data);
    }
  },
  methods: {
    backToHome() {
      dialog: false;
      this.$router.push("/usercenter");
    },
    getWithdrawInfo(token) {
      this.isLoading = true;
      axios
        .get(`${this.$store.state.apiUrl}/account/withdraw/init`, {
          headers: {
            "X-Auth-Token": token
          }
        })
        .then(res => {
          this.withdrawInfo = res.data.result;
          this.isLoading = false;
          console.log(res);
        });
      // .catch(err => console.log(err));
    },
    redirectEditUserInfo() {
      this.$router.push("usersetting");
    },
    redirectEditWithdrawPassword() {
      this.$router.push("editwithdrawpassword");
    },
    redirectAddBankCard() {
      this.$router.push("addbankcard");
    },
    withdraw() {
      this.isLoading = true;
      axios
        .post(
          `${this.$store.state.apiUrl}/account/withdraw/`,
          qs.stringify({
            bank_id: this.bankId,
            accountPassword: this.password,
            amount: this.amount
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
            this.hasAlert = true;
            this.alertMessage = "成功";
          } else {
            this.hasAlert = true;
            this.alertMessage = res.data.msg;
          }
          console.log(res.data);
        });
      // .catch(err => console.log(err));
    },
    getUserInfo() {
      axios
        .get(`${this.$store.state.apiUrl}/account/getUserInfo`, {
          headers: {
            "X-Auth-Token": this.$store.state.token
          }
        })
        .then(res => {
          this.$store.dispatch("setUserInfo", res.data.result);
        });
      // .catch(err => console.log(err));
    }
  },
  mounted() {
    if (this.$store.state.token.length > 10) {
      this.getWithdrawInfo(this.$store.state.token);
      // console.log(this.$store.state.token)
    }
    if (localStorage.getItem("token") != null) {
      this.$store.dispatch("setToken", localStorage.getItem("token"));
      this.checkToken(localStorage.getItem("token"));
    }
  },

  mixins: [checkTokenMixin]
};
</script>