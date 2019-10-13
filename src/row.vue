<template>
    <div class="row" :style="rowStyle" :class="rowClass">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: {
            gutter: {
                type: [Number, String]
            },
            align: {
                type: String,
                validator(value) {//设置传入的默认位置值 是否是这几个值
                    return ['left', 'right', 'center'].indexOf(value)>0
                }
            }
        },
        mounted() {
            this.$children.forEach((vm) => {
                vm.gutter = this.gutter
            })
        },
        computed: {
            rowStyle() {
                return {
                    marginRight: -this.gutter / 2 + 'px',
                    marginLeft: -this.gutter / 2 + 'px',
                }
            },
            rowClass() {
                return [this.align && `align-${this.align}`]//短路运算符 如果align不存在就取后面的值
            }
        }

    }
</script>

<style scoped lang="scss">
    .row {
        display: flex;
        flex-wrap: wrap;
        &.align-left{
            justify-content:flex-start
        }
        &.align-right{
            justify-content:flex-end;
        }
        &.align-center{
            justify-content: center;
        }

    }
</style>
