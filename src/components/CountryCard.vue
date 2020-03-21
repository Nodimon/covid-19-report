<template>
    <div :class="width">
        <div class="country-card pt-3 pl-3 pr-3">

            <h4 @click="openCountry(countryData[0])"><strong>{{ countryData[0] }}</strong></h4>

            <hr>

            <div class="d-flex justify-content-between pt-4 pb-4 mt-3">
                <p style="font-weight:600; color: #1d8fd3">Confirmed: {{ confirmed }}</p>
                <p style="font-weight:600; color: #429b9a">Recovered: {{ recovered }}</p>
                <p style="font-weight:600; color: #ba3937">Deaths: {{ dead }}</p>
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
            },
            width: {
                type: String,
                default: 'col-md-12 col-lg-4'
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
                    colors: [
                       '#1d8fd3', '#429b9a', '#ba3937'
                    ],
                    legend: {
                        show: false
                    },
                    chart: {
                        type: 'area',
                        stacked: false,
                        height: 350,
                        zoom: {
                            type: 'x',
                            enabled: false,
                            autoScaleYaxis: false
                        },
                        toolbar: {
                            autoSelected: 'zoom'
                        }
                    },
                    dataLabels: {
                        enabled: true
                    },
                    markers: {
                        size: 0,
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
                        }
                    },
                    xaxis: {
                        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                        title: {
                            text: 'Month'
                        }
                    },
                    tooltip: {
                        shared: true,
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
            openCountry(country) {
                this.$router.push({name: 'country-view', params: { country}})
            },
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
                let deaths    = []

                const dataLength = this.countryData[1].length;
                for (let i = 0; i < dataLength - 7; i += 10) {
                    let current = this.countryData[1][i];

                    this.dates.push(current.date)
                    confirmed.push(current.confirmed)
                    recovered.push(current.recovered)
                    deaths.push(current.deaths)
                }

                let last = this.countryData[1][dataLength-1]
                this.dates.push(last.date)
                confirmed.push(last.confirmed)
                recovered.push(last.recovered)
                deaths.push(last.deaths)

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
            this.calculateStats();
        }
    }
</script>

<style scoped lang="scss">
    .country-card {
        background-color: white;
        border-radius: 15px;
        margin-bottom: 30px;
        box-shadow: 0 8px 16px -8px rgba(0,0,0,0.4);
        transition: all .3s ease;

        &:hover {
            cursor: pointer;
        }
    }
</style>