<template>
  <v-container class="pa-0">
    <v-layout row>
      <v-flex xs12 sm12>
        <v-toolbar height="40px " color="#FAC12E">
          <v-btn icon @click="backToHome">
            <v-icon>keyboard_arrow_left</v-icon>
          </v-btn>
          <v-toolbar-title style="color:#624100">
            <b>MG电子</b>
          </v-toolbar-title>
        </v-toolbar>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex>
        <v-card height="100px" color="#121212">
          <img src="../assets/logo1.png" class="pl-5 py-4">
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex>
        <v-card height="30px" color="#29CA8B">
          <span style="color:white">热门游戏</span>
        </v-card>
      </v-flex>
    </v-layout>
    <!-- pagination -->
    <div class="text-xs-center grey">
      <v-pagination
        v-model="page"
        color="#659CD9"
        :length="10"
        :total-visible="6"
        @input="paging(page)"
      ></v-pagination>
    </div>
    <!-- api content -->
    <v-container class="pa-0">
      <v-layout row wrap justify-space-around>
        <v-flex v-for="game in games" :key="game.id" xs4>
          <v-card widht="100px" height="120px" class="mx-2 my-2" color="#31392B">
            <!-- <span class="game_name">{{game.name}}</span> -->
            <v-img :src="game.img_path" widht="50px" height="80px" contain class="grey darken-4"></v-img>
            <v-btn small round color="orange" v-if="isLogin" @click.native="goToGame(game.url)">进路游戏</v-btn>
            <LoginDialog v-if="!isLogin" class="d-flex">
              <v-btn color="grey">进路游戏</v-btn>
            </LoginDialog>
            <!-- <a href="#" v-if="!isLogin">
              <v-img :src="game.img_path" height="150" contain class="grey darken-4 my-1"></v-img>
            </a>-->
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
    <v-layout row justify-center>
      <v-dialog v-model="showDialog" max-width="290">
        <v-btn loading class="henry-ml" flat></v-btn>
      </v-dialog>
    </v-layout>
    <TokenExpiredDialog/>
  </v-container>
</template>

<script>
import { apiMethods } from "@/main";
import axios from "axios";
const qs = require("qs");

import Signin from "../components/Signin.vue";
import TokenExpiredDialog from "../components/TokenExpiredDialog.vue";

export default {
  name: "Game",
  components: {
    Signin,
    TokenExpiredDialog
  },
  data() {
    return {
      games: [],
      page: Number(this.$route.params.page),
      showDialog: false
    };
  },
  computed: {
    isLogin: function() {
      return this.$store.state.isLogin;
    }
  },
  watch: {
    isLogin: function(toGet) {
      if (toGet) {
        this.getGames(this.$route.params.page);
      }
    }
  },
  methods: {
    backToHome() {
      dialog: false;
      this.$router.push("/usercenter");
    },
    paging(page) {
      this.$router.push({
        name: "game",
        params: { page: page }
      });
      this.getGames(page);
    },
    getGames(page) {
      this.showDialog = true;
      axios
        .post(
          `${this.$store.state.getGameLinkUrl}/game/getList`,
          qs.stringify({
            cid: "all",
            page: page
          }),
          {
            headers: {
              "X-Auth-Token": this.$store.state.token
            }
          }
        )
        .then(res => {
          console.log(res.data.result.list);
          this.games = res.data.result.list;
          this.showDialog = false;
          if (this.$store.state.isLogin) {
            this.getGameUrl(this.games);
          }
        });
      // .catch(err => console.log(err));
    },
    getGameUrl(games) {
      this.showDialog = true;
      games.forEach((game, index) => {
        axios
          .get(
            `${
              this.$store.state.apiUrl
            }/game/launchLottery?gamePlatformId='MG'&gameId=${game.id}`,
            {
              headers: {
                "X-Auth-Token": this.$store.state.token
              }
            }
          )
          .then(res => {
            this.games[index].url = res.data.result.game_url;
            this.showDialog = false;
          });

        // .catch(err => console.log(err));
      });
    },
    goToGame(url) {
      window.open(url);
    }
  },
  mounted() {
    this.getGames(this.$route.params.page);
    if (localStorage.getItem("token") != null) {
      if (localStorage.getItem("token").length > 10) {
        this.$store.dispatch("setToken", localStorage.getItem("token"));
        //check login status api should be applied here
        apiMethods.checkToken();
      }
    }
  }
};
</script>
<style scoped>
.henry-ml {
  margin-left: 35%;
}
/* .game_name {
  color: white;
  font-size: 11px;
  font-weight: bold;
  text-align: center;
} */
</style>

