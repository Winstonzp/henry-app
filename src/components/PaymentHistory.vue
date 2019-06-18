<template>
  <v-layout row wrap>
    <v-layout row>
      <v-toolbar dark color="warning">
        <v-btn icon dark @click="backToHome">
          <v-icon>keyboard_arrow_left</v-icon>
        </v-btn>
        <v-toolbar-title>提款记录</v-toolbar-title>
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
          <v-combobox
            class="pt-3"
            v-model="dates"
            background-color="white"
            multiple
            chips
            flat
            label="请选择搜索日期"
            prepend-icon="event"
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
                <v-list-tile-content>存款类型</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ props.item.type }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>存款时间</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ props.item.createTime }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>金额</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ props.item.amount }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>红利</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ props.item.dividend }}</v-list-tile-content>
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
    <v-flex>
      <v-alert :value="true" type="info" v-if="records.length === 0">无数据</v-alert>
    </v-flex>
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
          `${this.$store.state.apiUrl}/record/deposit`,
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
          console.log(res);
        });
      // .catch(err => console.log(err));
    }
  },
  computed: {
    dateRange: function() {
      return `${this.dates[0]} - ${this.dates[1]}`;
    }
  }
};
</script>