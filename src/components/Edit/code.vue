<template>
    <BeginEditToolBarItem icon="icon-daimawenjian" name="代码块">
        <template #content>
            鼠标悬浮后才会显示的内容
        </template>
    </BeginEditToolBarItem>
</template>
<script setup>
import BeginEditToolBarItem from '../BeginEditToolBarItem.vue';
</script>
<style lang="scss">
    .container{
        min-width: 100px;
    }
</style>