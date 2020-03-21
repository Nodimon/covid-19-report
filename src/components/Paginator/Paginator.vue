<template>
    <PaginationLinks :pagination="pagination" v-on:paginationUpdate="updatePagination"></PaginationLinks>
</template>

<script>
    import PaginationLinks from "./PaginationLinks";

    export default {
        name: "Paginator",
        components: {
            PaginationLinks
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
        watch: {
            results: {
                deep: true,
                handler() {
                    this.pagination =  {
                        currentPage: 1,
                        lastPage:    Math.ceil(this.results.length / this.perPage),
                        total:       this.results.length,
                        nextPage:    2,
                        prevPage:    0
                    }
                }
            }
        },
        methods: {
            updatePagination(event) {
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