<template>
  <v-container class="pa-0">
    <v-layout row>
      <v-toolbar dark color="warning">
        <v-btn icon dark @click="backToHome">
          <v-icon>keyboard_arrow_left</v-icon>
        </v-btn>
        <v-toolbar-title>存款专区</v-toolbar-title>
      </v-toolbar>
    </v-layout>
    <v-layout align-center row>
      <v-flex class="pt-3 pl-2" xs6 sm6>
        <v-btn color="#FFC236" large @click="displayManualPay">
          <span style="font-size: 20px; color: blue;">
            <i class="fas fa-money-check"></i>
          </span>&nbsp;&nbsp;
          <span style="color: white">银行汇款</span>
        </v-btn>
      </v-flex>
      <v-flex class="pt-3" xs6 sm6>
        <v-btn color="#FFC236" large @click="displayAliPay">
          <span style="font-size: 22px; color:blue;">
            <i class="fab fa-alipay"></i>
          </span>&nbsp;&nbsp;
          <span style="color: white">支付宝支付</span>
        </v-btn>
      </v-flex>
    </v-layout>
    <v-alert
      class="mt-4"
      icon="notification_important"
      :value="true"
      type="info"
    >使用本方式充值，系统赠送1%，最高388元，只需一倍流水即可提款</v-alert>
    <v-card class="py-3 mt-5 mx-3 card-rounded" v-show="showManualPay">
      <v-form ref="form" class="px-4">
        <v-flex>
          <v-select
            prepend-icon="credit_card"
            item-text="cardNumber"
            label="存入金额"
            height="50px"
            :items="items"
            required
          ></v-select>
        </v-flex>
        <v-text-field label="提款金额" type="number" prepend-icon="fas fa-coins" required solo></v-text-field>
        <v-btn color="success" block>立即提交</v-btn>
      </v-form>
    </v-card>
    <v-card class="py-3 mt-5 mx-3 card-rounded" v-show="showAliPay">
      <v-form ref="form" class="px-4">
        <v-text-field label="提款金额" type="number" prepend-icon="fas fa-coins" required solo></v-text-field>
        <v-btn color="success" block>立即提交</v-btn>
      </v-form>
    </v-card>
  </v-container>
</template>
<style>
.card-rounded {
  border-radius: 5px;
}
</style>

<script>
export default {
  name: "PaymentArea",
  data: () => ({
    showManualPay: true,
    showAliPay: false,
    items: [
      "网银转账",
      "支付宝转账",
      "微信转账",
      "手机银行转账",
      "ATM转账",
      "柜台转账"
    ]
  }),

  methods: {
    backToHome() {
      dialog: false;
      this.$router.push("/usercenter");
    },
    displayManualPay() {
      this.showManualPay = true;
      this.showAliPay = false;
    },
    displayAliPay() {
      this.showAliPay = true;
      this.showManualPay = false;
    }
  }
};
</script>


   

