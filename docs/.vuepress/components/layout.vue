<template>
    <div style="padding-top: 16px;">
        <div>
        <h2>三栏布局</h2>
        <p>
            <strong>预览</strong>
        </p>

        <g-layout style="color: white; margin-bottom:50px;">
            <g-header style="height: 50px; background:lightskyblue;">
                header
            </g-header>
            <g-content style="height: 100px; background:deepskyblue;">
                content
            </g-content>
            <g-footer style="height: 50px; background:lightskyblue;">
                footer
            </g-footer>
        </g-layout>

        <p>
            <strong>代码</strong>
        </p>
        <pre><code>{{content}}</code></pre>
        </div>
        <div>
            <h2>侧边栏布局</h2>
            <p>
                <strong>预览</strong>
            </p>


            <g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
                <g-header style="height: 50px; background:lightskyblue;">
                    header
                </g-header>
                <g-layout>
                    <g-sider style="height: 100px; background:#ddd; width:200px; color: black;">
                        sider
                    </g-sider>
                    <g-content style="height: 100px; background:deepskyblue;">
                        content
                    </g-content>
                </g-layout>
                <g-footer style="height: 50px; background:lightskyblue;">
                    footer
                </g-footer>
            </g-layout>

            <p>
                <strong>代码</strong>
            </p>
            <pre><code>{{content2}}</code></pre>
        </div>
        <div>
            <h2>侧边栏布局</h2>
            <p>
                <strong>预览</strong>
            </p>

            <g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
                <g-sider style=" background:#ddd; width:200px; color: black;">
                    sider
                </g-sider>
                <g-layout>
                    <g-header style="height: 50px; background:lightskyblue;">
                        header
                    </g-header>
                    <g-content style="height: 100px; background:deepskyblue;">
                        content
                    </g-content>
                    <g-footer style="height: 50px; background:lightskyblue;">
                        footer
                    </g-footer>
                </g-layout>
            </g-layout>
            <p>
                <strong>代码</strong>
            </p>
            <pre><code>{{content3}}</code></pre>
        </div>
    </div>
</template>
<style scoped>
    * {
        box-sizing: border-box;
    }
</style>
<script>
    import GLayout from '../../../src/layout'
    import GHeader from '../../../src/header'
    import GFooter from '../../../src/footer'
    import GContent from '../../../src/content'
    import GSider from '../../../src/sider'
    export default {
        components: {
            'g-layout':GLayout,
            'g-header':GHeader,
            'g-footer':GFooter,
            'g-content':GContent,
            'g-sider':GSider
        },
        data () {
            return {
                content: `
          <g-layout style="color: white; margin-bottom:50px;">
            <g-header style="height: 50px; background:lightskyblue;">
              header
            </g-header>
            <g-content style="height: 100px; background:deepskyblue;">
              content
            </g-content>
            <g-footer style="height: 50px; background:lightskyblue;">
              footer
            </g-footer>
          </g-layout>
      `,
                content2: `
          <g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
            <g-header style="height: 50px; background:lightskyblue;">
              header
            </g-header>
            <g-layout>
              <g-sider style="height: 100px; background:#ddd; width:200px; color: black;">
                sider
              </g-sider>
              <g-content style="height: 100px; background:deepskyblue;">
                content
              </g-content>
            </g-layout>
            <g-footer style="height: 50px; background:lightskyblue;">
              footer
            </g-footer>
          </g-layout>
      `,
                content3: `
          <g-layout style="color: white; overflow:hidden; margin-bottom:50px;">
            <g-sider style=" background:#ddd; width:200px; color: black;">
              sider
            </g-sider>
            <g-layout>
              <g-header style="height: 50px; background:lightskyblue;">
                header
              </g-header>
              <g-content style="height: 100px; background:deepskyblue;">
                content
              </g-content>
              <g-footer style="height: 50px; background:lightskyblue;">
                footer
              </g-footer>
            </g-layout>
          </g-layout>
      `
            }
        }
    }
</script>
