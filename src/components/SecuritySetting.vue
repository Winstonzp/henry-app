<template>
  <v-container class="pa-0">
    <v-layout row>
      <v-flex xs12 sm12>
        <v-toolbar height="40px" class="firstPart">
          <v-btn icon @click="backToHome">
            <v-icon>keyboard_arrow_left</v-icon>
          </v-btn>
          <v-toolbar-title>安全设置</v-toolbar-title>
        </v-toolbar>
      </v-flex>
    </v-layout>
    <!--  Main Page-->
    <v-layout>
      <v-flex v-show="showMainPage">
        <v-flex xs12 sm12>
          <v-toolbar class="firstPart mt-2">
            <span class="menu_text">提款密码</span>
            <router-link to="/editwithdrawpassword">
              <v-btn class="button_link" icon>
                <v-icon color="#756F72" medium>keyboard_arrow_right</v-icon>
              </v-btn>
            </router-link>
          </v-toolbar>
        </v-flex>
        <v-flex xs12 sm12>
          <v-toolbar class="firstPart">
            <span class="menu_text">登录密码</span>
            <router-link to="/editloginpassword">
              <v-btn class="button_link" icon>
                <v-icon color="#756F72" medium>keyboard_arrow_right</v-icon>
              </v-btn>
            </router-link>
          </v-toolbar>
        </v-flex>
        <v-flex xs12 sm12>
          <v-toolbar class="firstPart">
            <span class="menu_text">手机号码</span>
            <router-link to="/usersetting">
              <v-btn class="button_link" icon @click="displayPhone">
                <v-icon color="#756F72" medium>keyboard_arrow_right</v-icon>
              </v-btn>
            </router-link>
          </v-toolbar>
        </v-flex>
        <v-flex xs12 sm12>
          <v-toolbar class="firstPart mt-2">
            <span class="menu_text">银行卡</span>
            <router-link to="/bankcardlist">
              <v-btn class="button_link" icon @click="backToHome">
                <v-icon color="#756F72" medium>keyboard_arrow_right</v-icon>
              </v-btn>
            </router-link>
          </v-toolbar>
        </v-flex>
      </v-flex>

      <v-flex v-show="showPhone">
        <v-flex xs12 sm12>
          <v-toolbar class="firstPart mt-2">
            <span class="menu_text">原密码</span>
            <v-flex xs12 sm6 md3 class="pl-5">
              <v-text-field flat class="addData"></v-text-field>
            </v-flex>
          </v-toolbar>
        </v-flex>
        <v-flex xs12 sm12>
          <v-toolbar class="firstPart">
            <span class="menu_text">新密码</span>
            <v-flex xs12 sm6 md3 class="pl-5">
              <v-text-field flat class="addData"></v-text-field>
            </v-flex>
          </v-toolbar>
        </v-flex>
        <v-flex xs12 sm12>
          <v-toolbar class="firstPart">
            <span class="menu_text">确认密码</span>
            <v-flex xs12 sm6 md3 class="pl-5">
              <v-text-field flat class="addData"></v-text-field>
            </v-flex>
          </v-toolbar>
        </v-flex>
        <v-btn class="align_button success">立即设置</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
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
import EditLoginPassword from "./EditLoginPassword";
import EditWithdrawPassword from "./EditWithdrawPassword";
export default {
  components: {
    EditLoginPassword,
    EditWithdrawPassword
  },
  data() {
    return {
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

    displayPhone() {
      this.showPhone = true;
      this.showMainPage = false;
    }
  }
};
</script>
