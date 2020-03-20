<template>
    <span class="d-flex justify-content-end w-100">
        <ul class="pagination">

            <!-- Left Arrow -->
            <li class="page-item" v-bind:class="{ 'disabled': !pagination.prevPage }">
                <a v-on:click.prevent="linkClick(pagination.currentPage - 1)" class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span class="sr-only">Previous</span>
                </a>
            </li>

            <li class="page-item" v-bind:key="1" v-bind:class="{ 'active' : pagination.currentPage === 1 }">
                <a v-on:click.prevent="linkClick(1)" class="page-link" href="#">1</a>
            </li>

            <li v-if="pagination.currentPage > 4" class="page-item disabled" aria-disabled="true"><span class="page-link">...</span></li>

            <li v-if="calculateLowerBound(pagination.currentPage, 2)"
                class="page-item">
                <a v-on:click.prevent="linkClick(pagination.currentPage - 2)"
                   class="page-link" href="#">
                    {{ pagination.currentPage - 2 }}
                </a>
            </li>

            <li v-if="calculateLowerBound(pagination.currentPage, 1)"
                class="page-item">
                <a v-on:click.prevent="linkClick(pagination.currentPage - 1)"
                   class="page-link" href="#">
                    {{ pagination.currentPage - 1 }}
                </a>
            </li>

            <li v-if="pagination.currentPage !== 1 && pagination.currentPage !== pagination.lastPage"
                v-bind:class="{ 'active' : pagination.currentPage }"
                class="page-item">
                <a v-on:click.prevent="linkClick(pagination.currentPage)" class="page-link" href="#">
                    {{ pagination.currentPage }}
                </a>
            </li>

            <li v-if="calculateUpperBound(pagination.currentPage, 1)"
                class="page-item">
                <a v-on:click.prevent="linkClick(pagination.currentPage + 1)" class="page-link" href="#">
                    {{ pagination.currentPage + 1 }}
                </a>
            </li>

            <li v-if="calculateUpperBound(pagination.currentPage, 2)"
                class="page-item">
                <a v-on:click.prevent="linkClick(pagination.currentPage + 2)" class="page-link" href="#">
                    {{ pagination.currentPage + 2 }}
                </a>
            </li>

            <li v-if="pagination.currentPage < (pagination.lastPage - 3)" class="page-item disabled" aria-disabled="true"><span class="page-link">...</span></li>

            <li class="page-item" v-bind:key="pagination.lastPage"
                v-bind:class="{ 'active' : pagination.currentPage === pagination.lastPage }">
                <a v-on:click.prevent="linkClick(pagination.lastPage)" class="page-link" href="#">
                    {{ pagination.lastPage }}
                </a>
            </li>

            <!-- Right Arrow -->
            <li class="page-item" v-bind:class="{'disabled': !pagination.nextPage} ">
                <a v-on:click.prevent="linkClick(pagination.currentPage + 1)" class="page-link" href="#" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                    <span class="sr-only">Next</span>
                </a>
            </li>

        </ul>
    </span>
</template>
<script>
    export default {
        props: {
            pagination: {
                type: Object
            },
        },
        data(){
            return {

            }
        },
        methods: {
            linkClick(event){
                this.$emit('paginationUpdate', event);
                console.log("Complex Get Data", event);
            },
            calculateLowerBound(current, value){
                return current - value !== 0 && current - value !== 1 && current - value !== -1;
            },
            calculateUpperBound(current, value){
                return current + value < this.pagination.lastPage;
            }
        },
        created() {
            // console.log('Hi from complex pagination', this.$props);
        }
    }
</script>
<style scoped>
    span {
        display: inherit;
    }
</style>
