<!--
 * @Descripttion: 
 * @Author: chenjunwei
 * @Date: 2020-06-28 15:17:18
 * @LastEditors: chenjunwei
 * @LastEditTime: 2020-08-12 11:22:49
-->
<template>
  <div class="is-empty">
    <div>
      <img src="../../assets/images/is_empty.png" width="20%" />
    </div>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'is-empty'
}
</script>

<style lang="scss" scoped>
.is-empty {
  text-align: center;
  color: $font-color-gray;
  padding-top: 150px;
  > div {
    margin-bottom: 20px;
  }
}
</style>
