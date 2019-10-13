import Toast from './toast' //引入toast组件
export default {
    install(Vue,options){
        Vue.prototype.$toast=function(message){
           let Constructor = Vue.extend(Toast)
           let toast = new Constructor()
            toast.$slots.default=[message]
            toast.$mount()
            document.body.appendChild(toast.$el)//生成一个toast组件放入body中
        }
     }
}
