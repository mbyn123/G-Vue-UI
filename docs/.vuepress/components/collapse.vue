<template>
    <div>
        <div>
        <h2>默认</h2>
        <p>
            <strong>预览</strong>
        </p>
        <g-collapse select="2" >
            <g-collapse-item title="标题1" name="1">内容一</g-collapse-item>
            <g-collapse-item title="标题2" name="2">内容二</g-collapse-item>
            <g-collapse-item title="标题3" name="3">内容三</g-collapse-item>
        </g-collapse>
        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{content}}</code></pre>
        </div>
        <div>
            <h2>手风琴</h2>
            <p>
                <strong>预览</strong>
            </p>
            <g-collapse select="2" single>
                <g-collapse-item title="标题1" name="1">内容一</g-collapse-item>
                <g-collapse-item title="标题2" name="2">内容二</g-collapse-item>
                <g-collapse-item title="标题3" name="3">内容三</g-collapse-item>
            </g-collapse>
            <p>
                <strong>代码</strong>
            </p>
            <pre><code>{{content2}}</code></pre>
        </div>
    </div>
</template>

<script>
    import Collapse from "../../../src/collapse"
    import CollapseItem from "../../../src/collapse-item"

    export default {
        components: {
            'g-collapse': Collapse,
            'g-collapse-item': CollapseItem
        },
        data() {
            return {
                content: `
                <g-collapse select="2" >
                   <g-collapse-item title="标题1" name="1">内容一</g-collapse-item>
                   <g-collapse-item title="标题2" name="2">内容二</g-collapse-item>
                   <g-collapse-item title="标题3" name="3">内容三</g-collapse-item>
               </g-collapse>
               `,
                content2: `
                <g-collapse select="2" single>
                   <g-collapse-item title="标题1" name="1">内容一</g-collapse-item>
                   <g-collapse-item title="标题2" name="2">内容二</g-collapse-item>
                   <g-collapse-item title="标题3" name="3">内容三</g-collapse-item>
               </g-collapse>
               `
            }
        }
    }
</script>

<style scoped>

</style>
