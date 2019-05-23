<template>
  <v-app>
    <v-content class="orange">
      <v-container fluid class="pa-0" flat>
        <router-view/>
      </v-container>
    </v-content>
    <BottomNav/>
  </v-app>
</template>

<script>
import Index from "./components/Index";
import LiveGames from "./components/LiveGames";
import Signup from "./components/Signup";
import PersonContact from "./components/PersonContact";
import Signin from "./components/Signin";
import BottomNav from "./components/BottomNav";

export default {
  name: "App",
  components: {
    Index,
    LiveGames,
    Signup,
    PersonContact,
    Signin,
    BottomNav
  },
  data() {
    return {
      //
    };
  }
};
</script>
