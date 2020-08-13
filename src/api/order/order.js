/*
 * @Descripttion:
 * @Author: chenjunwei
 * @Date: 2020-07-15 15:56:53
 * @LastEditors: chenjunwei
 * @LastEditTime: 2020-08-12 15:12:43
 */
import request from '@/utils/request'

const OrderList = '/order'
export function getOrderList(query) {
  return request({
    url: OrderList,
    method: 'get',
    params: query
  })
}
