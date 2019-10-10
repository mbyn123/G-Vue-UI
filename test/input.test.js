const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('input',()=>{
    it('存在.', () => {
        expect(Input).to.exist
    })
    it('接受value.', () => {//检测input中的value
        const Constructor = Vue.extend(Input)
        const vm = new Constructor({
            propsData: {
                value: '123123'//将测试用例的value值设为123123
            }
        }).$mount()
        const inputElement = vm.$el.querySelector('input')
        expect(inputElement.value).to.equal('123123')//input的value值是否等于123123
        vm.$destroy()//销毁
    })
    it('接受disabled.', () => {//检测disabled
        const Constructor = Vue.extend(Input)
        const vm = new Constructor({
            propsData: {
                disabled: true//将测试用例的disabled值设为true
            }
        }).$mount()
        const inputElement = vm.$el.querySelector('input')
        expect(inputElement.disabled).to.equal(true)//disabled是否等于true
        vm.$destroy()//销毁
    })
    it('接受readonly.', () => {//检测readonly
        const Constructor = Vue.extend(Input)
        const vm = new Constructor({
            propsData: {
                readonly: true//将测试用例的readonly值设为true
            }
        }).$mount()
        const inputElement = vm.$el.querySelector('input')
        expect(inputElement.readOnly).to.equal(true)//readonly是否等于true
        vm.$destroy()//销毁
    })
    it('接受error', () => {//检测error
        const Constructor = Vue.extend(Input)
        const vm = new Constructor({
            propsData: {
                error: '你错了'//将测试用例的error的提示信息值设为你错了
            }
        }).$mount()
        const useElement = vm.$el.querySelector('use')//获取error中的icon
        expect(useElement.getAttribute('xlink:href')).to.equal('#i-error')//测试error中的icon是否正确
        const errorMessage = vm.$el.querySelector('.icon-message')//获取error中的提示信息
        expect(errorMessage.innerText).to.equal('你错了')//error中的提示信息是否等于你错了
        vm.$destroy()//销毁
    })
    // it('点击 input 触发 change 事件', () => {
    //     const Constructor = Vue.extend(Input)
    //     const vm = new Constructor({
    //         // propsData: {
    //         //     icon: 'settings',
    //         // }
    //     }).$mount()
    //vm.$on('click', callback)
    //     const callback = sinon.fake();//使用sinon 中的fake()函数，可以知道当前函数是否被调用过
    //
    //     //触发input的change事件
    //     let event=new Event('change')
    //     let inputElement = vm.$el.querySelector('input')
    //     inputElement.dispatchEvent(event)
    //     expect(callback).to.have.been.calledWith(event)
    //
    // })
})


