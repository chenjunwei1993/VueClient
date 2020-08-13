/*
 * @Descripttion:
 * @Author: chenjunwei
 * @Date: 2020-06-29 11:29:39
 * @LastEditors: chenjunwei
 * @LastEditTime: 2020-08-12 19:21:51
 */

import { MessageBox, Toast } from 'mint-ui'
/**
 * 字符串判断空值
 * @param str  字符串
 * @return Boolean
 */
export function isEmptyStr(str) {
  let res = false
  if (str === null || str === undefined || str.toString().trim() === '') {
    res = true
  }
  return res
}
/**
 * 提示信息
 */
export function mintAlert(obj = {}) {
  if (typeof obj === 'string') {
    MessageBox.alert(obj, '提示')
  } else {
    MessageBox.alert(obj.mes || '弹窗内容', '提示')
      .then(() => {
        if (typeof obj.successCallback === 'function') {
          obj.successCallback()
        }
        // on confirm successCallback
      })
      .catch(() => {
        // on cancel errorCallback
        if (typeof obj.errorCallback === 'function') {
          obj.errorCallback()
        }
      })
  }
}
/**
 * 确认信息
 */
export function mintConfirm(obj = {}) {
  MessageBox.confirm(obj.mes || '弹窗内容', obj.title || '')
    .then(() => {
      if (typeof obj.successCallback === 'function') {
        obj.successCallback()
      }
      // on confirm successCallback
    })
    .catch(() => {
      // on cancel errorCallback
      if (typeof obj.errorCallback === 'function') {
        obj.errorCallback()
      }
    })
}
/**
 * 小提示信息
 */
export function mintMessage(mes) {
  Toast({
    message: mes,
    position: 'middle',
    duration: 3000
  })
}
