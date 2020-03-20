<template>
    <div class="col-md-12 col-lg-4">
        <div class="country-card p-3">
            <h4>{{ countryData[0] }}</h4>

            <div class="d-flex justify-content-between p-4 mt-3">
                <p>Confirmed: {{ confirmed }}</p>
                <p>Recovered: {{ recovered }}</p>
                <p>Dead: {{ dead }}</p>
            </div>

            <div id="chart">
                <apexchart type="area" height="350" :options="chartOptions" :series="series"></apexchart>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "CountryCard",
        props: {
            countryData: {
                type: Array,
                default: () => []
            },
            countryName: {
                type: String,
                default: ''
            }
        },
        data() {
            return {
                confirmed: 0,
                recovered: 0,
                dead: 0,
                series: [
                    {
                        name: 'Confirmed',
                        data: [1,2,3,4,5]
                    },
                    {
                        name: 'Recovered',
                        data: [5,3,1,6,9]
                    },
                    {
                        name: 'Deaths',
                        data: [0,0,3,5,7]
                    }
                ],
                chartOptions: {
                    chart: {
                        type: 'area',
                        stacked: false,
                        height: 350,
                        zoom: {
                            type: 'x',
                            enabled: true,
                            autoScaleYaxis: true
                        },
                        toolbar: {
                            autoSelected: 'zoom'
                        }
                    },
                    dataLabels: {
                        enabled: false
                    },
                    markers: {
                        size: 0,
                    },
                    title: {
                        text: 'Stock Price Movement',
                        align: 'left'
                    },
                    fill: {
                        type: 'gradient',
                        gradient: {
                            shadeIntensity: 1,
                            inverseColors: false,
                            opacityFrom: 0.5,
                            opacityTo: 0,
                            stops: [0, 90, 100]
                        },
                    },
                    yaxis: {
                        labels: {
                            formatter: function (val) {
                                return (val / 1000000).toFixed(0);
                            },
                        },
                        title: {
                            text: 'Price'
                        },
                    },
                    xaxis: {
                        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                        title: {
                            text: 'Month'
                        }
                    },
                    tooltip: {
                        shared: false,
                        y: {
                            formatter: function (val) {
                                return (val / 1000000).toFixed(0)
                            }
                        }
                    }
                }
            }
        },
        watch: {
            countryData: {
                handler() {
                    this.calculateStats();
                },
                deep: true
            }
        },
        computed: {
            getConfirmed() {

            },
            getRecovered() {

            },
            getDeaths() {

            }
        },
        methods: {
            calculateStats() {
                this.confirmed = this.countryData[1][this.countryData[1].length - 1].confirmed
                this.recovered = this.countryData[1][this.countryData[1].length - 1].recovered
                this.dead = this.countryData[1][this.countryData[1].length - 1].deaths
            }
        },
        created() {
            // console.log("Props", this.$props)
            this.calculateStats();
        }
    }
</script>

<style scoped>
    .country-card {
        border: 1px solid rgba(105, 105, 105, 0.38);
        /*border-radius: 20px;*/
        /*height: 350px;*/
        margin-bottom: 30px;
    }
</style>