<template>
  <v-dialog max-width="600px" v-model="show">
    <slot slot="activator">activator</slot>
    <v-container grid-list-md text-xs-center :value="show">
      <v-layout row wrap>
        <v-flex xs12>
          <v-card>
            <v-card-text class="px-0">你确定要退出账户吗 ?</v-card-text>
          </v-card>
        </v-flex>
        <v-flex xs6>
          <v-card>
            <v-btn flat @click.native="confirm">确定</v-btn>
          </v-card>
        </v-flex>
        <v-flex xs6>
          <v-card>
            <v-btn flat @click.native="show=false">取消</v-btn>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-dialog>
</template>
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