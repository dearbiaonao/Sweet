<template>
  <div class="mask">
    <div class="product">
      <h3> {{ name }} </h3>
      <span> {{ price }} </span>
    </div>
    <div class="addCart"><i class="iconfont icon-iconfontcart-copy"></i></div>
  </div>
</template>

<script>
export default {
  props: {
    name: String,
    price: String
  }
}
// https://res.bestcake.com/images/new-index/p/奥利奥雪域牛乳芝士.png
</script>

<style lang="scss" scoped>
.mask{
  width: 100%;
  height: 0.7rem;
  display: flex;
  .product{
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 0.1rem;
    h3{
      flex: 1;
      font-size: 14px;
      font-weight: normal;
    }
    span{
      flex: 1;
      color: #ff6867;
    }
  }
  .addCart{
    width: 15%;
    height: 100%;
    display: flex;
    align-items: center;
    i{
      font-size: 0.16rem;
      color: #ff6867;
    }
  }
}
</style>
