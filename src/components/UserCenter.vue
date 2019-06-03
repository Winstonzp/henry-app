<template>
  <v-container class="pa-0">
    <v-layout row>
      <v-flex class="innerTab">
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
              <a href="#">
                <div>
                  <v-icon medium color="red">fas fa-hand-holding-usd</v-icon>
                </div>
                <span style="font-size:12px">转账</span>
              </a>
            </v-flex>
            <v-flex xs4 sm4 text-xs-center pt-4>
              <div>
                <v-icon medium color="red">fas fa-hand-holding-usd</v-icon>
              </div>
              <span style="font-size:12px">转账</span>
            </v-flex>
            <v-flex xs4 sm4 text-xs-center pt-4>
              <div>
                <v-icon medium color="red">fas fa-hand-holding-usd</v-icon>
              </div>
              <span style="font-size:12px">转账</span>
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
              <div>
                <v-icon medium color="red">fas fa-hand-holding-usd</v-icon>
              </div>
              <span style="font-size:12px">转账</span>
            </v-flex>
            <v-flex xs4 sm4 text-xs-center pt-4>
              <div>
                <v-icon medium color="red">fas fa-hand-holding-usd</v-icon>
              </div>
              <span style="font-size:12px">转账</span>
            </v-flex>
            <v-flex xs4 sm4 text-xs-center pt-4>
              <div>
                <v-icon medium color="red">fas fa-hand-holding-usd</v-icon>
              </div>
              <span style="font-size:12px">转账</span>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs4 sm4 text-xs-center pt-4>
              <div>
                <v-icon medium color="red">fas fa-hand-holding-usd</v-icon>
              </div>
              <span style="font-size:12px">转账</span>
            </v-flex>
            <v-flex xs4 sm4 text-xs-center pt-4>
              <div>
                <v-icon medium color="red">fas fa-hand-holding-usd</v-icon>
              </div>
              <span style="font-size:12px">转账</span>
            </v-flex>
            <v-flex xs4 sm4 text-xs-center pt-4>
              <div>
                <v-icon medium color="red">fas fa-hand-holding-usd</v-icon>
              </div>
              <span medium style="font-size:12px">转账</span>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs4 sm4 text-xs-center pt-4>
              <div>
                <v-icon medium color="red">fas fa-hand-holding-usd</v-icon>
              </div>
              <span style="font-size:12px">转账</span>
            </v-flex>
            <v-flex xs4 sm4 text-xs-center pt-4>
              <div>
                <v-icon medium color="red">fas fa-hand-holding-usd</v-icon>
              </div>
              <span style="font-size:12px">转账</span>
            </v-flex>
            <v-flex xs4 sm4 text-xs-center pt-4>
              <div>
                <v-icon medium color="red">fas fa-hand-holding-usd</v-icon>
              </div>
              <span style="font-size:12px">转账</span>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex xs4 sm4 text-xs-center pt-4>
              <div>
                <v-icon medium color="red">fas fa-hand-holding-usd</v-icon>
              </div>
              <span style="font-size:12px">转账</span>
            </v-flex>
            <v-flex xs4 sm4 text-xs-center pt-4>
              <div>
                <v-icon medium color="red">fas fa-hand-holding-usd</v-icon>
              </div>
              <span style="font-size:12px">转账</span>
            </v-flex>
            <v-flex xs4 sm4 text-xs-center pt-4>
              <div>
                <v-icon medium color="red">fas fa-hand-holding-usd</v-icon>
              </div>
              <span style="font-size:12px">转账</span>
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
  margin: 100px 20px;
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
a:hover {
  color: red;
}
a:link {
  color: black;
}
</style>
