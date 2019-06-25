<template>
  <v-layout row justify-center>
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <v-toolbar height="40px" class="firstPart">
        <v-btn icon @click="backToHome">
          <v-icon>keyboard_arrow_left</v-icon>
        </v-btn>
        <v-toolbar-title>用户信息</v-toolbar-title>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-card color="#FFC236" class="pt-3">
        <v-layout>
          <v-flex>
            <v-card class="firstPart my-3">
              <v-text-field
                v-model="name"
                prepend-inner-icon="person"
                placeholder="请填入真实用户名"
                label="用户名"
                required
                :disabled="$store.state.userInfo.real_name != null"
                class="px-3"
              ></v-text-field>

              <v-text-field
                v-model="mobile"
                prepend-inner-icon="phone_iphone"
                label="手机号码"
                placeholder="手机号码"
                required
                :disabled="$store.state.userInfo.mobile != null"
                class="px-3"
              ></v-text-field>

              <v-text-field
                :disabled="$store.state.userInfo.email != null"
                v-model="email"
                prepend-inner-icon="contact_mail"
                label="邮箱"
                placeholder="邮箱"
                required
                class="px-3"
              ></v-text-field>

              <v-select
                :items="items"
                v-model="gender"
                class="px-3"
                prepend-inner-icon="person"
                label="性别"
              ></v-select>

              <v-text-field
                v-model="wechat"
                prepend-inner-icon="fab fa-weixin"
                label="微信"
                placeholder="微信"
                required
                class="px-3"
              ></v-text-field>

              <v-text-field
                v-model="qq"
                prepend-inner-icon="fab fa-qq"
                label="QQ 邮箱"
                placeholder="QQ 邮箱"
                required
                class="px-3"
              ></v-text-field>
              <v-text-field
                v-model="created"
                prepend-inner-icon="date_range"
                label="注册时间"
                placeholder="注册时间"
                required
                class="px-3"
              ></v-text-field>
            </v-card>
          </v-flex>
        </v-layout>
        <v-flex>
          <v-btn
            block
            color="red"
            :disabled="isDisabled"
            :loading="isLoading"
            @click="updateUserInfo()"
          >立即提交</v-btn>
        </v-flex>

        <v-layout>
          <v-flex>
            <v-alert
              v-model="hasAlert"
              :value="true"
              type="success"
              icon="warning"
              solo
              dismissible
            >{{alertMessage}}</v-alert>
          </v-flex>
        </v-layout>
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
import { checkTokenMixin } from "../mixins/checkTokenMixin.js";
import TokenExpiredDialog from "../components/TokenExpiredDialog";
import axios from "axios";
import { bus } from "@/main";
const qs = require("qs");
export default {
  components: {
    TokenExpiredDialog
  },
  data() {
    return {
      alertMessage: "",
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
      items: ["男", "女"],
      created: ""
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
            qq: this.qq,
            regdate: this.created
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
  computed: {
    isDisabled() {
      if (this.valid === false || this.isLoading === true) {
        return true;
      } else {
        return false;
      }
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
      this.created = this.$store.state.userInfo.regdate;
    });
    if (localStorage.getItem("token") != null) {
      this.$store.dispatch("setToken", localStorage.getItem("token"));
      this.checkToken(localStorage.getItem("token"));
    }
  },

  created() {
    this.getUserInfo();
  },
  mixins: [checkTokenMixin]
};
</script>