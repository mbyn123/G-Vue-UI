import Toast from './toast' //引入toast组件
let currentToast
export default {
    install(Vue,options){
        Vue.prototype.$toast=function(message,toastOptions){//向vue实例添加$toast方法,可以在全局调用
            if(currentToast){
                currentToast.close()
            }
            currentToast=createToast({Vue,message,propsData:toastOptions})
        }
     }
}

//创建一个toast组件
function createToast({Vue,message,propsData}){
    let Constructor = Vue.extend(Toast)//继承toast组件
    let toast = new Constructor({propsData})//创建一个构造函数,创建一个toast对象
    toast.$slots.default=[message]
    toast.$mount()
    document.body.appendChild(toast.$el)//生成一个toast组件放入body中
    return toast
}
