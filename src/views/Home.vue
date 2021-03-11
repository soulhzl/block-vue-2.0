<template>
  <div class="home">
    <van-popup v-model="show" position="top">
      <van-row>
        <van-col offset="8" span="8" class="login-title"> 登录/注册 </van-col>
        <van-col offset="8" span="8" class="login-form">
          <van-form @submit="submitLogin">
            <van-field
              v-model="username"
              name="用户名"
              label="用户名"
              placeholder="用户名"
              :rules="[{ required: true, message: '请填写用户名' }]"
            />
            <van-field
              v-model="password"
              type="password"
              name="密码"
              label="密码"
              placeholder="密码"
              :rules="[{ required: true, message: '请填写密码' }]"
            />
            <div style="margin: 16px">
              <van-button round block type="info" native-type="submit"
                >登录/注册</van-button
              >
            </div>
          </van-form>
        </van-col>
      </van-row>
    </van-popup>
    <workspace></workspace>
    <div class="right-wrapper">
      <input
        type="file"
        ref="upload"
        style="display: none"
        @change="uploadFile"
      />
      <van-grid>
        <van-grid-item
          @click="showPopup"
          :icon="isLogin ? 'play-circle-o' : 'importuser-o'"
          :text="isLogin ? '执行' : '登录'"
        />
        <van-grid-item @click="downXml" icon="down" text="下载" />
        <van-grid-item @click="importXml" icon="back-top" text="导入" />
        <van-grid-item @click="newPage" icon="new-o" text="网页" />
      </van-grid>
      <echarts :height="echartHeight"></echarts>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import workspace from "../components/Workspace.vue";
import echarts from "../components/Echarts.vue";
import { mapState } from "vuex";
import "blockly/javascript_compressed.js";
import "../util/jscode.js";
import generateTemplate from "../util/template.js";
export default {
  name: "Home",
  components: {
    workspace,
    echarts,
  },
  data() {
    return {
      show: false,
      username: "",
      password: "",
      isLogin: true,
    };
  },
  computed: {
    ...mapState({
      workspace: (state) => state.workspace,
      echart: (state) => state.echart,
    }),
    echartHeight() {
      return window.innerHeight - 86;
    },
  },
  methods: {
    showPopup() {
      if (!this.isLogin) {
        this.show = !this.show;
        return;
      }
      const code = this.$blockly.JavaScript.workspaceToCode(this.workspace);
      console.log(code);
      eval(code);
    },
    downXml() {
      const xml = this.$blockly.Xml.workspaceToDom(this.workspace);
      const data = this.$blockly.Xml.domToText(xml);
      const blob = new Blob([data], {
        type: "text/xml",
      });
      const src = URL.createObjectURL(blob);
      this.createDownLoad(src);
    },
    createDownLoad(src) {
      let link = document.createElement("a");
      //设置下载的文件名
      link.download = "test";
      link.style.display = "none";
      //设置下载路径
      link.href = src;
      //触发点击
      document.body.appendChild(link);
      link.click();
      //移除节点
      document.body.removeChild(link);
    },
    importXml() {
      this.$refs.upload.click();
    },
    uploadFile(e) {
      const files = e.target.files;
      if (files.length != 1) {
        return;
      }
      let reader = new FileReader();
      const that = this;
      reader.onloadend = (event) => {
        let target = event.target;
        if (target.readyState == 2) {
          try {
            let xml = this.$blockly.Xml.textToDom(target.result);
            this.$blockly.mainWorkspace.clear();
            this.$blockly.Xml.domToWorkspace(xml, this.workspace);
          } catch (e) {
            console.log("文件错误:\n" + e);
            return;
          }
        }
      };
      reader.readAsText(files[0]);
    },
    newPage() {
      const code = this.$blockly.JavaScript.workspaceToCode(this.workspace);
      const text = generateTemplate(code);
      const blob = new Blob([text], {
        type: "text/html",
      });
      const src = URL.createObjectURL(blob);
      this.createDownLoad(src);
    },
    submitLogin() {},
  },
  mounted() {},
};
</script>

<style scoped>
.home {
  display: flex;
  width: 100%;
  height: 100%;
}

.right-wrapper {
  width: 30%;
  height: 100%;
}

.login-title {
  margin-top: 20px;
  padding: 10px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  border: 1px solid #eee;
  border-radius: 10px;
}

.login-form {
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 20px;
}

.van-grid-item {
  cursor: pointer;
}
</style>
