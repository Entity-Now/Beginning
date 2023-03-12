<template>
    <BeginEditToolBarItem icon="icon-zitixieti" name="斜体" @title-click="italic">
        <template #content>
            鼠标悬浮后才会显示的内容
        </template>
    </BeginEditToolBarItem>
</template>
<script setup>
import { inject } from 'vue'
import BeginEditToolBarItem from '../BeginEditToolBarItem.vue';

const Mk = inject('BeginEditTool');
const italic = ()=>{
    Mk.aroundInsert('*','*');
}

</script>
<style lang="scss">
    .container{
        min-width: 100px;
    }
</style>