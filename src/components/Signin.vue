<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-card color="#EFB33A">
        <v-toolbar dark color="warning">
          <v-btn icon dark @click="backToHome">
            <v-icon>close</v-icon>
          </v-btn>
          <v-toolbar-title>账号登录</v-toolbar-title>
          <v-spacer></v-spacer>
        </v-toolbar>
        <v-container class="py-5 px-5">
          <v-flex xs12 sm6 md3>
            <v-text-field
              v-model="name"
              prepend-inner-icon="person"
              placeholder="请输入手机号/用户名"
              background-color="white"
              single-line
              solo
            ></v-text-field>
            <v-text-field
              v-model="password"
              prepend-inner-icon="lock"
              placeholder="密码"
              background-color="white"
              single-line
              solo
            ></v-text-field>
            <v-btn color="red" block @click="login()">
              <span style="color:white">登陆</span>
            </v-btn>
          </v-flex>
        </v-container>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
import axios from "axios";
const qs = require("qs");
export default {
  // name: "Signin",
  data() {
    return {
      dialog: true,
      notifications: false,
      sound: true,
      widgets: false,
      name: "",
      password: ""
    };
  },
  methods: {
    backToHome() {
      dialog: false;
      this.$router.push("/");
    },
    login() {
      axios
        .post(
          `${this.$store.state.apiUrl}/login`,
          qs.stringify({
            username: this.name,
            password: this.password
          })
        )
        .then(res => {
          console.log(res);
          if (res.data.result.token != undefined) {
            this.$store.dispatch("setToken", res.data.result.token); //sec parameter is payload
            this.$router.push("/");
          }
        });
    }
  },
  created() {
    this.login();
  }
};
</script>