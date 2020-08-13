<!--
 * @Descripttion: 加载更多的列表组件
 * @Author: LinGuiBin
 * @Date: 2020-03-03 11:04:55
 * @LastEditors: chenjunwei
 * @LastEditTime: 2020-08-13 09:26:30
 -->
<template>
  <div :style="{ height: wrapperHeight + 'px' }">
    <mt-loadmore
      :top-method="loadTop"
      @translate-change="translateChange"
      @top-status-change="handleTopChange"
      :bottom-method="loadBottom"
      @bottom-status-change="handleBottomChange"
      :bottom-all-loaded="allLoaded"
      ref="loadmore"
    >
      <div class="item-list" :style="{ minHeight: wrapperHeight + 'px' }">
        <div class="item-box" v-if="dataList.length === 0" :style="{ height: wrapperHeight + 'px' }">
          <img src="@/assets/images/is_empty.png" />
          <p>什么都木有~~</p>
        </div>
        <slot name="content" :item="dataList" />
      </div>
    </mt-loadmore>
  </div>
</template>

<script>
import _ from 'lodash'

export default {
  name: 'LoadmoreList',
  props: {
    getDataList: {
      type: Function,
      default: () => {}
    },
    queryParam: {
      type: Object,
      default: () => {}
    },
    wrapperHeight: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      dataList: [],
      allLoaded: false,
      bottomStatus: '',
      pageParam: {
        pageSize: 10,
        pageNo: 1
      },
      topStatus: '',
      translate: 0,
      moveTranslate: 0
    }
  },
  methods: {
    getDataListMethod() {
      this.getDataList(_.assign({}, this.queryParam, this.pageParam))
        .then(res => {
          let list = _.get(res, 'data.list')
          if (this.pageParam.pageNo === 1) {
            this.dataList = list
          } else {
            this.dataList = this.dataList.concat(list || [])
          }
          if (list && list.length === 0) {
            this.$message('没有更多数据了！')
            this.allLoaded = true
          } else {
            this.pageParam.pageNo++
            this.allLoaded = false
          }
          this.$refs.loadmore.onBottomLoaded()
        })
        .catch(e => {})
    },
    handleBottomChange(status) {
      this.bottomStatus = status
    },
    handleTopChange(status) {
      this.moveTranslate = 1
      this.topStatus = status
    },
    translateChange(translate) {
      const translateNum = +translate
      this.translate = translateNum.toFixed(2)
      this.moveTranslate = (1 + translateNum / 70).toFixed(2)
    },
    loadBottom() {
      if (this.allLoaded) return
      this.getDataListMethod()
    },
    loadTop() {
      this.pageParam.pageNo = 0
      this.getDataListMethod()
      this.$refs.loadmore.onTopLoaded()
    }
  },
  mounted() {}
}
</script>

<style lang="scss" scoped>
.item-box {
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;

  & img {
    width: 100px;
    height: 100px;
    margin-bottom: 20px;
  }
}
</style>
