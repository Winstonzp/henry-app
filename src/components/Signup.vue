<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-toolbar dark color="#EFB33A">
        <v-btn icon dark @click="backToHome">
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>快速注册</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-form ref="form" v-model="valid" class="white pa-2">
        <v-text-field
          v-model="name"
          :counter="10"
          :rules="nameRules"
          label="用户名"
          prepend-icon="person"
          required
        ></v-text-field>
        <v-text-field
          v-model="password"
          :counter="12"
          :rules="passwordRules"
          :append-icon="show ? 'visibility' : 'visibility_off'"
          :type="show ? 'text' : 'password'"
          label="密码"
          prepend-icon="lock"
          @click:append="show = !show"
          required
        ></v-text-field>
        <v-text-field v-model="email" :rules="emailRules" label="邮箱" prepend-icon="email" required></v-text-field>
        <v-text-field
          v-model="phone"
          :rules="phoneRules"
          :counter="11"
          label="+86 中国"
          prepend-icon="phone_iphone"
          type="number"
          required
        ></v-text-field>
        <v-text-field
          v-model="code"
          :rules="codeRules"
          :counter="4"
          label="验证码"
          prepend-icon="verified_user"
          type="number"
          required
        >
          <img slot="append" :src="imageSource" alt="Code" @click="changeImageCode">
        </v-text-field>
        <v-btn
          :disabled="isDisabled"
          color="success"
          block
          @click="register"
          :loading="isLoading"
        >立即注册</v-btn>
        <v-flex xs12>
          <v-alert
            v-model="hasError"
            :value="true"
            color="error"
            icon="warning"
            outline
            dismissible
            error
          >{{errorMessage}}</v-alert>
        </v-flex>
      </v-form>
    </v-dialog>
  </v-layout>
</template>
<script>
import axios from "axios";
const qs = require("qs");
export default {
  name: "Signup",
  components: {},
  data() {
    return {
      dialog: true,
      notifications: false,
      sound: true,
      widgets: false,
      show1: false,
      errorMessage: "",
      hasError: false,
      isLoading: false,
      valid: true,
      name: "",
      nameRules: [
        v => !!v || "请加入名称",
        v =>
          (v && v.toString().length >= 5 && v.toString().length <= 10) ||
          "请输入5-10位字母或数字"
      ],
      email: "",
      emailRules: [
        v => !!v || "请加入邮件",
        v => /.+@.+/.test(v) || "邮件必须有效"
      ],
      phone: "",
      phoneRules: [
        v => !!v || "请加入电话号码",
        v => (v && v.toString().length === 11) || "必须是11个号码"
      ],
      password: "",
      passwordRules: [
        v => !!v || "请加入密码",
        v =>
          (v && v.toString().length >= 6 && v.toString().length <= 12) ||
          "必请输入6-12位数字或字母"
      ],
      code: "",
      codeRules: [
        v => !!v || "请加入验证码",
        v => (v && v.length == 4) || "验证码必须是4个字"
      ],
      show: false,
      timestampt: new Date().valueOf()
    };
  },
  computed: {
    imageSource: function() {
      return (
        `${this.$store.state.apiUrl}/validateCode?timesp` + this.timestampt
      );
    },
    isDisabled() {
      if (this.valid === false || this.isLoading === true) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    backToHome() {
      dialog: false;
      this.$router.push("/");
    },
    changeImageCode() {
      this.timestampt = new Date().valueOf();
    },
    register() {
      this.changeImageCode();
      this.isLoading = true;
      axios
        .post(
          `${this.$store.state.apiUrl}/user/register`,
          qs.stringify({
            username: this.name,
            password: this.password,
            mobile: this.phone,
            email: this.email,
            imgcode: this.code
          })
        )
        .then(res => {
          this.isLoading = false;
          // console.log(res.data);
          if (res.data.msg === "注册成功") {
            this.$store.dispatch("setToken", res.data.result.token);
            // this.$store.dispatch("setToken");
          } else {
            this.hasError = true;
            this.errorMessage = res.data.msg;
          }
        })
        .catch(err => console.log(err));
    },
    created() {
      this.register();
    }
  }
};
</script>