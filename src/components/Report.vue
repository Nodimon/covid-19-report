<template>
    <div class="container-fluid" id="report">

        <Search></Search>

        <div class="row">
            <CountryCard v-for="(countryData, index) in paginatedResults"
                         :countryData="countryData"
                         :key="index">
            </CountryCard>

        </div>
        <Paginator v-if="results.length"
                   :per-page="perPage"
                   :results="results"
                   @updatePage="updatePage"></Paginator>

    </div>
</template>

<script>
    import CountryCard from "./CountryCard";
    import Search from "./Search";
    import Paginator from "./Paginator/Paginator";

    export default {
        name: "Report",
        components: {
            CountryCard,
            Search,
            Paginator
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
            this.$store.dispatch('fetchReport')
                .then(res => {
                    this.results = this.$store.getters.report
                })
                .catch(error => {

                })
        }
    }
</script>

<style scoped>
    #report {
        flex: 1;
    }
</style>