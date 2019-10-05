<template>
    <div class="g-button-group">
        <slot></slot>
    </div>
</template>

<script>
    export default {
       mounted() {
           for(let node of this.$el.children){
               let name=node.nodeName.toLowerCase()//获取当前按钮集合中子节点标签名称
               if(name !== 'button'){
                   console.warn(`g-button-group的子元素应该全是g-button，但你写的是${name}`)
               }

           }
       }
    }
</script>

<style scoped lang="scss">
    .g-button-group{
        display: inline-flex;
        vertical-align: middle;
        >.g-button{
            border-radius: 0;
            &:not(:first-child){
                margin-left: -1px; /*将除第一个按钮以外的按钮向左移动1px,解决边框重合的问题*/
            }
            margin-left: -1px;
            &:first-child{
                border-top-left-radius: var(--border-radius);
                border-bottom-left-radius: var(--border-radius);
            }
            &:last-child{
                border-top-right-radius:var(--border-radius) ;
                border-bottom-right-radius: var(--border-radius);
            }
            &:hover{
                border-color: var(--border-color-hover);
                position: relative;
                z-index: 1;/*按钮hover后 调整按钮的z-index 使其正常显示边框*/
            }
        }
    }
</style>
