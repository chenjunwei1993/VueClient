/*
 * @Descripttion:
 * @Author: chenjunwei
 * @Date: 2020-06-28 15:17:18
 * @LastEditors: chenjunwei
 * @LastEditTime: 2020-08-12 09:29:54
 */

import Vue from 'vue'
import Router from 'vue-router'

import home from './home'
import user from './user'
import order from './order'

import nprogress from '@/utils/nprogress'
import constants from '@/utils/constants'
import 'nprogress/nprogress.css'

Vue.use(Router)

const RouterModel = new Router({
  routes: [...home, ...user, ...order]
})

RouterModel.beforeEach((to, from, next) => {
  nprogress.start()
  if (to.meta.title) {
    document.title = to.meta.title
  }

  const ACCESS_TOKE = Vue.ls.get(constants.ACCESS_TOKE)
  if (!ACCESS_TOKE) {
    // if (to.meta.login) {
    //   next({ name: 'login', query: { redirect: to.name } })
    //   nprogress.done()
    //   return
    // }
  }
  next()
  nprogress.done()
})

export default RouterModel
