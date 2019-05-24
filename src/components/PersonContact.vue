<template>
  <v-layout row justify-center>
    <v-toolbar dark color="#EFB33A">
      <v-toolbar-title>客服</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-dialog v-model="dialog" persistent max-width="290">
      <v-card>
        <v-flex xs12>
          <p class="text-xs-center pt-3">联系方式</p>
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
          <v-btn round color="red" block @click="backToHome">
            <span style="color:white">返回首页</span>
          </v-btn>
        </v-flex>
      </v-card>
    </v-dialog>
  </v-layout>
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
</style>
