<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-toolbar dark color="#EFB33A">
        <v-btn icon dark @click="backToHome">
          <v-icon>close</v-icon>
        </v-btn>
        <v-toolbar-title>用户信息</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-card color="#EFB33A" class="pt-3">
        <v-container fluid>
          <v-layout wrap>
            <v-flex xs12 sm6 md4>
              <v-text-field
                v-model="name"
                prepend-inner-icon="person"
                placeholder="请填入真实用户名"
                background-color="white"
                label="用户名"
                single-line
                solo
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md4>
              <v-text-field
                v-model="mobile"
                prepend-inner-icon="phone_iphone"
                placeholder="手机号码"
                background-color="white"
                single-line
                solo
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md4>
              <v-text-field
                v-model="email"
                prepend-inner-icon="contact_mail"
                placeholder="邮箱"
                background-color="white"
                single-line
                solo
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 d-flex>
              <v-select :items="items" v-model="gender" prepend-inner-icon="person" label="性别" solo></v-select>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                v-model="wechat"
                prepend-inner-icon="fab fa-weixin"
                placeholder="微信"
                background-color="white"
                single-line
                solo
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                v-model="qq"
                prepend-inner-icon="fab fa-qq"
                placeholder="QQ 邮箱"
                background-color="white"
                single-line
                solo
                required
              ></v-text-field>
            </v-flex>
            <v-btn round color="red" block @click="updateUserInfo()">下一步</v-btn>
          </v-layout>
        </v-container>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<style>
.resize_card {
  width: 100%;
  margin-bottom: 10px;
}
</style>

<script>
import axios from "axios";
import { bus } from "@/main";
const qs = require("qs");
export default {
  data() {
    return {
      isLoading: false,
      alertMessage: "",
      hasAlert: false,
      dialog: true,
      notifications: false,
      sound: true,
      widgets: false,
      show1: false,
      name: "",
      mobile: "",
      email: "",
      wechat: "",
      qq: "",
      gender: "",
      items: ["男", "女"]
    };
  },
  methods: {
    backToHome() {
      dialog: false;
      this.$router.push("/usercenter");
    },

    getUserInfo() {
      axios
        .get(`${this.$store.state.apiUrl}/account/getUserInfo`, {
          headers: {
            "X-Auth-Token": this.$store.state.token
          }
        })
        .then(res => {
          this.$store.dispatch("setUserInfo", res.data.result);

          (this.name = res.data.result.real_name),
            (this.mobile = res.data.result.mobile),
            (this.email = res.data.result.email);
          console.log(res);
        })
        .catch(err => console.log(err));
    },
    updateUserInfo() {
      this.isLoading = true;
      axios
        .post(
          `${this.$store.state.apiUrl}/user/update/`,
          qs.stringify({
            real_name: this.name,
            mobile: this.mobile,
            gender: this.gender,
            email: this.email,
            wechat: this.wechat,
            qq: this.qq
            // sex: this.sex
          }),
          {
            headers: {
              "X-Auth-Token": this.$store.state.token
            }
          }
        )
        .then(res => {
          if (res.data.msg === "ok") {
            // console.log(res.data.msg);
            this.hasAlert = true;
            this.alertMessage = "信息更新成功";
            this.getUserInfo();
            this.isLoading = false;
          } else {
            this.hasAlert = true;
            this.alertMessage = res.data.msg;
          }
        });
      // .catch(err => console.log(err));
    }
  },
  mounted() {
    bus.$on("doneSettingUserInfo", () => {
      this.name = this.$store.state.userInfo.real_name;
      this.email = this.$store.state.userInfo.email;
      this.phone = this.$store.state.userInfo.mobile;
      this.wechat = this.$store.state.userInfo.wechat;
      this.qq = this.$store.state.userInfo.qq;
      this.gender = this.$store.state.userInfo.gender;
    });
  },

  created() {
    this.getUserInfo();
  }
};
</script>