<template>
  <div class="container">
    <router-view></router-view>
    <div class="content">
      <Order :num ="num" />
      <AppLications :num ="num" />
    </div>
  </div>
</template>

<script>
import Order from '@/components/user/Order.vue'
import AppLications from '@/components/user/AppLications.vue'

export default {
  components: {
    Order,
    AppLications
  },
  data () {
    return {
      num: '1'
    }
  },
  beforeRouteEnter (to, from, next) {
    // 因为此时组件实例还未被创建,所以无法访问this,这里next(vm=>{})可以代替this
    next((vm) => {
      console.log(vm.$store.state.loginState)
      // if (to.name === 'user') {
      if (vm.$store.state.loginState === 'ok') {
        next('/user/login')
      } else {
        next('/user/noLogin')
      }
      // }
    })
  }
}
</script>

<style lang="scss">
.container{
  .noLogon {
    width: 100%;
    height: 1.5rem;
    background-color: #ff6867;
    display: flex;
    align-items: center;
    .headerImg{
      width: 0.6rem;
      height: 0.6rem;
      background-color: #fff;
      border-radius: 1rem;
      margin: 0 0.2rem;
      .iconfont {
        font-size: 50px;
        text-align: center;
        display: inline-block;
        width: 100%;
        height: 100%;
        line-height: 0.6rem;
      }
    }
    .nologin{
      color: #fff;
      font-size: 16px;
      margin: 1px;
    }
  }
  .box {
    width: 100%;
    background-color: #fff;
    margin: 4px 0;
    .order {
      width: 100%;
      padding: 0.1rem;
      height: 0.5rem;
      // background-color: #233;
      display: flex;
      justify-content: space-between;
    }
    .orders{
      width: 100%;
      padding-bottom: 0.2rem;
      border-bottom: 1px solid rgb(231, 230, 230);
      ul{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        li{
          width: 20%;
          // flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          position: relative;
          i{
            font-size: 26px;
            color:  #ff6867;
          }
          .num{
            color: #fff;
            width: 14px;
            height: 14px;
            background-color:#ff6867;
            border-radius: 0.2rem;
            position: absolute;
            top: 0rem;
            right: 0.15rem;
            text-align: center;
            line-height: 14px;
            // line-break: 0.2rem;
          }
        }
      }
    }
  }
}

</style>
