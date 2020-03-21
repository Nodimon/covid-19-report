<template>
  <div id="app">
    <router-view/>
    <Footer />
  </div>
</template>
<script>
  import Footer from "./components/Footer";
  export default {
    name: 'App',
    components: {
      Footer
    }
  }
</script>
<style lang="scss">
  @import "assets/app";

  @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed');

  html, body {
      font-family: 'Roboto Condensed', sans-serif;
      background-color: #e8e8e8 !important;

  }

  #app {
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      color: #2c3e50;
      font-family: 'Roboto Condensed', sans-serif;

  }

  #nav {
    padding: 30px;

    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
</style>
