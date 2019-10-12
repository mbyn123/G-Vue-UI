<template>
    <div class="col" :class="colClass" :style="colStyle">
        <div style="border: 1px solid green;height: 100px">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    let validator = (value) => {
        //验证传入的值
        let keys = Object.keys(value)
        let valid = true
        keys.forEach(key => {
            if (![`span`, `offset`].includes(key)) {
                valid = false
            }
        })
        return valid

    }
    export default {
        props: {
            span: {
                type: [Number, String]
            },
            offset: {
                type: [Number, String]
            },
            phone: {
                type: Object,
                validator
            },
            ipad: {
                type: Object,
                validator
            },
            zpc: {
                type: Object,
                validator
            },
            pc: {
                type: Object,
                validator
            },
            kpc: {
                type: Object,
                validator
            }
        },
        data() {
            return {
                gutter: 0
            }
        },
        computed: {
            colClass() {
                let {span, offset, phone, ipad, zpc, pc, kpc} = this
                return [
                    span && `col-${span}`,
                    offset && `offset-${offset}`,//短路运算符 如果offset不存在就取后面的值
                    phone && `col-phone-${phone.span}`,
                    ipad && `col-ipad-${ipad.span}`,
                    zpc && `col-zpc-${zpc.span}`,
                    pc && `col-pc-${pc.span}`,
                    kpc && `col-kpc-${kpc.span}`

                ]
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
        @media (max-width: 576px) {
            $class-perfix: col-phone-;
            @for $n from 1 through 24 {
                &.#{$class-perfix}#{$n} {
                    width: ($n /24)*100%;
                }
            }

            $class-perfix: offset-phone-;
            @for $n from 1 through 24 {
                &.#{$class-perfix}#{$n} {
                    margin-left: ($n /24)*100%;
                }
            }
        }
        @media (min-width: 577px) and (max-width: 768px) {
            $class-perfix: col-ipad-;
            @for $n from 1 through 24 {
                &.#{$class-perfix}#{$n} {
                    width: ($n /24)*100%;
                }
            }

            $class-perfix: offset-ipad-;
            @for $n from 1 through 24 {
                &.#{$class-perfix}#{$n} {
                    margin-left: ($n /24)*100%;
                }
            }
        }
        @media (min-width: 769px)  {
            $class-perfix: col-zpc-;
            @for $n from 1 through 24 {
                &.#{$class-perfix}#{$n} {
                    width: ($n /24)*100%;
                }
            }

            $class-perfix: offset-zpc-;
            @for $n from 1 through 24 {
                &.#{$class-perfix}#{$n} {
                    margin-left: ($n /24)*100%;
                }
            }
        }
        @media (min-width: 993px)  {
            $class-perfix: col-pc-;
            @for $n from 1 through 24 {
                &.#{$class-perfix}#{$n} {
                    width: ($n /24)*100%;
                }
            }

            $class-perfix: offset-pc-;
            @for $n from 1 through 24 {
                &.#{$class-perfix}#{$n} {
                    margin-left: ($n /24)*100%;
                }
            }
        }
        @media (min-width: 1201px) {
            $class-perfix: col-kpc-;
            @for $n from 1 through 24 {
                &.#{$class-perfix}#{$n} {
                    width: ($n /24)*100%;
                }
            }

            $class-perfix: offset-kpc-;
            @for $n from 1 through 24 {
                &.#{$class-perfix}#{$n} {
                    margin-left: ($n /24)*100%;
                }
            }
        }

    }
</style>
