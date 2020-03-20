<template>
    <div class="col-md-12 col-lg-4">
        <div class="country-card p-3">
            <h4>{{ countryData[0] }}</h4>

            <div class="d-flex justify-content-between p-4 mt-3">
                <p>Confirmed: {{ confirmed }}</p>
                <p>Recovered: {{ recovered }}</p>
                <p>Deaths: {{ dead }}</p>
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
                dates: [],
                series: [],
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
                                return val
                                // return (val / 1000000).toFixed(0);
                            },
                        },
                        title: {
                            text: 'Number'
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
                                return val
                                // return (val / 1000000).toFixed(0)
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
        methods: {
            calculateStats() {
                this.confirmed = this.countryData[1][this.countryData[1].length - 1].confirmed
                this.recovered = this.countryData[1][this.countryData[1].length - 1].recovered
                this.dead = this.countryData[1][this.countryData[1].length - 1].deaths

                this.updateChart()
            },
            // TODO refactor this shit
            updateChart() {
                let confirmed = []
                let recovered = []
                let deaths = []
                const dataLength = this.countryData[1].length;

                for (let i = 0; i < dataLength - 7; i += 10) {
                    this.dates.push(this.countryData[1][i].date)
                    confirmed.push(this.countryData[1][i].confirmed)
                    recovered.push(this.countryData[1][i].recovered)
                    deaths.push(this.countryData[1][i].deaths)
                }

                this.dates.push(this.countryData[1][dataLength-1].date)
                confirmed.push(this.countryData[1][dataLength-1].confirmed)
                recovered.push(this.countryData[1][dataLength-1].recovered)
                deaths.push(this.countryData[1][dataLength-1].deaths)

                this.chartOptions = {...this.chartOptions, ...{
                        xaxis: {
                            categories: this.dates,
                            title: {
                                text: 'Month'
                            }
                        },
                    }
                }

                this.series = [
                    {
                        name: 'Confirmed',
                        data: confirmed
                    },
                    {
                        name: 'Recovered',
                        data: recovered
                    },
                    {
                        name: 'Deaths',
                        data: deaths
                    }
                ]
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