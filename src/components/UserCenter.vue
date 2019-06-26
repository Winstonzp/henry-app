<template>
  <v-container class="pa-0">
    <v-layout row>
      <v-flex class="innerTab">
        <v-layout row>
          <v-flex>
            <div class="profile">
              <h3>欢迎你,{{username}}</h3>
            </div>
          </v-flex>
        </v-layout>
        <v-layout>
          <v-flex>
            <!-- <span class="userprofile" style="font-size: 4em; color: #2196F3;">
              <i class="fas fa-user-circle"></i>
            </span>-->
            <img class="profile_logo" src="@/assets/logo2.png" alt>
          </v-flex>
        </v-layout>
        <v-card class="outerTab">
          <v-layout row>
            <v-flex xs6 sm6 text-xs-center>
              <div class="showBalance">
                <h3>￥{{mainBalance}}</h3>
              </div>
              <div>账户余额(元)</div>
            </v-flex>
            <v-flex xs6 sm6 text-xs-center>
              <div class="showBalance">
                <h3>{{totalBalance}}</h3>
              </div>
              <div>
                总资产(元)
                <router-link to="/querybalance">
                  <span class="arrow">
                    <i class="fas fa-chevron-right"></i>
                  </span>
                </router-link>
              </div>
            </v-flex>
          </v-layout>
          <br>
          <hr>
          <v-layout row>
            <v-flex xs4 sm4 text-xs-center pt-4>
              <router-link to="/transferbalance">
                <div>
                  <v-icon medium color="green">fas fa-comments-dollar</v-icon>
                </div>
                <span style="font-size:12px;color:grey">转账</span>
              </router-link>
            </v-flex>
            <v-flex xs4 sm4 text-xs-center pt-4>
              <router-link to="/withdrawarea">
                <div>
                  <v-icon medium color=" red">fas fa-hand-holding-usd</v-icon>
                </div>
                <span style="font-size:12px;color:grey">提款</span>
              </router-link>
            </v-flex>
            <v-flex xs4 sm4 text-xs-center pt-4>
              <router-link to="/paymentarea">
                <div>
                  <v-icon medium color="blue">fas fa-piggy-bank</v-icon>
                </div>
                <span style="font-size:12px;color:grey">存款</span>
              </router-link>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex class="pt-3">
        <v-card class="outerTab1">
          <v-layout row>
            <v-flex xs4 sm4 text-xs-center pt-4>
              <router-link to="/usersetting">
                <div>
                  <v-icon medium color="#8652EE">fas fa-users-cog</v-icon>
                </div>
                <span style="font-size:12px;color:grey">用户信息</span>
              </router-link>
            </v-flex>
            <v-flex xs4 sm4 text-xs-center pt-4>
              <router-link to="/paymenthistory">
                <div>
                  <v-icon medium color="blue">fas fa-file-invoice-dollar</v-icon>
                </div>
                <span style="font-size:12px;color:grey">存款记录</span>
              </router-link>
            </v-flex>
            <v-flex xs4 sm4 text-xs-center pt-4>
              <router-link to="/withdrawhistory">
                <div>
                  <v-icon medium color="#8BEE22">fas fa-file-signature</v-icon>
                </div>
                <span style="font-size:12px;color:grey">提款记录</span>
              </router-link>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs4 sm4 text-xs-center pt-4>
              <router-link to="/transferhistory">
                <div>
                  <v-icon medium color="#EA625B">fas fa-file-contract</v-icon>
                </div>
                <span style="font-size:12px;color:grey">转账记录</span>
              </router-link>
            </v-flex>
            <v-flex xs4 sm4 text-xs-center pt-4>
              <router-link to="/bethistory">
                <div>
                  <v-icon medium color="#1DE3B0">fas fa-file-alt</v-icon>
                </div>
                <span style="font-size:12px;color:grey">投注记录</span>
              </router-link>
            </v-flex>
            <v-flex xs4 sm4 text-xs-center pt-4>
              <router-link to="/fundhistory">
                <div>
                  <v-icon medium color="blue">fas fa-file-signature</v-icon>
                </div>
                <span medium style="font-size:12px;color:grey">资金记录</span>
              </router-link>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs4 sm4 text-xs-center pt-4>
              <router-link to="/securitysetting">
                <div>
                  <v-icon medium color="#4BEA54">fas fa-user-shield</v-icon>
                </div>
                <span style="font-size:12px;color:grey">安全设置</span>
              </router-link>
            </v-flex>
            <v-flex xs4 sm4 text-xs-center pt-4>
              <router-link to="/refreshcode">
                <div>
                  <v-icon medium color="red">refresh</v-icon>
                </div>
                <span style="font-size:12px;color:grey">自助洗码</span>
              </router-link>
            </v-flex>
            <v-flex xs4 sm4 text-xs-center pt-4>
              <div>
                <v-icon medium color="#571CE8">fas fa-gift</v-icon>
              </div>
              <span style="font-size:12px;color:grey">优惠活动</span>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs4 sm4 text-xs-center pt-4>
              <router-link to="/bankcardlist">
                <div>
                  <v-icon medium color="blue">credit_card</v-icon>
                </div>
                <span style="font-size:12px;color:grey">银行卡</span>
              </router-link>
            </v-flex>
            <v-flex xs4 sm4 text-xs-center pt-4>
              <router-link to="/myagent">
                <div>
                  <v-icon medium color="blue">fas fa-users</v-icon>
                </div>
                <span style="font-size:12px;color:grey">我的代理</span>
              </router-link>
            </v-flex>
            <v-flex xs4 sm4 text-xs-center pt-4>
              <ConfirmationDialog @confirm="logout">
                <div>
                  <v-icon medium color="red">power_settings_new</v-icon>
                </div>
                <span style="font-size:12px;color:grey">退出账户</span>
              </ConfirmationDialog>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
    <!-- <v-layout row justify-center>
      <v-dialog v-model="showDialog" max-width="290">
        <v-btn flat></v-btn>
      </v-dialog>
    </v-layout>-->
  </v-container>
