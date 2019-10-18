module.exports = {
    title: 'xxx UI',
    description: '一个基于Vue的UI框架',
    themeConfig: {
        nav: [
            {text: '主页', link: '/'},
            {text: '文档', link: '/guide/'},
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
