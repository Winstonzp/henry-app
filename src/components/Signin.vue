<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card color="#FFC236">
        <v-btn icon dark @click="backToHome">
          <v-icon>close</v-icon>
        </v-btn>

        <v-container class="py-5 px-5">
          <v-flex>
            <img src="@/assets/logo2.png" class="headerImage" alt>
          </v-flex>
          <v-flex class="login_header">
            <h1>账号登录</h1>
          </v-flex>
          <v-flex xs12 sm6 md3>
            <v-text-field
              v-model="name"
              :counter="10"
              :rules="nameRules"
              prepend-inner-icon="person"
              placeholder="请输入手机号/用户名"
              background-color="white"
              solo
              flat
              required
            ></v-text-field>
            <v-text-field
              v-model="password"
              :append-icon="show ? 'visibility' : 'visibility_off'"
              :rules="[rules.required]"
              :type="show ? 'text' : 'password'"
              @click:append="show = !show"
              prepend-inner-icon="lock"
              placeholder="密码"
              background-color="white"
              solo
              flat
              required
            ></v-text-field>
            <v-btn color="red" :loading="isLoading" block @click="login()">
              <span style="color:white">登陆</span>
            </v-btn>
          </v-flex>
          <v-alert
            v-model="hasError"
            :value="true"
            color="error"
            icon="warning"
            outline
            dismissible
            error
          >{{errorMessage}}</v-alert>
        </v-container>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<style>
.login_header {
  text-align: center;
  padding-bottom: 20px;
}
.headerImage {
  margin-left: 90px;
}
</style>

<script>
import axios from "axios";
const qs = require("qs");
export default {
  name: "Signin",
  data() {
    return {
      dialog: true,
      errorMessage: "",
      hasError: false,
      isLoading: false,

      name: "",
      nameRules: [v => !!v || "请填写用户名"],
      show: false,
      password: "",
      rules: {
        required: value => !!value || "请填写密码."
      }
    };
  },

  methods: {
    backToHome() {
      dialog: false;
      this.$router.push("/");
    },
    login() {
      this.isLoading = true;
      axios
        .post(
          `${this.$store.state.apiUrl}/login`,
          qs.stringify({
            username: this.name,
            password: this.password
          })
        )
        .then(res => {
          if (res.data.msg == "ok") {
            this.$store.dispatch("setToken", res.data.result.token);
            this.$router.push("/");
          } else {
            this.hasError = true;
            this.errorMessage = res.data.msg;
          }
          this.isLoading = false;
        });
    }
  }
};
</script>
