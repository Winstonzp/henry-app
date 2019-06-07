<template>
  <div>
    <MyAgent/>
    <OfflineHistory/>
    <LiveBetHistory/>
    <CommissionHistory/>
    <AgentInfo/>
    <UserSetting/>
    <PersonContact/>
  </div>
</template>

<script>
import MyAgent from "./components/MyAgent";
import OfflineHistory from "./components/OfflineHistory";
import LiveBetHistory from "./components/LiveBetHistory";
import CommissionHistory from "./components/CommissionHistory";
import AgentInfo from "./components/AgentInfo";
import UserSetting from "./components/UserSetting";
import PersonContact from "./components/PersonContact";

export default {
  components: {
    MyAgent,
    OfflineHistory,
    LiveBetHistory,
    CommissionHistory,
    AgentInfo,
    UserSetting,
    PersonContact
  }
};
</script>