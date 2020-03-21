<template>
  <div class="home">
    <h2 class="mb-5 p-3"><strong>COVID-19 REPORT</strong></h2>
    <div class="wrapper">
      <Report></Report>
    </div>
  </div>
</template>

<script>
import Report from "../components/Report";

export default {
  name: 'Home',
  components: {
    Report
  },

}
</script>

<style lang="scss">
  .wrapper {
    /*display: flex;*/
  }
  /*h1 {*/
  /*  margin-bottom: 4rem !important;*/
  /*}*/
</style>