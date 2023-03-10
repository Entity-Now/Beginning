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
}