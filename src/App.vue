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
import { checkTokenMixin } from "@/mixins/checkTokenMixin";
import BottomNav from "./components/BottomNav";

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
  mixins: [checkTokenMixin],
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
      if (this.$store.state.token == null) {
        return false;
      }
      if (this.$store.state.token != null) {
        return ture;
      }
    }
  },
  // watch: {
  //   isLogin: function(toGet) {
  //     if (toGet) {
  //       this.getDepositeInfo();
  //     }
  //   }
  // },
  created() {
    if (localStorage.getItem("token") != null) {
      this.$store.dispatch("setToken", localStorage.getItem("token"));
    }
  }
};
</script>
