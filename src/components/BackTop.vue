<template>
  <div class="backTop" v-show="vShow" @click="goTop">
    <van-icon name="upgrade" />
  </div>
</template>

<script>
/**
 * 引入:
 * import BackTop from '@/components/BackTop.vue',
 * components: {
 *  BackTop
 * }
 * 在需要返回顶部的标签内部调用,调用的父组件需有id='content,例如:
 * <div id="content">
 *  <BackTop />
 * </div>
 * 参数说明:
 * flag 初始值为false
 */

import Vue from 'vue'
import { Icon } from 'vant'

Vue.use(Icon)

export default {
  props: ['vShow'],
  methods: {
    goTop () {
      document.getElementById('content').scrollTop = 0
    }
  }
  // scrollTop () {
  //   let scroll = document.getElementById('content').scrollTop
  //   if (scroll > 150) {
  //     this.flag = true
  //   } else {
  //     this.flag = false
  //   }
  // }
}
</script>
