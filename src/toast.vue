<template>
    <div class="wrapper" :class="toastClass">
        <div class="toast" ref="toast" >
            <slot v-if="!enadleHtml"></slot><!--不支持html书写提示信息-->
            <div v-else v-html="$slots.default[0]"></div><!--支持html书写提示信息-->
            <div class="line" ref="line"></div>
            <span class="close" v-if="closeButton" @click="clickClose">{{closeButton.text}}</span>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            autoClose: {//提示信息是否自动消失
                type: Boolean,
                default: true
            },
            autoCloseDelay: {//提示信息自动消失的时间
                type: Number,
                default: 3
            },
            closeButton: {//提示消息中的点击的按钮
                type: Object,
                default() {
                    return {
                        text: '关闭',//按钮的默认名称
                        callback: undefined//默认没有回调函数
                    }
                }
            },
            enadleHtml: {//默认不支持提示信息使用自定义的html编写
                type: Boolean,
                default: false
            },
            position: {
                type: String,
                default: 'top',
                validator (value) {
                    return ['top', 'bottom', 'middle'].indexOf(value) >= 0
                }

        },

        },
        mounted() {
            this.lineStyle()
            this.setAutoClose()

        },
        computed: {
            toastClass() {//获取用户传入的position位置值
                return {[`position-${this.position}`]: true}
            }
        },
        methods: {
            lineStyle() {
                this.$nextTick(() => {//解决line无法获取父级元素高度的问题
                    this.$refs.line.style.height = `${this.$refs.toast.getBoundingClientRect().height}px`
                })

            },
            setAutoClose() {
                if (this.autoClose) {//3秒后自动从页面删除
                    setTimeout(() => {
                        this.close()
                    }, this.autoCloseDelay * 1000)
                }
            },
            close() {//将内容从页面删除
                this.$el.remove()
                this.$emit('close')
                this.$destroy()
            },
            log() {
                console.log('测试')
            },
            clickClose() {//点击提示信息按钮
                this.close()//关闭提示信息
                if (this.closeButton && typeof this.closeButton.callback === 'function') {//判断用户是否有传入回调函数
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

    @keyframes side-up {
        0% {
            opacity: 0;
            transform: translateY(-100%)
        }
        100% {
            opacity: 1;
            transform: translateY(0%)
        }
    }
    @keyframes side-down {
        0% {
            opacity: 0;
            transform: translateY(100%)
        }
        100% {
            opacity: 1;
            transform: translateY(0%)
        }
    }
    @keyframes fade-in {
        0% {
            opacity: 0;
            transform: translateY(100%)
        }
        100% {
            opacity: 1;
            transform: translateY(0%)
        }
    }
    .wrapper{
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        z-index: 999;
        &.position-top {
            top: 0;
            transform: translateX(-50%);
            .toast{
                border-top-left-radius:0;
                border-top-right-radius:0;
                animation: side-up 1s;
            }
        }

        &.position-bottom {
            bottom: 0;
            transform: translateX(-50%);
            .toast{
                border-bottom-left-radius:0;
                border-bottom-right-radius:0;
                animation: side-down 1s;
            }
        }

        &.position-middle {
            top: 50%;
            transform: translateX(-50%) translateY(-50%);
            .toast{
                animation: fade-in 1s;
            }
        }
    }
    .toast {

        font-size: $font-size;
        line-height: 1.8;
        min-height: $toast-height;
        display: flex;
        align-items: center;
        background: $toast-bg;
        border-radius: 4px;
        box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.50);
        color: #fff;
        padding: 0 16px;

        .line {
            min-height: 100%;
            border: 1px solid #666;
            margin: 0 8px;

        }

        .close {
            flex-shrink: 0;
        }



    }

</style>
