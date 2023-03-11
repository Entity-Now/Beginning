<template>
    <div class="EditBox">
        <div class="header">
            <div v-for="item in Mk.toolBar"
                 class="MarkDown" :class="item.Icon"
                 @click="($event)=>Mk.handle(item)">
                <div class="tag">{{ item.Name }}</div>
            </div>
        </div>
        <div class="content">
            <textarea
                class="EditContent"
                placeholder="请输入内容..."
                @keyup.space="Click_Space"
                ref="EditHtml"></textarea>
            <div v-if="IsCode"
                class="RenderHtml5"
                v-html="RenderHtml">
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, reactive, onMounted } from 'vue'
import { BeginningEdit } from '../utils/CreateHighlight.js'
import "../style/icon/MarkDown.css"

const IsCode = ref(false);
const RenderHtml = ref(null);
const EditHtml = ref(null)
const Mk = new BeginningEdit('# test');

const ShowCode = ()=>{
    RenderHtml.value = Mk.getRender;
    IsCode.value = !IsCode.value;
}
onMounted(()=>{
    Mk.init(EditHtml.value,ShowCode);
})

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
                max-width: 100%;
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
            }
        }
    }
</style>