/*
 * @Descripttion:
 * @Author: chenjunwei
 * @Date: 2020-06-28 15:17:18
 * @LastEditors: chenjunwei
 * @LastEditTime: 2020-08-11 16:46:11
 */

const Tabbar = () => import('@/components/tabbar/')
const User = () => import('@/views/user/user')

export default [
  {
    path: '/user',
    name: 'user',
    meta: {
      login: true,
      keepAlive: true,
      title: '我的'
    },
    components: {
      default: User,
      tabbar: Tabbar
    }
  }
]
