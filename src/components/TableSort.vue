<template>
    <span class="sort">
        <font-awesome-icon @click="changeDirection('asc')" class="icon" icon="sort-up" />
        <font-awesome-icon @click="changeDirection('desc')" class="icon" icon="sort-down" />
    </span>
</template>

<script>
    export default {
        name: "TableSort",
        methods: {
            changeDirection(direction) {
                this.$emit('direction-change', direction)
            }
        }
    }
</script>

<style scoped lang="scss">
    .sort {
        
        .icon {
            cursor: pointer;
            margin: 0 5px;

            &:nth-child(1) {
                position: relative;
                top: -1px;
            }

            &:nth-child(2) {
                position: relative;
                left: -20px;
                top: 3px;
            }
        }
    }
</style>