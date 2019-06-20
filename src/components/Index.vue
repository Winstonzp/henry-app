<template >
  <v-layout>
    <v-flex>
      <v-card height="50" class="white" flat>
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
        <v-card height="250" class="yellow darken-2" flat>
          <v-layout row>
            <v-flex xs10>
              <p class="layoutText">
                平台推荐 &nbsp; &nbsp;
                精彩荟萃,激情无限
              </p>
            </v-flex>
            <v-flex xs2 class="pt-4">
              <a href>
                更多
                <i class="fas fa-chevron-right"></i>
              </a>
            </v-flex>
          </v-layout>
          <v-layout class="gameRow" row>
            <v-flex xs3>
              <v-btn depressed fab dark color="purple">
                <v-icon>android</v-icon>
              </v-btn>
            </v-flex>
            <v-flex xs3>
              <v-btn depressed fab dark color="purple">
                <v-icon>android</v-icon>
              </v-btn>
            </v-flex>
            <v-flex xs3>
              <v-btn depressed fab dark color="purple">
                <v-icon>android</v-icon>
              </v-btn>
            </v-flex>
            <v-flex xs3>
              <v-btn depressed fab dark color="purple">
                <v-icon>android</v-icon>
              </v-btn>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs3>
              <h5 class="gameTitle">Game1</h5>
            </v-flex>
            <v-flex xs3>
              <h5 class="gameTitle">Game2</h5>
            </v-flex>
            <v-flex xs3>
              <h5 class="gameTitle">Game3</h5>
            </v-flex>
            <v-flex xs3>
              <h5 class="gameTitle">Game4</h5>
            </v-flex>
          </v-layout>
          <v-layout class="gameRow" row>
            <v-flex xs3>
              <v-btn depressed fab dark color="purple">
                <v-icon>android</v-icon>
              </v-btn>
            </v-flex>
            <v-flex xs3>
              <v-btn depressed fab dark color="purple">
                <v-icon>android</v-icon>
              </v-btn>
            </v-flex>
            <v-flex xs3>
              <v-btn depressed fab dark color="purple">
                <v-icon>android</v-icon>
              </v-btn>
            </v-flex>
            <v-flex xs3>
              <v-btn depressed fab dark color="purple">
                <v-icon>android</v-icon>
              </v-btn>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs3>
              <h5 class="gameTitle">Game5</h5>
            </v-flex>
            <v-flex xs3>
              <h5 class="gameTitle">Game6</h5>
            </v-flex>
            <v-flex xs3>
              <h5 class="gameTitle">Game7</h5>
            </v-flex>
            <v-flex xs3>
              <h5 class="gameTitle">Game8</h5>
            </v-flex>
          </v-layout>
        </v-card>
        <v-card color="#D68508" class="pt-2">
          <v-card height="230" class="yellow darken-2" flat>
            <v-layout row>
              <v-flex xs10>
                <p class="layoutText">
                  精选大促 &nbsp; &nbsp;
                  各种优惠为您撑腰
                </p>
              </v-flex>
              <v-flex xs2 class="pt-4">
                <a href>
                  更多
                  <i class="fas fa-chevron-right"></i>
                </a>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex class="px-2" xs6>
                <v-card width="160" height="163px">
                  <img src="@/assets/lady.jpg" alt="error">
                </v-card>
              </v-flex>
              <v-flex xs6>
                <v-layout row>
                  <v-flex class="pr-2" xs12>
                    <v-card width="180px" height="77px">
                      <img src="@/assets/lady2.jpg" alt="error">
                    </v-card>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex class="pr-2 pt-2" xs12>
                    <v-card width="180px" height="77px">
                      <img src="@/assets/lady3.jpg" alt="error">
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-card>
        </v-card>
        <v-card color="#D68508" class="pt-2">
          <v-card height="230" class="yellow darken-2" flat>
            <v-layout row>
              <v-flex xs10>
                <p class="layoutText">
                  精选大促 &nbsp; &nbsp;
                  各种优惠为您撑腰
                </p>
              </v-flex>
              <v-flex xs2 class="pt-4">
                <a href>
                  更多
                  <i class="fas fa-chevron-right"></i>
                </a>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex class="px-2" xs6>
                <v-card width="160" height="163px">
                  <img src="@/assets/lady.jpg" alt="error">
                </v-card>
              </v-flex>
              <v-flex xs6>
                <v-layout row>
                  <v-flex class="pr-2" xs12>
                    <v-card width="180px" height="77px">
                      <img src="@/assets/lady2.jpg" alt="error">
                    </v-card>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex class="pr-2 pt-2" xs12>
                    <v-card width="180px" height="77px">
                      <img src="@/assets/lady3.jpg" alt="error">
                    </v-card>
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
    ]
  })
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
</style>




