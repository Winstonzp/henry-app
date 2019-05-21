<template >
  <v-container>
    <v-bottom-nav :value="true" absolute color="#F5A314">
      <v-btn color="#F13525" to="/home" flat>
        <span>首页</span>
        <v-icon>home</v-icon>
      </v-btn>
      <v-btn color="#F13525" to="/category" flat>
        <span>分类</span>
        <v-icon>desktop_mac</v-icon>
      </v-btn>
      <v-btn class="b1" color="#F13525" to="/register" flat>
        <span>注册</span>
        <v-icon>edit</v-icon>
      </v-btn>
      <v-btn color="#F13525" to="/customer" flat>
        <span>客户</span>
        <v-icon>people</v-icon>
      </v-btn>
      <v-btn color="#F13525" to="/login" flat>
        <span>登陆</span>
        <v-icon>lock_open</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-container>
</template>
<script>
export default {
  name: "BottomNav",
  data() {
    return {};
  },
  methods: {
    // activeNav() {
    //   this.$router.push("/home");
    //   this.$router.push("/category");
    // }
  }
};
</script>
<style>
</style>
