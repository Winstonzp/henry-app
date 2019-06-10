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
                prepend-inner-icon="contact_mail"
                placeholder="邮箱"
                background-color="white"
                single-line
                solo
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 d-flex>
              <v-select :items="items" prepend-inner-icon="person" label="性别" solo></v-select>
            </v-flex>

            <v-flex xs12>
              <v-text-field
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
                prepend-inner-icon="fab fa-qq"
                placeholder="QQ 邮箱"
                background-color="white"
                single-line
                solo
                required
              ></v-text-field>
            </v-flex>
            <v-btn round color="red" block @click="dialog = false">下一步</v-btn>
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
export default {
  data() {
    return {
      dialog: true,
      notifications: false,
      sound: true,
      widgets: false,
      show1: false,
      items: ["男", "女"]
    };
  },
  methods: {
    backToHome() {
      dialog: false;
      this.$router.push("/usercenter");
    }
    // getuserinfo() {
    //   axios.get(`${this.$store.state.apiUrl}/account/getUserInfo`).then(res => {
    //     console.log(res);
    //     this.store.dispatch("setToken", res.data.result.token);
    //   });
    // }
  },
  created() {
    this.getuserinfo();
  }
};
</script>