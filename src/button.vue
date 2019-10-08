<template>
    <button class="g-button" :class="[`icon-${iconPosition}`]" @click="$emit('click')"> <!--传参改变class的名称 来改变图标的位置-->
        <!--引入g-icon组件-->
        <g-icon v-if="icon && !loading" :name="icon " class="icon"></g-icon>
        <g-icon name="loading" v-if="loading" class="loading icon"></g-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    import Icon from './icon'
    export default {
        components:{
            'g-icon':Icon
        },
        props: {
            icon: {},//图标名称
            loading:{//loading过渡动画
                type:Boolean,
                default: false
            },
            iconPosition: {//设置图标位置的默认值
                type: String,
                default: 'left',
                validate(value) {
                    return value === 'left' && value === 'right';
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    @keyframes spin {
        0%{transform: rotate(0deg)}
        100%{transform: rotate(360deg)}
    }
    .g-button {
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em; /* 宽度不写死*/
        border: 1px solid var(--border-color);
        border-radius: var(--border-radius);
        background: var(--button-bg);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        &:hover {
            bordr-color: var(--border-color-hover)
        }
        &:active {
            background: var(--button-active-bg)
        }
        &:focus {
            outline: none
        }
        > .icon {
            order: 1;
            margin-right:.2em ;
        }
        > .content {
            order: 2;
        }
        &.icon-right {
            > .icon {
                order: 2;
                margin-left: .2rem;
                margin-right: 0em;
            }
            > .content {
                order: 1;
            }
        }
        .loading{
            animation: spin 1s linear infinite;
        }
    }
</style>
