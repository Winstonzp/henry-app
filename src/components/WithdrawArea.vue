<template>
  <v-container class="pa-0">
    <v-layout row>
      <v-flex xs12>
        <v-toolbar dark color="warning">
          <v-btn icon dark @click="backToHome">
            <v-icon>keyboard_arrow_left</v-icon>
          </v-btn>
          <v-toolbar-title>提款专区</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-card class="py-4">
          <v-form ref="form" class="px-4">
            <v-flex>
              <v-select
                v-model="bankId"
                prepend-icon="credit_card"
                :rules="bankRules"
                item-text="cardNumber"
                item-value="id"
                label="收款银行卡"
                required
              ></v-select>
              <v-btn color="success">
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
              :rules="[rules.required]"
              label="取款密码"
              prepend-icon="lock"
              required
            ></v-text-field>

            <v-container fluid>
              <v-layout row>
                <v-flex xs12>
                  <v-btn color="success" block>立即提交</v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import axios from "axios";
const qs = require("qs");

export default {
  name: "WithdrawArea",
  components: {},
  data: () => ({
    bankId: "",
    amount: "",
    amountRules: [v => !!v || "请输入提款金额"],
    mainbankNumber: "",
    bankRules: [v => !!v || "请选择收款银行卡"],
    password: "",
    rules: {
      required: value => !!value || "请输入取款密码"
    }
  }),

  methods: {
    backToHome() {
      dialog: false;
      this.$router.push("/usercenter");
    }
  }
};
</script>