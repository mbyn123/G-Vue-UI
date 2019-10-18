
<template>
    <div style="padding-top: 16px;">
        <h2>简单用法</h2>
        <p>
            <strong>预览</strong>
        </p>
        <g-input value="中文"></g-input>
        <g-input value="禁用" disabled></g-input>
        <g-input value="不能修改" readonly></g-input>
        <g-input value="错误" error="出错啦"></g-input>

        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{content}}</code></pre>
        <h2>双向绑定</h2>
        <p>
            <strong>预览</strong>
        </p>
        <g-input v-model="value"></g-input>
        <div>
            value: {{value}}
        </div>

        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{content2}}</code></pre>

    </div>
</template>
<script>
    import GInput from '../../../src/input'
    export default {
        components: {GInput},
        data () {
            return {
                selected: '1',
                content: `
        <g-input value="中文"></g-input>
        <g-input value="禁用" disabled></g-input>
        <g-input value="不能修改" readonly></g-input>
        <g-input value="错误" error="出错啦"></g-input>
      `,
                value: '1',
                content2: `
          data:{
            value: '1'
          }
          <g-input v-model="value"></g-input>
          <div>
            value: {{value}}
          </div>
      `
            }
        }
    }
</script>
