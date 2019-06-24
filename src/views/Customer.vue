<template>
  <PersonContact/>
</template>

<script>
import PersonContact from "../components/PersonContact.vue";
import { checkTokenMixin } from "../mixins/checkTokenMixin.js";
import TokenExpiredDialog from "../components/TokenExpiredDialog";
export default {
  components: {
    PersonContact,
    TokenExpiredDialog
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

