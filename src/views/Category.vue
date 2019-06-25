<template>
  <v-container class="pa-0">
    <v-layout>
      <v-flex xs12>
        <v-card class="firstPart" height="45px">
          <h3 class="headerText">分类</h3>
        </v-card>
      </v-flex>
    </v-layout>

    <v-layout class="#916001" row>
      <v-flex class="yellow darken-2" style="height:850px" xs3>
        <div
          v-for="item in items"
          :key="item.title"
          class="my-2"
          :class="{ myRedbrown: current==item.title }"
        >
          <div
            class="leftPadding py-3"
            @click="current=item.title"
            v-if="item.title!='电子' "
          >{{item.title}}</div>
          <div
            class="leftPadding py-3"
            @click="toLink(item.title)"
            v-if="item.title=='电子'"
          >{{item.title}}</div>
        </div>
      </v-flex>
      <v-flex xs9 v-if="current=='真人'">
        <v-layout v-for="live in lives" :key="live.title" row>
          <v-flex class="pl-2 pt-2" xs6>
            <v-img width="115px" height="85px" contain :src="live.image"></v-img>
          </v-flex>
          <v-flex width="115px" height="85px" class="pt-2 pr-2" xs6>
            <div style="color:white; font-weight:bold">{{live.title}}</div>
            <div style="color:#E3BA36 ;font-size:12px">{{live.subname}}</div>
            <v-flex class="pt-1">
              <v-btn
                @click="linkLivegame"
                v-if="$store.state.token != null"
                round
                small
                color="#B87B1D"
              >
                <span style="color:white; font-size:12px">开始游戏</span>
              </v-btn>
            </v-flex>
            <v-flex class="pt-1">
              <v-btn
                @click="linkLogin"
                outline
                v-if="$store.state.token == null"
                round
                small
                color="grey"
              >
                <span style="color:white; font-size:13px">开始游戏</span>
              </v-btn>
            </v-flex>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs9 v-if="current=='优惠'">
        <v-layout v-for="offer in offers" :key="offer.id" row>
          <v-flex class="pl-2 pt-3" xs6>
            <v-img width="110px" height="80px" contain :src="offer.image"></v-img>
          </v-flex>
          <v-flex width="115px" height="85px" class="pt-2" xs6>
            <span style="color:orange">{{offer.name}}</span>
            <v-flex class="pt-1">
              <v-btn round small @click.native="redirect(offer.id)" color="error">
                <span style="color:white">查看详情</span>
              </v-btn>
            </v-flex>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import axios from "axios";
import Game from "../components/Game";
import { checkTokenMixin } from "../mixins/checkTokenMixin.js";
import TokenExpiredDialog from "../components/TokenExpiredDialog";
const qs = require("qs");

export default {
  components: {
    Game,
    TokenExpiredDialog
  },
  data() {
    return {
      page: Number(this.$route.params.page),
      games: [],
      offers: [],
      redirectingUrl:
        "http://47.90.100.229:20001/coloum/discount_detail.html?id=",
      items: [
        { title: "真人" },
        { title: "电子" },
        { title: "优惠" },
        { title: "棋牌" },
        { title: "电竞" },
        { title: "体育" },
        { title: "彩票" },
        { title: "红包" },
        { title: "帮助" },
        { title: "关于" }
      ],
      lives: [
        {
          image: require("../assets/livegame.png"),
          title: "现场百家乐",
          subname: "实体赌场 现场玩家"
        },
        {
          image: require("../assets/livegame1.jpg"),
          title: "极速百家乐",
          subname: "专业游戏研发 提供最佳品质"
        },
        {
          image: require("../assets/livegame2.jpg"),
          title: "现场龙虎",
          subname: "实体赌场 现场玩家"
        },
        {
          image: require("../assets/livegame3.jpg"),
          title: "极速龙虎",
          subname: "极速玩法 趣味多多"
        }
      ],

      current: "真人"
    };
  },
  methods: {
    toLink(title) {
      if (title == "电子") {
        this.$router.push("/game/1");
      }
      // if (title == "优惠") this.$router.push("/");
    },
    backToHome() {
      this.$router.push("/");
    },
    linkLivegame() {
      this.$router.push("/livegame");
    },
    linkLogin() {
      this.$router.push("/login");
    },
    getOffers() {
      axios
        .get(`${this.$store.state.apiUrl}/activity/list`, {
          headers: {
            "X-Auth-Token": this.$store.state.token
          }
        })
        .then(res => {
          console.log(res);
          this.offers = res.data.result;
        });
      // .catch(err => console.log(err));1
    },
    redirect(url) {
      window.open(this.redirectingUrl + url, "_blank");
    }
  },
  created() {
    this.getOffers();
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
<style>
.headerText {
  text-align: center;
  padding-top: 10px;
}
.leftPadding {
  padding-left: 30px;
  color: white;
  font-family: "微软雅黑";
}

.myRedbrown {
  background-color: #916001;
}
</style>
