<template>
  <v-app>
    <v-content style="background-color:#916001">
      <v-container fluid class="pa-0" flat>
        <router-view/>
      </v-container>
    </v-content>

    <BottomNav/>
  </v-app>
</template>

<script>
import BottomNav from "./components/BottomNav";
// import UserCenter from "./components/UserCenter";
import axios from "axios";
const qs = require("qs");
export default {
  name: "App",
  components: {
    BottomNav
  },
  data() {
    return {
      //
    };
  },
  methods: {
    getDepositeInfo() {
      axios
        .get(`${this.$store.state.apiUrl}/account/deposit/paytypes`, {
          headers: {
            "X-Auth-Token": this.$store.state.token
          }
        })
        .then(res => {
          // console.log(res.data)
          this.$store.dispatch("setDepositeInfo", res.data.result);
        });
      // .catch(err => console.log(err));
    }
  },
  computed: {
    isLogin: function() {
      return this.$store.state.isLogin;
    }
  },
  watch: {
    isLogin: function(toGet) {
      if (toGet) {
        this.getDepositeInfo();
      }
    }
  },
  created() {}
};
</script>
