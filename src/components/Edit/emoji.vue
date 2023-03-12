<template>
    <BeginEditToolBarItem
        icon="icon-emoji"
        name="表情"
        v-model:isShowModal="IsShow"
        @title-click="Emoji">
        <template #content>
            <div class="container">

            </div>
        </template>
    </BeginEditToolBarItem>
</template>
<script setup>
import { ref, inject } from 'vue'
import emoji from 'markdown-it-emoji/lib/data/light.json'
import BeginEditToolBarItem from '../BeginEditToolBarItem.vue';

const IsShow = ref(false);
const Mk = inject('BeginEditTool');
const Emoji = ()=>{
    IsShow.value != IsShow.value;
    // 获取所有的表情对象
    // for(let item in emoji){
    //     console.log(emoji[item]);
    // }
}
</script>
<style scoped lang="scss">
    .container{
        max-width: 1200px;
        width: 90%;
        min-height: 100px;
        background: red;
    }
</style>