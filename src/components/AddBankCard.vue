<template>
  <v-layout>
    <v-flex>
      <v-flex xs12 sm12>
        <v-toolbar color="warning">
          <v-btn icon @click="backToHome">
            <v-icon>keyboard_arrow_left</v-icon>
          </v-btn>
          <v-toolbar-title>新增银行卡</v-toolbar-title>
        </v-toolbar>
      </v-flex>

      <v-flex>
        <v-flex xs12 sm12>
          <v-toolbar color="#FABC28" class="mt-2">
            <span class="menu_text">开户名</span>
            <v-flex xs12 sm6 md3 class="pl-5">
              <v-text-field flat class="addData" placeholder="请输入开户人姓名"></v-text-field>
            </v-flex>
          </v-toolbar>
        </v-flex>
        <v-flex xs12 sm12>
          <v-toolbar color="#FABC28">
            <span class="menu_text">银行卡号</span>
            <v-flex xs12 sm6 md3 class="pl-5">
              <v-text-field flat class="addData" placeholder="请输入银行卡号"></v-text-field>
            </v-flex>
          </v-toolbar>
        </v-flex>
        <v-flex xs12 sm12>
          <v-toolbar color="#FABC28">
            <span class="menu_text">开户银行</span>
            <v-flex xs12 sm6 md3 class="pl-5">
              <v-text-field flat class="addData" placeholder="请输入银行名称"></v-text-field>
            </v-flex>
          </v-toolbar>
        </v-flex>
        <v-flex xs12 sm12>
          <v-toolbar color="#FABC28">
            <span class="menu_text">支行名称</span>
            <v-flex xs12 sm6 md3 class="pl-5">
              <v-text-field flat class="addData" placeholder="请输入开户支行名称，例:北京朝阳支行"></v-text-field>
            </v-flex>
          </v-toolbar>
        </v-flex>
        <v-flex>
          <v-alert :value="true" type="error">请正确填写，否则不能出款</v-alert>
        </v-flex>

        <v-layout>
          <v-flex sm6 xs6>
            <v-btn class="mt-3 ml-5 success">立即设置</v-btn>
          </v-flex>
          <v-flex sm6 xs6>
            <v-btn class="mt-3 ml-3 success">返回</v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-flex>
  </v-layout>
</template>
<style>
</style>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    backToHome() {
      dialog: false;
      this.$router.push("/usercenter");
    }
  }
};
</script>

