<template >
  <v-layout>
    <v-flex>
      <v-card height="50" class="white" flat>
        <img src="@/assets/logo.png" alt="error" class="logoImage">
      </v-card>
      <v-card height="160" class flat>
        <v-carousel hide-delimiters hide-controls height="160" interval="3000">
          <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
        </v-carousel>
      </v-card>
      <v-card height="35" color="#EFB33A" flat>
        <marquee-text
          :duration="20"
        >1,尊敬的客户：您好，大额支付建议您使用银行卡入款，笔笔可享最高1.5%优惠！详情可咨询在线客服哦. 2,特别通告：【电子】【棋牌】【捕鱼】全新返水升级，全网最劲爆的游戏平台尽在澳门威尼斯人。</marquee-text>
      </v-card>

      <v-card color="orange" class="pt-2">
        <v-card height="250" color="#EFB33A" flat>
          <v-layout row>
            <v-flex xs10>
              <p class="layoutText">
                平台推荐 &nbsp; &nbsp;
                精彩荟萃,激情无限
              </p>
            </v-flex>
            <v-flex xs2 class="pt-4">
              <a href>
                More
                <i class="fas fa-chevron-right"></i>
              </a>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs3>
              <v-card></v-card>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex>
              <v-card></v-card>
            </v-flex>
          </v-layout>
        </v-card>
        <v-card color="orange" class="pt-2">
          <v-card height="230" color="#EFB33A" flat>
            <v-layout row>
              <v-flex xs10>
                <p class="layoutText">
                  精选大促 &nbsp; &nbsp;
                  各种优惠为您撑腰
                </p>
              </v-flex>
              <v-flex xs2 class="pt-4">
                <a href>
                  More
                  <i class="fas fa-chevron-right"></i>
                </a>
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
        src: "https://line.xwiht.cn/QUC/imgs/15584354210091234.jpg"
      },
      {
        src: "https://line.xwiht.cn/QUC/imgs/1558437245325猴子.jpg"
      },
      {
        src: "https://line.xwiht.cn/QUC/imgs/1558440285885daixm.jpg"
      },
      {
        src: "https://line.xwiht.cn/QUC/imgs/1558436265047捕鱼1.jpg"
      },
      {
        src: "https://line.xwiht.cn/QUC/imgs/1552732533284首页2453.png"
      },
      {
        src: "https://line.xwiht.cn/QUC/imgs/1558432826800末端.jpg"
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
</style>




