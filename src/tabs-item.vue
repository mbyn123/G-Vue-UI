<template>
<div class="tabs-item" @click="xxx" :class="classes">
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
        data(){
            return{
                active:false
            }
        },
        inject:['eventBus'],//接收依赖
        created(){
            this.eventBus.$on('updata:selected',(name)=>{//子组件监听总线触发的事件,发出响应
                if(name===this.name){
                    this.active=true
                }else{
                    this.active=false
                }
            })
        },
        computed:{
            classes(){
                return{
                    active:this.active
                }
            }
        },
        methods:{
            xxx(){
                this.eventBus.$emit('updata:selected',this.name)
            }
        }
    }
</script>

<style scoped lang="scss">
    .tabs-item{
        flex-shrink: 0;
        padding: 0 2em;
        &.active{
            background: #F1453D;
        }
    }

</style>
