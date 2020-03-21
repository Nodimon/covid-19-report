<template>
    <div class="d-flex justify-content-between mb-3">
        <WorldTotal></WorldTotal>
        <Search></Search>
    </div>
</template>

<script>
    import WorldTotal from "./WorldTotal";
    import Search from "./Search";

    export default {
        name: "Header",
        components: {
            WorldTotal,
            Search
        }
    }
</script>

<style scoped>

</style>