<template>
<div class="tabs-pane">
    <slot></slot>
</div>
</template>

<script>
    export default {
        name: "tabs-pane",
        inject:['eventBus'],//接收依赖
        created(){
            this.eventBus.$on('updata:selected',(name)=>{
                console.log(name)
            })
        }
    }
</script>

<style scoped>

</style>
