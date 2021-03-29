import Blockly from 'blockly'
// 设置样式
Blockly.Css.register([".blocklyToolboxDiv {", "background-color: rgb(100,100,100);", "-webkit-tap-highlight-color: transparent;", "}", ".blocklyTreeRow {", "height: 60px;", "line-height: 16px;", "text-align: center;", "}", ".blocklyTreeRow:not(.blocklyTreeSelected):hover {", "background-color: #e4e4e4;", "}", ".blocklyTreeIconClosedLtr {", "background-position: -32px -17px;", "}", ".blocklyTreeIconOpen {", "background-position: -16px -17px;", "}", ".blocklyTreeLabel {", "color: #fff;", "font-size: 12px;", "}", ".blocklyTreeIcon {", "display: none !important;", "}", ".blocklyFlyoutBackground {", "fill: white;", "}", ".blocklyFlyout {", "border: 1px solid #eee;", "}"]);
// toolbox菜单栏
// 左边边框宽度设为0
Blockly.ToolboxCategory.borderWidth = 0
// 创建图标
let createImg = (a, name) => {
    let myicon = document.createElement("span");
    myicon.classList.add('iconfont')
    let icontext = ''
    switch (name) {
        case '逻辑':
            icontext = '&#xe66c;'
            break;
        case '循环':
            icontext = '&#xe610;'
            break;
        case '数字':
            icontext = '&#xe6c1;'
            break;
        case '文本':
            icontext = '&#xe69e;'
            break;
        case '数组':
            icontext = '&#xe75e;'
            break;
        case '变量':
            icontext = '&#xe6cd;'
            break;
        case '函数':
            icontext = '&#xe6fd;'
            break;
        case '图表':
            icontext = '&#xe600;'
            break;
        case '颜色':
            icontext = '&#xe60b;'
            break;
        case '模块':
            icontext = '&#xe711;'
            break;
    }
    myicon.innerHTML = icontext
    myicon.style.color = 'white'
    myicon.style.fontSize = '0.7rem'
    myicon.style.width = '0.7rem';
    myicon.style.height = '0.7rem';
    myicon.style.lineHeight = '0.7rem';
    myicon.style.margin = '0 auto';
    a.appendChild(myicon);
}
// 修改toolbox元素生成
Blockly.ToolboxCategory.prototype.createLabelDom_ = function (a) {
    var div = document.createElement("div")
    div.style.marginLeft = '5px'
    div.style.display = 'flex'
    div.style.flexDirection = 'column'
    var b = document.createElement("span");
    b.setAttribute("id", this.getId() + ".label");
    b.textContent = a;
    Blockly.utils.dom.addClass(b, this.cssConfig_.label);
    createImg(div, a)
    div.appendChild(b)
    return div
}
