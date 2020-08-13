<!--
 * @Descripttion: 
 * @Author: chenjunwei
 * @Date: 2020-06-28 15:17:18
 * @LastEditors: chenjunwei
 * @LastEditTime: 2020-08-12 10:08:05
-->
<template>
  <van-tabbar v-model="active" style="z-index: 1999">
    <van-tabbar-item v-for="(tab, index) in tabbar" :icon="tab.icon" :to="tab.path" :dot="tab.dot" :info="tab.info" :key="index">
      {{ tab.name }}
    </van-tabbar-item>
  </van-tabbar>
</template>

<script>
import { Tabbar, TabbarItem } from 'vant'

export default {
  data() {
    return {
      active: 0,
      tabbar: [
        {
          name: '首页',
          path: '/home',
          pathName: 'home',
          icon: 'home',
          dot: false,
          info: ''
        },
        {
          name: '订单',
          path: '/order',
          pathName: 'order',
          icon: 'order',
          dot: false,
          info: ''
        },
        {
          name: '我的',
          path: '/user',
          pathName: 'user',
          icon: 'user',
          dot: false,
          info: ''
        }
      ]
    }
  },

  watch: {
    $route: 'changeActive'
  },

  created() {
    const toName = this.$route.name
    this.setActive(toName)
  },

  methods: {
    changeActive({ name }) {
      this.setActive(name)
    },
    setActive(name) {
      this.tabbar.forEach((tab, i) => {
        if (tab.pathName === name) {
          this.active = i
          return false
        }
      })
    }
  },

  components: {
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem
  }
}
</script>
