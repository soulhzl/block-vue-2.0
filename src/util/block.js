import Blockly from 'blockly'
import jsonBlock from './blockjson'
Blockly.defineBlocksWithJsonArray(jsonBlock)
// 自定义block
// Blockly.Blocks['echart_option'] = {
//     init: function () {
//         this.jsonInit({
//             "message0": "option %1",
//             "args0": [
//                 { "type": "input_statement", "name": "option" }
//             ],
//             "previousStatement": null,
//             "nextStatement": null,
//             "colour": 230
//         })
//         // this.appendDummyInput()
//         //     .appendField('option')
//         // this.appendStatementInput("option")
//         // this.setInputsInline(true);
//         // this.setColour('rgb(88,149,208)')
//         // this.setPreviousStatement(true, null);
//         // this.setNextStatement(true, null);
//     }
// }

// Blockly.Blocks['echart_series'] = {
//     init: function () {
//         this.appendDummyInput()
//             .appendField('series')
//         this.appendStatementInput("series")
//         this.setInputsInline(true);
//         this.setColour('rgb(88,149,208)')
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//     }
// }

// Blockly.Blocks['echart_xaxis'] = {
//     init: function () {
//         this.appendDummyInput()
//             .appendField('xAxis')
//         this.appendStatementInput("xAxis")
//         this.setInputsInline(true);
//         this.setColour('rgb(88,149,208)')
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//     }
// }

// Blockly.Blocks['echart_yaxis'] = {
//     init: function () {
//         this.appendDummyInput()
//             .appendField('yAxis')
//         this.appendStatementInput("yAxis")
//         this.setInputsInline(true);
//         this.setColour('rgb(88,149,208)')
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//     }
// }

// Blockly.Blocks['echart_itemStyle'] = {
//     init: function () {
//         this.appendDummyInput()
//             .appendField('itemStyle')
//         this.appendStatementInput("itemStyle")
//         this.setInputsInline(true);
//         this.setColour('rgb(88,149,208)')
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//     }
// }

// Blockly.Blocks['echart_title'] = {
//     init: function () {
//         this.appendDummyInput()
//             .appendField('title')
//         this.appendStatementInput("title")
//         this.setInputsInline(true);
//         this.setColour('rgb(88,149,208)')
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//     }
// }

// Blockly.Blocks['echart_grid'] = {
//     init: function () {
//         this.appendDummyInput()
//             .appendField('grid')
//         this.appendStatementInput("grid")
//         this.setInputsInline(true);
//         this.setColour('rgb(88,149,208)')
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//     }
// }

// Blockly.Blocks['echart_tooltip'] = {
//     init: function () {
//         this.appendDummyInput()
//             .appendField('tooltip')
//         this.appendStatementInput("tooltip")
//         this.setInputsInline(true);
//         this.setColour('rgb(88,149,208)')
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//     }
// }

// Blockly.Blocks['echart_axisPointer'] = {
//     init: function () {
//         this.appendDummyInput()
//             .appendField('axisPointer')
//         this.appendStatementInput("axisPointer")
//         this.setInputsInline(true);
//         this.setColour('rgb(88,149,208)')
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//     }
// }

// Blockly.Blocks['echart_lineStyle'] = {
//     init: function () {
//         this.appendDummyInput()
//             .appendField('lineStyle')
//         this.appendStatementInput("lineStyle")
//         this.setInputsInline(true);
//         this.setColour('rgb(88,149,208)')
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//     }
// }

// Blockly.Blocks['echart_label'] = {
//     init: function () {
//         this.appendDummyInput()
//             .appendField('label')
//         this.appendStatementInput("label")
//         this.setInputsInline(true);
//         this.setColour('rgb(88,149,208)')
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//     }
// }

// Blockly.Blocks['echart_textStyle'] = {
//     init: function () {
//         this.appendDummyInput()
//             .appendField('textStyle')
//         this.appendStatementInput("textStyle")
//         this.setInputsInline(true);
//         this.setColour('rgb(88,149,208)')
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//     }
// }

// Blockly.Blocks['echart_type'] = {
//     init: function () {
//         this.appendDummyInput()
//             .appendField('type')
//         this.appendDummyInput()
//             .appendField(new Blockly.FieldDropdown([
//                 ["line", "line"],
//                 ["bar", "bar"],
//                 ["effectScatter", "effectScatter"],
//                 ["pie", "pie"],
//                 ["value", "value"],
//                 ["category", "category"],
//                 ["solid", "solid"],
//             ]), "type");
//         this.setInputsInline(true);
//         this.setColour('rgb(88,149,208)')
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//     }
// }

// Blockly.Blocks['echart_name'] = {
//     init: function () {
//         this.appendDummyInput()
//             .appendField('name')
//         this.appendDummyInput()
//         this.appendValueInput("name");
//         this.setInputsInline(true);
//         this.setColour('rgb(88,149,208)')
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//     }
// }

// Blockly.Blocks['echart_data'] = {
//     init: function () {
//         this.appendDummyInput()
//             .appendField('data')
//         this.appendDummyInput()
//         this.appendValueInput("data");
//         this.setInputsInline(true);
//         this.setColour('rgb(88,149,208)')
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//     }
// }

// Blockly.Blocks['echart_color'] = {
//     init: function () {
//         this.appendDummyInput()
//             .appendField('color')
//         this.appendDummyInput()
//         this.appendValueInput("color");
//         this.setInputsInline(true);
//         this.setColour('rgb(88,149,208)')
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//     }
// }

