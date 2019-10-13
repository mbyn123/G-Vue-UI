import Toast from './toast' //引入toast组件
export default {
    install(Vue,options){
        Vue.prototype.$toast=function(message){
           let Constructor = Vue.extend(Toast)//继承toast组件
           let toast = new Constructor({//创建一个构造函数,创建一个对象
               propsData:{
                   closeButton: {//取消按钮的信息
                       text:'知道了',
                       callback(){
                           console.log('用户说他知道了')
                       }
                   }
               }
           })
            toast.$slots.default=[message]
            toast.$mount()
            document.body.appendChild(toast.$el)//生成一个toast组件放入body中
        }
     }
}
