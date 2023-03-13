<template>
    <BeginEditToolBarItem>
        <template #title>
            <i class="MarkDownIcon icon-zuoyouduiqi"
                @click="Insert(0)" title="靠左"></i>
            <i class="MarkDownIcon icon-zuoyouduiqi"
                @click="Insert(1)" title="居中"></i>
            <i class="MarkDownIcon icon-zuoyouduiqi" 
                @click="Insert(2)" title="靠右"></i>
        </template>
        <template #content>
            鼠标悬浮后才会显示的内容
        </template>
    </BeginEditToolBarItem>
</template>
<script setup>
import { inject } from 'vue'
import BeginEditToolBarItem from '../BeginEditToolBarItem.vue';
import "../../style/icon/MarkDownIcon.css";

const Mk = inject('BeginEditTool');
const Insert = (type)=>{
    let typeStr = type == 0 ? 'left' : (type == 1) ? 'center' : 'right';

    // 判断是否选中文本
    if(Mk.getSelectionIndex().isSelection){
        Mk.aroundInsert(`::: BeginEdit-${typeStr}\n`,'\n:::');
        return;
    }
    let SelectionIndex = Mk.Element.selectionEnd;
    let previous = Mk.getValue.substring(SelectionIndex - 1, SelectionIndex);
    if((previous == '\n' || previous == '\r')){
        Mk.centreInsert(`::: BeginEdit-${typeStr}\n\n:::`,true);
    }else{
        Mk.centreInsert(`\n::: BeginEdit-${typeStr}\n\n:::`,true);
    }
}
</script>