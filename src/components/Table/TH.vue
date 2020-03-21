<template>
    <th scope="col">{{ title }} <TableSort @direction-change="tableSort"></TableSort></th>
</template>

<script>
    import TableSort from "../TableSort";
    export default {
        name: "TH",
        components: {
            TableSort
        },
        props: {
            sortKey: {
                type: String,
                default: ''
            },
            title: {
                type: String,
                default: ''
            }
        },
        methods: {
            tableSort(direction) {
                this.$parent.sort({direction, sortBy: this.sortKey})
            }
        }
    }
</script>

<style scoped>

</style>