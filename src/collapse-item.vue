<template>
    <div class="collapseItem" >
        <div class="title" @click="toggle">{{title}}</div>
        <div class="content" v-if="open">
            <slot></slot>
        </div>
    </div>
</template>

<script>

    export default {

        name: "collapse-item",
        props:{
            title:{
                type:String,
                require:true
            },
            name:{
                type:String,
                require: true
            }
        },
        data(){
            return{
                open:false,
                single:false
            }
        },
        inject:['eventBus'],
        mounted(){
        this.eventBus && this.eventBus.$on('update:selected',(name)=>{
               if(name !== this.name){
                   if(this.single){
                       this.close()
                   }
               }else{
                   this.show()
               }
            })
        },
        methods:{
            toggle(){
                if(this.open){
                    this.open=false
                }else{
                    this.eventBus &&  this.eventBus.$emit('update:selected',this.name)
                }
            },
            close(){
                this.open=false
            },
            show(){
                this.open=true
            }
        },

    }
</script>

<style scoped lang="scss">
    .collapseItem{
      >.title{
          border:1px solid #999;
          background: #f7f7f7;
          margin-top: -1px;
          margin-left: -1px;
          margin-right: -1px;
          min-height:32px;
          display: flex;
          align-items: center;
          padding: 0 8px;
      }
        &:first-child{
            >.title{
                border-top-right-radius: 4px;
                border-top-left-radius: 4px;
            }
        }
      >.content{
          padding:8px;
          background:#ffffff;
      }
    }

</style>
