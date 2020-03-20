<template>
  <div class="home">
    <h2>COVID-19 REPORT</h2>
    <div class="wrapper">
      <Sidebar></Sidebar>
      <Report></Report>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar.vue";
import Report from "../components/Report";

export default {
  name: 'Home',
  components: {
    Sidebar,
    Report
  },

}
</script>

<style lang="scss">
  .wrapper {
    display: flex;
  }
  h2 {
    margin-bottom: 5rem !important;
  }
</style>