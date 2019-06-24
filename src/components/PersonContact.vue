<template>
  <v-container class="pa-0">
    <v-layout row>
      <v-toolbar dark color="#EFB33A">
        <v-toolbar-title>客服</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
    </v-layout>
    <v-layout>
      <v-dialog v-model="dialog" persistent max-width="290">
        <v-card>
          <v-flex xs12>
            <p class="text-xs-center pt-3">
              <b>联系方式</b>
            </p>
          </v-flex>
          <v-flex xs12 pt-3>
            <span class="customer">
              <i class="fas fa-user-tie"></i>&nbsp;&nbsp;
              在线客户
            </span>
          </v-flex>
          <v-flex xs12 pt-3>
            <span class="customer">
              <i class="fab fa-qq"></i>&nbsp;&nbsp;
              客服：6182255
            </span>
          </v-flex>
          <v-flex xs12 pt-3>
            <span class="customer">
              <i class="fab fa-qq"></i>&nbsp;&nbsp;
              投诉：350955
            </span>
          </v-flex>
          <v-flex xs12 pt-3>
            <span class="customer">
              <i class="fab fa-qq"></i>&nbsp;&nbsp;
              代理：771282239
            </span>
          </v-flex>
          <v-flex xs12 pt-3>
            <span class="customer">
              <i class="fab fa-weixin"></i>
              &nbsp;
              微信：wnsr2453
            </span>
          </v-flex>

          <v-flex xs12 py-3>
            <v-btn class="customer_button" color="red" @click="backToHome">
              <span style="color:white">返回首页</span>
            </v-btn>
          </v-flex>
        </v-card>
      </v-dialog>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      dialog: true
    };
  },
  methods: {
    backToHome() {
      dialog: false;
      this.$router.push("/");
    }
  }
};
</script>
<style>
.customer {
  margin-left: 50px;
}
.customer_button {
  margin-left: 55px;
  margin-right: 55px;
  width: 180px;
}
</style>
