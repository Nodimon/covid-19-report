<template>
    <div id="search" class="d-flex justify-content-end">
        <input type="text" class="form-control mb-3" aria-describedby="search" placeholder="Search">
    </div>
</template>

<script>
    export default {
        name: "Search"
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