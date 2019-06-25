<template>
  <v-container class="pa-0">
    <v-layout row>
      <v-flex xs12 sm12>
        <v-toolbar height="40px" class="firstPart">
          <v-btn icon @click="backToHome">
            <v-icon>keyboard_arrow_left</v-icon>
          </v-btn>
          <v-toolbar-title>我的代理</v-toolbar-title>
        </v-toolbar>
      </v-flex>
    </v-layout>
    <!--  Main Page-->
    <v-layout>
      <v-flex>
        <v-flex xs12 sm12>
          <v-toolbar class="firstPart mt-2">
            <span>下线资料</span>
            <v-btn class="button_link" icon @click="displayOfflineInfo">
              <v-icon color="#756F72" medium>keyboard_arrow_right</v-icon>
            </v-btn>
          </v-toolbar>
        </v-flex>
        <v-flex xs12 sm12>
          <v-toolbar class="firstPart">
            <span class="menu_text">下线输赢</span>
            <v-btn class="button_link" icon @click="displayLiveInfo">
              <v-icon color="#756F72" medium>keyboard_arrow_right</v-icon>
            </v-btn>
          </v-toolbar>
        </v-flex>
        <v-flex xs12 sm12>
          <v-toolbar class="firstPart">
            <span class="menu_text">佣金发放</span>
            <v-btn class="button_link" icon @click="displayCommission">
              <v-icon color="#756F72" medium>keyboard_arrow_right</v-icon>
            </v-btn>
          </v-toolbar>
        </v-flex>
        <v-flex xs12 sm12>
          <v-toolbar class="firstPart">
            <span class="menu_text">代理制度</span>
            <v-btn class="button_link" icon @click="displayAgentInfo">
              <v-icon color="#756F72" medium>keyboard_arrow_right</v-icon>
            </v-btn>
          </v-toolbar>
        </v-flex>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<style>
.button_link {
  padding-left: 280px;
}
.menu_text {
  color: black;
}
.addData {
  background-color: white;
  border-radius: 5px;
  height: 40px;
  width: 250px;
}
.align_button {
  margin-left: 85px;
  margin-top: 50px;
  width: 200px;
  border-radius: 5px;
}
</style>

<script>
import OfflineHistory from "./OfflineHistory";
import WinLoseHistory from "./WinLoseHistory";
import CommissionHistory from "./CommissionHistory";
import AgentInfo from "./AgentInfo";
import { checkTokenMixin } from "../mixins/checkTokenMixin.js";
import TokenExpiredDialog from "./TokenExpiredDialog";
export default {
  components: {
    OfflineHistory,
    WinLoseHistory,
    CommissionHistory,
    AgentInfo,
    TokenExpiredDialog
  },
  data() {
    return {};
  },
  methods: {
    backToHome() {
      dialog: false;
      this.$router.push("/usercenter");
    },

    displayOfflineInfo() {
      this.$router.push("/offlinehistory");
    },
    displayLiveInfo() {
      this.$router.push("/winlosehistory");
    },
    displayCommission() {
      this.$router.push("/commissionhistory");
    },
    displayAgentInfo() {
      this.$router.push("/agentinfo");
    }
  },
  mounted() {
    if (localStorage.getItem("token") != null) {
      this.$store.dispatch("setToken", localStorage.getItem("token"));
      this.checkToken(localStorage.getItem("token"));
    }
  },
  mixins: [checkTokenMixin]
};
</script>
