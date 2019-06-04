<template>
  <v-layout row wrap>
    <v-layout row>
      <v-toolbar dark color="warning">
        <v-btn icon dark @click="backToHome">
          <v-icon>keyboard_arrow_left</v-icon>
        </v-btn>
        <v-toolbar-title>存款专区</v-toolbar-title>
      </v-toolbar>
    </v-layout>
    <!-- Date Picker-->
    <v-flex xs12 sm6 md4>
      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :nudge-right="40"
        :return-value.sync="date"
        lazy
        transition="scale-transition"
        offset-y
        full-width
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field v-model="date" prepend-icon="event" readonly v-on="on"></v-text-field>
        </template>
        <v-date-picker v-model="date" no-title scrollable>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
          <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
        </v-date-picker>
      </v-menu>
    </v-flex>
    <v-flex xs12 sm6 md4>
      <v-menu
        ref="menu1"
        v-model="menu1"
        :close-on-content-click="false"
        :nudge-right="40"
        :return-value.sync="date"
        lazy
        transition="scale-transition"
        offset-y
        full-width
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field v-model="date" prepend-icon="event" readonly v-on="on"></v-text-field>
        </template>
        <v-date-picker v-model="date" no-title scrollable>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="menu = false">Cancel</v-btn>
          <v-btn flat color="primary" @click="$refs.menu.save(date)">OK</v-btn>
        </v-date-picker>
      </v-menu>
    </v-flex>
    <v-flex>
      <v-btn color="success">Search</v-btn>
    </v-flex>
    <!-- Date Picker finished-->
    <!-- database -->
  </v-layout>
</template>
<script>
export default {
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    menu: false,
    menu1: false
  }),
  methods: {
    backToHome() {
      dialog: false;
      this.$router.push("/usercenter");
    }
  }
};
</script>