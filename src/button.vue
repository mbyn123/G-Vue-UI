<template>
    <button class="g-button" :class="[`icon-${iconPosition}`]"> <!--传参改变class的名称 来改变图标的位置-->
        <!--传参改变icon的名称 切换
        <svg v-if="icon" class="icon"><use :xlink:href="`#i-${icon}`"></use></svg>-->

        <!--引入icon组件-->
        <g-icon v-if="icon" :name="icon" class="icon"></g-icon>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    export default {
        // props:['icon','iconPosition']
        props:{
            icon:{},
            iconPosition:{//设置图标位置的默认值
                type:String,
                default:'left',
                validate(value){
                    return value === 'left' && value === 'right';
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .g-button{
        font-size:var(--font-size);
        height:var(--button-height);
        padding: 0 1em;/* 宽度不写死*/
        border:1px solid var(--border-color);
        border-radius: var(--border-radius);
        background: var(--button-bg);
        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;
        &:hover{
            bordr-color: var(--border-color-hover)
        }
        &:active{
            background:var(--button-active-bg)
        }
        &:focus{
            outline:none
        }
        >.icon{
            order:1
        }
        >.content{
            order:2;
            margin-left:.1rem;
        }
        &.icon-right{
            >.icon{
                order:2
            }
            >.content{
                order:1;
                margin-left: 0;
                margin-right: .1rem;
            }
        }
    }

</style>
