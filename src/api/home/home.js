/*
 * @Descripttion:
 * @Author: chenjunwei
 * @Date: 2020-07-15 15:39:38
 * @LastEditors: chenjunwei
 * @LastEditTime: 2020-08-13 09:30:09
 */
import { axios } from '@/utils/request'

const Goods = '/shop'
// 获取订单列表
export function reqGoods(parameter) {
  return axios({
    url: Goods,
    method: 'get',
    params: parameter
  })
}
