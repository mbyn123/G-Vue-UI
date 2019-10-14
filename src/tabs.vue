<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script>
    import Vue from 'vue'
    export default {
        name: "tabs",
        props:{
            selected:{//默认选择tab页
                type:String,
                require:true
            },
            direction:{//tabs排列方向
                type:String,
                default:'horizontal',//默认横向
                validator(value){
                  return ['horizontal','vertical'].indexOf(value)>=0
                }
            }
        },
        mounted() {
            this.eventBus.$emit('updata:selected',this.selected)//eventBus总线触发事件,表示当前有tab页被选中了
        },
        data(){
            return{
                eventBus:new Vue()//生成一个eventBus实例
            }
        },
        provide(){//注入依赖
            return{
                eventBus: this.eventBus
            }
        },

    }
</script>

<style scoped>

</style>
