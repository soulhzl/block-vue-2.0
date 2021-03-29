export default `<xml style="display: none">
    <category name="逻辑" colour="%{BKY_LOGIC_HUE}">
      <block type="controls_if"></block>
      <block type="logic_compare"></block>
      <block type="logic_operation"></block>
      <block type="logic_negate"></block>
      <block type="logic_boolean"></block>
      <block type="logic_null"></block>
    </category>
    <sep></sep>
    <category name="循环" colour="%{BKY_LOOPS_HUE}">
      <block type="controls_repeat_ext">
        <value name="TIMES">
          <shadow type="math_number">
            <field name="NUM">10</field>
          </shadow>
        </value>
      </block>
      <block type="controls_whileUntil"></block>
      <block type="controls_for">
        <value name="FROM">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>
        <value name="TO">
          <shadow type="math_number">
            <field name="NUM">10</field>
          </shadow>
        </value>
        <value name="BY">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>
      </block>
      <block type="controls_forEach"></block>
      <block type="controls_flow_statements"></block>
    </category>
    <sep></sep>
    <category name="数字" colour="%{BKY_MATH_HUE}">
      <block type="math_number">
        <field name="NUM">123</field>
      </block>
      <block type="math_arithmetic">
        <value name="A">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>
        <value name="B">
          <shadow type="math_number">
            <field name="NUM">1</field>
          </shadow>
        </value>
      </block>
    </category>
    <sep></sep>
    <category name="文本" colour="%{BKY_TEXTS_HUE}">
      <block type="text"></block>
      <block type="text_join"></block>
    </category>
    <sep></sep>
    <category name="数组" colour="%{BKY_LISTS_HUE}">
      <block type="lists_create_with">
        <mutation items="0"></mutation>
      </block>
      <block type="lists_create_with"></block>
    </category>
    <sep></sep>
    <category name="颜色" colour="%{BKY_COLOUR_HUE}">
      <block type="colour_picker"></block>
      <block type="colour_random"></block>
      <block type="colour_rgb">
        <value name="RED">
          <shadow type="math_number">
            <field name="NUM">100</field>
          </shadow>
        </value>
        <value name="GREEN">
          <shadow type="math_number">
            <field name="NUM">50</field>
          </shadow>
        </value>
        <value name="BLUE">
          <shadow type="math_number">
            <field name="NUM">0</field>
          </shadow>
        </value>
      </block>
      <block type="colour_blend">
        <value name="COLOUR1">
          <shadow type="colour_picker">
            <field name="COLOUR">#ff0000</field>
          </shadow>
        </value>
        <value name="COLOUR2">
          <shadow type="colour_picker">
            <field name="COLOUR">#3333ff</field>
          </shadow>
        </value>
        <value name="RATIO">
          <shadow type="math_number">
            <field name="NUM">0.5</field>
          </shadow>
        </value>
      </block>
    </category>
    <sep></sep>
    <category name="变量" colour="%{BKY_VARIABLES_HUE}" custom="VARIABLE"></category>
    <sep></sep>
    <category name="函数" colour="%{BKY_PROCEDURES_HUE}" custom="PROCEDURE"></category>
    <sep></sep>
    <category name="图表" colour="">
      <block type="echart_option"></block>
      <block type="echart_xaxis"></block>
      <block type="echart_yaxis"></block>
      <block type="echart_series"></block>
      <block type="echart_itemStyle"></block>
      <block type="echart_title"></block>
      <block type="echart_grid"></block>
      <block type="echart_tooltip"></block>
      <block type="echart_axisPointer"></block>
      <block type="echart_lineStyle"></block>
      <block type="echart_label"></block>
      <block type="echart_textStyle"></block>
      <block type="echart_type"></block>
      <block type="echart_name"></block>
      <block type="echart_data"></block>
      <block type="echart_color"></block>
      <block type="echart_lgcolor"></block>
      <block type="echart_borderradiu"></block>
      <block type="echart_left"></block>
      <block type="echart_top"></block>
      <block type="echart_right"></block>
      <block type="echart_bottom"></block>
      <block type="echart_text"></block>
      <block type="echart_containlabel"></block>
      <block type="echart_trigger"></block>
      <block type="echart_show"></block>
      <block type="echart_fontSize"></block>
      <block type="echart_width"></block>
      <block type="echart_z"></block>
      <block type="echart_barWidth"></block>
    </category>
    <sep></sep>
    <category name="模块" colour="">
      <block type="echart_module_line"></block>
    </category>
</xml>`