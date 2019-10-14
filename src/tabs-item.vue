<template>
<div class="tabs-item">
    <slot></slot>
</div>
</template>

<script>
    export default {
        name: "tabs-item",
        props:{
            disabled:{//是否禁用
                type:Boolean,
                default:false//默认不禁用
            }
        }
    }
</script>

<style scoped>

</style>
