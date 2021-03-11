<template>
  <div class="left-wrapper" ref="left">
    <div class="blockly-wrapper" ref="block"></div>
  </div>
</template>

<script>
// 引入blockly
import "../util/block.js";
import xmlText from "../util/xml.js";
export default {
  name: "Workspace",
  data() {
    return {
      workspace: null,
    };
  },
  mounted() {
    this.initWorkspace();
    this.initWorkspaceBlock();
    window.onunload = () => {
      localStorage.setItem(
        "workspaceXML",
        this.$blockly.Xml.domToText(
          this.$blockly.Xml.workspaceToDom(this.$blockly.mainWorkspace)
        )
      );
    };
  },
  methods: {
    // 窗口变化,重置workspace大小
    blockResize(e) {
      let element = this.$refs.left;
      let blocklyDiv = this.$refs.block;
      let x = 0;
      let y = 0;
      do {
        x += element.offsetLeft;
        y += element.offsetTop;
        element = element.offsetParent;
      } while (element);
      blocklyDiv.style.left = x + "px";
      blocklyDiv.style.top = y + "px";
      blocklyDiv.style.width = this.$refs.left.offsetWidth + "px";
      blocklyDiv.style.height = this.$refs.left.offsetHeight + "px";
      this.$blockly.svgResize(this.workspace);
    },
    // 初始化block区域
    initWorkspace() {
      const xml = xmlText;
      this.workspace = this.$blockly.inject(this.$refs.block, {
        renderer: "zelos",
        rendererOverrides: {
          FIELD_TEXT_FONTFAMILY:
            '"Helvetica Neue", "Segoe UI", Helvetica, sans-serif',
          FIELD_TEXT_FONTWEIGHT: "bold",
          FIELD_TEXT_FONTSIZE: 14,
        },
        toolbox: xml,
        grid: {
          spacing: 20,
          length: 2,
          colour: "#ccc",
          snap: false,
        },
        zoom: {
          controls: true,
          wheel: true,
          startScale: 0.7,
          maxScale: 3,
          minScale: 0.3,
          scaleSpeed: 1.1,
        },
        trashcan: true,
        media: "/myblock/media/",
      });
      window.addEventListener("resize", this.blockResize, false);
      this.blockResize();
      this.$store.commit("initWorkspace", this.workspace);
      this.$blockly.svgResize(this.workspace);
    },
    // 初始化工作区域块
    initWorkspaceBlock() {
      let workspaceXML = localStorage.getItem("workspaceXML");
      if (workspaceXML) {
        workspaceXML = this.$blockly.Xml.textToDom(workspaceXML);
        this.$blockly.mainWorkspace.clear();
        this.$blockly.Xml.domToWorkspace(workspaceXML, this.workspace);
      }
    },
  },
};
</script>

<style scoped>
.left-wrapper {
  position: relative;
  width: 70%;
  height: 100%;
}

.blockly-wrapper {
  position: absolute;
}
</style>
