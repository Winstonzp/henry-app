<template >
  <v-card>
    <v-bottom-nav :value="true" app class="yellow darken-2">
      <v-btn color="#F13525" to="/" flat>
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
      <v-btn color="#F13525" to="/login" flat v-show="$store.state.token == null">
        <span>登陆</span>
        <v-icon>lock_open</v-icon>
      </v-btn>
      <v-btn color="#F13525" to="/usercenter" flat v-show="$store.state.token != null">
        <span>会员中心</span>
        <v-icon>person</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-card>
</template>
<script>
export default {
  name: "BottomNav",
  data() {
    return {
      drawer: null
    };
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
span {
  font-family: "微软雅黑";

  font-size: 15px;
}
</style>
