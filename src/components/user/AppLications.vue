<template>
  <div class="box">
    <div class="order"><span>我的应用</span><span>更多<i class="iconfont icon-gengduo"></i></span></div>
    <div class="orders">
      <ul>
        <li id="order">
          <i class="iconfont icon-fukuan"></i>
          <span>我的团购</span>
        </li>
        <li id="order">
          <i class="iconfont icon-fahuo"></i>
          <span>签到</span>
        </li>
        <li id="order">
          <i class="iconfont icon-shouhuo"></i>
          <span>我的收藏</span>
        </li>
        <li id="order">
          <i class="iconfont icon-shouhuo"></i>
          <span>在线客服</span>
        </li>
        <li id="order">
          <i class="iconfont icon-shouhou"></i>
          <span>收货地址</span>
        </li>
        <li id="order">
          <i class="iconfont icon-shouhou"></i>
          <span>中奖纪录</span>
        </li>
        <li id="order">
          <i class="iconfont icon-shouhou"></i>
          <span>银行卡</span>
        </li>
        <li id="order">
          <i class="iconfont icon-shouhou"></i>
          <span>幸福家园</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    num: String
  }
}
</script>

<style lang="scss">
#order {
  width: 25%;
  i{
    color: #666;
  }
}
</style>
