<template>
<div class="tabs-body">
    <slot></slot>
</div>
</template>

<script>
    export default {
        name: "tabs-body",
        inject:['eventBus'],//接收依赖
        created(){
        }
    }
</script>

<style scoped>

</style>