// Blockly.Blocks['echart_lgcolor'] = {
//     init: function () {
//         this.appendDummyInput()
//             .appendField('LinearGradient')
//         this.appendDummyInput()
//             .appendField(new Blockly.FieldDropdown([
//                 ["0", "0"],
//                 ["1", "1"]
//             ]), "x1");
//         this.appendDummyInput()
//             .appendField(new Blockly.FieldDropdown([
//                 ["0", "0"],
//                 ["1", "1"]
//             ]), "y1");
//         this.appendDummyInput()
//             .appendField(new Blockly.FieldDropdown([
//                 ["0", "0"],
//                 ["1", "1"]
//             ]), "x2");
//         this.appendDummyInput()
//             .appendField(new Blockly.FieldDropdown([
//                 ["0", "0"],
//                 ["1", "1"]
//             ]), "y2");
//         this.appendValueInput("scolor");
//         this.appendValueInput("ecolor");
//         this.setInputsInline(true);
//         this.setColour('rgb(88,149,208)')
//         this.setOutput(true);
//     }
// }

// Blockly.Blocks['echart_borderradiu'] = {
//     init: function () {
//         this.appendDummyInput()
//             .appendField('borderRadius')
//         this.appendDummyInput().appendField(new Blockly.FieldNumber("0"), "top")
//         this.appendDummyInput().appendField(new Blockly.FieldNumber("0"), "right")
//         this.appendDummyInput().appendField(new Blockly.FieldNumber("0"), "bottom")
//         this.appendDummyInput().appendField(new Blockly.FieldNumber("0"), "left")
//         this.setInputsInline(true);
//         this.setColour('rgb(88,149,208)')
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//     }
// }

// Blockly.Blocks['echart_left'] = {
//     init: function () {
//         this.appendDummyInput()
//             .appendField('left')
//         this.appendDummyInput()
//         this.appendValueInput("left");
//         this.setInputsInline(true);
//         this.setColour('rgb(88,149,208)')
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//     }
// }

// Blockly.Blocks['echart_top'] = {
//     init: function () {
//         this.appendDummyInput()
//             .appendField('top')
//         this.appendDummyInput()
//         this.appendValueInput("top");
//         this.setInputsInline(true);
//         this.setColour('rgb(88,149,208)')
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//     }
// }

// Blockly.Blocks['echart_right'] = {
//     init: function () {
//         this.appendDummyInput()
//             .appendField('right')
//         this.appendDummyInput()
//         this.appendValueInput("right");
//         this.setInputsInline(true);
//         this.setColour('rgb(88,149,208)')
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//     }
// }

// Blockly.Blocks['echart_bottom'] = {
//     init: function () {
//         this.appendDummyInput()
//             .appendField('bottom')
//         this.appendDummyInput()
//         this.appendValueInput("bottom");
//         this.setInputsInline(true);
//         this.setColour('rgb(88,149,208)')
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//     }
// }

// Blockly.Blocks['echart_text'] = {
//     init: function () {
//         this.appendDummyInput()
//             .appendField('text')
//         this.appendDummyInput()
//         this.appendValueInput("text");
//         this.setInputsInline(true);
//         this.setColour('rgb(88,149,208)')
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//     }
// }

// Blockly.Blocks['echart_containlabel'] = {
//     init: function () {
//         this.appendDummyInput()
//             .appendField('containLabel')
//         this.appendDummyInput()
//             .appendField(new Blockly.FieldDropdown([
//                 ["true", "true"],
//                 ["false", "false"],
//             ]), "containLabel");
//         this.setInputsInline(true);
//         this.setColour('rgb(88,149,208)')
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//     }
// }

// Blockly.Blocks['echart_trigger'] = {
//     init: function () {
//         this.appendDummyInput()
//             .appendField('trigger')
//         this.appendDummyInput()
//             .appendField(new Blockly.FieldDropdown([
//                 ["axis", "axis"],
//             ]), "trigger");
//         this.setInputsInline(true);
//         this.setColour('rgb(88,149,208)')
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//     }
// }

// Blockly.Blocks['echart_show'] = {
//     init: function () {
//         this.appendDummyInput()
//             .appendField('show')
//         this.appendDummyInput()
//             .appendField(new Blockly.FieldDropdown([
//                 ["true", "true"],
//                 ["false", "false"],
//             ]), "show");
//         this.setInputsInline(true);
//         this.setColour('rgb(88,149,208)')
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//     }
// }

// Blockly.Blocks['echart_fontSize'] = {
//     init: function () {
//         this.appendDummyInput()
//             .appendField('fontSize')
//         this.appendDummyInput()
//         this.appendValueInput("fontSize");
//         this.setInputsInline(true);
//         this.setColour('rgb(88,149,208)')
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//     }
// }

// Blockly.Blocks['echart_width'] = {
//     init: function () {
//         this.appendDummyInput()
//             .appendField('width')
//         this.appendDummyInput()
//         this.appendValueInput("width");
//         this.setInputsInline(true);
//         this.setColour('rgb(88,149,208)')
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//     }
// }

// Blockly.Blocks['echart_z'] = {
//     init: function () {
//         this.appendDummyInput()
//             .appendField('z')
//         this.appendDummyInput()
//         this.appendValueInput("z");
//         this.setInputsInline(true);
//         this.setColour('rgb(88,149,208)')
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//     }
// }

// Blockly.Blocks['echart_barWidth'] = {
//     init: function () {
//         this.appendDummyInput()
//             .appendField('barWidth')
//         this.appendDummyInput()
//         this.appendValueInput("barWidth");
//         this.setInputsInline(true);
//         this.setColour('rgb(88,149,208)')
//         this.setPreviousStatement(true, null);
//         this.setNextStatement(true, null);
//     }
// }
