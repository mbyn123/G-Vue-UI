import Toast from './toast' //引入toast组件
export default {
    install(Vue,options){
        Vue.prototype.$toast=function(message,toastOptions){//向vue实例添加$toast方法,可以在全局调用
           let Constructor = Vue.extend(Toast)//继承toast组件
           let toast = new Constructor({//创建一个构造函数,创建一个toast对象
               propsData: toastOptions

           })
            toast.$slots.default=[message]
            toast.$mount()
            document.body.appendChild(toast.$el)//生成一个toast组件放入body中
        }
     }
}
