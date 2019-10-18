
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
// import Toast from './toast'
import Plugin from './plugin'
import Tabs from './tabs'
import TabsBody from './tabs-body'
import TabsHead from './tabs-head'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'
import Popover from './popover'
import Collapse from './collapse'
import CollapseItem from './collapse-item'

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
// Vue.component('g-toast',Toast)
Vue.use(Plugin)
Vue.component('g-tabs',Tabs)
Vue.component('g-tabs-body',TabsBody)
Vue.component('g-tabs-item',TabsItem)
Vue.component('g-tabs-head',TabsHead)
Vue.component('g-tabs-pane',TabsPane)
Vue.component('g-popover',Popover)
Vue.component('g-collapse',Collapse)
Vue.component('g-collapse-item',CollapseItem)


new Vue({
    el:'#app',
    data:{
        // loading1:false,
        // loading2:true,
        // loading3:false,
        // message:'hi',
        // selected:'2'
    },
    created(){
    },
    methods:{
      // inputChange(e){
      //     console.log(e.target.value)
      // },
      // showToast(){
      //     //调用toast组件,向组件中传入提示信息,和关闭按钮的名称以及点击按钮后的回调函数
      //     this.$toast(`你的幸运数字是${parseInt(Math.random()*100)}`,{
      //         enadleHtml:false,
      //         position:'top',
      //         autoClose:true,
      //         autoCloseDelay:30,
      //         closeButton: {
      //             text:'知道了',
      //             callback(toast){
      //                 toast.log()//toast可以接受toast组件内的方法log
      //                 console.log('用户说他知道了')
      //             }
      //         }
      //     })
      // }

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
