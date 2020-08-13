<!--
 * @Descripttion: 订单界面
 * @Author: chenjunwei
 * @Date: 2020-06-11 15:18:09
 * @LastEditors: chenjunwei
 * @LastEditTime: 2020-08-12 19:41:06
-->
<template>
  <div>
    <loadmore-list :getDataList="getOrderList" :wrapperHeight="wrapperHeight" :queryParam="queryParam">
      <template slot="content" slot-scope="data">
        <div v-for="(item, key) in data.item" :key="key" :style="{ height: '50px' }">item</div>
      </template>
    </loadmore-list>
  </div>
</template>

<script>
import LoadmoreList from '@/components/loadmore-list'
import { getOrderList } from '@/api/order/order'

export default {
  data() {
    return {
      wrapperHeight: 200,
      getOrderList,
      queryParam: {}
    }
  },
  components: {
    LoadmoreList
  },

  mounted() {
    this.wrapperHeight = document.documentElement.clientHeight - 50
  },
  methods: {}
}
</script>

<style scoped></style>
