<template>
<div class="tabs-head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-waraap">
    <slot name="actions"></slot>
    </div>

</div>
</template>

<script>
    export default {
        name: "tabs-head",
        inject:['eventBus'],//接收依赖
        created(){

        }
    }
</script>

<style scoped lang="scss">
    $tab-height:40px;
    $blue:#39f;;
    .tabs-head{
        display: flex;
        justify-content: flex-start;
        height:$tab-height;
        position: relative;
        >.actions-waraap{
           margin-left: auto;
        }
        >.line{
            position: absolute;
            bottom:0;
            width:100px;
            height: 3px;
            background: $blue;
        }

    }

</style>
