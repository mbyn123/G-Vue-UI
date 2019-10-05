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
