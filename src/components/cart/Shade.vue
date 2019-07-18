<template>
    <!-- 遮罩 -->
  <div class="box"  @click.stop="sendData">
    <div class="info" @click.stop="">
      <div class="goodsimg">
        <img :src="product.Goodsimg1">
      </div>
      <div class="goods">
        <div class="name"> {{ product.GoodsName }} </div>
        <div class="price">¥ {{ product.Price }} </div>
      </div>
      <van-cell-group>
        <van-cell title="规格:" :value="product.Size" label-class="label" :label="product.PorpleNum" />
        <van-cell title="购买数量:">
          <p slot="default">
            <van-stepper v-model="value" />
          </p>
        </van-cell>
      </van-cell-group>
    </div>
    <van-goods-action>
      <van-goods-action-button
        type="warning"
        text="加入购物车"
        @click.stop="onClickIcon"
      />
      <van-goods-action-button
        type="danger"
        text="立即购买"
        @click="onClickButton"
      />
    </van-goods-action>
  </div>
</template>

<script>
import Vue from 'vue'
import { GoodsAction, GoodsActionIcon, GoodsActionButton, Cell, CellGroup, Stepper } from 'vant'
Vue.use(GoodsAction).use(GoodsActionIcon).use(GoodsActionButton)
Vue.use(Cell).use(CellGroup)
Vue.use(Stepper)

export default {
  props: {
    product: {}
    // vShow: Boolean
  },
  data () {
    return {
      value: 1,
      show: false
    }
  },
  methods: {
    sendData () {
      this.$emit('change', 'false')
    },
    onClickIcon () {
      console.log('点击图标')
    },
    onClickButton () {
      this.$router.push({
        name: 'gobuy',
        params: {
          num: `${this.product.GoodsName}&${this.value}`
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.box {
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 1;
  background-color: rgba(0,0,0,.7);
  .info {
    width: 100%;
    height: 50%;
    background-color: #fff;
    position: absolute;
    bottom: 0;
  }
  .goodsimg {
    width: 1.6rem;
    margin: 4px;
    display: inline-block;
    img{
      width: 94%;
      height: 94%;
      margin: 3%;
    }
  }
  .goods {
    margin: 3%;
    display: inline-block;
    vertical-align: bottom;
    .name, .price {
      height: 0.4rem;
      line-height: 0.6rem;
      font-size: 16px;
    }
    .price {
      color: #ff6867;
    }
  }
  .label {
    color: #ff6867;
  }
}
</style>
