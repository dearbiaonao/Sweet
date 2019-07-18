<template>
  <div class="box">
    <div class="order"><span>我的订单</span><span>更多<i class="iconfont icon-gengduo"></i></span></div>
    <div class="orders">
      <ul>
        <li>
          <i class="iconfont icon-fukuan"></i>
          <span>待付款</span>
          <span class="num" v-if="num"> {{ num }} </span>
        </li>
        <li>
          <i class="iconfont icon-fahuo"></i>
          <span>待发货</span>
          <span class="num" v-if="num"> {{ num }} </span>
        </li>
        <li>
          <i class="iconfont icon-shouhuo"></i>
          <span>待收货</span>
          <span class="num" v-if="num"> {{ num }} </span>
        </li>
        <li>
          <i class="iconfont icon-shouhuo"></i>
          <span>待评价</span>
          <span class="num" v-if="num"> {{ num }} </span>
        </li>
        <li>
          <i class="iconfont icon-shouhou"></i>
          <span>售后</span>
          <span class="num" v-if="num"> {{ num }} </span>
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
