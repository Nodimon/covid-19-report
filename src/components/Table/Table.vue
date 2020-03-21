<template>
    <div class="col-12">
        <div id="table" class="pt-3 pl-3 pr-3">
            <h4><strong>{{ title }}</strong></h4>
            <table class="table table-hover">
                <thead>
                    <tr>
                        <slot name="thead"></slot>
                    </tr>
                </thead>
                <tbody>
                    <slot :data="localData"></slot>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
    import TableSort from "../TableSort";

    export default {
        name: "Table",
        components: {
            TableSort
        },
        props: {
            data: {
                type: [Array, Object],
                default: () => []
            },
            width: {
                type: String,
                default: 'col-12'
            },
            title: {
                type: String,
                default: 'Table Title'
            }
        },
        watch: {
        },
        data() {
            return {
                direction: 'desc',
                sortBy: 'confirmed',
                localData: []
            }
        },
        methods: {
            sort(sort, initial = false) {
                if (!initial && (this.direction === sort.direction && this.sortBy === sort.sortBy)) {
                    return;
                }

                this.direction = sort.direction
                this.sortBy = sort.sortBy

                this.localData = this.sortOperation(this.localData, sort.sortBy, sort.direction)
            },
            sortOperation(data, sortBy, direction) {
                return data.sort((a,b) => {
                    let modifier = 1;
                    if(direction === 'desc') modifier = -1;
                    if(a[sortBy] < b[sortBy]) return -1 * modifier;
                    if(a[sortBy] > b[sortBy]) return modifier;
                    return 0;
                });
            }
        },
        created() {
            this.localData = this.data
            this.sort({direction: this.direction, sortBy: this.sortBy}, true)
        }
    }
</script>

<style scoped lang="scss">
    #table {
        background-color: #fff;
        border-radius: 15px;
        box-shadow: 0 8px 16px -8px rgba(0,0,0,0.4);
    }
</style>