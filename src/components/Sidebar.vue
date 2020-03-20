<template>
    <div id="sidebar">
        <p>Total</p>
        <ul>
            <li v-for="date in dates">
                {{ date }}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Sidebar",
        data() {
            return {
            }
        },
        computed: {
            dates() {
                return this.$store.getters.dates;
            }
        }
    }
</script>

<style scoped>
    #sidebar {
        min-width: 200px;
    }
</style>