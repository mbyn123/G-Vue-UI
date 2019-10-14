<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script>
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
        created() {
            // this.$emit('updata:selected','xxx')
        }
    }
</script>

<style scoped>

</style>
