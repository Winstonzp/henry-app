<template>
  <v-container fluid grid-list-md>
    <v-data-iterator
      :items="bankCards"
      :rows-per-page-items="rowsPerPageItems"
      :pagination.sync="pagination"
      row
      wrap
      v-if="bankCards.length>0"
    >
      <template v-slot:item="props">
        <v-flex xs12 sm6 md4 lg3>
          <v-card>
            <v-card-title>
              <h4>银行: {{ props.item.bankName }}</h4>
            </v-card-title>
            <v-divider></v-divider>
            <v-list dense>
              <v-list-tile>
                <v-list-tile-content>开户名:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ props.item.account }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>卡号:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ props.item.cardNumber }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <v-list-tile-content>开户行:</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ props.item.bankBranch }}</v-list-tile-content>
              </v-list-tile>
              <v-list-tile>
                <ConfirmationDialog @confirm="deleteBank(props.item.id)">
                  <v-btn
                    color="red lighten-2"
                    block
                    depressed
                    flat
                    :loading="isLoading"
                    :disabled="isLoading"
                  >
                    <v-icon>delete_forever</v-icon>
                    <span>删除</span>
                  </v-btn>
                </ConfirmationDialog>

                <!-- <v-list-tile-content>Delete</v-list-tile-content>
                <v-list-tile-content class="align-end">{{ props.item.id }}</v-list-tile-content>-->
              </v-list-tile>
            </v-list>
          </v-card>
        </v-flex>
      </template>
    </v-data-iterator>
    <v-alert :value="true" type="info" v-if="bankCards.length === 0">无数据</v-alert>
  </v-container>
</template>
<script>
import ConfirmationDialog from "./ConfirmationDialog.vue";
import axios from "axios";
const qs = require("qs");
import { bus } from "@/main";

export default {
  name: "BankCardList",
  data: () => ({
    rowsPerPageItems: [2, 4, 6],
    pagination: {
      rowsPerPage: 2
    },
    isLoading: false,
    bankId: ""
  }),
  components: {
    ConfirmationDialog
  },

  computed: {
    bankCards() {
      return Array.from(this.$store.state.bankInfo);
    }
  },
  methods: {
    getBankInfo() {
      this.isLoading = true;
      axios
        .get(`${this.$store.state.apiUrl}/user/bankCards`, {
          headers: {
            "X-Auth-Token": this.$store.state.token
          }
        })
        .then(res => {
          this.$store.dispatch("setBankInfo", res.data.result);
          this.isLoading = false;
          this.getBankInfo();
          this.isLoading = false;
        });
      // .catch(err => console.log(err));
    },
    deleteBank(bankId) {
      this.isLoading = true;

      axios
        .post(
          `${this.$store.state.apiUrl}/user/bankCard/del`,
          qs.stringify({
            id: bankId
          }),
          {
            headers: {
              "X-Auth-Token": this.$store.state.token
            }
          }
        )
        .then(() => {
          this.deleteBank();
          this.isLoading = false;
          this.getBankInfo();
          this.isLoading = false;

          //return code 1 when only one bank card is left
        });
      // .catch(err => console.log(err));
    }
  },
  created() {
    this.getBankInfo();
  }
};
</script>