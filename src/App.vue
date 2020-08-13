<!--
 * @Descripttion: 
 * @Author: chenjunwei
 * @Date: 2020-08-11 16:26:12
 * @LastEditors: chenjunwei
 * @LastEditTime: 2020-08-12 09:00:33
-->
<template>
  <div id="app">
    <keep-alive v-if="$route.meta.keepAlive">
      <router-view class="view-router"></router-view>
    </keep-alive>
    <router-view class="view-router" v-else></router-view>
    <router-view name="tabbar"></router-view>
  </div>
</template>
