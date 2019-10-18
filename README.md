# G-Vue-UI

## 介绍

 G-Vue-UI 一个基于Vue开发的UI框架 ,提供了一些常用的组件,适合PC端和移动端使用.

是在我在使用Vue和iview UI和Element UI等框架后,尝试写的一个简易的UI框架,造的一个简单轮子!

## 开始使用

1.安装

       npm install g-vue-ui
或
       
       yarn add g-vue-ui

## 文档

### 全局引入

#### 组件:按钮、输入框、网格、布局、Toast、Tabs、Popover、手风琴

* 在main.js入口文件中引入所需要使用的组件

        import Vue from 'vue'
        import App from './App.vue'
        import {
        Button,
        ButtonGroup,
        Icon,
        Input,
        Row,
        Col,
        Popover,
        Layout,
        Header,
        Content,
        Sider,
        Footer,
        Tabs,
        TabsHead,
        TabsItem,
        TabsPane,
        TabsBody,
        Collapse,
        CollapseItem
        } from "g-vue-ui";

        import { plugin } from 'g-vue-ui'//使用Toast组件时,引入此插件

       //全局注册
        Vue.component('g-button',Button)
        Vue.component('g-icon',Icon)
        Vue.component('g-button-group',ButtonGroup)
        Vue.component('g-input',Input)
        Vue.component('g-row',Row)
        Vue.component('g-col',Col)
        Vue.component('g-layout',Layout)
        Vue.component('g-header',Header)
        Vue.component('g-sider',Sider)
        Vue.component('g-content',Content)
        Vue.component('g-footer',Footer)
        Vue.use(plugin)
        Vue.component('g-tabs',Tabs)
        Vue.component('g-tabs-body',TabsBody)
        Vue.component('g-tabs-item',TabsItem)
        Vue.component('g-tabs-head',TabsHead)
        Vue.component('g-tabs-pane',TabsPane)
        Vue.component('g-popover',Popover)
        Vue.component('g-collapse',Collapse)
        Vue.component('g-collapse-item',CollapseItem)

        Vue.config.productionTip = false

        new Vue({
        render: h => h(App),
        }).$mount('#app')

* 然后可以直接在项目中使用
       
        <g-button>按钮</g-button>


