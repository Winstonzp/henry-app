<template>
  <v-layout row wrap>
    <v-layout row>
      <v-toolbar dark color="warning">
        <v-btn icon dark @click="backToHome">
          <v-icon>keyboard_arrow_left</v-icon>
        </v-btn>
        <v-toolbar-title>佣金发放</v-toolbar-title>
      </v-toolbar>
    </v-layout>
    <!-- Date Picker-->
    <v-flex xs12 sm12>
      <v-alert :value="true" type="info">
        您的邀请码: {{code}}, 已推荐好友: {{people}} 人,
        已获得: {{cost}}佣金
      </v-alert>
    </v-flex>
    <v-flex xs12>
      <v-text-field v-model="name" :counter="20" label="用户名" prepend-inner-icon="person"></v-text-field>
    </v-flex>

    <v-flex xs12 sm12>
      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :nudge-right="40"
        :return-value.sync="dates"
        lazy
        transition="scale-transition"
        offset-y
        full-width
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-combobox
            class="pt-3"
            v-model="dates"
            background-color="white"
            multiple
            chips
            flat
            label="请选择搜索日期"
            prepend-inner-icon="event"
            readonly
            v-on="on"
            solo
            clearable
          ></v-combobox>
          <v-btn
            class="align_button"
            @click="getRecords"
            :disabled="isLoading"
            :loading="isLoading"
            color="info"
          >搜索</v-btn>
        </template>

        <v-date-picker v-model="dates" locale="zh-cn" multiple no-title scrollable>
          <v-btn flat color="primary" @click="menu = false">取消</v-btn>
          <v-btn flat color="primary" @click="$refs.menu.save(dates)">确定</v-btn>
        </v-date-picker>
      </v-menu>
    </v-flex>
    <!-- Date Picker finished-->

    <v-data-iterator
      :items="records"
      :rows-per-page-items="rowsPerPageItems"
      :pagination.sync="pagination"
      row
      wrap
      v-if="records.length > 0"
    >
      <template v-slot:item="props">
        <v-flex xs12 sm6 md4 lg3>
          <v-card>
            <v-list dense>
              <v-list-tile>
                <v-list-tile-content>时间</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ props.item.created_at }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>佣金</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ props.item.money }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>备注</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ props.item.remark }}</v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-card>
        </v-flex>
      </template>
    </v-data-iterator>
    <v-flex>
      <v-alert
        v-model="hasError"
        :value="true"
        color="error"
        icon="warning"
        outline
        dismissible
        error
      >{{errorMessage}}</v-alert>
    </v-flex>
    <!-- <v-flex>
      <v-alert :value="true" type="info" v-if="records.length === 0">无数据</v-alert>
    </v-flex>-->
  </v-layout>
</template>
<style>
.align_button {
  margin-left: 80px;
  margin-top: 0px;
}
</style>

<script>
import axios from "axios";
const qs = require("qs");
export default {
  data: () => ({
    dates: [],
    menu: false,
    isLoading: false,
    records: [],
    errorMessage: "",
    code: "",
    people: "",
    cost: "",
    name: "",
    hasError: false,
    rowsPerPageItems: [2, 4, 8, 12],
    pagination: {
      rowsPerPage: 4
    }
  }),
  methods: {
    backToHome() {
      dialog: false;
      this.$router.push("/myagent");
    },
    getRecords() {
      this.isLoading = true;
      axios
        .post(
          `${this.$store.state.apiUrl}/agent/myCommission`,
          qs.stringify({
            day: this.dateRange,
            username: this.name,
            page: 1,
            limit: 10
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
            this.records = res.data.result;
          } else {
            this.hasError = true;
            this.errorMessage = res.data.msg;
          }
          console.log(res);
        });
      // .catch(err => console.log(err));
    },
    getAgentInfo() {
      axios
        .get(`${this.$store.state.apiUrl}/agent/getInfo`, {
          headers: {
            "X-Auth-Token": this.$store.state.token
          }
        })
        .then(res => {
          (this.code = res.data.result.invitationCode),
            (this.people = res.data.result.childNum),
            (this.cost = res.data.result.rebateSum);
          console.log(res);
        });
    }
  },
  computed: {
    dateRange: function() {
      return `${this.dates[0]} - ${this.dates[1]}`;
    }
  },
  created() {
    this.getAgentInfo();
  }
};
</script>