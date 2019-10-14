<template>
<div class="tabs-head">
    <slot></slot>
    <slot name="actions"></slot>
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

<style scoped>

</style>
