import Vue from 'vue'
import App from './App.vue'

// 导入组件库
// import wheelDrawer from './../packages/index.js';

// 注册组件库
// Vue.use(wheelDrawer)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
