<template>
<div class="popover" @click.stop="xxx">
    <div class="wrapper-content" v-if="visible" @click.stop>
        <slot name="content" ></slot>
    </div>
    <slot></slot>
</div>
</template>

<script>
    export default {
        name: "popover",
        data(){
            return{
                visible:false
            }
        },
        methods:{
            xxx(){
                this.visible=!this.visible
                if(this.visible===true){
                    this.$nextTick(()=>{
                        let eventHandler=()=>{
                            this.visible=false
                            document.removeEventListener('click',eventHandler)
                        }
                       document.addEventListener('click',eventHandler)
                    })
                }else{

                }

            }
        }
    }
</script>

<style scoped lang="scss">
    .popover{
        display: inline-block;
        vertical-align: top;
        position: relative;
        .wrapper-content{
            border:1px solid red;
            position: absolute;
            bottom:100%;
        }
    }


</style>
