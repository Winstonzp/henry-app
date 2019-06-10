<template></template>
<script>
import axios from "axios";

export default {
  data: () => ({
    isLogin: false
  }),

  methods: {
    logout() {
      this.isLoading = true;
      axios
        .get(`${this.$store.state.apiUrl}/logout`)
        .then(() => {
          this.$store.dispatch("setToken", "");
          localStorage.removeItem("token");
          this.$store.dispatch("removeToken");
          this.isLoading = false;
          this.$router.push("/");
        })
        .catch(err => console.log(err));
    }
  },
  created() {
    this.logout();
  }
};
</script>