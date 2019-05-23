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
              prepend-inner-icon="person"
              placeholder="请输入手机号/用户名"
              background-color="white"
              single-line
              solo
            ></v-text-field>
            <v-text-field
              prepend-inner-icon="lock"
              placeholder="密码"
              background-color="white"
              single-line
              solo
            ></v-text-field>
            <v-btn color="red" block @click="dialog = false">
              <span style="color:white">登陆</span>
            </v-btn>
          </v-flex>
        </v-container>
      </v-card>
    </v-dialog>
  </v-layout>
</template>
<script>
export default {
  data() {
    return {
      dialog: true,
      notifications: false,
      sound: true,
      widgets: false
    };
  },
  methods: {
    backToHome() {
      dialog: false;
      this.$router.push("/");
    }
  }
};
</script>