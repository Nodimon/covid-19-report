<template>
    <span class="d-flex justify-content-end w-100">
        <ul class="pagination">

            <!-- Left Arrow -->
            <li class="page-item" :class="{ 'disabled': !pagination.prevPage }">
                <a v-on:click.prevent="linkClick(pagination.currentPage - 1)" class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                    <span class="sr-only">Previous</span>
                </a>
            </li>

            <li class="page-item" :key="1" :class="{ 'active' : pagination.currentPage === 1 }">
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
                :class="{ 'active' : pagination.currentPage }"
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

            <li class="page-item" :key="pagination.lastPage"
                v-if="pagination.lastPage !== 1"
                :class="{ 'active' : pagination.currentPage === pagination.lastPage }">
                <a v-on:click.prevent="linkClick(pagination.lastPage)" class="page-link" href="#">
                    {{ pagination.lastPage }}
                </a>
            </li>

            <!-- Right Arrow -->
            <li class="page-item" :class="{'disabled': !pagination.nextPage} ">
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
        name: 'PaginationLinks',
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
            },
            calculateLowerBound(current, value){
                return current - value !== 0 && current - value !== 1 && current - value !== -1;
            },
            calculateUpperBound(current, value){
                return current + value < this.pagination.lastPage;
            }
        }
    }
</script>
<style scoped lang="scss">
    span {
        display: inherit;
    }

    .page-item {
        margin: 0 5px !important;
        box-shadow: 0 4px 13px -8px rgba(0,0,0,0.4);

        &.active .page-link{
            background-color: #1d8fd3 !important;
            color: #fff !important;
        }

        a {
            color: #1d8fd3 !important;
            &:focus {
                outline: none;
                border: none !important;
                -webkit-box-shadow: none !important;
                -moz-box-shadow: none !important;
                box-shadow: none !important;
            }
        }
    }

</style>
