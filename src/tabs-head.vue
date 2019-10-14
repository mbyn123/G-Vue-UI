<template>
<div class="tabs-head">
    <slot></slot>
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
    .tabs-head{
        display: flex;
        justify-content: flex-start;
        height:$tab-height;
        border:1px solid red;
        >.actions-waraap{
           margin-left: auto;
        }

    }

</style>
