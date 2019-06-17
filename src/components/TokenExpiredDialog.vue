<template>
  <div class="text-xs-center">
    <v-dialog v-model="$store.state.isExipired" width="500" persistent>
      <v-card dark>
        <v-card-text>登陆已过期，请重新登陆</v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="warning" @click="closeDialog">ok</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
   <script>
export default {
  data() {
    return {
      // dialog: false
    };
  },
  methods: {
    closeDialog() {
      this.$router.push("/");
      this.$store.dispatch("setExipredFalse");
    }
  }
};
</script>