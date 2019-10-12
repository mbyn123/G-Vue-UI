<template>
    <div class="col" :class="colClass" :style="colStyle">
        <div style="border: 1px solid green;height: 100px">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            span: {
                type: [Number, String]
            },
            offset: {
                type: [Number, String]
            },
        },
        data() {
            return {
                gutter:0
            }
        },
        computed: {
            colClass() {
                let {span, offset} = this
                return [`col-${span}`, offset && `offset-${offset}`]//短路运算符 如果offset不存在就取后面的值
            },
            colStyle() {
                return {
                    paddingLeft: this.gutter / 2 + 'px',
                    paddingRight: this.gutter / 2 + 'px'
                }
            }

        }
    }
</script>

<style scoped lang="scss">
    .col {
        $class-perfix: col-;
        @for $n from 1 through 24 {
            &.#{$class-perfix}#{$n} {
                width: ($n /24)*100%;
            }
        }

        $class-perfix: offset-;
        @for $n from 1 through 24 {
            &.#{$class-perfix}#{$n} {
                margin-left: ($n /24)*100%;
            }
        }

    }
</style>
