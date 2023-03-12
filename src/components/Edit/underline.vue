<template>
    <BeginEditToolBarItem icon="icon-zitixiahuaxian"
         name="下划线" @title-click="underline">
    </BeginEditToolBarItem>
</template>
<script setup>
import { inject } from 'vue'
import BeginEditToolBarItem from '../BeginEditToolBarItem.vue';

const Mk = inject('BeginEditTool');
const underline = ()=>{
    Mk.aroundInsert('~~','~~');
    // Mk.aroundInsert('<u>','</u>');
    // 设置光标
    // Mk.Element.selectionEnd = Mk.Element.selectionEnd-1;
}

</script>