import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Row, Col, Form, Field, Popup, Icon, Button, Grid, GridItem, Uploader } from 'vant';
import 'vant/lib/index.css';
import Blockly from 'blockly'
import './util/origin.js'
import './assets/iconfont.css'
import * as echarts from 'echarts';
import axios from 'axios'
Vue.use(Row).use(Col).use(Form).use(Field).use(Popup).use(Icon).use(Button).use(Grid).use(GridItem).use(Uploader)
Vue.config.productionTip = false
// 引入Blockly
Vue.prototype.$axios = axios
Vue.prototype.$blockly = Blockly
Vue.prototype.$echart = echarts

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
