<template>
    <button class="g-button">按钮 </button>
</template>

<script>
    export default {}
</script>

<style scoped lang="scss">
    .g-button{
        font-size:var(--font-size);
        height:var(--button-height);
        padding: 0 1em;/* 宽度不写死*/
        border:1px solid var(--border-color);
        border-radius: var(--border-radius);
        background: var(--button-bg);
        &:hover{
            bordr-color: var(--border-color-hover)
        }
        &:active{
            background:var(--button-active-bg)
        }
        &:focus{
            outline:none
        }
    }

</style>
