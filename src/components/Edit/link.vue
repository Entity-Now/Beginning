<template>
    <BeginEditToolBarItem icon="icon-lianjie"
         name="链接"
         v-model:is-show-modal="isShow"
         @title-click="linkBar">
        <template #content>
            <div class="linkInput">
                <span>链接地址</span>
                <input :class="InputNull ? 'error' : ''"
                        v-model="Link"
                        placeholder="请输入链接"
                        type="text">
                <span>链接的描述内容（可为空）</span>
                <input v-model="Describe" type="text" placeholder="请输入内容">
                <button type="button" @click="addLink">添加</button>
            </div>
        </template>
    </BeginEditToolBarItem>
</template>
<script setup>
import { ref, inject, onMounted } from 'vue'
import BeginEditToolBarItem from '../BeginEditToolBarItem.vue';
import "../../style/input.scss";
import "../../style/button.scss";

const Link = ref('');
const Describe = ref('');
const isShow = ref(false);
const InputNull = ref(false);
const Mk = inject('BeginEditTool');

const linkBar = ()=>{
    isShow.value = !isShow.value;
}
const addLink = ()=>{
    if(Link.value.length <= 0){
        InputNull.value = true;
        setTimeout(()=>{
            InputNull.value = false;
        },300)
        return;
    }
    
    if(Describe.value == '' || Describe.value === undefined){
        Describe.value = Link.value;
    }
    let str = `[${Describe.value}](${Link.value})`;
    Mk.centreInsert(str ,true);
    isShow.value = !isShow.value;
    Link.value = '';
    Describe.value = '';

}
</script>
<style scoped lang="scss">
@import "../../style/public.scss";

.linkInput{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: left;
    min-width: 300px;
    span{
        color: $text-night-primary
    }
    input,button{
        margin: 10px 0;
        width: 100%;
    }
}
.error{
    border: 1px solid $ERROR;
    transition: all .3s;
    animation: error .2s alternate-reverse infinite cubic-bezier(.09,.7,.01,.98);

}
@keyframes error{
    from{
        transform: translateX(-5px);
    }
    to{
        transform: translateX(5px);
    }
}
</style>