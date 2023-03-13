<template>
    <BeginEditToolBarItem icon="icon-daimawenjian"
        name="代码块"
        v-model:isShowModal="IsShow"
        @titleClick="codeShow">
        <template #content>
            <div class="BeginEdit_ItemList">
                <div class="item" @click="insert(item)" v-for="item in SustainLanguages">
                    {{ item }}
                </div>
            </div>
        </template>
    </BeginEditToolBarItem>
</template>
<script setup>
import { ref, inject } from 'vue'
import "../../style/ItemList.scss";
import BeginEditToolBarItem from '../BeginEditToolBarItem.vue';
import Languages from '../../utils/SustainLanguages.json'

const IsShow = ref(false);
const Mk = inject('BeginEditTool');
const SustainLanguages = ref([...Languages.list]);
const codeShow = ()=>{
    IsShow.value = !IsShow.value;   
}
const insert = (item)=>{
    IsShow.value = !IsShow.value;   
    let SelectionIndex = Mk.Element.selectionEnd;
    let previous = Mk.getValue.substring(SelectionIndex - 1, SelectionIndex);
    if(previous == '\n' || previous == '\r'){
        Mk.centreInsert(`\`\`\`${item}\n\n\`\`\``,true);
    }else{
        Mk.centreInsert(`\n\`\`\`${item}\n\n\`\`\``,true);
    }
}

</script>