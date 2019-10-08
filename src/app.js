
import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtongGroup from './button-group'

//注册全局组件
Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtongGroup)

new Vue({
    el:'#app',
    data:{
        loading1:false,
        loading2:true,
        loading3:false
    }
})

//引入chai库
import chai from 'chai'
const expect = chai.expect
//单元测试
{   //测试按钮是否含有icon
    const Constructor = Vue.extend(Button)//创建一个button子类
    const vm= new Constructor({
        propsData:{
            icon:'right'//传入icon属性
        }
    })
    vm.$mount('#test')//挂载到实例上

    let useElement= vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-right')//期待href等于#i-right 如果等于不会报错，说明通过测试

}
{   //测试按钮是否含有loading
    const Constructor = Vue.extend(Button)//创建一个button子类
    const vm= new Constructor({
        propsData:{
            icon:'right',//传入icon属性
            loading:true//检测loading
        }
    })
    vm.$mount()

    let useElement= vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-loading')//期待href等于#i-loading 如果等于不会报错，说明通过测试

}
