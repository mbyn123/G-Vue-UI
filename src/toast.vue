<template>
    <div class="toast">
        <slot></slot>
        <div class="line"></div>
        <span v-if="closeButton">{{closeButton.text}}</span>
    </div>
</template>

<script>
    export default {
        props:{
            autoClose:{//提示信息是否自动消失
                type:Boolean,
                default:true
            },
            autoCloseDelay:{//自动消失的时间
                type:Number,
                default:3
            },
            closeButton:{//点击消失的按钮
                type:Object,
                default(){
                    return{
                        text:'关闭',
                        callback:(toast)=>{
                            toast.close()
                        }
                    }
                }
            }

        },
        methods:{
            close(){//将内容从页面删除
                this.$el.remove()
                this.$destroy()
            }
        },
        mounted(){
            if(this.autoClose){//5秒后自动从页面删除
                setTimeout(()=>{
                    this.close()
                },this.autoCloseDelay*1000)
            }
        },
    }
</script>

<style scoped lang="scss">
    $font-size: 14px;
    $toast-height: 40px;
    $toast-bg: rgba(0, 0, 0, 0.75);
    .toast{
        font-size: $font-size;
        line-height: 1.8;
        height: $toast-height;
        position: fixed;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        display: flex;
        align-items: center;
        background: $toast-bg;
        border-radius: 4px;
        box-shadow: 0px 0px 3px 0px rgba(0,0,0,0.50);
        color: #fff;
        padding: 0 16px;
    }
    .line{
        height:100%;
        border:1px solid #666;
        margin:0 8px;
    }
</style>
