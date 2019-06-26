<template>
  <v-container class="pa-0">
    <v-toolbar height="40px" class="firstPart">
      <v-btn icon @click="backToHome">
        <v-icon>keyboard_arrow_left</v-icon>
      </v-btn>
      <v-toolbar-title>平台转账</v-toolbar-title>
    </v-toolbar>

    <v-form ref="form" v-model="valid">
      <v-card class="firstPart mt-2 py-2">
        <v-flex>
          <v-select
            v-model="outgoing"
            prepend-inner-icon="credit_card"
            :items="outgoingItems"
            label="转出"
            required
            class="mx-2"
          ></v-select>
        </v-flex>
        <v-flex>
          <v-select
            v-model="incoming"
            prepend-inner-icon="credit_card"
            :items="incomingItems"
            label="转入"
            required:items="items"
            class="mx-2"
          ></v-select>
        </v-flex>

        <v-text-field
          v-model="amount"
          :rules="amountRules"
          label="金额 "
          prepend-inner-icon="fas fa-coins"
          type="number"
          required
          class="mx-2"
        ></v-text-field>
      </v-card>
    </v-form>

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
    <v-alert
      v-model="hasAlert"
      :value="true"
      type="info"
      icon="warning"
      dismissible
    >{{alertMessage}}</v-alert>
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
    hasAlert: false,
    outgoingItems: [],

    incomingItems: [],
    isLoading: false,
    valid: false,
    amount: "",
    amountRules: [v => !!v || "amount is required"],
    outgoing: "",

    incoming: ""
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
      if (this.outgoing.includes("MG")) {
        return 33;
      } else if (this.outgoing.includes("新版")) {
        return 35;
      } else if (this.outgoing.includes("新锦江")) {
        return 32;
      } else if (this.outgoing.includes("主账户")) {
        return 0;
      }
    },

    incomingId() {
      if (this.incoming.includes("MG")) {
        return 33;
      } else if (this.incoming.includes("新版")) {
        return 35;
      } else if (this.incoming.includes("新锦江")) {
        return 32;
      } else if (this.incoming.includes("主账户")) {
        return 0;
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
            location.reload();
            this.alertMessage = "成功";
          } else {
            this.hasAlert = true;
            this.alertMessage = res.data.msg;
          }
        });
    },
    getPlatformBalance(id) {
      axios
        .get(
          `${
            this.$store.state.apiUrl
          }/account/getPlatformBalance?platformId=${id}`,

          {
            headers: {
              "X-Auth-Token": this.$store.state.token
            }
          }
        )
        .then(res => {
          console.log(res);
          this.outgoingItems.push(
            `${res.data.result.title} (${res.data.result.balance})¥`
          );
        });
    },
    refreshBalance() {
      this.getPlatformBalance(0);
      this.getPlatformBalance(32);
      this.getPlatformBalance(33);
      this.getPlatformBalance(35);
    }
  },
  created() {
    this.refreshBalance();
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
