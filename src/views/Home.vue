<template>
  <Index/>
</template>

<script>
import Index from "../components/Index";
import { checkTokenMixin } from "../mixins/checkTokenMixin.js";
import TokenExpiredDialog from "../components/TokenExpiredDialog";
export default {
  components: {
    Index,
    TokenExpiredDialog
  },
  data() {
    return {};
  },
  mounted() {
    if (localStorage.getItem("token") != null) {
      this.$store.dispatch("setToken", localStorage.getItem("token"));
      this.checkToken(localStorage.getItem("token"));
    }
  },
  mixins: [checkTokenMixin]
};
</script>
