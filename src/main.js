import Vue from 'vue'
import App from './App.vue'
// 引入路由
import router from '@/router'
// 引入状态管理仓库
import store from '@/store'

// 全局组件
// 三级联动
import TypeNav from '@/components/TypeNav'

Vue.component(TypeNav.name,TypeNav)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 注册路由
  router,
  store
}).$mount('#app')
