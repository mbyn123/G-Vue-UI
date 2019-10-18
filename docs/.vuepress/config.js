module.exports = {
    base:'/G-Vue-UI/',
    title: 'Gvue UI',
    description: '一个基于Vue开发的UI框架',
    themeConfig: {
        nav: [
            {text: '主页', link: '/'},
            {text: 'github', link: 'https://github.com/mbyn123/gulu-vue-UI'},
        ],
        sidebar: [
            '/install/',
            '/get_started/',
            {
                title: '组件',
                children:[
                    '/components/button',
                    '/components/input',
                    '/components/grid',
                    '/components/layout',
                    '/components/toast',
                    '/components/tab',
                    '/components/popover',
                    '/components/collapse'
                ]
            }
        ],




}

}
