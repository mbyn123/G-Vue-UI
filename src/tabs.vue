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
            this.$children.forEach((vm)=>{
                if(vm.$options.name==='tabs-head'){
                    vm.$children.forEach((childVm)=>{
                               //确定当前选择的name与tabs中的name一致，
                      if(childVm.$options.name==='tabs-item' && childVm.name===this.selected){
                          //eventBus总线触发事件,selected表示当前有tab页被选中了，为了实现切换效果
                          // item表示确定当前被选定的组件的位置，为了实现下划线滑动动画
                          this.eventBus.$emit('updata:selected',this.selected,childVm)
                      }
                    })
                }
            })
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
