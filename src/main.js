/*
 * @Descripttion:
 * @Author: chenjunwei
 * @Date: 2020-06-28 15:17:18
 * @LastEditors: chenjunwei
 * @LastEditTime: 2020-08-12 19:35:05
 */

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import '@/assets/scss/global.scss'
import '@/assets/scss/iconfont/iconfont.css'

import filters from '@/filter'
Vue.use(filters)

// 原生接口
import appjsbridge from '@/utils/appjsbridge'
window.appjsbridge = appjsbridge
Vue.prototype.$appjsbridge = appjsbridge

import constants from '@/utils/constants'
window.constants = constants
Vue.prototype.$constants = constants

// 有赞vant
import 'vant/lib/index.css'
import 'vant/lib/icon/local.css'
import { Lazyload, Icon } from 'vant'
Vue.use(Icon)
Vue.use(Lazyload, {
  preLoad: 1,
  error: require('@/assets/images/goods_default.png'),
  loading: require('@/assets/images/goods_default.png'),
  attempt: 1,
  // listenEvents: ['scroll'],
  lazyComponent: true
})

// mint-ui
import 'mint-ui/lib/style.css'
import { Loadmore } from 'mint-ui'
Vue.component(Loadmore.name, Loadmore)

import { mintAlert, mintConfirm, mintMessage } from '@/utils/util'
Vue.prototype.$message = mintMessage
Vue.prototype.$confirm = mintConfirm
Vue.prototype.$alert = mintAlert

Vue.config.productionTip = false

import Vconsole from 'vconsole'
let vConsole = new Vconsole()
Vue.use(vConsole)

import VueStorage from 'vue-ls'
Vue.use(VueStorage, {
  namespace: 'pro__', // key prefix
  name: 'ls', // name variable Vue.[ls] or this.[$ls],
  storage: 'local' // storage name session, local, memory
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
