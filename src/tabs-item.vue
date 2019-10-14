<template>
<div class="tabs-item" @click="xxx">
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
            },
            name:{
                type:String|Number,
                required:true
            }

        },
        inject:['eventBus'],//接收依赖
        created(){
            this.eventBus.$on('updata:selected',(name)=>{
                console.log(name)
            })
        },
        methods:{
            xxx(){
                this.eventBus.$emit('updata:selected',this.name)
            }
        }
    }
</script>

<style scoped>

</style>
