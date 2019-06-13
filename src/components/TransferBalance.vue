<template>
  <v-container class="pa-0">
    <v-layout>
      <v-flex>
        <v-toolbar dark color="#EFB33A">
          <v-btn icon dark @click="backToHome">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>用户信息</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex>
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
                    @click.native="transferBalance"
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
      </v-flex>
    </v-layout>
  </v-container>
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
    outgoingItems: [
      "主账户(¥0.00)",
      "新锦江(¥0.00)",
      "MG(¥0.00)",
      "新锦江（新版）(¥0.00)"
    ],
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
  methods: {
    backToHome() {
      dialog: false;
      this.$router.push("/usercenter");
    }
  },
  computed: {
    isDisabled() {
      if (this.valid === false || this.isLoading === true) {
        return true;
      } else {
        return false;
      }
    }
  }
};
</script>