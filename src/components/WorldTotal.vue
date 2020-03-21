<template>
    <div id="sidebar" style="width: fit-content" class="d-flex flex-column text-left pl-4">
        <p style="color: #1d8fd3"><span>Total Confirmed:</span> <span>{{ worldTotals.confirmed }}</span></p>
        <p style="color: #429b9a"><span>Total Recovered:</span> <span>{{ worldTotals.recovered }}</span></p>
        <p style="color: #ba3937"><span>Total Deaths:</span> <span>{{ worldTotals.deaths }}</span></p>
    </div>
</template>

<script>
    export default {
        name: "WorldTotal",
        data() {
            return {
            }
        },
        computed: {
            worldTotals() {
                return this.$store.getters.reportTotals
            }
        }
    }
</script>

<style scoped>
    #sidebar {
        min-width: 200px;
    }

    p {
        display: flex;
        justify-content: space-between;
        font-weight: 600;
        margin: 0.1rem;
    }
</style>