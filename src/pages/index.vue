<template>
    <div>
        hello vue3
        <textarea 
            v-model="CodeSource"
            @input="enter"
            placeholder="请输入内容"
            class="mark"></textarea>
        <div class="mark" v-html="RenderHtml"></div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
import MarkdownIt  from 'markdown-it'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css';

const RenderHtml = ref('');
const CodeSource = ref('');
const Mk = new MarkdownIt({
    html:true, // 支持html
    xhtmlOut: false, // 支持‘/’闭合标签 <br/>
    breaks: true, // 段落中的'\n'转换为换行符
    linkify: false, // 自动将url地址转换为链接
    typographer:true, // 请用引号美化'‘’'
    quotes:'“”‘’',
    highlight:function(str, lang){
        if(lang && hljs.getLanguage(lang)){
            try {
                return hljs.highlight(str, { language: lang }).value;
            } catch (__) {}
        }
        return '';
    }
});

const enter = ()=>{
    RenderHtml.value = Mk.render(CodeSource.value);
}
var result = Mk.render('# markdown-it rulezz!');
console.log(result);
</script>
<style scoped lang="scss">
    .mark{
        width: 250px;
        min-height: 250px;
        border: 1px solid red;
        display: inline-block;
        vertical-align: middle;
    }
</style>