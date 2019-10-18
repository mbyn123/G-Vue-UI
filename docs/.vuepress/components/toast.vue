<template>
    <div style="padding-top: 16px;">
        <div>
            <h2>基本使用</h2>
            <p>
                <strong>预览</strong>
            </p>

            <div class="g-toast">
                <g-button @click="$toast('点击弹出提示')">上方弹出</g-button>
                <g-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</g-button>
                <g-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</g-button>
            </div>

            <p>
                <strong>代码</strong>
            </p>
            <pre><code>{{content}}</code></pre>
        </div>
        <div>
            <h2>设置关闭按钮</h2>
            <p>
                <strong>预览</strong>
            </p>

            <div>
                <g-button @click="onClickButton">上方弹出</g-button>
            </div>

            <p>
                <strong>代码</strong>
            </p>
            <pre><code>{{content2}}</code></pre>
        </div>
        <div>
            <h2>支持 HTML</h2>
            <p>
                <strong>预览</strong>
            </p>

            <div>
                <g-button @click="onClickButton2">上方弹出</g-button>
            </div>

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
    import plugin from '../../../src/plugin'
    import GButton from '../../../src/button'
    import Vue from 'vue'

    Vue.use(plugin)
    export default {
        components: {GButton},
        data() {
            return {
                content: `
          <g-button @click="$toast('点击弹出提示')">上方弹出</g-button>
          <g-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</g-button>
          <g-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</g-button>
      `,
                content2: `
          <div>
            <g-button @click="onClickButton">上方弹出</g-button>
          </div>
          methods: {
            onClickButton () {
              this.$toast('你知道我在等你吗？', {
                closeButton: {
                  text: '知道了',
                  callback: () => {
                    console.log('他说知道了')
                  }
                }
              })
            }
          },
      `,
                content3: `
          <div>
            <g-button @click="onClickButton2">上方弹出</g-button>
          </div>
          methods: {
           onClickButton () {
             this.$toast('<strong style="color:red;">加粗的提示</strong>', {
             enableHtml: true
           })
          }
          },
      `

            }
        },
        methods: {
            onClickButton() {
                this.$toast('你知道我在等你吗？', {
                    closeButton: {
                        text: '知道了',
                        callback: () => {
                            console.log('他说知道了')
                        }
                    }
                })
            },
            onClickButton2() {
                this.$toast('<strong style="color:red;">加粗的提示</strong>', {
                    enadleHtml: true
                })
            }
        },
    }
</script>
