<template>
  <div class="detail">
    <Shade v-show="show" @change="getData" :product="product" />
    <div class="container">
      <!-- <header class="header"> -->
        <van-nav-bar
          title="商品"
          left-text=""
          right-text="消息"
          left-arrow
          @click-left="onClickLeft"
        />
      <!-- </header> -->
      <div class="content">
        <div class="proimg">
          <van-swipe>
            <van-swipe-item><img :src="proImg1" /></van-swipe-item>
            <van-swipe-item><img :src="proImg2" /></van-swipe-item>
            <van-swipe-item><img :src="proImg3" /></van-swipe-item>
            <van-swipe-item><img :src="proImg4" /></van-swipe-item>
          </van-swipe>
        </div>
        <div class="proInfo">
          <h3 class="proname">
            {{ proname }}
          </h3>
          <div class="price">
            价格:
            <span> {{ price }} </span>
          </div>
          <div class="prosize">
            规格:
            <span> {{ size }} </span>
            <br />
          </div>
        </div>
        <van-cell-group>
          <van-cell title="食用人数" :value="porpleNum" value-class="peopleNum" />
          <van-cell title="原材料:" :label="lable" />
          <van-cell title="储存方式：" :label="reserve" />
        </van-cell-group>
        <div class="box">
          <P class="goodsInfo">商品详情</P>
          <p class="sendWord"> {{ sendWord1 }} </p>
          <p class="sendWord"> {{ sendWord2 }} </p>
          <div class="infoImg">
            <img :src="URL1">
          </div>
          <div class="infoImg">
            <img :src="URL2">
          </div>
          <div class="infoImg">
            <img :src="URL3">
          </div>
          <div class="infoImg">
            <img :src="URL4">
          </div>
        </div>
      </div>
    </div>
    <footer class="footer">
      <van-goods-action>
        <van-goods-action-icon
          icon="chat-o"
          text="客服"
          @click="onClickIcon"
        />
        <van-goods-action-icon
          icon="cart-o"
          type="primary"
          text="购物车"
          @click="onClickIcon"
        />
        <van-goods-action-button
          type="warning"
          @click="show = true"
          text="加入购物车"
        />
        <van-goods-action-button
          text="立即购买"
          type="warning"
          style="background:#ff6867"
          @click="show = true"
        />
      </van-goods-action>
    </footer>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import Shade from '@/components/cart/Shade.vue'
import { GoodsAction, GoodsActionIcon, Overlay, GoodsActionButton, NavBar, Swipe, SwipeItem, Cell, CellGroup } from 'vant'

Vue.use(NavBar)
Vue.use(GoodsAction).use(GoodsActionIcon).use(GoodsActionButton)
Vue.use(Swipe).use(SwipeItem)
Vue.use(Cell).use(CellGroup)
Vue.use(Overlay)

export default {
  components: {
    Shade
  },
  data () {
    return {
      product: '',
      proImg1: '',
      proImg2: '',
      proImg3: '',
      proImg4: '',
      size: '',
      price: '',
      proname: '',
      reserve: '',
      lable: '',
      porpleNum: '',
      sendWord1: '',
      sendWord2: '',
      URL1: '',
      URL2: '',
      URL3: '',
      URL4: '',
      show: false
    }
  },
  methods: {
    getData () {
      this.show = false
    },
    onClickLeft () {
      this.$router.back()
    },
    onClickIcon () {
      console.log('点击图标')
    },
    onClickButton () {
      console.log('点击图标')
    }
  },
  mounted () {
    // console.log(this.$route.params.id)
    const { $route: { params: { id } } } = this
    // this.goodsId = id
    // console.log(this.goodsId)
    axios.get('/api/goods').then(res => {
      // console.log(res.data[0].data)
      this.product = res.data[0].data
      // console.log(this.product)
      this.product.forEach(item => {
        // console.log(item.GoodsName)
        if (item.GoodsName === id) {
          this.product = item
          this.proImg1 = item.Goodsimg1
          this.proImg2 = item.Goodsimg2
          this.proImg3 = item.Goodsimg3
          this.proImg4 = item.Goodsimg4
          if (item.Size === '') {
            this.size = item.Specification
          } else {
            this.size = item.Size
          }
          this.price = `￥${item.Price}`
          this.proname = item.GoodsName
          this.lable = item.Material
          this.reserve = item.Reserve
          this.porpleNum = item.PorpleNum
          this.sendWord1 = item.SendWord1
          this.sendWord2 = item.SendWord2
          this.URL1 = item.URL1
          this.URL2 = item.URL2
          this.URL3 = item.URL3
          this.URL4 = item.URL5
        }
      })
    })
  }
}
</script>

<style lang="scss">
.detail {
  background-color: #ececec;
}
.proimg{
  width: 100%;
  img{
    width: 100%;
  }
}
.proInfo{
  width: 100%;
  background-color: #fff;
  .proname{
    width: 100%;
    height: 0.5rem;
    line-height: 0.5rem;
    padding-left: 0.1rem;
    font-size: 16px;
    font-weight: 500;
  }
  .prosize, .price {
    display: inline-block;
    width: 44%;
    margin: 0.1rem;
    font-size: 14px;
    color: #888;
  }
  .price {
    font-size: 16px;
    color: #ff6867;
  }
}
.van-cell-group {
  margin: 0.2rem 0;
}
.peopleNum {
  flex: 3;
  text-align: left;
  color: #ff6867;
}
.box{
  width: 100%;
  background-color: #fff;
  .goodsInfo{
    border-bottom: 1px solid #ececec;
    padding: 0.1rem;
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 2px;
  }
  .sendWord {
    width: 100%;
    padding:0.2rem 0.2rem 0 0.2rem;
    text-align: center;
    color: #ff6867;
  }
  .infoImg{
    margin-top:0.2rem;
    width: 100%;
    img{
      width: 100%;
    }
  }
}
</style>
