<template>
    <button class="g-button" :class="[`icon-${iconPosition}`]">
        <svg v-if="icon" class="icon"><use :xlink:href="`#i-${icon}`"></use></svg>
        <div class="content">
            <slot></slot>
        </div>
    </button>
</template>

<script>
    export default {
        props:['icon','iconPosition']
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
