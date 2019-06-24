<template>
  <v-container class="pa-0">
    <v-flex xs12 sm12>
      <v-toolbar dark color="warning">
        <v-btn icon dark @click="backToHome">
          <v-icon>keyboard_arrow_left</v-icon>
        </v-btn>
        <v-toolbar-title>添加银行卡</v-toolbar-title>
      </v-toolbar>
    </v-flex>
    <v-card class="py-4">
      <v-form ref="form" v-model="valid" class="px-4">
        <v-text-field
          v-model="name"
          :rules="nameRules"
          label="开户名"
          prepend-icon="account_circle"
          required
          :disabled="$store.state.userInfo.real_name != null"
        ></v-text-field>
        <v-text-field
          v-model="bankNumber"
          :counter="20"
          :rules="bankRules"
          label="银行卡号"
          prepend-icon="credit_card"
          type="number"
          required
        ></v-text-field>
        <v-text-field
          v-model="bankName"
          :rules="bankNameRules"
          label="开户银行"
          prepend-icon="fas fa-university"
          required
        ></v-text-field>
        <v-text-field
          v-model="bankBranch"
          :rules="bankBranchRules"
          label="支行名称"
          prepend-icon="fas fa-university"
          required
        ></v-text-field>

        <v-container fluid>
          <v-layout row>
            <v-flex xs12>
              <v-btn
                :disabled="isDisabled"
                color="success"
                :loading="isLoading"
                block
                @click.native="addBankCard"
              >立即提交</v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-form>
      <v-alert
        v-model="hasAlert"
        :value="true"
        icon="warning"
        type="info"
        outline
        dismissible
      >{{alertMessage}}</v-alert>
    </v-card>
  </v-container>
</template>
<script>
import axios from "axios";
const qs = require("qs");
import { bus } from "@/main";
import { apiMethods } from "@/main";

export default {
  name: "AddBankCard",
  components: {},
  data: () => ({
    alertMessage: "",
    hasAlert: false,
    isLoading: false,
    valid: false,
    name: "",
    nameRules: [
      v => !!v || "请输入开户名"
      //   v => (v && v.length <= 20) || "Name must be less than 20 characters"
    ],
    bankNumber: "",
    bankRules: [
      v => !!v || "请输入银行卡号",
      v =>
        (v && v.toString().length > 15 && v.toString().length < 21) ||
        "银行编号必须介于16到20之间"
    ],
    bankName: "",
    bankNameRules: [v => !!v || "请输入开户银行"],
    bankBranch: "",
    bankBranchRules: [v => !!v || "请输入支行名称"]
    // rules: {
    //   required: value => !!value || "Required."
    // }
  }),
  computed: {
    isDisabled() {
      if (this.valid === false || this.isLoading === true) {
        return true;
      } else {
        return false;
      }
    }
  },
  methods: {
    backToHome() {
      dialog: false;
      this.$router.push("/usercenter");
    },
    addBankCard() {
      this.isLoading = true;
      axios
        .post(
          `${this.$store.state.apiUrl}/user/bankCard/add`,
          qs.stringify({
            account: this.name,
            bank_no: this.bankNumber,
            bank_name: this.bankName,
            bank_branch: this.bankBranch
          }),
          {
            headers: {
              "X-Auth-Token": this.$store.state.token
            }
          }
        )
        .then(res => {
          this.isLoading = false;
          this.hasAlert = true;
          this.alertMessage = "添加银行卡成功";
          if (res.data.msg === "ok") {
            (this.bankNumber = ""),
              (this.bankName = ""),
              (this.bankBranch = "");
            bus.$emit("updateBankInfo");
            apiMethods.getUserInfo();
          } else {
            this.hasAlert = true;
            this.alertMessage = res.data.msg;
          }

          // this.getBankInfo();
          // this.displayBankCard();
        });
      // .catch(err => console.log(err));
    }
  },
  mounted() {
    bus.$on("doneSettingUserInfo", () => {
      this.name = this.$store.state.userInfo.real_name;
    });
    this.name = this.$store.state.userInfo.real_name;
  }
};
</script>