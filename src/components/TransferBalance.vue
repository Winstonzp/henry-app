<template>
  <v-card class="py-4">
    <v-form ref="form" v-model="valid" class="px-4">
      <v-flex>
        <v-select
          v-model="outgoing"
          prepend-icon="account_circle"
          :items="outgoingItems"
          label="转出"
          required
        ></v-select>
      </v-flex>
      <v-flex>
        <v-select
          v-model="incoming"
          prepend-icon="account_circle"
          :items="incomingItems"
          label="转入"
          required:items="items"
        ></v-select>
      </v-flex>

      <v-text-field
        v-model="amount"
        :rules="amountRules"
        label="金额 "
        prepend-icon="fas fa-coins"
        type="number"
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
</template>
<script>
import axios from "axios";
const qs = require("qs");

export default {
  name: "TransferBalance",
  components: {},
  data: () => ({
    alertMessage: "",
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
          return 33;
        case "新锦江（新版）":
          return 31;
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
          return 33;
        case "新锦江（新版）":
          return 31;
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
      // .catch(err => console.log(err));
    }
  }
};
</script>