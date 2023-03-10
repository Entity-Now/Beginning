// markdown的配置
export const BeginningEditConfig = {
    toolBar:[
        { Name:'HTML5',Icon:'icon-html',Handle:null },
        { Name:'粗体',Icon:'icon-jiacu',Handle:null },
        { Name:'斜体',Icon:'icon-zitixieti',Handle:null },
        // { Name:'居中',Icon:'icon-zuoyouduiqi',Handle:null },
        { Name:'列表',Icon:'icon-liebiao',Handle:null },
        { Name:'引用',Icon:'icon-quote',Handle:null },
        { Name:'字体大小',Icon:'icon-zitidaxiao',Handle:null },
        { Name:'链接',Icon:'icon-lianjie',Handle:null },
        { Name:'源码',Icon:'icon-a-daimakuai3x',Handle:null },
        { Name:'放大',Icon:'icon-kuozhan',Handle:()=>WindowSizeEvent() }
    ],
    // 源
    Source:'',
    // 渲染后的值
    Render:'',
    // 是否放大
    IsEnlarge:false,
    WindowSizeEvent:()=>{
        this.IsEnlarge = !this.IsEnlarge;
    }

}