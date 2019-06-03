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
      <v-card color="#EFB33A" class="pt-3">
        <v-container fluid>
          <v-layout wrap>
            <v-flex xs12 sm6 md4>
              <v-text-field
                prepend-inner-icon="exit_to_app"
                placeholder="推荐码（非必填）"
                background-color="white"
                single-line
                solo
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md4>
              <v-text-field
                prepend-inner-icon="person"
                placeholder="用户名"
                background-color="white"
                single-line
                solo
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 md4>
              <v-text-field
                v-model="password"
                prepend-inner-icon="lock"
                :append-icon="show1 ? 'visibility' : 'visibility_off'"
                :rules="[rules.required, rules.min]"
                :type="show1 ? 'text' : 'password'"
                name="input-10-1"
                placeholder="密码"
                hint="密码必须填 12 个 数字 或 字母"
                counter
                @click:append="show1 = !show1"
                solo
                single-line
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                prepend-inner-icon="phone_iphone"
                placeholder="手机号"
                background-color="white"
                single-line
                solo
                required
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                prepend-inner-icon="vpn_lock"
                placeholder="验证码"
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
<script>
export default {
  data() {
    return {
      dialog: true,
      notifications: false,
      sound: true,
      widgets: false,
      show1: false,
      password: "Password",
      rules: {
        required: value => !!value || "请输入密码.",
        min: v => v.length >= 12 || "密码必须填 12 个 数字 或 字母"
      }
    };
  },
  methods: {
    backToHome() {
      dialog: false;
      this.$router.push("/");
    },
    register() {}
  }
};
</script>