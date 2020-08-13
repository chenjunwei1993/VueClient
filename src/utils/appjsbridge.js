/*
 * @Descripttion:
 * @Author: chenjunwei
 * @Date: 2020-07-10 15:31:32
 * @LastEditors: chenjunwei
 * @LastEditTime: 2020-08-12 20:23:18
 */
// 这里根据移动端原生的 userAgent 来判断当前是 Android 还是 ios
const u = navigator.userAgent

var appjsbridge = {
  // 判断是否是 iOS终端
  isIos: function() {
    return !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
  },
  // 判断是否是android终端
  isAndroid: function() {
    return u.indexOf('Android') > -1 || u.indexOf('Adr') > -1
  }

  // 获取用户信息
  // 入参：返回结果回调函数
  // beforeGetData: function() {
  //   if (this.isIos()) {
  //     window.webkit.messageHandlers.beforeGetData.postMessage(null)
  //   } else if (this.isAndroid()) {
  //     window.AndroidToJS.beforeGetData(null)
  //   }
  // }
}

export default appjsbridge
