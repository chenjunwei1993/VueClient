/*
 * @Descripttion:
 * @Author: chenjunwei
 * @Date: 2020-06-28 15:17:18
 * @LastEditors: chenjunwei
 * @LastEditTime: 2020-08-12 14:21:41
 */

const Tabbar = () => import('@/components/tabbar/')
const Order = () => import('@/views/order/order')

export default [
  {
    path: '/order',
    name: 'order',
    meta: {
      login: true,
      title: '订单'
    },
    components: {
      default: Order,
      tabbar: Tabbar
    }
  }
]
