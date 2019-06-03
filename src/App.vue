<template>
  <v-app>
    <v-content style="background-color:#916001">
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

import axios from "axios";
const qs = require("qs");
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
  },
  methods: {
    login() {
      axios
        .post(
          "http://47.90.100.229:20000/api/login",
          qs.stringify({
            username: "phawphaw",
            password: "Test1235"
          })
        )
        .then(function(response) {
          console.log(response.data.result.token);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    getUserInfo() {
      axios({
        method: "get",
        url: "http://47.90.100.229:20000/api/account/getUserInfo",

        headers: {
          "X-Auth-Token":
            "8ea64bb604387aabcd97ac9d41a1cabb8a380529463abd0ec0a7872784c1152fb3196ef3319a0bc2f96f6714b88f4a8580ac0f35812b2642f2538681d8a2bc08qKyVwlFJ9veA/vA+MoylRFonv+YgfIbS+rnT9rD/l6qK4xsB/Pb+hSllOFNUILhrpJ5R5f1GuMzOnTcbsJVHRN+vZlbQ6dNbkNKKdUTx8PvRtnHXEgeHr3XItPNWyuc+TUpnW+U8/vYznjuSTCJX9sWp9WbG++BK15wW8t1GJik="
        }
      })
        .then(function(response) {
          console.log(response);
        })
        .catch(function(error) {
          console.log(error);
        });
    },
    modifyPassword() {
      axios
        .post(
          "http://47.90.100.229:20000/api/user/updatePassword",
          qs.stringify({
            oldpassword: "Test1234",
            password: "Test1235",
            repassword: "Test1235"
          }),
          {
            headers: {
              "X-Auth-Token":
                "90a56fb56c7aaaf1a775d82bfcf09bf80e9a0c2f72e8b8a1183e68ca16b2f2bd6f8c13a1a7ba85b93dc2558d68a2823e4ce9d205f90cb548d7ff1a0df32181a20fLeBmib3Ct6TMGBdAflAEUAd7xPOTpfKiVwUlSKJcfjkVwDGX+iSZReJyPnQtaT7pfFsvtP2Ifsmu4TZfcI1URBVkgNj3oBNr1w0+XcjYLzIrsVCsBk/iRgQ8TrUw0mWkZv3Wl36bFddVMR1Y6FZvfcObxfFrqW/rEGg/rumj0="
            }
          }
        )
        .then(function(res) {
          console.log(res);
        });
    },
    modifyData() {
      axios
        .post(
          "http://47.90.100.229:20000/api/user/update/",
          qs.stringify({
            real_name: "Winston",
            mobile: "959957227667",
            email: "winston@gmail.com",
            sex: "male",
            birthdate: "1996-07-04",
            wechat: "a143470",
            qq: "4542343"
          }),
          {
            headers: {
              "X-Auth-Token":
                "e53b6c7837350fb165de176be43af30639d755591e870cd6b6d3d4569ecfe29fdba3b816c92b63cc86220ca93ce126c759de2f71650bae4b1ab8a19e1f72570emxiqazkpxkI6UgUd/L6dgUYJZAlDLWA47lELFr97aEPWQhQayXE1z+UPe/xBrCPL7HOPs7Fdnrszg2f0sf0KSW9+zuJ1mZhwLv7lqwnzpJfho5ZWjyG5uMKvmjUvunmvn+jval5LGgbPZeoUObQHYaTqSD+T7ak8GsUkXVXWBsk="
            }
          }
        )
        .then(function(res) {
          console.log(res);
        });
    }
  },

  created() {
    // this.login();
    // this.getUserInfo();
    // this.modifyPassword();
    // this.modifyData();
  }
};
</script>
