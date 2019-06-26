<template>
  <v-container class="pa-0">
    <v-toolbar class="firstPart" height="45px">
      <v-btn icon @click="backToHome">
        <v-icon>close</v-icon>
      </v-btn>
      <v-toolbar-title>平台余额</v-toolbar-title>
    </v-toolbar>
    <v-layout row>
      <v-flex>
        <v-card class="balanceheadercolor" height="200px">
          <div class="totalbalance">
            &nbsp;
            <span :value="totalBalance">{{totalBalance}}</span>
            <br>总资产
          </div>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex>
        <v-card height="30px" class="firstPart" xs12>
          <v-layout row>
            <v-flex class="pl-5" xs6 md6>资金明细</v-flex>
            <v-flex class="seebalance" xs6 md6>刷新额度</v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex>
        <v-card height="50px" class="mt-1" color="#916001" xs12>
          <v-layout row>
            <v-flex class="pl-5" xs4 sm4 md4>
              <img class="account_logo" src="@/assets/local.png" alt>
            </v-flex>
            <v-flex xs4 md4 sm4 class="pt-3 mr-5">主账号</v-flex>
            <v-flex class="pt-3 pl-4" xs4 md4>
              <b>{{mainBalance}}</b>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex>
        <v-card height="50px" class="mt-1" color="#916001" xs12>
          <v-layout row>
            <v-flex class="pl-5" xs4 sm4 md4>
              <img class="account_logo" src="@/assets/logo2.png" alt>
            </v-flex>
            <v-flex xs4 md4 sm4 class="pt-3 mr-5">新锦江娱乐</v-flex>
            <v-flex class="pt-3 pl-4" xs4 md4>
              <b>{{xjjBalance}}</b>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex>
        <v-card height="50px" class="mt-1" color="#916001" xs12>
          <v-layout row>
            <v-flex class="pl-5" xs4 sm4 md4>
              <img class="account_logo" src="@/assets/mg.png" alt>
            </v-flex>
            <v-flex xs4 md4 sm4 class="pt-3 mr-5">MG</v-flex>
            <v-flex class="pt-3 pl-4" xs4 md4>
              <b>{{mgBalance}}</b>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex>
        <v-card height="50px" class="mt-1" color="#916001" xs12>
          <v-layout row>
            <v-flex class="pl-5" xs4 sm4 md4>
              <img class="account_logo" src="@/assets/logo2.png" alt>
            </v-flex>
            <v-flex xs4 md4 sm4 class="pt-2 mr-5">新锦江娱乐(新版)</v-flex>
            <v-flex class="pt-3 pl-4" xs4 md4>
              <b>{{njjBalance}}</b>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs6 sm6 md6>
        <router-link to="/paymentarea">
          <v-btn class="ml-5 mt-3" color="info">存款</v-btn>
        </router-link>
      </v-flex>
      <v-flex xs6 sm6 md6>
        <router-link to="/withdrawarea">
          <v-btn class="ml-3 mt-3" color="info">提款</v-btn>
        </router-link>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<style>
.balanceheadercolor {
  background-image: linear-gradient(skyblue, white);
}
.totalbalance {
  padding: 70px 150px;
  font-size: 18px;
  font-weight: bold;
}
.account_logo {
  border-radius: 50%;
  width: 40px;
  height: 40px;
  margin-top: 5px;
}
.account_text {
  margin-left: 20px;
  margin-bottom: 20px;
}
.seebalance {
  padding-left: 100px;
}
</style>
<script>
import { checkTokenMixin } from "../mixins/checkTokenMixin.js";
import TokenExpiredDialog from "../components/TokenExpiredDialog";
import axios from "axios";
export default {
  components: {
    TokenExpiredDialog
  },
  data() {
    return {
      mainBalance: 0,
      xjjBalance: 0,
      njjBalance: 0,
      mgBalance: 0
    };
  },
  methods: {
    backToHome() {
      dialog: false;
      this.$router.push("/usercenter");
    },
    getPlatformBalance(id) {
      axios
        .get(
          `${
            this.$store.state.apiUrl
          }/account/getPlatformBalance?platformId=${id}`,

          {
            headers: {
              "X-Auth-Token": this.$store.state.token
            }
          }
        )
        .then(res => {
          console.log(res);
          if (res.data.msg === "ok") {
            if (id === 0) {
              this.mainBalance = res.data.result.balance;
            }
            if (id === 32) {
              this.xjjBalance = res.data.result.balance;
            }
            if (id === 33) {
              this.mgBalance = res.data.result.balance;
            }
            if (id === 35) {
              this.njjBalance = res.data.result.balance;
            }
          }
        });
    }
  },
  created() {
    this.getPlatformBalance(0);
    this.getPlatformBalance(32);
    this.getPlatformBalance(33);
    this.getPlatformBalance(35);
  },
  computed: {
    totalBalance() {
      var total;
      total =
        this.mainBalance + this.xjjBalance + this.njjBalance + this.mgBalance;
      return total;
    }
  },
  mixins: [checkTokenMixin],
  mounted() {
    if (localStorage.getItem("token") != null) {
      this.$store.dispatch("setToken", localStorage.getItem("token"));
      this.checkToken(localStorage.getItem("token"));
    }
  }
};
</script>


