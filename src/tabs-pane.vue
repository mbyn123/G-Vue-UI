<template>
    <div class="tabs-pane" :class="classes" v-if="active">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "tabs-pane",
        props: {
            name: {
                type: String | Number,
                required: true
            }
        },
        inject: ['eventBus'],//接收依赖
        created() {
            this.eventBus.$on('updata:selected', (name) => {
                if (name === this.name) {
                    this.active = true
                } else {
                    this.active = false
                }

            })
        },
        computed: {
            classes() {
                return {
                    active: this.active
                }
            }
        },
        data() {
            return {
                active: false
            }
        }
    }
</script>

<style scoped lang="scss">
    .tabs-pane {
        padding: 1em;
        &.active {

        }
    }

</style>
