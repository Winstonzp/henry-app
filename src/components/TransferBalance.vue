<template>
  <v-container class="pa-0">
    <v-toolbar dark color="warning">
      <v-btn icon dark @click="backToHome">
        <v-icon>keyboard_arrow_left</v-icon>
      </v-btn>
      <v-toolbar-title>平台互转</v-toolbar-title>
    </v-toolbar>
    <v-card class="py-4">
      <v-form ref="form" v-model="valid" class="px-4">
        <v-flex>
          <v-select
            v-model="outgoing"
            prepend-inner-icon="credit_card"
            :items="outgoingItems"
            label="转出"
            required
            height="10px"
            outline
          ></v-select>
        </v-flex>
        <v-flex>
          <v-select
            v-model="incoming"
            prepend-inner-icon="credit_card"
            :items="incomingItems"
            label="转入"
            required:items="items"
            height="10px"
            outline
          ></v-select>
        </v-flex>

        <v-text-field
          v-model="amount"
          :rules="amountRules"
          label="金额 "
          prepend-inner-icon="fas fa-coins"
          type="number"
          outline
          height="10px"
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
                @click="balanceTransfer()"
              >确定转账</v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-form>
      <v-alert
        v-model="hasAlert"
        :value="true"
        type="info"
        icon="warning"
        outline
        dismissible
      >{{alertMessage}}</v-alert>
    </v-card>
  </v-container>
</template>

<script>
import axios from "axios";
const qs = require("qs");
import { checkTokenMixin } from "../mixins/checkTokenMixin.js";
import TokenExpiredDialog from "../components/TokenExpiredDialog";

export default {
  name: "TransferBalance",
  components: { TokenExpiredDialog },
  data: () => ({
    alertMessage: "",
    // mainbalance: "",
    // MG: "",
    // xjj: "",
    // njj: "",
    hasAlert: false,
    outgoingItems: ["主账户", "新锦江", "MG", "新锦江（新版）"],
    incomingItems: [],
    isLoading: false,
    valid: false,
    amount: "",
    amountRules: [v => !!v || "amount is required"],
    outgoing: "",

    incoming: ""

    // rules: {
    //   required: value => !!value || "Required."
    // }
  }),
  computed: {
    isDisabled() {
      if (this.valid === false || this.isLoading === true) {
        return true;
      } else {
        return false;
      }
    },
    outgoingId() {
      switch (this.outgoing) {
        case "主账户":
          return 0;
        case "新锦江":
          return 32;
        case "新锦江（新版）":
          return 33;
        case "MG":
          return 35;
        default:
          return "";
      }
    },
    incomingId() {
      switch (this.incoming) {
        case "主账户":
          return 0;
        case "新锦江":
          return 32;
        case "新锦江（新版）":
          return 33;
        case "MG":
          return 35;
        default:
          return "";
      }
    }
  },
  watch: {
    outgoing(newValue) {
      this.incomingItems = this.outgoingItems.filter(item => item != newValue);
    }
  },
  methods: {
    backToHome() {
      dialog: false;
      this.$router.push("/usercenter");
    },
    balanceTransfer() {
      this.isLoading = true;
      axios
        .post(
          `${this.$store.state.apiUrl}/order/transfer`,
          qs.stringify({
            inId: this.incomingId,
            outId: this.outgoingId,
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
          console.log(res);
          if (res.data.msg === "ok") {
            this.hasAlert = true;
            this.alertMessage = "成功";
            // console.log(res.data);
          } else {
            this.hasAlert = true;
            this.alertMessage = res.data.msg;
          }
        });
    }
    // queryBalance(id) {
    //   this.isLoading = true;
    //   axios
    //     .get(
    //       `${
    //         this.$store.state.apiUrl
    //       }/account/getPlatformBalance?platformId=${id}`,

    //       {
    //         headers: {
    //           "X-Auth-Token": this.$store.state.token
    //         }
    //       }
    //     )
    //     .then(res => {
    //       if (res.data.msg === "ok") {
    //         if (id === 0) {
    //           this.mainbalance = res.data.result.balance;
    //         } else if (id === 31) {
    //           this.MG = res.data.result.balance;
    //         } else if (id === 33) {
    //           this.xjj = res.data.result.balance;
    //         } else if (id === 35) {
    //           this.njj = res.data.result.balance;
    //         }
    //       }
    //       console.log(this.njj);
    //       this.isLoading = false;
    //     });
    // }
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
</style>
