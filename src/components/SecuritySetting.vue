<template>
  <v-layout row wrap>
    <v-layout row>
      <v-flex xs12 sm12>
        <v-toolbar color="warning">
          <v-btn icon @click="backToHome">
            <v-icon>keyboard_arrow_left</v-icon>
          </v-btn>
          <v-toolbar-title>安全设置</v-toolbar-title>
        </v-toolbar>
      </v-flex>
    </v-layout>
    <!--  Main Page-->
    <v-flex v-show="showMainPage">
      <v-flex xs12 sm12>
        <v-toolbar color="#FABC28" class="mt-2">
          <span class="menu_text">提款密码</span>
          <v-btn class="button_link" icon @click="displayLogin">
            <v-icon color="#756F72" medium>keyboard_arrow_right</v-icon>
          </v-btn>
        </v-toolbar>
      </v-flex>
      <v-flex xs12 sm12>
        <v-toolbar color="#FABC28">
          <span class="menu_text">登录密码</span>
          <v-btn class="button_link" icon @click="displayWithdraw">
            <v-icon color="#756F72" medium>keyboard_arrow_right</v-icon>
          </v-btn>
        </v-toolbar>
      </v-flex>
      <v-flex xs12 sm12>
        <v-toolbar color="#FABC28">
          <span class="menu_text">手机号码</span>
          <v-btn class="button_link" icon @click="displayPhone">
            <v-icon color="#756F72" medium>keyboard_arrow_right</v-icon>
          </v-btn>
        </v-toolbar>
      </v-flex>
      <v-flex xs12 sm12>
        <v-toolbar color="#FABC28" class="mt-2">
          <span class="menu_text">银行卡</span>
          <v-btn class="button_link" icon @click="backToHome">
            <v-icon color="#756F72" medium>keyboard_arrow_right</v-icon>
          </v-btn>
        </v-toolbar>
      </v-flex>
    </v-flex>
    <!--  Main Page -->
    <!-- edit withdraw password-->
    <v-flex v-show="showWithdraw">
      <v-flex xs12 sm12>
        <v-toolbar color="#FABC28" class="mt-2">
          <span class="menu_text">原密码</span>
          <v-flex xs12 sm6 md3 class="pl-5">
            <v-text-field flat class="addData"></v-text-field>
          </v-flex>
        </v-toolbar>
      </v-flex>
      <v-flex xs12 sm12>
        <v-toolbar color="#FABC28">
          <span class="menu_text">新密码</span>
          <v-flex xs12 sm6 md3 class="pl-5">
            <v-text-field flat class="addData"></v-text-field>
          </v-flex>
        </v-toolbar>
      </v-flex>
      <v-flex xs12 sm12>
        <v-toolbar color="#FABC28">
          <span class="menu_text">确认密码</span>
          <v-flex xs12 sm6 md3 class="pl-5">
            <v-text-field flat class="addData"></v-text-field>
          </v-flex>
        </v-toolbar>
      </v-flex>
      <v-btn class="align_button success">立即设置</v-btn>
    </v-flex>

    <!-- edit withdraw password-->
    <!-- edit login password-->
    <v-flex v-show="showLogin">
      <v-flex xs12 sm12>
        <v-toolbar color="#FABC28" class="mt-2">
          <span class="menu_text">原密码</span>
          <v-flex xs12 sm6 md3 class="pl-5">
            <v-text-field flat class="addData"></v-text-field>
          </v-flex>
        </v-toolbar>
      </v-flex>
      <v-flex xs12 sm12>
        <v-toolbar color="#FABC28">
          <span class="menu_text">新密码</span>
          <v-flex xs12 sm6 md3 class="pl-5">
            <v-text-field flat class="addData"></v-text-field>
          </v-flex>
        </v-toolbar>
      </v-flex>
      <v-flex xs12 sm12>
        <v-toolbar color="#FABC28">
          <span class="menu_text">确认密码</span>
          <v-flex xs12 sm6 md3 class="pl-5">
            <v-text-field flat class="addData"></v-text-field>
          </v-flex>
        </v-toolbar>
      </v-flex>
      <v-btn class="align_button success">立即设置</v-btn>
    </v-flex>
    <!-- edit login password-->
    <!-- edit phone number -->
    <v-flex v-show="showPhone">
      <v-flex xs12 sm12>
        <v-toolbar color="#FABC28" class="mt-2">
          <span class="menu_text">原密码</span>
          <v-flex xs12 sm6 md3 class="pl-5">
            <v-text-field flat class="addData"></v-text-field>
          </v-flex>
        </v-toolbar>
      </v-flex>
      <v-flex xs12 sm12>
        <v-toolbar color="#FABC28">
          <span class="menu_text">新密码</span>
          <v-flex xs12 sm6 md3 class="pl-5">
            <v-text-field flat class="addData"></v-text-field>
          </v-flex>
        </v-toolbar>
      </v-flex>
      <v-flex xs12 sm12>
        <v-toolbar color="#FABC28">
          <span class="menu_text">确认密码</span>
          <v-flex xs12 sm6 md3 class="pl-5">
            <v-text-field flat class="addData"></v-text-field>
          </v-flex>
        </v-toolbar>
      </v-flex>
      <v-btn class="align_button success">立即设置</v-btn>
    </v-flex>

    <!-- edit phone number -->
  </v-layout>
</template>
<style>
.button_link {
  padding-left: 270px;
}
.menu_text {
  color: black;
  width: 100px;
}
.addData {
  background-color: white;
  border-radius: 5px;
  height: 40px;
  width: 250px;
  box-shadow: none;
}
.align_button {
  margin-left: 85px;
  margin-top: 150px;
  width: 200px;
  border-radius: 5px;
}
</style>

<script>
export default {
  data() {
    return {
      showLogin: false,
      showWithdraw: false,
      showMainPage: true,
      showPhone: false
    };
  },
  methods: {
    backToHome() {
      dialog: false;
      this.$router.push("/usercenter");
    },
    displayLogin() {
      this.showLogin = true;
      this.showMainPage = false;
    },
    displayWithdraw() {
      this.showWithdraw = true;
      this.showMainPage = false;
    },
    displayPhone() {
      this.showPhone = true;
      this.showMainPage = false;
    }
  }
};
</script>
