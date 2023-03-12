<template>
    <div class="BeginToolBarItem" v-bind="$attrs">
        <i :title="name" 
            class="MarkDownIcon"
            :class="icon" 
            @click="$emit('titleClick')"></i>
        <Teleport to="body">
            <div class="BeginToolShade"
                @click="$emit('update:isShowModal',false)"
                 v-show="isShowModal">
                <div class="BeginToolBarHover" @click.stop>
                    <slot name="content">

                    </slot>
                </div> 
            </div>
        </Teleport>
    </div>
</template>
<script>
export default{
    inheritAttrs: false
}
</script>
<script setup>
import { ref, toRefs } from 'vue'
const props = defineProps(['icon','name','isShowModal']);
const { isShowModal } = toRefs(props);
const emits = defineEmits(['titleClick','update:isShowModal']);

</script>
<style lang="scss">
@import "../style/public.scss";

.BeginEditToolbar{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: left;
    align-items: center;
    padding: 0 14px;
    color: $text-night-primary;
    .BeginToolBarItem{
        position: relative;
        width: 38px;
        height: 38px;

        .MarkDownIcon{
            width: 38px;
            height: 38px;
            font-size: 22px;
            font-weight: bold;
            text-align: center;
            line-height: 38px;
            transition: all .5s;
            &:hover{
                cursor: pointer;
                transition: all .5s;
                color: $text-primary;
            }
        }
    }
}
.BeginToolShade{
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 999;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;

    .BeginToolBarHover{
        width: auto;
        min-height: 45px;
        border-radius: 3px;
        margin-top: 30%;
        padding: 7px;
        box-sizing: border-box;
        box-shadow: 0 0 5px 5px $text-second;
        background: $text-color;
        color: white;
    }
}
</style>