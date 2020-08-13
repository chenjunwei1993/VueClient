/*
 * @Descripttion:
 * @Author: chenjunwei
 * @Date: 2020-06-28 15:17:18
 * @LastEditors: chenjunwei
 * @LastEditTime: 2020-08-13 09:09:46
 */

const Tabbar = () => import('@/components/tabbar/')
const Home = () => import('@/views/home/home')

export default [
  {
    path: '/',
    name: '',
    components: {
      default: Home,
      tabbar: Tabbar
    },
    meta: {
      keepAlive: true,
      title: '首页'
    }
  },
  {
    path: '/home',
    name: 'home',
    components: {
      default: Home,
      tabbar: Tabbar
    },
    meta: {
      keepAlive: true,
      title: '首页'
    }
  }
]
