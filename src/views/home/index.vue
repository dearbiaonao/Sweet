<template>
  <div class="container">
    <!-- <van-nav-bar title="首页">
      <van-icon name="search" slot="right" />
    </van-nav-bar> -->
    <div class="content" id="content">
      <Kind />
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <van-swipe :autoplay="3000" indicator-color="white">
          <van-swipe-item v-for="(item, index) of banner" :key="index">
            <img :src="item" alt="">
          </van-swipe-item>
        </van-swipe>
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <Prolist :product="product" />
        </van-list>
      </van-pull-refresh>
      <BackTop v-show="flag"/>>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
// import axios from 'axios'
import Kind from '@/components/kind/Kinds.vue'
import { Swipe, SwipeItem, List, PullRefresh, NavBar } from 'vant'
import Prolist from '@/components/content/Prolist'
import BackTop from '@/components/BackTop'

Vue.use(Swipe).use(SwipeItem)
Vue.use(List)
Vue.use(PullRefresh)
Vue.use(NavBar)

export default {
  components: {
    Prolist,
    BackTop,
    Kind
  },
  data () {
    return {
      product: [],
      banner: [],
      loading: false,
      finished: false,
      pagecode: 1,
      isLoading: false,
      flag: false
    }
  }
  // methods: {
  //   onRefresh () {
  //     this.isLoading = true
  //     fetch('/api/list')
  //       .then(res => res.json())
  //       .then((data) => {
  //         this.isLoading = false
  //         this.product = data
  //         this.finished = false
  //         this.pagecode = 1
  //       })
  //   },
  //   onLoad () {
  //     this.loading = true
  //     fetch('/api/list' + this.pagecode * 20)
  //       .then(res => res.json())
  //       .then((data) => {
  //         this.pagecode++
  //         this.loading = false
  //         if (data.length === 0) {
  //           this.finished = true
  //         } else {
  //           this.product = [...this.product, ...data]
  //         }
  //       })
  //   },
  //   scrollTop () {
  //     let scroll = document.getElementById('content').scrollTop
  //     if (scroll > 150) {
  //       this.flag = true
  //     } else {
  //       this.flag = false
  //     }
  //   }
  // },
  // watch: {
  //   $route (newVal, oldVal) {
  //     if (newVal.name === 'home') {
  //       document.getElementById('content').scrollTop = localStorage.getItem('scroll')
  //     }
  //   }
  // },
  // mounted () {
  //   document.getElementById('content').addEventListener('scroll', this.scrollTop)
  //   fetch('/api/list')
  //     .then(res => res.json())
  //     .then(data => {
  //       console.log(data)
  //       data.map((item, index) => {
  //         item = '/api/list' + item
  //         this.banner.push(item)
  //       })
  //       console.log(this.banner)
  //     })
  //   fetch('/api/list')
  //     .then(res => res.json())
  //     .then(data => {
  //       this.product = data
  //       console.log(data)
  //     })
  // },
  // beforeRouteLeave (to, from, next) {
  //   let content = document.getElementById('content')
  //   // console.log(content.scrollTop)
  //   localStorage.setItem('scroll', content.scrollTop)
  //   content.removeEventListener('scroll', this.scrollTop)
  //   next()
  // }
}
</script>

<style lang="scss">
.van-swipe__track{
  width: 100%;
  height: 1.5rem;

  .van-swipe-item{
    width: 100%;
    height: 100%;

    img{
      width: 100%;
      height: 100%;
    }
  }
}
.backTop{
  width: 0.3rem;
  height: 0.3rem;
  background-color:#fff;
  position: fixed;
  bottom:0.8rem;
  right:0.3rem;
  border-radius: 50%;
  .van-icon{
    font-size: 0.3rem;
    color: #999
  }
}
</style>
