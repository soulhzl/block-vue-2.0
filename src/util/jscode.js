import Blockly from 'blockly'
let returnFieldCode = (block, param) => {
    return `${param}: '${block.getFieldValue(param)}',\n`
}
let returnStatementCode = (block, param) => {
    const statement = Blockly.JavaScript.statementToCode(block, param)
    return `${param}: {\n${statement}},\n`
}
let returnValueCode = (block, param) => {
    let value = Blockly.JavaScript.valueToCode(block, param, Blockly.JavaScript.ORDER_ATOMIC)
    value = value ? `${param}: ${value},\n` : ''
    return value
}
Blockly.JavaScript['echart_option'] = function (block) {
    const option = Blockly.JavaScript.statementToCode(block, "option")
    return `let option = {\n${option}}\nthis.echart.setOption(option)\n`
}

Blockly.JavaScript['echart_series'] = function (block) {
    const series = Blockly.JavaScript.statementToCode(block, "series")
    return `series: [{\n${series}}],\n`
}

Blockly.JavaScript['echart_xaxis'] = function (block) {
    return returnStatementCode(block, 'xAxis')
}

Blockly.JavaScript['echart_yaxis'] = function (block) {
    return returnStatementCode(block, 'yAxis')
}

Blockly.JavaScript['echart_itemStyle'] = function (block) {
    return returnStatementCode(block, 'itemStyle')
}

Blockly.JavaScript['echart_title'] = function (block) {
    return returnStatementCode(block, 'title')
}

Blockly.JavaScript['echart_grid'] = function (block) {
    return returnStatementCode(block, 'grid')
}

Blockly.JavaScript['echart_tooltip'] = function (block) {
    return returnStatementCode(block, 'tooltip')
}

Blockly.JavaScript['echart_axisPointer'] = function (block) {
    return returnStatementCode(block, 'axisPointer')
}

Blockly.JavaScript['echart_lineStyle'] = function (block) {
    return returnStatementCode(block, 'lineStyle')
}

Blockly.JavaScript['echart_label'] = function (block) {
    return returnStatementCode(block, 'label')
}

Blockly.JavaScript['echart_textStyle'] = function (block) {
    return returnStatementCode(block, 'textStyle')
}

Blockly.JavaScript['echart_type'] = function (block) {
    return returnFieldCode(block, 'type')
}

Blockly.JavaScript['echart_name'] = function (block) {
    return returnValueCode(block, 'name')
}

Blockly.JavaScript['echart_data'] = function (block) {
    return returnValueCode(block, 'data')
}

Blockly.JavaScript['echart_color'] = function (block) {
    return returnValueCode(block, 'color')
}

Blockly.JavaScript['echart_lgcolor'] = function (block) {
    const x1 = block.getFieldValue('x1');
    const y1 = block.getFieldValue('y1');
    const x2 = block.getFieldValue('x2');
    const y2 = block.getFieldValue('y2');
    let scolor = Blockly.JavaScript.valueToCode(block, 'scolor', Blockly.JavaScript.ORDER_ATOMIC);
    let ecolor = Blockly.JavaScript.valueToCode(block, 'ecolor', Blockly.JavaScript.ORDER_ATOMIC);
    scolor = scolor || '#fff'
    ecolor = ecolor || '#fff'
    if (scolor.indexOf('#') != -1) {
        scolor = '"' + scolor + '"'
    }
    if (ecolor.indexOf('#') != -1) {
        ecolor = '"' + ecolor + '"'
    }
    const code = `new this.$echart.graphic.LinearGradient(${x1}, ${y1}, ${x2}, ${y2}, [
        {
          offset: 0,
          color: ${scolor},
        },
        {
          offset: 1,
          color: ${ecolor},
        },
      ])`
    return [code, Blockly.JavaScript.ORDER_ATOMIC];
}

Blockly.JavaScript['echart_borderradiu'] = function (block) {
    const top = block.getFieldValue('top');
    const right = block.getFieldValue('right');
    const bottom = block.getFieldValue('bottom');
    const left = block.getFieldValue('left');
    return `borderRadius: [${top}, ${right}, ${bottom}, ${left}],\n`;
}

Blockly.JavaScript['echart_left'] = function (block) {
    return returnValueCode(block, 'left')
}

Blockly.JavaScript['echart_top'] = function (block) {
    return returnValueCode(block, 'top')
}

Blockly.JavaScript['echart_right'] = function (block) {
    return returnValueCode(block, 'right')
}

Blockly.JavaScript['echart_bottom'] = function (block) {
    return returnValueCode(block, 'bottom')
}

Blockly.JavaScript['echart_text'] = function (block) {
    return returnValueCode(block, 'text')
}

Blockly.JavaScript['echart_containlabel'] = function (block) {
    return returnFieldCode(block, 'containLabel')
}

Blockly.JavaScript['echart_trigger'] = function (block) {
    return returnFieldCode(block, 'trigger')
}

Blockly.JavaScript['echart_show'] = function (block) {
    return `show: ${block.getFieldValue('show')},\n`
}

Blockly.JavaScript['echart_fontSize'] = function (block) {
    return returnValueCode(block, 'fontSize')
}

Blockly.JavaScript['echart_width'] = function (block) {
    return returnValueCode(block, 'width')
}

Blockly.JavaScript['echart_z'] = function (block) {
    return returnValueCode(block, 'z')
}

Blockly.JavaScript['echart_barWidth'] = function (block) {
    return returnValueCode(block, 'barWidth')
}

Blockly.JavaScript['echart_module_line'] = function (block) {
    const axis = block.getFieldValue('axis')
    const firstaxis = Blockly.JavaScript.valueToCode(block, 'firstaxis', Blockly.JavaScript.ORDER_ATOMIC)
    let axisText = ''
    if (axis == 'xAxis') {
        axisText = `xAxis: {
        data: ${firstaxis},
        },
        yAxis: {
        },`
    } else {
        axisText = `xAxis: {
        },
        yAxis: {
        data: ${firstaxis},
        },`
    }
    const secondaxis = Blockly.JavaScript.valueToCode(block, 'secondaxis', Blockly.JavaScript.ORDER_ATOMIC)
    console.log(block.getFieldValue('title'))
    let borderRadius = ''
    if(block.getFieldValue('borderradius')){
        borderRadius = `borderRadius: [0, 80, 80, 0],`
    }
    const color = Blockly.JavaScript.valueToCode(block, 'color', Blockly.JavaScript.ORDER_ATOMIC)
    let code = `let option = {
        grid: {
          containLabel: 'true',
        },
        title: {
          text: '怎么开心怎么玩',
        },
        series: [{
          label: {
            show: ${block.getFieldValue('showlabel') != 'false' ? true : false},
          },
          type: 'line',
          name: 'series',
          data: ${secondaxis},
          itemStyle: {
            color: ${color},
            ${borderRadius}
          },
        }],
        ${axisText}
      }
      this.echart.setOption(option)`
    return code
}
