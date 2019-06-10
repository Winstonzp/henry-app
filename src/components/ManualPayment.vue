<template>
  <div>
    <v-layout row>
      <v-flex xs12 sm12>
        <v-toolbar dark color="warning">
          <v-btn icon dark @click="backToHome">
            <v-icon>keyboard_arrow_left</v-icon>
          </v-btn>
          <v-toolbar-title>提款记录</v-toolbar-title>
        </v-toolbar>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12 sm12>
        <v-data-iterator :items="items" hide-actions row wrap>
          <template v-slot:item="props">
            <v-flex xs12 sm6 md4 lg3>
              <v-card>
                <v-list dense>
                  <v-list-tile>
                    <v-list-tile-content>Calories:</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{ props.item.calories }}</v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>Fat:</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{ props.item.fat }}</v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>Carbs:</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{ props.item.carbs }}</v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>Protein:</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{ props.item.protein }}</v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>Sodium:</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{ props.item.sodium }}</v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>Calcium:</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{ props.item.calcium }}</v-list-tile-content>
                  </v-list-tile>
                  <v-list-tile>
                    <v-list-tile-content>Iron:</v-list-tile-content>
                    <v-list-tile-content class="align-end">{{ props.item.iron }}</v-list-tile-content>
                  </v-list-tile>
                </v-list>
              </v-card>
            </v-flex>
          </template>
        </v-data-iterator>
      </v-flex>
    </v-layout>
  </div>
</template>
<style>
.align_button {
  margin-left: 80px;
  margin-top: 0px;
}
</style>

<script>
export default {
  data: () => ({
    items: [
      {
        name: "Frozen Yogurt",
        calories: 159,
        fat: 6.0,
        carbs: 24,
        protein: 4.0,
        sodium: 87,
        calcium: "14%",
        iron: "1%"
      }
    ]
  }),
  methods: {
    backToHome() {
      dialog: false;
      this.$router.push("/usercenter");
    }
  }
};
</script>