</template>
<script>
import { checkTokenMixin } from "../mixins/checkTokenMixin.js";
import ConfirmationDialog from "./ConfirmationDialog.vue";
import TokenExpiredDialog from "./TokenExpiredDialog";
import axios from "axios";
export default {
  name: "UserCenter",
  components: {
    ConfirmationDialog,
    TokenExpiredDialog
  },
  data() {
    return {
      mainBalance: 0,
      username: "",
      xjjBalance: 0,
      njjBalance: 0,
      mgBalance: 0
    };
  },
  mixins: [checkTokenMixin],
  methods: {
    logout() {
      this.isLoading = true;
      axios
        .get(`${this.$store.state.apiUrl}/logout`)
        .then(() => {
          this.$store.dispatch("setToken", "");
          localStorage.removeItem("token");
          this.$store.dispatch("removeToken");
          this.isLoading = false;
          this.$router.push("/");
        })
        .catch(err => console.log(err));
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
    },
    getUserInfo() {
      axios
        .get(`${this.$store.state.apiUrl}/account/getUserInfo`, {
          headers: {
            "X-Auth-Token": this.$store.state.token
          }
        })
        .then(res => {
          this.$store.dispatch("setUserInfo", res.data.result);

          (this.username = res.data.result.username), console.log(res);
        })
        .catch(err => console.log(err));
    }
  },
  created() {
    this.getPlatformBalance(0);
    this.getPlatformBalance(32);
    this.getPlatformBalance(33);
    this.getPlatformBalance(35);
    this.getUserInfo();
  },
  computed: {
    totalBalance() {
      var total;
      total =
        this.mainBalance + this.xjjBalance + this.njjBalance + this.mgBalance;
      return total;
    }
  },
  mounted() {
    if (localStorage.getItem("token") != null) {
      this.$store.dispatch("setToken", localStorage.getItem("token"));
      this.checkToken(localStorage.getItem("token"));
    }
  }
};
</script>

<style>
.innerTab {
  background-color: #cda469;
  height: 240px;
}
.outerTab {
  padding-bottom: 10px;
  margin-left: 20px;
  margin-right: 20px;
  height: 190px;
  border-radius: 10px;
}
.outerTab1 {
  margin: 90px 20px;
  padding-bottom: 20px;
  border-radius: 10px;
}
.showBalance {
  padding-top: 35px;
}
.totalBalance {
  padding-top: 50px;
}

.profile {
  padding-left: 120px;
  padding-top: 30px;
  color: #666666;
}
.userprofile {
  padding-left: 160px;
}
.arrow {
  margin-left: 20px;
}
.profile_logo {
  margin-left: 140px;
  margin-top: 5px;
  width: 80px;
  height: 80px;
}
</style>
