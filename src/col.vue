<template>
    <div class="col" :class="[`col-${span}`]">
      <slot></slot>
    </div>
</template>

<script>
    export default {
         props:{
             span:{
                 type:[Number,String]
             }
         }
    }
</script>

<style scoped lang="scss">
    .col{
        height:100px;
        width:50%;
        background: #999999;
        border: 1px solid red;

        $class-perfix:col-;
        @for $n from 1 through 24{
            &.#{$class-perfix}#{$n}{
                width:($n /24)*100%;
            }
        }

    }
</style>
