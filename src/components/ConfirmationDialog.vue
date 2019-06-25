<template>
  <v-dialog max-width="600px" v-model="show">
    <slot slot="activator">activator</slot>
    <v-container grid-list-md text-xs-center :value="show">
      <v-layout row wrap>
        <v-flex>
          <v-card class="logoutdialog">
            <v-layout>
              <v-flex xs12 sm12 md12>
                <span style="color:#E6A23C ; font-size:22px">
                  <i class="fas fa-exclamation-circle"></i>
                </span>&nbsp;&nbsp;
                退出账户，是否继续？
              </v-flex>
            </v-layout>
            <v-layout>
              <v-flex xs4></v-flex>
              <v-flex xs4>
                <v-btn small color="error" @click.native="confirm">确定</v-btn>
              </v-flex>
              <v-flex xs4 class="mr-3">
                <v-btn small color="grey" outline @click.native="show=false">取消</v-btn>
              </v-flex>
            </v-layout>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-dialog>
</template>
<style>
.logoutdialog {
  border-radius: 8px;
}
</style>

<script>
export default {
  name: "ConfirmationDialog",
  components: {},
  data() {
    return {
      show: false
    };
  },
  methods: {
    confirm() {
      this.$emit("confirm");
      this.show = false;
    }
  }
};
</script>