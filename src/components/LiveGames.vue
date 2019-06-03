<template>
  <v-container class="pa-0">
    <v-flex xs12>
      <v-card color="#EFB33A" height="45px">
        <h3 class="headerText">分类</h3>
      </v-card>
    </v-flex>

    <v-layout class="#916001" row>
      <v-flex class="yellow darken-2" style="height:850px" xs3>
        <div
          v-for="item in items"
          :key="item.title"
          :class="{ myRedbrown: current==item.title}"
          class="my-2"
        >
          <div class="leftPadding py-3" @click="current = item.title">{{item.title}}</div>
        </div>
      </v-flex>
      <v-flex xs9 v-if="current=='电子'">
        <v-layout v-for="tabOne in tabOnes" :key="tabOne.title" row>
          <v-flex class="pl-3" xs6>
            <v-img width="115px" height="85px" contain :src="tabOne.pic"></v-img>
          </v-flex>
          <v-flex width="115px" height="85px" class="pt-2" xs6>
            <span style="color:orange">{{tabOne.title}}</span>
            <v-flex class="pt-1">
              <v-btn round small color="error">
                <span style="color:white">开始游戏</span>
              </v-btn>
            </v-flex>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs9 v-if="current=='棋牌'">
        <v-layout v-for="tabTwo in tabTwos" :key="tabTwo.title" row>
          <v-flex class="pl-3" xs6>
            <v-img width="115px" height="85px" contain :src="tabTwo.pic"></v-img>
          </v-flex>
          <v-flex width="115px" height="85px" class="pt-2" xs6>
            <span style="color:orange">{{tabTwo.title}}</span>
            <v-flex class="pt-1">
              <v-btn round small color="error">
                <span style="color:white">开始游戏</span>
              </v-btn>
            </v-flex>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs9 v-if="current=='真人'">
        <v-layout v-for="tabThree in tabThrees" :key="tabThree.title" row>
          <v-flex class="pl-3" xs6>
            <v-img width="115px" height="85px" contain :src="tabThree.pic"></v-img>
          </v-flex>
          <v-flex width="115px" height="85px" class="pt-2" xs6>
            <span style="color:orange">{{tabThree.title}}</span>
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
export default {
  data() {
    return {
      items: [
        { title: "电子" },
        { title: "棋牌" },
        { title: "真人" },
        { title: "电竞" },
        { title: "体育" },
        { title: "彩票" },
        { title: "红包" },
        { title: "优惠" },
        { title: "帮助" },
        { title: "关于" }
      ],
      right: null,
      tabOnes: [
        { pic: require("@/assets/casino.jpg"), title: "SW电子" },
        { pic: require("@/assets/casino.jpg"), title: "MG电子" },
        { pic: require("@/assets/casino.jpg"), title: "XJJ电子" },
        { pic: require("@/assets/casino.jpg"), title: "NJJ电子" },
        { pic: require("@/assets/casino.jpg"), title: "XAA电子" },
        { pic: require("@/assets/casino.jpg"), title: "EG电子" },
        { pic: require("@/assets/casino.jpg"), title: "VP电子" },
        { pic: require("@/assets/casino.jpg"), title: "LGD电子" },
        { pic: require("@/assets/casino.jpg"), title: "PSG电子" }
      ],
      tabTwos: [
        { pic: require("@/assets/casino.jpg"), title: "ABC电子" },
        { pic: require("@/assets/casino.jpg"), title: "DEF电子" },
        { pic: require("@/assets/casino.jpg"), title: "HIJ电子" },
        { pic: require("@/assets/casino.jpg"), title: "KLM电子" },
        { pic: require("@/assets/casino.jpg"), title: "OPQ电子" }
      ],
      tabThrees: [
        { pic: require("@/assets/casino.jpg"), title: "RST电子" },
        { pic: require("@/assets/casino.jpg"), title: "UV电子" },
        { pic: require("@/assets/casino.jpg"), title: "XR电子" },
        { pic: require("@/assets/casino.jpg"), title: "XS电子" },
        { pic: require("@/assets/casino.jpg"), title: "S5电子" },
        { pic: require("@/assets/casino.jpg"), title: "RS电子" },
        { pic: require("@/assets/casino.jpg"), title: "QOP电子" }
      ],

      current: "电子"
    };
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
</style>
