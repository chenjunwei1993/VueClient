/*
 * @Descripttion:
 * @Author: chenjunwei
 * @Date: 2020-07-03 10:30:44
 * @LastEditors: chenjunwei
 * @LastEditTime: 2020-07-03 16:30:54
 */

import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
