<template>
    <ComplexPagination :pagination="pagination" v-on:paginationUpdate="updatePagination"></ComplexPagination>
</template>

<script>
    import ComplexPagination from "./ComplexPagination";

    export default {
        name: "Paginator",
        components: {
            ComplexPagination
        },
        props: {
            results: {
                type: Array,
                default: () => []
            },
            perPage: {
                type: Number,
            }
        },
        data() {
            return {
                pages: [],
                pagination: {}
            }
        },
        methods: {
            updatePagination(event) {
                // console.log('Event', event)

                if (event > this.pagination.lastPage) {
                    this.pagination.nextPage = null;
                    return;
                }

                this.pagination.nextPage = event + 1;
                this.pagination.prevPage = event - 1;
                this.pagination.currentPage = event;

                if (event === this.pagination.lastPage) {
                    this.pagination.nextPage = null;
                }
                this.$emit('updatePage', {page: event, perPage: this.perPage})
            },
        },
        created() {
            // this.pagination = this.props
            // console.log("Props paginator", this.$props)
            this.pagination =  {
                currentPage: 1,
                    lastPage:    Math.ceil(this.results.length / this.perPage),
                    total:       this.results.length,
                    nextPage:    2,
                    prevPage:    0
            }
        }
    }
</script>

<style scoped>

</style>