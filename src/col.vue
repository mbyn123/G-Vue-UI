<template>
    <div class="col" :class="colClass" :style="colStyle">
        <div>
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
            xs: {
                type: Object,
                validator
            },
            sm: {
                type: Object,
                validator
            },
            md: {
                type: Object,
                validator
            },
            lg: {
                type: Object,
                validator
            },
            xl: {
                type: Object,
                validator
            },
            xxl: {
                type: Object,
                validator
            }
        },
        data() {
            return {
                gutter: 0
            }
        },
        methods:{
            createClass(obj,str=''){
                if(!obj){return[]}
                let array=[]
                if(obj.span){
                    array.push(`col-${str}${obj.span}`)
                }
                if(obj.offset){
                    array.push(`offset-${str}${obj.offset}`)
                }
                return array
            }
        },
        computed: {
            colClass() {
                let {span, offset, xs, sm, md, lg, xl,xxl} = this
                let createClass=this.createClass
                return [
                    createClass({span,offset}),
                    createClass(xs,'xs-'),
                    createClass(sm,'sm-'),
                    createClass(md,'md-'),
                    createClass(lg,'lg-'),
                    createClass(xl,'xl-'),
                    createClass(xxl,'xxl-'),

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
            $class-perfix: col-xs-;
            @for $n from 1 through 24 {
                &.#{$class-perfix}#{$n} {
                    width: ($n /24)*100%;
                }
            }

            $class-perfix: offset-xs-;
            @for $n from 1 through 24 {
                &.#{$class-perfix}#{$n} {
                    margin-left: ($n /24)*100%;
                }
            }
        }
        @media (min-width: 577px)  {
            $class-perfix: col-sm-;
            @for $n from 1 through 24 {
                &.#{$class-perfix}#{$n} {
                    width: ($n /24)*100%;
                }
            }

            $class-perfix: offset-sm-;
            @for $n from 1 through 24 {
                &.#{$class-perfix}#{$n} {
                    margin-left: ($n /24)*100%;
                }
            }
        }
        @media (min-width: 769px)  {
            $class-perfix: col-md-;
            @for $n from 1 through 24 {
                &.#{$class-perfix}#{$n} {
                    width: ($n /24)*100%;
                }
            }

            $class-perfix: offset-md-;
            @for $n from 1 through 24 {
                &.#{$class-perfix}#{$n} {
                    margin-left: ($n /24)*100%;
                }
            }
        }
        @media (min-width: 993px)  {
            $class-perfix: col-lg-;
            @for $n from 1 through 24 {
                &.#{$class-perfix}#{$n} {
                    width: ($n /24)*100%;
                }
            }

            $class-perfix: offset-lg-;
            @for $n from 1 through 24 {
                &.#{$class-perfix}#{$n} {
                    margin-left: ($n /24)*100%;
                }
            }
        }
        @media (min-width: 1201px) {
            $class-perfix: col-xl-;
            @for $n from 1 through 24 {
                &.#{$class-perfix}#{$n} {
                    width: ($n /24)*100%;
                }
            }

            $class-perfix: offset-xl-;
            @for $n from 1 through 24 {
                &.#{$class-perfix}#{$n} {
                    margin-left: ($n /24)*100%;
                }
            }
        }
        @media (min-width: 1601px) {
            $class-perfix: col-xxl-;
            @for $n from 1 through 24 {
                &.#{$class-perfix}#{$n} {
                    width: ($n /24)*100%;
                }
            }

            $class-perfix: offset-xxl-;
            @for $n from 1 through 24 {
                &.#{$class-perfix}#{$n} {
                    margin-left: ($n /24)*100%;
                }
            }
        }

    }
</style>
