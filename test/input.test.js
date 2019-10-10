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
})

describe('事件',()=>{
    const Constructor = Vue.extend(Input)
    let vm
    afterEach(()=>{
        vm.$destroy()
    })
    it('支持 change/input/focus/blur 事件',()=>{
        ['change','input','focus','blur']
            .forEach((eventName)=>{
                vm =new Constructor({}).$mount()
                const callback = sinon.fake()
                vm.$on(eventName,callback)
                //触发input的change事件
                let event = new Event(eventName)
                let inputElement = vm.$el.querySelector('input')
                inputElement.dispatchEvent(event)
                expect(callback).to.have.been.calledWith(event)
            })
    })
})


