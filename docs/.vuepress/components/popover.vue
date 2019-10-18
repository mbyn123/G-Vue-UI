<template>
    <div style="padding-top: 16px;">
        <div>
        <h2>click 触发</h2>
        <p>
            <strong>预览</strong>
        </p>

        <g-popover>
            <g-button>上方弹出</g-button>
            <template slot="content">
                提示内容
            </template>
        </g-popover>
            <g-popover position="bottom">
                <g-button>下方弹出</g-button>
                <template slot="content">
                    提示内容
                </template>
            </g-popover>
            <g-popover position="left">
                <g-button>左边弹出</g-button>
                <template slot="content">
                    提示内容
                </template>
            </g-popover>
            <g-popover position="right">
                <g-button>右边弹出</g-button>
                <template slot="content">
                    提示内容
                </template>
            </g-popover>

            <p>
                <strong>代码</strong>
            </p>
            <pre><code>{{content}}</code></pre>
        </div>
        <div>
            <h2> hover 触发 </h2>
            <p>
                <strong>预览</strong>
            </p>

            <g-popover trigger="hover">
                <g-button>hover上方</g-button>
                <template slot="content">
                    提示内容
                </template>
            </g-popover>
            <g-popover position="bottom" trigger="hover">
                <g-button>hover下方</g-button>
                <template slot="content">
                    提示内容
                </template>
            </g-popover>
            <g-popover position="left" trigger="hover">
                <g-button>hover左边</g-button>
                <template slot="content">
                    提示内容
                </template>
            </g-popover>
            <g-popover position="right" trigger="hover">
                <g-button>hover右边</g-button>
                <template slot="content">
                    提示内容
                </template>
            </g-popover>

            <p>
                <strong>代码</strong>
            </p>
            <pre><code>{{content2}}</code></pre>
        </div>
    </div>
</template>
<style>
</style>
<style scoped>
</style>
<script>
    import GButton from '../../../src/button'
    import GPopover from '../../../src/popover'
    export default {
        components: {GButton, GPopover},
        data () {
            return {
                content: `
          <g-popover>
            <g-button>上方弹出</g-button>
            <template slot="content">
              弹出内容
            </template>
          </g-popover>
          <g-popover position="bottom">
            <g-button>下方弹出</g-button>
            <template slot="content">
              弹出内容
            </template>
          </g-popover>
          <g-popover position="left">
            <g-button>左边弹出</g-button>
            <template slot="content">
              弹出内容
            </template>
          </g-popover>
          <g-popover position="right">
            <g-button>右边弹出</g-button>
            <template slot="content">
              弹出内容
            </template>
          </g-popover>
      `,
                content2: `
          <g-popover trigger="hover">
            <g-button>上方弹出</g-button>
            <template slot="content">
              弹出内容
            </template>
          </g-popover>
          <g-popover position="bottom" trigger="hover">
            <g-button>下方弹出</g-button>
            <template slot="content">
              弹出内容
            </template>
          </g-popover>
          <g-popover position="left" trigger="hover">
            <g-button>左边弹出</g-button>
            <template slot="content">
              弹出内容
            </template>
          </g-popover>
          <g-popover position="right" trigger="hover">
            <g-button>右边弹出</g-button>
            <template slot="content">
              弹出内容
            </template>
          </g-popover>
      `
            }
        },
        methods: {
            onClickButton () {
                this.$toast('<strong style="color:red;">加粗的提示</strong>', {
                    enableHtml: true
                })
            }
        },
    }
</script>
