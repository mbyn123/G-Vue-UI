<template>
<div class="tabs-head" ref="head">
    <slot></slot>
    <div class="line" ref="line"></div>
    <div class="actions-waraap">
    <slot name="actions"></slot>
    </div>

</div>
</template>

<script>
    export default {
        name: "tabs-head",
        inject:['eventBus'],//接收依赖
        mounted(){
            this.eventBus.$on('updata:selected',(item,vm)=>{
            let{width,height,top,left}=vm.$el.getBoundingClientRect()//获取当前组件的宽度，左边距
            let {left: left2} = this.$refs.head.getBoundingClientRect()
                this.$refs.line.style.width=`${width}px`
                this.$refs.line.style.left = `${left - left2}px`

            })
        }
    }
</script>

<style scoped lang="scss">
    $tab-height:40px;
    $blue:#39f;;
    .tabs-head{
        display: flex;
        justify-content: flex-start;
        height:$tab-height;
        position: relative;
        border-bottom: 1px solid #999999;
        >.actions-waraap{
           margin-left: auto;
            display: flex;
            align-items: center;
            padding-right: 2em;
        }
        >.line{
            position: absolute;
            bottom:0;
            height: 3px;
            background: $blue;
            transition: all 350ms;
        }

    }

</style>
