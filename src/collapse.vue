<template>
    <div class="collapse">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        name: "collapse",
        props:{
            single:{//单选或者多选
                type:Boolean,
                default:false//默认多选
            },
            selected:{
                type:String//默认选择项
            }
        },
     data(){
            return{
                eventBus:new Vue
            }
     },
     provide(){
             return{
                 eventBus:this.eventBus
         }

     },
     mounted(){
            this.eventBus.$emit('update:selected',this.select)
            this.$children.forEach((vm)=>{
                vm.single=this.single
            })
     }
    }
</script>

<style scoped lang="scss">
    .collapse{
        border:1px solid #ccc;
        border-radius: 4px;
    }

</style>
