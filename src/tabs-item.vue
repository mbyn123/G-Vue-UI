
<template>
    <div class="tabs-item" @click="clickItem" :class="classes">
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
                active:false//默认active为false,不显示
            }
        },
        inject:['eventBus'],//接收依赖
        created(){
            this.eventBus.$on('updata:selected',(name)=>{//子组件监听总线触发的事件,发出响应
                if(name===this.name){
                    this.active=true//被选中的时候，为true
                }else{
                    this.active=false
                }
            })
        },
        computed:{
            classes(){
                return{
                    active:this.active,//实时监听active 点击切换的值
                    disabled:this.disabled//实时监听disabled 禁用组件的值
                }
            }
        },
        methods:{
            clickItem(){
                if(this.disabled){return}//禁用当前组件
                this.eventBus.$emit('updata:selected',this.name,this)
            }
        }
    }
</script>

<style scoped lang="scss">
    $blue:#39f;;
    $disabled-text-color: grey;
    .tabs-item {
        flex-shrink: 0;
        padding: 0 1em;
        cursor: pointer;
        height: 100%;
        display: flex;
        align-items: center;
        &.active {
            color: $blue;
            font-weight: bold;
        }
        &.disabled {
            color: $disabled-text-color;
            cursor: not-allowed;
        }
    }
</style>
