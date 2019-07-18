<template>
  <div class="grade">
    评分: {{ rating }}
    <span class="iconfont icon-five-pointed-star" :class="(rating / 2) > 1.5? 'active' : '' "></span>
    <span class="iconfont icon-five-pointed-star" :class="(rating / 2) > 2.5? 'active' : '' "></span>
    <span class="iconfont icon-five-pointed-star" :class="(rating / 2) > 3.5? 'active' : '' "></span>
    <span class="iconfont icon-five-pointed-star" :class="(rating / 2) > 4.5? 'active' : '' "></span>
    <span class="iconfont icon-five-pointed-star" :class="(rating / 2) > 4.6? 'active' : '' "></span>
  </div>
</template>

<script>
export default {
  props: {
    rating: Number
  }
}
</script>

<style lang="scss">
.grade {
  .active{
    color: red;
  }
}
</style>
