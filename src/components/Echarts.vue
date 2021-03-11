<template>
  <div style="position: relative; height: 100%; width: 100%">
    <van-icon
      style="position: absolute; right: 0; z-index: 1"
      name="replay"
      @click="resetInstance"
      size="0.7rem"
      title="重置实例"
    />
    <div :style="echartHeight" ref="echart"></div>
  </div>
</template>

<script>
export default {
  name: "Workspace",
  props: {
    height: Number,
  },
  computed: {
    echartHeight() {
      return {
        width: "100%",
        height: this.height + "px",
      };
    },
  },
  data() {
    return {
      echart: null,
    };
  },
  mounted() {
    this.initEchart();
    window.addEventListener("resize", this.screenAdapter);
  },
  methods: {
    initEchart() {
      this.echart = this.$echart.init(this.$refs.echart);
      this.echart.setOption({});
      this.$store.commit("initEchart", this.echart);
    },
    resetInstance() {
      this.echart.dispose();
      this.initEchart();
    },
    screenAdapter(){
      this.echart.resize();
    }
  },
};
</script>

<style scoped>
i {
  cursor: pointer;
}
</style>
