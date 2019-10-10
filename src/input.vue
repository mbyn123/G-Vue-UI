<template>
    <div class="wrapper" :class="{error}">
        <input :value="value" :disabled="disabled" :readonly="readonly" type="text"
        @change="$emit('change',$event.target.value)"
        @input="$emit('input',$event.target.value)"
        @focus="$emit('focus',$event.target.value)"
        @blur="$emit('blur',$event.target.value)"
        >

        <template v-if="error">
            <icon  name="error" class="icon-error"></icon>
            <span class="icon-message">{{error}}</span>
        </template>
    </div>
</template>

<script>
    import Icon from './icon'
    export default {
        name: "G-input",
        components:{
            Icon
        },
        props: {
            value: {
                type: String
            },
            disabled: {//输入框禁用
                type: Boolean,
                default: false
            },
            readonly: {//不能修改
                type: Boolean,
                default: false
            },
            error: {//提示错误
                type: String
            }
        }
    }
</script>

<style lang="scss" scoped>
    $height: 32px;
    $border-color: #999;
    $border-color-hover: #666;
    $border-radius: 4px;
    $font-size: 12px;
    $box-shadow-color: rgba(0, 0, 0, 0.5);
    $red: #F1453D;
    .wrapper{
        font-size: $font-size;
        display: inline-flex;
        justify-content: center;
        align-items: center;
        >:not(:last-child){
            margin-right: .5em;
        }
    > input {
        height: 32px;
        border: 1px solid $border-color;
        border-radius: 4px;
        padding: 0 8px;
        font-size: inherit;

        &:hover {
            border-color: $border-color;
        }

        &:focus {
            box-shadow: inset 0 1px 3px $box-shadow-color;
            outline: none;
        }

        &[disabled], &[readonly] {
            border-color: #aaa;
            color: #aaa;
            cursor: not-allowed;
        }
    }
    &.error {
        > input {
            border-color: $red
        }
    }
    .icon-error{
        fill:$red;
        font-size:15px;
    }
    .icon-message{
        font-size: 12px;
        color:red
    }
    }
</style>
