<template>
  <div>
    <v-layout row>
      <v-flex xs12>
        <v-card color="#EFB33A" height="45px">
          <h3 class="headerText">分类</h3>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs3>
        <v-list class="orange">
          <v-list-tile v-for="item in items" :key="item.title">
            <v-list-tile-content>
              <v-list-tile-title>
                <v-divider></v-divider>
                <a href="#">{{ item.title }}</a>
              </v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-flex>
      <v-flex xs11>
        <v-card color="brown" height="700px"></v-card>
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

      right: null
    };
  }
};
</script>
<style>
.headerText {
  text-align: center;
  padding-top: 10px;
}
</style>
