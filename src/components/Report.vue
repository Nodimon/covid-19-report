<template>
    <div class="container-fluid">

        <AppHeader></AppHeader>

        <div class="row">
            <CountryCard v-for="(countryData, index) in paginatedResults"
                         :countryData="countryData"
                         :key="index">
            </CountryCard>

        </div>
        <Paginator v-if="results.length"
                   :per-page="perPage"
                   :results="results"
                   @updatePage="updatePage">
        </Paginator>

    </div>
</template>

<script>
    import AppHeader from "./Header";
    import CountryCard from "./CountryCard";
    import Paginator from "./Paginator/Paginator";

    export default {
        name: "Report",
        components: {
            CountryCard,
            Paginator,
            AppHeader
        },
        data() {
            return {
                results: [],
                page: 1,
                perPage: 6
            }
        },
        computed: {
            reports () {
                return this.$store.getters.report
            },
            paginatedResults () {
                this.results = this.reports
                return this.paginate(this.reports)
            }
        },
        methods: {
            updatePage({page, perPage}) {
                // console.log("Pageoni", page, perPage)
                this.page = page
                this.perPage = perPage
            },
            paginate (results) {
                // console.log("Results", results.slice((this.page * this.perPage) - this.perPage, this.page * this.perPage))
                return results.slice((this.page * this.perPage) - this.perPage, this.page * this.perPage);
            }
        },
        created() {
            this.results = this.$store.getters.report
        }
    }
</script>

<style scoped>
</style>