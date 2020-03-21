<template>
  <div>

    <Heading></Heading>

    <div class="wrapper">

      <Report v-if="loaded"></Report>
      <Spinner v-else></Spinner>

    </div>

  </div>
</template>

<script>
import Heading from "../components/Heading";
import Report from "../components/Report";
import Spinner from "../components/Spinner";

export default {
    name: 'World',
    components: {
        Heading,
        Report,
        Spinner
    },
    data() {
        return {
          loaded: false
        }
    },
    created() {
        this.$store.dispatch('fetchReport')
            .then(res => {
                this.loaded = true;
            })
            .catch(error => {

            })

  }

}
</script>

<style lang="scss">
</style>