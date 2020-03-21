<template>
    <div>
        <Heading></Heading>

        <div v-if="loaded">
            <CountryCard width="col-12"
                         :countryData="countryData"
                         :key="countryData[0]">
            </CountryCard>

            <Table :data="[...this.countryData[1]]">

                <template slot="thead">
                    <t-th title="Date" sort-key="date"></t-th>
                    <t-th title="Confirmed" sort-key="confirmed"></t-th>
                    <t-th title="Recovered" sort-key="recovered"></t-th>
                    <t-th title="Deaths" sort-key="deaths"></t-th>
                </template>

                <template slot-scope="{data}">

                    <tr v-for="item in data">
                        <th scope="row">{{ item.date }}</th>
                        <td>{{ item.confirmed }}</td>
                        <td>{{ item.recovered }}</td>
                        <td>{{ item.deaths }}</td>
                    </tr>

                </template>

            </Table>
        </div>
        <Spinner v-else></Spinner>
    </div>
</template>

<script>
    import Heading from "../components/Heading";
    import Spinner from "../components/Spinner";
    import CountryCard from "../components/CountryCard";
    import TableSort from "../components/TableSort";
    import Table from "../components/Table/Table";
    import TH from "../components/Table/TH";

    export default {
        name: "Country",
        components: {
            Heading,
            Spinner,
            CountryCard,
            TableSort,
            Table,
            TTh: TH
        },
        props: {
            country: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                loaded: false,
                countryData: [],
                countryDataTable: [],
            }
        },
        methods: {

        },
        computed: {

        },
        created() {
            this.countryData = this.$store.getters.reportForCountry(this.country)
            if (!this.countryData.length) {
                this.$store.dispatch('fetchReport')
                    .then(res => {
                        const result = this.$store.getters.reportForCountry(this.country)[0]
                        this.countryData = result
                        this.countryDataTable = [...result[1]]
                        this.loaded = true
                    })
                    .catch(error => {

                    })
            } else {
                this.countryData = this.countryData[0]
                this.countryDataTable = [...this.countryData[1]]
                this.loaded = true;
            }
        }
    }
</script>