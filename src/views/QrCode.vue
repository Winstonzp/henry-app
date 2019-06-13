<template>
  <div>
    <iframe :srcdoc="$store.state.qrHtml">
      <p>Your browser does not support iframes.</p>
    </iframe>
  </div>
</template>
<script>
export default {
  name: "QrCode",
  mounted() {
    // document.myform.submit();
  }
};
</script>
<style scoped>
iframe {
  width: 100%;
  height: 550px;
}
</style>


