import axios from "axios";
export const checkTokenMixin = {
  methods: {
    checkToken(token) {
      axios({
        method: "get",
        url: "http://47.90.100.229:20000/api/check",
        headers: { "X-Auth-Token": token }
      }).then(res => {
        if (res.data.code === 101) {
          this.$store.dispatch("setToken", "");
          localStorage.removeItem("token");
          this.$store.dispatch("removeToken");
          this.$router.push("/tokenexpired");
        }
        if (res.data.msg === "ok") {
          this.$store.dispatch("isLoginTrue");
        }
        if (res.data.msg === "refresh") {
          this.$store.dispatch("setToken", res.data.result.token);
        }
      });
    }
  }
};
