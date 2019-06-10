<template>
  <v-container class="pa-0">
    <v-layout row>
      <v-flex class="innerTab">
        <v-layout>
          <v-flex class="account_button">
            <v-btn color="warning" large fab top>
              <v-icon>account_circle</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
        <v-card class="outerTab">
          <v-layout row>
            <v-flex xs6 sm6 text-xs-center>
              <div class="showBalance">0.00</div>
              <div>账户余额(元)</div>
            </v-flex>
            <v-flex xs6 sm6 text-xs-center>
              <div></div>
              <div class="totalBalance">总资产(元)</div>
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
                <span style="font-size:12px">转账</span>
              </router-link>
            </v-flex>
            <v-flex xs4 sm4 text-xs-center pt-4>
              <router-link to="/withdrawarea">
                <div>
                  <v-icon medium color=" red">fas fa-hand-holding-usd</v-icon>
                </div>
                <span style="font-size:12px">提款</span>
              </router-link>
            </v-flex>
            <v-flex xs4 sm4 text-xs-center pt-4>
              <router-link to="/paymentarea">
                <div>
                  <v-icon medium color="blue">fas fa-piggy-bank</v-icon>
                </div>
                <span style="font-size:12px">存款</span>
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
                <span style="font-size:12px">用户信息</span>
              </router-link>
            </v-flex>
            <v-flex xs4 sm4 text-xs-center pt-4>
              <router-link to="/paymenthistory">
                <div>
                  <v-icon medium color="blue">fas fa-file-invoice-dollar</v-icon>
                </div>
                <span style="font-size:12px">存款记录</span>
              </router-link>
            </v-flex>
            <v-flex xs4 sm4 text-xs-center pt-4>
              <router-link to="/withdrawhistory">
                <div>
                  <v-icon medium color="#8BEE22">fas fa-file-signature</v-icon>
                </div>
                <span style="font-size:12px">提款记录</span>
              </router-link>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs4 sm4 text-xs-center pt-4>
              <router-link to="/transferhistory">
                <div>
                  <v-icon medium color="#EA625B">fas fa-file-contract</v-icon>
                </div>
                <span style="font-size:12px">转账记录</span>
              </router-link>
            </v-flex>
            <v-flex xs4 sm4 text-xs-center pt-4>
              <router-link to="/bethistory">
                <div>
                  <v-icon medium color="#1DE3B0">fas fa-file-alt</v-icon>
                </div>
                <span style="font-size:12px">投注记录</span>
              </router-link>
            </v-flex>
            <v-flex xs4 sm4 text-xs-center pt-4>
              <router-link to="/fundhistory">
                <div>
                  <v-icon medium color="blue">fas fa-file-signature</v-icon>
                </div>
                <span medium style="font-size:12px">资金记录</span>
              </router-link>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs4 sm4 text-xs-center pt-4>
              <router-link to="/securitysetting">
                <div>
                  <v-icon medium color="#4BEA54">fas fa-user-shield</v-icon>
                </div>
                <span style="font-size:12px">安全设置</span>
              </router-link>
            </v-flex>
            <v-flex xs4 sm4 text-xs-center pt-4>
              <router-link to="/refreshcode">
                <div>
                  <v-icon medium color="red">refresh</v-icon>
                </div>
                <span style="font-size:12px">自助洗码</span>
              </router-link>
            </v-flex>
            <v-flex xs4 sm4 text-xs-center pt-4>
              <div>
                <v-icon medium color="#571CE8">fas fa-gift</v-icon>
              </div>
              <span style="font-size:12px">优惠活动</span>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs4 sm4 text-xs-center pt-4>
              <router-link to="/addbankcard">
                <div>
                  <v-icon medium color="blue">credit_card</v-icon>
                </div>
                <span style="font-size:12px">银行卡</span>
              </router-link>
            </v-flex>
            <v-flex xs4 sm4 text-xs-center pt-4>
              <router-link to="/myagent">
                <div>
                  <v-icon medium color="blue">fas fa-users</v-icon>
                </div>
                <span style="font-size:12px">我的代理</span>
              </router-link>
            </v-flex>
            <v-flex xs4 sm4 text-xs-center pt-4>
              <router-link to="/logout">
                <div>
                  <v-icon medium color="red">power_settings_new</v-icon>
                </div>
                <span style="font-size:12px">退出账户</span>
              </router-link>
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<style>
.innerTab {
  background-color: #cda469;
  height: 200px;
}
.outerTab {
  margin: 17px 20px;
  height: 200px;
  border-radius: 10px;
}
.outerTab1 {
  margin: 100px 20px;
  padding-bottom: 20px;
  border-radius: 10px;
}
.showBalance {
  padding-top: 35px;
}
.totalBalance {
  padding-top: 50px;
}
.account_button {
  margin-left: 145px;
}
</style>
