<template>
  <div class="noLogon">
    <div class="headerImg"><span class="iconfont icon-user"></span></div>
    <div class="img"></div>
    <router-link to="/login">
      <span class="nologin">欢迎您</span>
      <span class="nologin">***</span>
    </router-link>
  </div>
</template>

<script>
export default {
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (vm.$store.state.loginState === 'ok') {
        next()
      } else {
        next('/login')
      }
    })
  }
}
</script>
