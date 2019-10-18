
<template>
    <div style="padding-top: 16px;">
        <h2>简单用法</h2>
        <p>
            <strong>预览</strong>
        </p>
        <g-tabs :selected="selected">
            <g-tabs-head>
                <g-tabs-item name="1">
                    <g-icon name="setting"></g-icon>
                    标签一
                </g-tabs-item>
                <g-tabs-item name="2">标签二</g-tabs-item>
                <g-tabs-item name="3" disabled>标签三</g-tabs-item>
            </g-tabs-head>
            <g-tabs-body>
                <g-tabs-pane name="1">标签一的内容</g-tabs-pane>
                <g-tabs-pane name="2">标签二的内容</g-tabs-pane>
            </g-tabs-body>
        </g-tabs>

        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{content}}</code></pre>
    </div>
</template>
<script>
    import GTabs from '../../../src/tabs'
    import GTabsBody from '../../../src/tabs-body'
    import GTabsHead from '../../../src/tabs-head'
    import GTabsItem from '../../../src/tabs-item'
    import GTabsPane from '../../../src/tabs-pane'
    import GIcon from '../../../src/icon'
    export default {
        components: {GTabs, GTabsBody, GTabsHead, GTabsItem, GTabsPane,GIcon},
        data () {
            return {
                selected: '2',
                content: `
          data:{
            selected: '2'
          }
          <g-tabs :selected="selected">
            <g-tabs-head>
                <g-tabs-item name="1">
                    <g-icon name="setting"></g-icon>
                    标签一
                </g-tabs-item>
                <g-tabs-item name="2">标签二</g-tabs-item>
                <g-tabs-item name="3" disabled>标签三</g-tabs-item>
            </g-tabs-head>
            <g-tabs-body>
                <g-tabs-pane name="1">标签一的内容</g-tabs-pane>
                <g-tabs-pane name="2">标签二的内容</g-tabs-pane>
            </g-tabs-body>
        </g-tabs>
      `
            }
        }
    }
</script>
