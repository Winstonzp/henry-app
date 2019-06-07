<template>
  <div>
    <SecuritySetting/>
    <RefreshCode/>
  </div>
</template>

<script>
import SecuritySetting from "./components/SecuritySetting";
import RefreshCode from "./components/RefreshCode";

export default {
  components: {
    SecuritySetting,
    RefreshCode
  }
};
</script>