<template>
    <div id="search" class="d-flex">
        <input v-model="search" type="text" class="align-self-end form-control" aria-describedby="search" placeholder="Country...">
    </div>
</template>

<script>
    import { debounce } from "debounce";
    import WorldTotal from "./WorldTotal";

    export default {
        name: "Search",
        components: {
            WorldTotal
        },
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
            border: none;
            box-shadow: 0 4px 13px -8px rgba(0,0,0,0.4);
            max-width: 200px;
            border-radius: 20px;
        }
    }
</style>