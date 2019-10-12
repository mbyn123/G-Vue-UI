<template>
    <div class="col" :class="[`col-${span}`, offset && `offset-${offset}`]"
    :style="{paddingLeft:gutter/2+'px',paddingRight:gutter/2+'px'}"
    >

        <div style="border: 1px solid green;height: 100px"><slot></slot></div>
    </div>
</template>

<script>
    export default {
         props:{
             span:{
                 type:[Number,String]
             },
             offset:{
                type:[Number,String]
             },
             gutter:{
                 type:[Number,String]
             }
         }
    }
</script>

<style scoped lang="scss">
    .col{

        $class-perfix:col-;
        @for $n from 1 through 24{
            &.#{$class-perfix}#{$n}{
                width:($n /24)*100%;
            }
        }

        $class-perfix:offset-;
        @for $n from 1 through 24{
            &.#{$class-perfix}#{$n}{
                margin-left: ($n /24)*100%;
            }
        }

    }
</style>
