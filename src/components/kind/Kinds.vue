<template>
  <div class="box">
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img src="//s1.hdslb.com/bfs/static/mall-c/static/img/login.5707d77.png" alt="">
      </van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import Vue from 'vue'
import { Swipe, SwipeItem } from 'vant'
Vue.use(Swipe).use(SwipeItem)
export default {

}
</script>
