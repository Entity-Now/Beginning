<template>
    <BeginEditToolBarItem
        icon="icon-emoji"
        name="表情"
        v-model:is-show-modal="IsShow"
        @title-click="Emoji">
        <template #content>
            <div class="container">
                <span class="title">表情</span>
                <div class="emoji">
                    <div class="emojiItem" @click="Selector(item)" v-for="item in EmojiList">
                        {{ item }}
                    </div>
                </div>
            </div>
        </template>
    </BeginEditToolBarItem>
</template>
<script setup>
import { ref, inject } from 'vue'
import emoji from 'markdown-it-emoji/lib/data/light.json'
import BeginEditToolBarItem from '../BeginEditToolBarItem.vue';

const IsShow = ref(false);
const EmojiList = ref([]);
const Mk = inject('BeginEditTool');
const Emoji = ()=>{
    IsShow.value = !IsShow.value;
    // 获取所有的表情对象
    if(EmojiList.value.length <= 0)
    for(let item in emoji){
        EmojiList.value.push(emoji[item]);
    }
}
const Selector = (item)=>{
    IsShow.value = !IsShow.value;
    Mk.centreInsert(item, true)
}
</script>
<style scoped lang="scss">
@import "../../style/public.scss";
    .container{
        max-width: 600px;
        min-width: 300px;
        width: auto;
        min-height: 100px;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
        padding: 0;
        .title{
            color: $text-night-primary;
            text-align: center;
        }
        .emoji{
            display: flex;
            flex-direction: row-reverse;
            flex-wrap: wrap;
            .emojiItem{
                width: 32px;
                height: 32px;
                text-align: center;
                line-height: 32px;
                box-sizing: border-box;
                &:hover{
                    border: 1px solid $text-primary;
                    cursor: pointer;
                }
            }
        }
    }
</style>