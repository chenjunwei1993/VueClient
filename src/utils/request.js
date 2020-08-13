/*
 * @Descripttion:
 * @Author: chenjunwei
 * @Date: 2020-06-28 15:17:18
 * @LastEditors: chenjunwei
 * @LastEditTime: 2020-08-12 15:15:15
 */
import Vue from 'vue'
import axios from 'axios'
import constants from '@/utils/constants'
import { Dialog, Toast } from 'vant'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // api 的 base_url
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    if (!config.headers['X-Litemall-Token']) {
      config.headers['X-Litemall-Token'] = `${Vue.ls.get(constants.ACCESS_TOKE) || ''}`
    }
    return config
  },
  err => Promise.reject(err)
)

// response interceptor
service.interceptors.response.use(
  response => {
    const res = response.data

    if (res.errno === 501) {
      Toast.fail('请登录')
      setTimeout(() => {
        window.location = '#/login/'
      }, 1500)
      return Promise.reject('error')
    } else if (res.errno === 502) {
      Toast.fail('网站内部错误，请联系网站维护人员')
      return Promise.reject('error')
    }
    if (res.errno === 401) {
      Toast.fail('参数不对')
      return Promise.reject('error')
    }
    if (res.errno === 402) {
      Toast.fail('参数值不对')
      return Promise.reject('error')
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    Dialog.alert({
      title: '警告',
      message: '连接超时'
    })
    return Promise.reject(error)
  }
)

export default service
