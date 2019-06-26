<template>
  <v-container class="pa-0">
    <v-layout row>
      <v-toolbar class="firstPart">
        <v-btn icon @click="backToHome">
          <v-icon>keyboard_arrow_left</v-icon>
        </v-btn>
        <v-toolbar-title>资金记录</v-toolbar-title>
      </v-toolbar>
    </v-layout>
    <!-- Date Picker-->

    <v-flex xs12 sm6>
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
          <v-layout>
            <v-flex>
              <v-card class="firstPart">
                <v-combobox
                  class="pt-3"
                  v-model="dates"
                  multiple
                  chips
                  label="请选择搜索日期"
                  prepend-inner-icon="event"
                  readonly
                  v-on="on"
                  clearable
                ></v-combobox>
                <v-btn
                  class="searchbutton"
                  @click="getRecords"
                  :disabled="isLoading"
                  :loading="isLoading"
                  color="red"
                >搜索</v-btn>
              </v-card>
            </v-flex>
          </v-layout>
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
                <v-list-tile-content class="align-end">{{ props.item.createTime }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>类型</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ props.item.type }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>金额</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ props.item.amount }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>变后余额</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ props.item.aftBalance }}</v-list-tile-content>
              </v-list-tile>
            </v-list>
          </v-card>
        </v-flex>
      </template>
    </v-data-iterator>
    <v-layout>
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
    </v-layout>
    <v-layout>
      <v-flex>
        <v-alert :value="true" type="info" v-if="records.length === 0">无数据</v-alert>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<style>
</style>

<script>
import { checkTokenMixin } from "../mixins/checkTokenMixin.js";
import TokenExpiredDialog from "./TokenExpiredDialog";
import axios from "axios";
const qs = require("qs");
export default {
  components: {
    TokenExpiredDialog
  },
  data: () => ({
    dates: [],
    menu: false,
    isLoading: false,
    records: [],
    errorMessage: "",
    hasError: false,
    rowsPerPageItems: [2, 4, 8, 12],
    pagination: {
      rowsPerPage: 4
    }
  }),
  methods: {
    backToHome() {
      dialog: false;
      this.$router.push("/usercenter");
    },
    getRecords() {
      this.isLoading = true;
      axios
        .post(
          `${this.$store.state.apiUrl}/record/money`,
          qs.stringify({
            day: this.dateRange
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
        });
      // .catch(err => console.log(err));
    }
  },
  computed: {
    dateRange: function() {
      return `${this.dates[0]} - ${this.dates[1]}`;
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