<template>
  <v-layout row justify-center>
    <v-layout row wrap>
      <v-layout row>
        <v-flex xs12 sm12>
          <v-toolbar color="warning">
            <v-btn icon @click="toCategory">
              <v-icon>keyboard_arrow_left</v-icon>
            </v-btn>
            <v-toolbar-title>真人娱乐</v-toolbar-title>
          </v-toolbar>
        </v-flex>
      </v-layout>
      <!--  Main Page-->

      <v-flex xs12 sm12>
        <v-toolbar color="#FABC28" class="mt-2">
          <span>先去存款</span>
          <v-btn class="button_link" icon @click="toDeposit">
            <v-icon color="#756F72" medium>keyboard_arrow_right</v-icon>
          </v-btn>
        </v-toolbar>
      </v-flex>
      <v-flex xs12 sm12>
        <v-toolbar color="#FABC28">
          <span class="menu_text">先去转账</span>
          <v-btn class="button_link" icon @click="toTransfer">
            <v-icon color="#756F72" medium>keyboard_arrow_right</v-icon>
          </v-btn>
        </v-toolbar>
      </v-flex>
      <v-flex xs12 sm12>
        <v-toolbar color="#FABC28">
          <span class="menu_text">直接游戏</span>
          <v-btn :href="urlXJJ" icon class="button_link" target="_blank">
            <v-icon color="#756F72" medium>keyboard_arrow_right</v-icon>
          </v-btn>
        </v-toolbar>
      </v-flex>
    </v-layout>
  </v-layout>
</template>
<style>
.button_link {
  padding-left: 280px;
}
.menu_text {
  color: black;
}
.addData {
  background-color: white;
  border-radius: 5px;
  height: 40px;
  width: 250px;
}
.align_button {
  margin-left: 85px;
  margin-top: 50px;
  width: 200px;
  border-radius: 5px;
}
</style>
<script>
// import { ApiCheckTokenMixin } from "../mixins/ApiCheckTokenMixin";
import axios from "axios";
const qs = require("qs");
export default {
  // mixins: [ApiCheckTokenMixin],
  name: "Livegame",
  data: () => ({
    urlXJJ: "",
    urlNJJ: ""
  }),

  computed: {
    isLogin: function() {
      return this.$store.state.isLogin;
    }
  },
  watch: {
    isLogin: function(toGet) {
      if (toGet) {
        this.getGameUrl("XJJ");
      }
    }
  },
  methods: {
    toDeposit() {
      this.$router.push("/paymentarea");
    },
    toCategory() {
      this.$router.push("/category");
    },
    toTransfer() {
      this.$router.push("/transferbalance");
    },

    getGameUrl(gamePlatformId, gameId = 0) {
      axios
        .get(
          `${
            this.$store.state.apiUrl
          }/game/launchLottery?gamePlatformId=${gamePlatformId}&gameId=${gameId}`,
          {
            headers: {
              "X-Auth-Token": this.$store.state.token
            }
          }
        )
        .then(res => {
          if (gamePlatformId === "XJJ") {
            this.urlXJJ = res.data.result.game_url;
            // console.log(res.data);
            // console.log(this.urlXJJ)
          }
          if (gamePlatformId === "NJJ") {
            this.urlNJJ = res.data.result.game_url;
            // console.log(res.data)
          }
          if (gamePlatformId === "MG") {
            // console.log(res.data);
          }
        });
      // .catch(err => console.log(err));
    }
  },
  mounted() {
    if (this.isLogin) {
      this.getGameUrl("XJJ");
    }
  }
};
</script>


