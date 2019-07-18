<template>
  <div class="noLogon">
    <div class="headerImg"><span class="iconfont icon-user"></span></div>
    <div class="img"></div>
    <router-link to="/login">
      <!-- <van-button plain hairline type="primary">登录</van-button> -->
      <span class="nologin">登录</span>
    </router-link>
    <span class="nologin" style="font-size:20px">/</span>
    <router-link to="/register">
      <span class="nologin">注册</span>
      <!-- <van-button plain hairline type="primary">注册</van-button> -->
    </router-link>
  </div>
</template>

<script>
import Vue from 'vue'
import { Button } from 'vant'

Vue.use(Button)
export default {
  beforeRouteEnter (to, from, next) {
    next(vm => {
      console.log(vm.$store.state.loginState)
      if (vm.$store.state.loginState === 'ok') {
        // next('/user/login')
        next('/user/noLogin')
      } else {
        next('/login')
      }
    })
  }
}
</script>
