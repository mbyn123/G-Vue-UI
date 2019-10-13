<template>
    <div class="toast" ref="toast">
        <slot v-if="!enadleHtml"></slot><!--不支持html书写提示信息-->
        <div v-else  v-html="$slots.default[0]"></div><!--支持html书写提示信息-->
        <div class="line" ref="line"></div>
        <span class="close" v-if="closeButton" @click="clickClose">{{closeButton.text}}</span>
    </div>
</template>

<script>
    export default {
        props:{
            autoClose:{//提示信息是否自动消失
                type:Boolean,
                default:true
            },
            autoCloseDelay:{//提示信息自动消失的时间
                type:Number,
                default:30
            },
            closeButton:{//提示消息中的点击的按钮
                type:Object,
                default(){
                    return{
                        text:'关闭',//按钮的默认名称
                        callback:undefined
                    }
                }
            },
            enadleHtml:{//默认不支持提示信息使用自定义的html编写
                type:Boolean,
                default:false
            }

        },
        mounted(){
            if(this.autoClose){//5秒后自动从页面删除
                setTimeout(()=>{
                    this.close()
                },this.autoCloseDelay*1000)
            }
            this.ss()
        },
        methods:{
            ss(){
                this.$nextTick(()=>{//解决line无法获取父级元素高度的问题
                    this.$refs.line.style.height=`${this.$refs.toast.getBoundingClientRect().height}px`
                })

            },
            close(){//将内容从页面删除
                this.$el.remove()
                this.$destroy()
            },
            log(){
                console.log('测试')
            },
            clickClose(){//点击提示信息按钮
                this.close()//关闭提示信息
                if(this.closeButton && typeof this.closeButton.callback==='function'){//判断用户是否有传入回调函数
                    this.closeButton.callback(this)//如果用户有传入回调函数,就调用该函数
                }                            //this代表当前toast实例,可以传递出去让外部调用toast实例的方法

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
        min-height: $toast-height;
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
        .line{
            min-height:100%;
            border:1px solid #666;
            margin:0 8px;

        }
        .close{
            flex-shrink: 0;
        }
    }

</style>
