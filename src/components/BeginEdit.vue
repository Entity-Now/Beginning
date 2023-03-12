<template>
    <div class="BeginEdit-Box">
        <div class="BeginEdit-header">
            <div class="BeginEditToolbar">
                <div class="Begin-Toolbar-list" v-for="item in ListToolbar">
                    <component :is='item'></component>
                </div>
            </div>
        </div>
        <div class="BeginEdit-content">
            <textarea
                ref="BeginEditMarkValue"
                class="BeginEditMarkValue"
                placeholder="请输入内容..."
                @keyup.space="Click_Space"></textarea>
            <div v-if="BeginEditRenderShow"
                class="BeginEditRenderHtml5 markdown-body"
                v-html="BeginEditRenderHtml5">
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, shallowRef, onMounted, provide} from 'vue'
import { BeginningEdit } from '../utils/BeginEditConfig.js'
import "../style/icon/MarkDownIcon.css"
import 'highlight.js/styles/github-dark-dimmed.css';
import "github-markdown-css/github-markdown.css"

const BeginEditRenderShow = ref(false);
const BeginEditRenderHtml5 = ref(null);
const BeginEditMarkValue = ref(null);
// 浅引用
const ListToolbar = shallowRef();
const Mk = new BeginningEdit('# test');
// 注入方法以提供toolbar使用
provide('BeginEditTool',Mk);
provide('BeginEditRenderShow',BeginEditRenderShow);
provide('BeginEditRenderHtml5',BeginEditRenderHtml5);

onMounted(()=>{
    Mk.init(BeginEditMarkValue.value);
    ListToolbar.value = Mk.getToolbar();
})

</script>

<style lang="scss">
@import "../style/public.scss";

    .BeginEdit-Box{
        width: 100%;
        height: auto;
        border: 1px solid $text-second;
        display: flex;
        position: relative;
        flex-direction: column;
        overflow-y: scroll;
        .BeginEdit-header{
            position: sticky;
            z-index: 2;
            top: 0;
            border-bottom: 1px solid $text-primary;
            background: $back-night;
        }
        .BeginEdit-content{
            position: relative;
            width: 100%;
            height: auto;
            .BeginEditMarkValue{
                vertical-align: middle;
                padding: 7px;
                box-sizing: border-box;
                width: 100%;
                min-height: 200px;
                min-width: 100%;
                max-width: 100%;
                box-sizing: border-box;
                // 可以拖动大小
                resize: both;
                font-size: 22px;
            }
            .BeginEditRenderHtml5{
                position: absolute;
                left: 0;
                top: 0;
                min-height: 100%;
                min-width: 100%;
                max-width: 100%;
                width: 100%;
                padding: 7px;
                z-index: 1;
                background: $back-night;
                box-sizing: border-box;
                border: 1px solid $text-primary;
            }
        }
    }
    .hljs {
        display: block;
        overflow-x: auto;
        padding: 0.5em;
    }
    .markdown-body {
        box-sizing: border-box;
        min-width: 200px;
        max-width: 980px;
        margin: 0 auto;
        padding: 45px;
    }
    
    @media (max-width: 767px) {
        .markdown-body {
            padding: 15px;
        }
    }
</style>