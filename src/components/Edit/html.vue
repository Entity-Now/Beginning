<template>
    <BeginEditToolBarItem icon="icon-html" name="HTML源代码" 
        @title-click="Show"/>
</template>
<script setup>
import { inject } from 'vue';
import BeginEditToolBarItem from '../BeginEditToolBarItem.vue';

const Mk = inject('BeginEditTool');
const ShowCode = inject('BeginEditRenderShow');
const CodeValue = inject('BeginEditRenderHtml5');

const Show = ()=>{
    CodeValue.value = Mk.getRender;
    ShowCode.value = !ShowCode.value;
}

</script>
<style lang="scss">
    .container{
        min-width: 100px;
    }
</style>