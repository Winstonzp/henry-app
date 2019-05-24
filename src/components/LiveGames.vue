<template>
  <div>
    <v-layout row>
      <v-flex xs12>
        <v-card color="#EFB33A" height="45px">
          <h3 class="headerText">分类</h3>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout style="background-color:#916001" row>
      <v-flex class="yellow darken-2" xs3>
        <div
          v-for="item in items"
          :key="item.title"
          :class="{brown: current==item.title}"
          class="myMargin"
        >
          <div class="leftPadding py-3" @click="current = item.title">{{item.title}}</div>
        </div>
      </v-flex>
      <v-flex xs9>
        <v-layout v-for="s in sss" :key="s.title" row>
          <v-flex class="pl-3" xs6>
            <v-img width="115px" height="85px" contain :src="s.pic"></v-img>
          </v-flex>
          <v-flex width="115px" height="85px" class="pt-2" xs6>
            <span style="color:orange">{{s.title}}</span>
            <v-flex class="pt-1">
              <v-btn round small color="error">
                <span style="color:white">开始游戏</span>
              </v-btn>
            </v-flex>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </div>
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
      sss: [
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
.myMargin {
  margin-top: 1px;
  margin-bottom: 1px;
}
</style>
