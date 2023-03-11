import MarkdownIt  from 'markdown-it'
import hljs from 'highlight.js'
import 'highlight.js/styles/github.css';

export function CreateHighlight(){
    return new MarkdownIt({
        html:true, // 支持html
        xhtmlOut: false, // 支持‘/’闭合标签 <br/>
        breaks: true, // 段落中的'\n'转换为换行符
        linkify: false, // 自动将url地址转换为链接
        typographer:true, // 请用引号美化'‘’'
        quotes:'“”',
        highlight:function(str, lang){
            if(lang && hljs.getLanguage(lang)){
                try {
                    return hljs.highlight(str, { language: lang }).value;
                } catch (__) {}
            }
            return '';
        }
    });
}
export class BeginningEdit{
    constructor(source){
        this.MkIt = CreateHighlight();
        this.Element = null;
        this.showCode = null;
        this.toolBar = [
            { ID:1,Name:'HTML5',Icon:'icon-html'},
            { ID:2,Name:'粗体',Icon:'icon-jiacu'},
            { ID:3,Name:'斜体',Icon:'icon-zitixieti'},
            { ID:4,Name:'列表',Icon:'icon-liebiao'},
            { ID:5,Name:'引用',Icon:'icon-quote' },
            { ID:6,Name:'字体大小',Icon:'icon-zitidaxiao'},
            { ID:7,Name:'图片',Icon:'icon-tupian'},
            { ID:8,Name:'视频',Icon:'icon-shipin' },
            { ID:9,Name:'链接',Icon:'icon-lianjie'},
            { ID:10,Name:'源码',Icon:'icon-a-daimakuai3x'},
            { ID:11,Name:'放大',Icon:'icon-kuozhan'}
            // { Name:'居中',Icon:'icon-zuoyouduiqi',Handle:null },
        ];
        this.Source = source;
        this.Render = source && this.MkIt.render(source);
    }
    get getRender(){
        return this.MkIt.render(this.getValue);
    }
    get getValue(){
        return this.Element.value;
    }
    set setValue(val){
        this.Element.value = val;
    }
    // 判断是否最后一个字符
    get getLastLength(){
        let { end } = this.getSelectionIndex();
        // 不是最后要给字符
        if(getValue.length > end){
            return false;
        }else{
            return true;
        }
    }
    getSelectionIndex(){
        // 改变selectionEnd的值即可移动光标
        let start = this.Element.selectionStart;
        let end = this.Element.selectionEnd;
        // 判断是否选中文本
        let isSelection = false;
        if(start < end){
            isSelection = true;
        }
        return {
            start,
            end,
            isSelection
        }
    }
    // toolbar的事件
    handle(toolBar){
        this.Element.focus();
        if(toolBar.ID == 1){
            this.showCode();
        }else if(toolBar.ID == 2){
            this.aroundInsert('**','**');
        }else if(toolBar.ID == 3){
            this.aroundInsert('*','*');
        }
    }
    // 选中的文本前后插入
    aroundInsert(front, behind){
        let { start, end,  isSelection } = this.getSelectionIndex();
        if(isSelection){
            let frontText = this.getValue.slice(0, start);
            let behindText = this.getValue.slice(end);
            let centerText = this.getValue.slice(start,end);
            this.setValue =  `${frontText}${front}${centerText}${behind}${behindText}`;
        }else{
            this.centreInsert(`${front}${behind}`);
        }
    }
    // 中心插入
    centreInsert(value){
        let { start, end } = this.getSelectionIndex();
        let frontText = this.getValue.slice(0, start);
        let behindText = this.getValue.slice(end);
        let content = `${frontText}${value}${behindText}`;
        this.setValue =  content;
        // 移动光标
        let totalLength = content.length - behindText.length - Math.floor((value.length / 2));
        this.Element.selectionEnd = totalLength;
    }
    // 插入图片
    insertImage(art = 'alt属性', src = '图片链接'){
        let str = `![${art}](${src})`;
        if(this.getLastLength){
            str = '\n' + str;
        }
        this.centreInsert(str);
    }
    init(element, ShowCodeClick = undefined){
        this.Element = element;
        this.Element.value = this.Source;
        if(ShowCodeClick != undefined){
            this.showCode = ShowCodeClick;
        }
    }

}