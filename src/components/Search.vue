<template>
    <div id="search" class="d-flex justify-content-end">
        <input v-model="search" type="text" class="form-control mb-3" aria-describedby="search" placeholder="Search">
    </div>
</template>

<script>
    import { debounce } from "debounce";

    export default {
        name: "Search",
        data() {
            return {
                search: ''
            }
        },
        watch: {
            search: debounce(function (term) {
                this.$store.dispatch('search', this.search)
            }, 500)
        }
    }
</script>

<style scoped lang="scss">
    #search {

        input {
            width: 50%;
            border-radius: 20px;
        }
    }
</style>