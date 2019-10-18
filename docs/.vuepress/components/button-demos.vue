<template>
    <div style="padding-top: 16px;">
        <h2>简单用法</h2>
        <p>
            <strong>预览</strong>
        </p>
        <g-button>默认按钮</g-button>
        <g-button icon="setting">默认按钮</g-button>
        <g-button :loading="true">默认按钮</g-button>
        <g-button disabled>默认按钮</g-button>
        <div style="padding-top:16px ">
        <g-button-group>
            <g-button icon="left">上一页</g-button>
            <g-button>更多</g-button>
            <g-button icon="right">下一页</g-button>
        </g-button-group>
        </div>
        <p>

            <strong>代码</strong>
        </p>
        <pre><code>{{content}}</code></pre>
    </div>
</template>
<script>
    import Button from '../../../src/button'
    import ButtonGroup from '../../../src/button-group'

    export default {
        components: {
            'g-button': Button,
            'g-button-group':ButtonGroup
        },
        data() {
            return {
                content: `
          <g-button>默认按钮</g-button>
          <g-button icon="settings">默认按钮</g-button>
          <g-button :loading="true">默认按钮</g-button>
          <g-button disabled>默认按钮</g-button>

          <g-button-group>
                <g-button icon="left">上一页</g-button>
                <g-button>更多</g-button>
                <g-button icon="right">下一页</g-button>
          </g-button-group>
      `
            }
        }
    }
</script>

