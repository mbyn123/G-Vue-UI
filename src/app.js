
import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtongGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Content from './content'
import Footer from './footer'
import Toast from './toast'
import Plugin from './plugin'

//注册全局组件
Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtongGroup)
Vue.component('g-input',Input)
Vue.component('g-row',Row)
Vue.component('g-col',Col)
Vue.component('g-layout',Layout)
Vue.component('g-header',Header)
Vue.component('g-sider',Sider)
Vue.component('g-content',Content)
Vue.component('g-footer',Footer)
Vue.component('g-toast',Toast)
Vue.use(Plugin)


new Vue({
    el:'#app',
    data:{
        loading1:false,
        loading2:true,
        loading3:false,
        message:'hi'
    },
    created(){
        //调用toast组件,向组件中传入提示信息,和关闭按钮的名称以及点击按钮后的回调函数
        this.$toast('<a style="color: #F1453D" href="http://qq.com">hihihihihiihiihhhhhhhhhhhhhhhhhhhhhhh</a>',{
            enadleHtml:true,
            position:'top',
            autoClose:true,
            autoCloseDelay:30,
            closeButton: {
                text:'关闭55555555555',
                callback(toast){
                    toast.log()//toast可以接受toast组件内的方法log
                    console.log('用户说他知道了')
                }
            }
        })

    },
    methods:{
      inputChange(e){
          console.log(e.target.value)
      },
      showToast(){

      }

    },

})

// //引入chai库
// import chai from 'chai'
// const expect = chai.expect
// //单元测试
// {   //测试按钮是否含有icon
//     const Constructor = Vue.extend(Button)//创建一个button子类
//     const vm= new Constructor({
//         propsData:{
//             icon:'right'//传入icon属性
//         }
//     })
//     vm.$mount('#test')//挂载到实例上
//
//     let useElement= vm.$el.querySelector('use')
//     let href = useElement.getAttribute('xlink:href')
//     expect(href).to.eq('#i-right')//期待href等于#i-right 如果等于不会报错，说明通过测试
//
// }
// {   //测试按钮是否含有loading
//     const Constructor = Vue.extend(Button)//创建一个button子类
//     const vm= new Constructor({
//         propsData:{
//             icon:'right',//传入icon属性
//             loading:true//检测loading
//         }
//     })
//     vm.$mount()
//
//     let useElement= vm.$el.querySelector('use')
//     let href = useElement.getAttribute('xlink:href')
//     expect(href).to.eq('#i-loading')//期待href等于#i-loading 如果等于不会报错，说明通过测试
//
// }
