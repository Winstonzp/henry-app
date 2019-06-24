<template>
  <v-container class="pa-0">
    <v-layout>
      <v-flex xs12 sm12>
        <v-toolbar color="warning">
          <v-btn icon @click="backToHome">
            <v-icon>keyboard_arrow_left</v-icon>
          </v-btn>
          <v-toolbar-title>修改提款密码</v-toolbar-title>
        </v-toolbar>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex>
        <v-card class="py-4">
          <v-form ref="form" class="px-4" v-model="valid">
            <v-text-field
              v-model="bankOldPassword"
              :append-icon="showOldPassword ? 'visibility' : 'visibility_off'"
              :rules="oldPasswordRules"
              label="原取款密码"
              :type="showOldPassword ? 'text' : 'password'"
              prepend-icon="fas fa-unlock"
              @click:append="showOldPassword = !showOldPassword"
              required
              v-if="$store.state.userInfo.money_password === 'yes'"
            ></v-text-field>
            <v-text-field
              v-model="bankNewPassword"
              :append-icon="showPassword ? 'visibility' : 'visibility_off'"
              :rules="newPasswordRules"
              label="新取款密码"
              :type="showPassword ? 'text' : 'password'"
              prepend-icon="fas fa-unlock"
              @click:append="showPassword = !showPassword"
              required
            ></v-text-field>
            <v-text-field
              v-model="confirmBankNewPassword"
              :append-icon="showConfirmPassword ? 'visibility' : 'visibility_off'"
              :rules="newPasswordConfirmationRules"
              label="确认新密码"
              :type="showConfirmPassword ? 'text' : 'password'"
              prepend-icon="fas fa-unlock"
              @click:append="showConfirmPassword = !showConfirmPassword"
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
                    @click.native="updateWithdrawPassword"
                  >立即提交</v-btn>
                </v-flex>
              </v-layout>
            </v-container>
          </v-form>
          <v-alert
            v-model="hasAlert"
            :value="true"
            icon="warning"
            outline
            dismissible
            type="info"
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
  name: "EditWithdrawPassword",
  components: {},
  data: () => ({
    alertMessage: "",
    hasAlert: false,
    isLoading: false,
    valid: true,
    showPassword: false,
    showConfirmPassword: false,
    showOldPassword: false,
    passwordRules: [v => !!v || "请输入新取款密码"],
    comfirmPasswordRules: [v => !!v || "请确认新取款密码"],
    bankNewPassword: "",
    confirmBankNewPassword: "",
    bankOldPassword: "",
    oldPasswordRules: [v => !!v || "请输入原本取款密码"]
  }),
  computed: {
    isDisabled() {
      if (this.valid === false || this.isLoading === true) {
        return true;
      } else {
        return false;
      }
    },
    newPasswordRules() {
      return [
        v => !!v || "请输入新取款密码",
        v => (v && v == this.confirmBankNewPassword) || "确认密码不符合"
      ];
    },
    newPasswordConfirmationRules() {
      return [
        v => !!v || "请确认新取款密码",
        v => (v && v == this.bankNewPassword) || "确认密码不符合"
      ];
    }
  },
  watch: {
    confirmBankNewPassword: function() {
      this.$refs.form.validate();
    }
  },
  methods: {
    backToHome() {
      dialog: false;
      this.$router.push("/securitysetting");
    },
    updateWithdrawPassword() {
      this.isLoading = true;
      axios
        .post(
          `${this.$store.state.apiUrl}/user/updateAccountPassword`,
          qs.stringify({
            oldpassword: this.bankOldPassword,
            password: this.bankNewPassword,
            repassword: this.confirmWithdrawPassword
          }),
          {
            headers: {
              "X-Auth-Token": this.$store.state.token
            }
          }
        )
        .then(res => {
          this.isLoading = false;
          this.hasAlert = true;
          this.alertMessage = "更改密码成功";
          if (res.data.msg === "ok") {
            this.getUserInfo();
          } else {
            this.hasAlert = true;
            this.alertMessage = res.data.msg;
          }
          // console.log(res.data.msg);
        });
      // .catch(err => console.log(err));
      this.withdrawPassword = "";
      this.oldWithdrawPassword = "";
      this.confirmWithdrawPassword = "";
    },
    getUserInfo() {
      this.isLoading = false;
      axios
        .get(`${this.$store.state.apiUrl}/account/getUserInfo`, {
          headers: {
            "X-Auth-Token": this.$store.state.token
          }
        })
        .then(res => {
          this.$store.dispatch("setUserInfo", res.data.result);
          this.isLoading = false;
        });
      // .catch(err => console.log(err));
    }
  }
};
</script>