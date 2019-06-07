<template>
  <div>
    <PaymentHistory/>
    <WithdrawHistory/>
    <TransferHistory/>
    <BetHistory/>
    <FundHistory/>
  </div>
</template>

<script>
import PaymentHistory from "./components/PaymentHistory";
import WithdrawHistory from "./components/WithdrawHistory";
import TransferHistory from "./components/TransferHistory";
import BetHistory from "./components/BetHistory";
import FundHistory from "./components/FundHistory";

export default {
  components: {
    PaymentHistory,
    WithdrawHistory,
    TransferHistory,
    BetHistory,
    FundHistory
  }
};
</script>