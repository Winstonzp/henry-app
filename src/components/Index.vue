<template >
  <v-layout>
    <v-flex>
      <v-card height="50" class="FFC236" flat>
        <img src="@/assets/logo.png" alt="error" class="logoImage">
      </v-card>
      <v-card height="160" class flat>
        <v-carousel hide-delimiters hide-controls height="160" interval="3000">
          <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.pic"></v-carousel-item>
        </v-carousel>
      </v-card>
      <v-card height="35" color="#EFB33A" flat>
        <marquee-text
          :duration="20"
        >1,尊敬的客户：您好，大额支付建议您使用银行卡入款，笔笔可享最高1.5%优惠！详情可咨询在线客服哦. 2,特别通告：【电子】【棋牌】【捕鱼】全新返水升级，全网最劲爆的游戏平台尽在澳门威尼斯人。</marquee-text>
      </v-card>
      <v-card class="pt-2" color="#D68508">
        <v-card height="250" class="firstPart" flat>
          <v-layout row>
            <v-flex xs10>
              <p class="layoutText">
                平台推荐 &nbsp; &nbsp;
                精彩荟萃,激情无限
              </p>
            </v-flex>
            <v-flex xs2 class="pt-4">
              <router-link to="/category">
                更多
                <i class="fas fa-chevron-right"></i>
              </router-link>
            </v-flex>
          </v-layout>
          <v-layout class="gameRow" row>
            <v-flex xs3>
              <router-link to="/game/1">
                <img class="logo_pic" src="@/assets/MGgame.jpg" alt>
              </router-link>
            </v-flex>
            <v-flex xs3>
              <router-link to="/game/2">
                <img class="logo_pic" src="@/assets/MGgame.jpg" alt>
              </router-link>
            </v-flex>
            <v-flex xs3>
              <router-link to="/game/3">
                <img class="logo_pic" src="@/assets/MGgame.jpg" alt>
              </router-link>
            </v-flex>
            <v-flex xs3>
              <router-link to="/game/4">
                <img class="logo_pic" src="@/assets/MGgame.jpg" alt>
              </router-link>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs3>
              <h5 class="gameTitle">MG 电子1</h5>
            </v-flex>
            <v-flex xs3>
              <h5 class="gameTitle">MG 电子2</h5>
            </v-flex>
            <v-flex xs3>
              <h5 class="gameTitle">MG 电子3</h5>
            </v-flex>
            <v-flex xs3>
              <h5 class="gameTitle">MG 电子4</h5>
            </v-flex>
          </v-layout>
          <v-layout class="gameRow" row>
            <v-flex xs3>
              <router-link to="/category">
                <img class="logo_pic" src="@/assets/gameX.png" alt>
              </router-link>
            </v-flex>
            <v-flex xs3>
              <router-link to="/category">
                <img class="logo_pic" src="@/assets/gameXs.png" alt>
              </router-link>
            </v-flex>
            <v-flex xs3>
              <router-link to="/category">
                <img class="logo_pic" src="@/assets/game4.jpg" alt>
              </router-link>
            </v-flex>
            <v-flex xs3>
              <router-link to="/category">
                <v-btn color="#EFDBAB" fab>
                  <span style="font-size:40px; color:red ">
                    <i class="fas fa-gift"></i>
                  </span>
                </v-btn>
              </router-link>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs3>
              <h5 class="gameTitle">百家乐</h5>
            </v-flex>
            <v-flex xs3>
              <h5 class="gameTitle">百家乐</h5>
            </v-flex>
            <v-flex xs3>
              <h5 class="gameTitle">龙虎</h5>
            </v-flex>
            <v-flex xs3>
              <h5 class="gameTitle">优惠</h5>
            </v-flex>
          </v-layout>
        </v-card>
        <v-card color="#D68508" class="pt-2">
          <v-card height="280" class="firstPart" flat>
            <v-layout row>
              <v-flex xs10>
                <p class="layoutText">
                  精选大促 &nbsp; &nbsp;
                  各种优惠为您撑腰
                </p>
              </v-flex>
              <v-flex xs2 class="pt-4">
                <router-link to="/category">
                  更多
                  <i class="fas fa-chevron-right"></i>
                </router-link>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex class="px-2" xs6>
                <v-img :src="offerOne.image" width="170px" height="190px" alt="error"></v-img>
              </v-flex>
              <v-flex xs6>
                <v-layout row>
                  <v-flex class="pr-2" xs12>
                    <v-img :src="offerTwo.image" width="170px" height="90px" alt="error"></v-img>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex class="pr-2 pt-2" xs12>
                    <v-img :src="offerThree.image" width="170px" height="90px" alt="error"></v-img>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-card>
        </v-card>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import axios from "axios";
export default {
  data: () => ({
    items: [
      {
        pic: "https://line.xwiht.cn/QUC/imgs/15584354210091234.jpg"
      },
      {
        pic: "https://line.xwiht.cn/QUC/imgs/1558437245325猴子.jpg"
      },
      {
        pic: "https://line.xwiht.cn/QUC/imgs/1558440285885daixm.jpg"
      },
      {
        pic: "https://line.xwiht.cn/QUC/imgs/1558436265047捕鱼1.jpg"
      },
      {
        pic: "https://line.xwiht.cn/QUC/imgs/1552732533284首页2453.png"
      },
      {
        pic: "https://line.xwiht.cn/QUC/imgs/1558432826800末端.jpg"
      }
    ],
    offerOne: "",
    offerTwo: "",
    offerThree: ""
  }),
  methods: {
    getOffers() {
      axios
        .get(`${this.$store.state.apiUrl}/activity/list`, {
          headers: {
            "X-Auth-Token": this.$store.state.token
          }
        })
        .then(res => {
          this.offerOne = res.data.result[0];
          this.offerTwo = res.data.result[1];
          this.offerThree = res.data.result[2];
        });
    }
  },
  created() {
    this.getOffers();
  }
};
</script>

<style>
.logoImage {
  padding-left: 105px;
}
a:link {
  color: red;
  text-decoration: none;
}
.layoutText {
  padding-left: 20px;
  padding-top: 20px;
  font-family: "微软雅黑";
}
.gameTitle {
  text-align: center;
}
.gameRow {
  padding-left: 16px;
}
.firstPart {
  background-image: linear-gradient(
    to right,
    #f9b018,
    #fac22f,
    #fcd94b,
    #fac533,
    #fab11a
  );
}
.logo_pic {
  border-radius: 50%;
  width: 55px;
  height: 55px;
  margin-top: 5px;
  margin-left: 5px;
}
</style>




