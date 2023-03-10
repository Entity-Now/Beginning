<template>
    <div class="EditBox">
        <div class="header">
            <div class="MarkDown icon-html">
                <div class="tag">HTML5</div>
            </div>
            <div class="MarkDown icon-jiacu">
                <div class="tag">粗体</div>
            </div>
            <div class="MarkDown icon-zitixieti">
                <div class="tag">斜体</div>
            </div>
            <div class="MarkDown icon-zuoyouduiqi">
                <div class="tag">居中</div>
            </div>
            <div class="MarkDown icon-liebiao">
                <div class="tag">列表</div>
            </div>
            <div class="MarkDown icon-quote">
                <div class="tag">引用</div>
            </div>
            <div class="MarkDown icon-zitidaxiao">
                <div class="tag">size</div>
            </div>
            <div class="MarkDown icon-lianjie">
                <div class="tag">链接</div>
            </div>
            <div class="MarkDown icon-tupian">
                <div class="tag">图片</div>
            </div>
            <div class="MarkDown icon-shipin">
                <div class="tag">视频</div>
            </div>
            <div class="MarkDown icon-a-daimakuai3x">
                <div class="tag">源码</div>
            </div>
            <div class="MarkDown icon-kuozhan">
                <div class="tag">放大</div>
            </div>
        </div>
        <div class="content">
            <textarea
                placeholder="请输入内容..."
                class="EditContent"></textarea>
            <div 
                class="RenderHtml5"
                contenteditable="true">
            <div 
                ref="RenderHtml"
                @keyup.space="Click_Space"
                @keyup.enter="enter"></div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { CreateHighlight } from '../utils/CreateHighlight.js'
import '../style/icon/MarkDown.css'

// 渲染后的HTML5
const RenderHtml = ref(null);
// 源代码
const CodeSource = ref('');
const SetCodeSource =(value)=>{
}

// markdown-it
const Mk = CreateHighlight();

// 显示源代码或者html，0 = 源代码 1 = html
const Type = ref(0);

// 点击空格键的时候渲染
const Click_Space = ()=>{
    // 获取空格处的元素
    var selector = window.getSelection();

}

const enter = ()=>{
    
}
// var result = Mk.render('*test');
// console.log(Mk.parse(result));
// console.log(result);
</script>

<style setup lang="scss">
@import "../style/public.scss";

    .EditBox{
        width: 100%;
        height: auto;
        border: 1px solid $text-second;
        display: flex;
        flex-direction: column;
        .header{
            min-height: 45px;
            border-bottom: 1px solid $text-primary;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: left;
            align-items: center;
            padding: 0 14px;
            color: $text-night-primary;
            .MarkDown{
                width: 32px;
                height: 32px;
                font-size: 18px;
                font-weight: bold;
                text-align: center;
                line-height: 32px;
                transition: all .5s;
                position: relative;
                &:hover{
                    cursor: pointer;
                    transition: all .5s;
                    color: $text-primary;
                }
                .tag{
                    display: none;
                    position: absolute;
                    top: 100%;
                    // left: -25%;
                    transform: translateX(0%);
                    background: $back;
                    color: $text-second;
                    padding: 7px;
                    box-sizing: border-box;
                    font-size: 12px;
                    border-radius: 7px;
                    box-shadow: 0 0 5px 3px $text-second;
                    z-index: 999;
                }
                &:hover .tag{
                    display: block;
                }
            }
        }
        .content{
            position: relative;
            width: 100%;
            height: auto;
            .EditContent{
                vertical-align: middle;
                padding: 7px;
                box-sizing: border-box;
                width: 100%;
                min-height: 200px;
                min-width: 100%;
                box-sizing: border-box;
                resize: both;
            }
            .RenderHtml5{
                position: absolute;
                left: 0;
                top: 0;
                min-height: 200px;
                width: 100%;
                padding: 7px;
                z-index: 1;
                background: $back-night;
                box-sizing: border-box;
                border: 1px solid $text-primary;
                // display: none;
            }
        }
    }
</style>