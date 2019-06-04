<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card color="#916001">
        <v-toolbar dark color="warning">
          <v-btn icon dark @click="backToHome">
            <v-icon>keyboard_arrow_left</v-icon>
          </v-btn>
          <v-toolbar-title>账号登录</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-container class="dropdown #FBC634">
          <v-layout>
            <v-flex>
              <v-card class="transferUI">
                <v-overflow-btn
                  prepend-icon="account_circle"
                  :items="outgoingItems"
                  label="转出"
                  target=".dropdown"
                  editable
                ></v-overflow-btn>
                <v-overflow-btn
                  prepend-icon="person"
                  :items="outgoingItems"
                  label="转出"
                  target=".dropdown"
                  editable
                ></v-overflow-btn>

                <v-text-field
                  v-model="amount"
                  :rules="amountRules"
                  label="金额 "
                  prepend-icon="fas fa-coins"
                  type="number"
                  required
                ></v-text-field>

                <v-btn color="success" block>确定转账</v-btn>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-dialog>
  </v-layout>
</template>


<!-- css layout-->
<style>
.transferUI {
  border-radius: 8px;
  width: 300px;
  padding: 40px;
  margin: 0px;
}
.dropdown {
  padding-left: 38px;
}
</style>

<!--js-->
<script>
export default {
  // name: "Signin",
  data() {
    return {
      dialog: true,
      name: "",
      password: "",
      outgoingItems: [
        "主账户(￥0.00)",
        "新锦江(￥0.00)",
        "MG(￥0.00)",
        "新锦江（新版(￥0.00)"
      ],
      incomingItems: [
        "主账户(￥0.00)",
        "新锦江(￥0.00)",
        "MG(￥0.00)",
        "新锦江（新版）(￥0.00)"
      ],
      isLoading: false,
      valid: false,
      amount: "",
      amountRules: [v => !!v || "amount is required"],
      outgoing: "",

      incoming: ""
    };
  },
  methods: {
    backToHome() {
      dialog: false;
      this.$router.push("/usercenter");
    }
  }
};
</script>

