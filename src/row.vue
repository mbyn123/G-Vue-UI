<template>
   <div class="row" :style="rowClass">
       <slot></slot>
   </div>
</template>

<script>
    export default {
        props:{
            gutter:{
                type:[Number,String]
            }
        },
        mounted() {
            this.$children.forEach((vm)=>{
                vm.gutter=this.gutter
            })
        },
        computed:{
            rowClass(){
                return {
                    marginRight:-this.gutter/2+'px',
                    marginLeft:-this.gutter/2+'px'
                }
            }
        }

    }
</script>

<style scoped lang="scss">
 .row{
     display: flex;
 }
</style>
