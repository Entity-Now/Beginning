<template>
    <BeginEditToolBarItem icon="icon-quote"
         name="引用" @title-click="quote">
    </BeginEditToolBarItem>
</template>
<script setup>
import { inject } from 'vue'
import BeginEditToolBarItem from '../BeginEditToolBarItem.vue';

const Mk = inject('BeginEditTool');
const quote = ()=>{
    // 判断是否选中文本
    if(Mk.getSelectionIndex().isSelection){
        Mk.aroundInsert('`','`');
        return;
    }
    let SelectionIndex = Mk.Element.selectionEnd;
    let previous = Mk.getValue.substring(SelectionIndex - 1, SelectionIndex);
    if(previous == '\n' || previous == '\r'){
        Mk.centreInsert('> ',true);
    }else{
        Mk.centreInsert('\n> ',true);
    }
}

</script>·