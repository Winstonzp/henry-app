<template>
  <v-expansion-panel v-model="panelIndex" expand>
    <v-expansion-panel-content v-for="(panel,i) in panels" :key="i">
      <template v-slot:header>
        <div>
          <v-icon color="black" medium>{{panel.icon}}</v-icon>
          <span class="headline green--text text--darken-1 font-weight-bold">&nbsp;{{panel.name}}</span>
        </div>
      </template>
      <v-card class="ma-1" :is="panel.content"></v-card>
    </v-expansion-panel-content>
    <TokenExpiredDialog/>
  </v-expansion-panel>
</template>
<script>
import AddBankCard from "./AddBankCard.vue";
import BankCardList from "./BankCardList.vue";
import TokenExpiredDialog from "./TokenExpiredDialog.vue";
import { apiMethods } from "@/main";

export default {
  name: "BankInfo",
  components: {
    AddBankCard,
    BankCardList,
    TokenExpiredDialog
  },
  data() {
    return {
      panelIndex: [false],
      panels: [
        { name: "银行卡", icon: "credit_card", content: `BankCardList` },
        {
          name: "添加银行卡",
          icon: "add",
          content: `AddBankCard`
        }
      ]
    };
  },
  methods: {},
  mounted() {
    if (localStorage.getItem("token") != null) {
      if (localStorage.getItem("token").length > 10) {
        this.$store.dispatch("setToken", localStorage.getItem("token"));
        //check login status api should be applied here
        apiMethods.checkToken();
      }
    }
  }
};
</script>
