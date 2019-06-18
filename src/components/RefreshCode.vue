<template>
  <v-container class="pa-0" fluid grid-list-md>
    <v-toolbar dark color="warning">
      <v-btn icon dark @click="backToHome">
        <v-icon>keyboard_arrow_left</v-icon>
      </v-btn>
      <v-toolbar-title>提款记录</v-toolbar-title>
    </v-toolbar>
    <v-card-title>
      <h4 style="color:blue">可结洗码</h4>
    </v-card-title>
    <v-flex xs12>
      <v-text-field :placeholder="totalXimaMoney.toString()" flat solo disabled></v-text-field>
    </v-flex>
    <v-flex xs12>
      <v-btn
        color="warning"
        block
        :disabled="totalXimaMoney <= 0"
        :loading="isLoading"
        @click.native="refreshCode"
      >一键结算</v-btn>
    </v-flex>
    <v-alert
      v-model="hasAlert"
      :value="true"
      type="info"
      icon="warning"
      outline
      dismissible
    >{{alertMessage}}</v-alert>

    <v-data-iterator
      :items="refreshcode"
      :rows-per-page-items="rowsPerPageItems"
      :pagination.sync="pagination"
      row
      wrap
    >
      <template v-slot:item="props">
        <v-container fluid grid-list-md>
          <v-flex xs12 sm12 md4 lg3>
            <v-card>
              <v-card-title>
                <h4>各厅洗码</h4>
              </v-card-title>
              <v-divider></v-divider>
              <v-list dense>
                <v-list-tile>
                  <v-list-tile-content>平台</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ props.item.plat }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>洗码量</v-list-tile-content>
                  <v-list-tile-content class="align-end">
                    <span v-html="props.item.xima_allow_txt"></span>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>洗码比</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ props.item.xima_wj }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>洗码费</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ props.item.xima_money }}</v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-content>自助结算</v-list-tile-content>
                  <v-list-tile-content class="align-end">{{ props.item.xima_rate }}</v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>
        </v-container>
      </template>
    </v-data-iterator>
  </v-container>
</template>

  
<script>
import axios from "axios";
const qs = require("qs");
export default {
  name: "RefreshCode",
  components: {},
  data: () => ({
    hasAlert: false,
    alertMessage: "",
    refreshcode: [],
    rowsPerPageItems: [3, 4, 5],
    pagination: {
      rowsPerPage: 3
    },
    isLoading: false
  }),
  computed: {
    totalXimaMoney() {
      let money = 0;
      this.refreshcode.forEach(item => (money += item.xima_money));
      return money;
    }
  },
  methods: {
    backToHome() {
      dialog: false;
      this.$router.push("/usercenter");
    },
    getRefreshCodeInfo() {
      this.isLoading = true;
      axios
        .get(`${this.$store.state.apiUrl}/account/xima/getInfo`, {
          headers: {
            "X-Auth-Token": this.$store.state.token
          }
        })
        .then(res => {
          this.isLoading = false;
          console.log(res.data);
          this.refreshcode = Array.from(res.data.result);
        });
      // .catch(err => console.log(err));
    },
    refreshCode() {
      this.isLoading = true;
      axios
        .post(
          `${this.$store.state.apiUrl}/account/xima/jiesuan`,
          qs.stringify({
            platId: ""
          }),
          {
            headers: {
              "X-Auth-Token": this.$store.state.token
            }
          }
        )
        .then(res => {
          this.isLoading = false;
          if (res.data.msg === "ok") {
            this.hasAlert = true;
            this.alertMessage = "成功";
            this.getRefreshCodeInfo();
          } else {
            this.hasAlert = true;
            this.alertMessage = res.data.msg;
          }
          console.log(res);
        });
      // .catch(err => console.log(err));
    }
  },
  created() {
    this.getRefreshCodeInfo();
  }
};
</script>