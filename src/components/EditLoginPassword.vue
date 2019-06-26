<template>
  <div>
    <v-layout row>
      <v-flex xs12 sm12>
        <v-toolbar height="40px" class="firstPart">
          <v-btn icon @click="backToHome">
            <v-icon>keyboard_arrow_left</v-icon>
          </v-btn>
          <v-toolbar-title>修改登陆密码</v-toolbar-title>
        </v-toolbar>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex>
        <v-card class="firstPart mt-2">
          <v-form ref="form" v-model="valid" class="pa-2">
            <v-text-field
              v-model="oldPassword"
              :append-icon="showOld ? 'visibility' : 'visibility_off'"
              :rules="[rules.required]"
              :type="showOld ? 'text' : 'password'"
              label="原登陆密码"
              prepend-inner-icon="lock"
              @click:append="showOld = !showOld"
              required
            ></v-text-field>

            <v-text-field
              v-model="password"
              :append-icon="show ? 'visibility' : 'visibility_off'"
              :rules="newPasswordRules"
              :type="show ? 'text' : 'password'"
              label="新登陆密码"
              prepend-inner-icon="lock"
              @click:append="show = !show"
              required
            ></v-text-field>

            <v-text-field
              v-model="confirmPassword"
              :append-icon="showConfirm ? 'visibility' : 'visibility_off'"
              :rules="newPasswordConfirmationRules"
              :type="showConfirm ? 'text' : 'password'"
              label="确认新密码"
              prepend-inner-icon="lock"
              @click:append="showConfirm = !showConfirm"
              required
            ></v-text-field>

            <v-btn
              :disabled="isDisabled"
              color="success"
              @click="UpdateLoginPassword"
              :loading="isLoading"
              block
            >立即提交</v-btn>
          </v-form>
          <v-alert
            v-model="hasAlert"
            :value="true"
            icon="warning"
            dismissible
            type="info"
          >{{alertMessage}}</v-alert>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>
<script>
import axios from "axios";
const qs = require("qs");

export default {
  name: "EditLoginPassword",
  components: {},
  data: () => ({
    alertMessage: "",
    hasAlert: false,
    isLoading: false,
    valid: false,
    show: false, //show password
    showOld: false,
    showConfirm: false,
    password: "",
    oldPassword: "",
    confirmPassword: "",
    rules: {
      required: value => !!value || "请输入原登陆密码"
    }
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
        v => !!v || "请输入新密码",
        v => (v && v == this.confirmPassword) || "确认密码不符合"
      ];
    },
    newPasswordConfirmationRules() {
      return [
        v => !!v || "请确认新密码",
        v => (v && v == this.password) || "确认密码不符合"
      ];
    }
  },
  watch: {
    confirmPassword: function() {
      this.$refs.form.validate();
    }
  },
  methods: {
    backToHome() {
      dialog: false;
      this.$router.push("/securitysetting");
    },
    UpdateLoginPassword() {
      this.isLoading = true;
      axios
        .post(
          `${this.$store.state.apiUrl}/user/updatePassword`,
          qs.stringify({
            oldpassword: this.oldPassword,
            password: this.password,
            repassword: this.confirmPassword
          }),
          {
            headers: {
              "X-Auth-Token": this.$store.state.token
            }
          }
        )
        .then(res => {
          if (res.data.result.token) {
            this.hasAlert = true;
            this.alertMessage = "更改密码成功";
            this.$store.dispatch("setToken", res.data.result.token);
          } else {
            this.hasAlert = true;
            this.alertMessage = res.data.msg;
          }
          this.isLoading = false;
        });

      this.oldPassword = "";
      this.password = "";
      this.confirmPassword = "";
    }
  },
  created() {
    this.UpdateLoginPassword();
  }
};
</script>