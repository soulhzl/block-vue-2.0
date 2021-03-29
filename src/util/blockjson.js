export default [
    {
        "type": "echart_option",
        "message0": "option %1",
        "args0": [
            { "type": "input_statement", "name": "option" }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 'rgb(88,149,208)'
    }, {
        "type": "echart_series",
        "message0": "series %1",
        "args0": [
            { "type": "input_statement", "name": "series" }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 'rgb(88,149,208)'
    }, {
        "type": "echart_xaxis",
        "message0": "xAxis %1",
        "args0": [
            { "type": "input_statement", "name": "xAxis" }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 'rgb(88,149,208)'
    }, {
        "type": "echart_yaxis",
        "message0": "yAxis %1",
        "args0": [
            { "type": "input_statement", "name": "yAxis" }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 'rgb(88,149,208)'
    }, {
        "type": "echart_itemStyle",
        "message0": "itemStyle %1",
        "args0": [
            { "type": "input_statement", "name": "itemStyle" }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 'rgb(88,149,208)'
    }, {
        "type": "echart_title",
        "message0": "title %1",
        "args0": [
            { "type": "input_statement", "name": "title" }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 'rgb(88,149,208)'
    }, {
        "type": "echart_grid",
        "message0": "grid %1",
        "args0": [
            { "type": "input_statement", "name": "grid" }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 'rgb(88,149,208)'
    }, {
        "type": "echart_tooltip",
        "message0": "tooltip %1",
        "args0": [
            { "type": "input_statement", "name": "tooltip" }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 'rgb(88,149,208)'
    }, {
        "type": "echart_axisPointer",
        "message0": "axisPointer %1",
        "args0": [
            { "type": "input_statement", "name": "axisPointer" }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 'rgb(88,149,208)'
    }, {
        "type": "echart_lineStyle",
        "message0": "lineStyle %1",
        "args0": [
            { "type": "input_statement", "name": "lineStyle" }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 'rgb(88,149,208)'
    }, {
        "type": "echart_label",
        "message0": "label %1",
        "args0": [
            { "type": "input_statement", "name": "label" }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 'rgb(88,149,208)'
    }, {
        "type": "echart_textStyle",
        "message0": "textStyle %1",
        "args0": [
            { "type": "input_statement", "name": "textStyle" }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 'rgb(88,149,208)'
    }, {
        "type": "echart_type",
        "message0": "type %1",
        "args0": [
            {
                "type": "field_dropdown",
                "name": "type",
                "options": [
                    ["line", "line"],
                    ["bar", "bar"],
                    ["effectScatter", "effectScatter"],
                    ["pie", "pie"],
                    ["value", "value"],
                    ["category", "category"],
                    ["solid", "solid"],
                ]
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 'rgb(88,149,208)'
    }, {
        "type": "echart_name",
        "message0": "name %1",
        "args0": [
            { "type": "input_value", "name": "name" }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 'rgb(88,149,208)'
    }, {
        "type": "echart_data",
        "message0": "data %1",
        "args0": [
            { "type": "input_value", "name": "data" }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 'rgb(88,149,208)'
    }, {
        "type": "echart_color",
        "message0": "color %1",
        "args0": [
            { "type": "input_value", "name": "color" }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 'rgb(88,149,208)'
    }, {
        "type": "echart_lgcolor",
        "message0": "LinearGradient",
        "message1": "%1 %2 %3 %4",
        "args1": [
            {
                "type": "field_dropdown",
                "name": "x1",
                "options": [
                    ["0", "0"],
                    ["1", "1"]
                ]
            }, {
                "type": "field_dropdown",
                "name": "y1",
                "options": [
                    ["0", "0"],
                    ["1", "1"]
                ]
            },
            {
                "type": "field_dropdown",
                "name": "x2",
                "options": [
                    ["0", "0"],
                    ["1", "1"]
                ]
            }, {
                "type": "field_dropdown",
                "name": "y2",
                "options": [
                    ["0", "0"],
                    ["1", "1"]
                ]
            }
        ],
        "message2": "%1 %2",
        "args2": [
            { "type": "input_value", "name": "scolor" },
            { "type": "input_value", "name": "ecolor" },
        ],
        "output": null,
        "colour": 'rgb(88,149,208)'
    }, {
        "type": "echart_borderradiu",
        "message0": "borderRadius %1 %2 %3 %4",
        "args0": [
            { "type": "field_number", "name": "top", "value": 0 },
            { "type": "field_number", "name": "right", "value": 0 },
            { "type": "field_number", "name": "bottom", "value": 0 },
            { "type": "field_number", "name": "left", "value": 0 },
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 'rgb(88,149,208)'
    }, {
        "type": "echart_left",
        "message0": "left %1",
        "args0": [
            { "type": "input_value", "name": "left" }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 'rgb(88,149,208)'
    }, {
        "type": "echart_top",
        "message0": "top %1",
        "args0": [
            { "type": "input_value", "name": "top" }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 'rgb(88,149,208)'
    }, {
        "type": "echart_right",
        "message0": "right %1",
        "args0": [
            { "type": "input_value", "name": "right" }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 'rgb(88,149,208)'
    }, {
        "type": "echart_bottom",
        "message0": "bottom %1",
        "args0": [
            { "type": "input_value", "name": "bottom" }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 'rgb(88,149,208)'
    }, {
        "type": "echart_text",
        "message0": "text %1",
        "args0": [
            { "type": "input_value", "name": "text" }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 'rgb(88,149,208)'
    }, {
        "type": "echart_containlabel",
        "message0": "containLabel %1",
        "args0": [
            {
                "type": "field_dropdown",
                "name": "containLabel",
                "options": [
                    ["true", "true"],
                    ["false", "false"],
                ]
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 'rgb(88,149,208)'
    }, {
        "type": "echart_trigger",
        "message0": "trigger %1",
        "args0": [
            {
                "type": "field_dropdown",
                "name": "trigger",
                "options": [
                    ["axis", "axis"],
                ]
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 'rgb(88,149,208)'
    }, {
        "type": "echart_show",
        "message0": "show %1",
        "args0": [
            {
                "type": "field_dropdown",
                "name": "show",
                "options": [
                    ["true", "true"],
                    ["false", "false"],
                ]
            }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 'rgb(88,149,208)'
    }, {
        "type": "echart_fontSize",
        "message0": "fontSize %1",
        "args0": [
            { "type": "input_value", "name": "fontSize" }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 'rgb(88,149,208)'
    }, {
        "type": "echart_width",
        "message0": "width %1",
        "args0": [
            { "type": "input_value", "name": "width" }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 'rgb(88,149,208)'
    }, {
        "type": "echart_z",
        "message0": "z %1",
        "args0": [
            { "type": "input_value", "name": "z" }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 'rgb(88,149,208)'
    }, {
        "type": "echart_barWidth",
        "message0": "barWidth %1",
        "args0": [
            { "type": "input_value", "name": "barWidth" }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 'rgb(88,149,208)'
    }, {
        "type": "echart_module_line",
        "message0": "折线图",
        "message1": "%1 %2另一轴数据%3标题%4",
        "args1": [
            {
                "type": "field_dropdown",
                "name": "axis",
                "options": [
                    ["X轴数据", "xAxis"],
                    ["Y轴数据", "yAxis"],
                ]
            },
            { "type": "input_value", "name": "firstaxis" },
            { "type": "input_value", "name": "secondaxis" },
            {"type": "field_input", "name":"title","text":""}
        ],
        "message2": "%1颜色%2",
        "args2": [
            {
                "type": "field_dropdown",
                "name": "showlabel",
                "options": [
                    ["不显示标签", "false"],
                    ["显示标签", "true"],
                ]
            },
            { "type": "input_value", "name": "color" }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 'rgb(88,149,208)'
    }, {
        "type": "echart_module_bar",
        "message0": "折线图",
        "message1": "%1 %2另一轴数据%3标题%4",
        "args1": [
            {
                "type": "field_dropdown",
                "name": "axis",
                "options": [
                    ["X轴数据", "xAxis"],
                    ["Y轴数据", "yAxis"],
                ]
            },
            { "type": "input_value", "name": "firstaxis" },
            { "type": "input_value", "name": "secondaxis" },
            {"type": "field_input", "name":"title","text":""}
        ],
        "message2": "%1 %2颜色%3",
        "args2": [
            {
                "type": "field_dropdown",
                "name": "borderradius",
                "options": [
                    ["无圆角", "false"],
                    ["为圆角", "true"],
                ]
            },
            {
                "type": "field_dropdown",
                "name": "showlabel",
                "options": [
                    ["不显示标签", "false"],
                    ["显示标签", "true"],
                ]
            },
            { "type": "input_value", "name": "color" }
        ],
        "previousStatement": null,
        "nextStatement": null,
        "colour": 'rgb(88,149,208)'
    }
]