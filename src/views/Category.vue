<template>
  <v-container class="pa-0">
    <v-layout>
      <v-flex xs12>
        <v-card color="#EFB33A" height="45px">
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
            @click="current=i.title"
            v-if="item.title!='电子' & item.title!='优惠'"
          >{{item.title}}</div>
          <div
            class="leftPadding py-3"
            @click="toLink(item.title)"
            v-if="item.title=='电子' | item.title== '优惠'"
          >{{item.title}}</div>
        </div>
      </v-flex>
      <v-flex xs9 v-if="current=='电子'">
        <v-layout v-for="game in games" :key="game.id" row>
          <v-flex class="game_layout" xs6>
            <v-img width="110px" height="80px" contain :src="game.img_path"></v-img>
          </v-flex>
          <v-flex width="115px" height="85px" class="pt-2" xs6>
            <span style="color:orange">{{game.name}}</span>
            <v-flex class="pt-1">
              <v-btn round small color="error">
                <span style="color:white">开始游戏</span>
              </v-btn>
            </v-flex>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs9 v-if="current=='棋牌'">
        <v-layout v-for="game in games" :key="game.id" row>
          <v-flex class="pl-3" xs6>
            <v-img width="110px" height="80px" contain :src="game.img_path"></v-img>
          </v-flex>
          <v-flex width="115px" height="85px" class="pt-2" xs6>
            <span style="color:orange">{{game.name}}</span>
            <v-flex class="pt-1">
              <v-btn round small color="error">
                <span style="color:white">开始游戏</span>
              </v-btn>
            </v-flex>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs9 v-if="current=='真人'">
        <v-layout v-for="game in games" :key="game.id" row>
          <v-flex class="pl-3" xs6>
            <v-img width="115px" height="85px" contain :src="game.img_path"></v-img>
          </v-flex>
          <v-flex width="115px" height="85px" class="pt-2" xs6>
            <span style="color:orange">{{game.name}}</span>
            <v-flex class="pt-1">
              <v-btn round small color="error">
                <span style="color:white">开始游戏</span>
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

const qs = require("qs");

export default {
  components: {
    Game
  },
  data() {
    return {
      page: Number(this.$route.params.page),
      games: [],

      items: [
        { title: "真人" },
        { title: "电子" },
        { title: "棋牌" },
        { title: "电竞" },
        { title: "体育" },
        { title: "彩票" },
        { title: "红包" },
        { title: "优惠" },
        { title: "帮助" },
        { title: "关于" }
      ],

      current: "真人"
    };
  },
  methods: {
    toLink(title) {
      if (title == "电子") {
        this.$router.push("/game/1");
      }
      if (title == "优惠") this.$router.push("/");
    },
    backToHome() {
      this.$router.push("/");
    }
  }
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
.game_layout {
  padding: 1px 3px;
}
</style>
