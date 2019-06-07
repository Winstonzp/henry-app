<template>
  <div>
    <TransferBalance/>
    <WithdrawArea/>
    <PaymentArea/>
    <AddBankCard/>
  </div>
</template>

<script>
import TransferBalance from "./components/TransferBalance";
import WithdrawArea from "./components/WithdrawArea";
import PaymentArea from "./components/PaymentArea";
import AddBankCard from "./components/AddBankCard";

export default {
  components: {
    TransferBalance,
    WithdrawArea,
    PaymentArea,
    AddBankCard
  }
};
</script>