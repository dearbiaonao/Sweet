<template>
  <div class="cart">
    <div class="container">
      <header class="header">
        <van-nav-bar
          title="购物车"
          left-arrow
          @click-left="onClickLeft"
        />
      </header>
      <div class="content">
        <!-- <div class="title">
          <van-checkbox v-model="checked">全选</van-checkbox>
        </div> -->
        <div class="cartList">
          <div class="cartItem" v-for="index of 1" :key="index">
            <div class="proitem">
              <div class="proImg">
                <img src="https://tse1-mm.cn.bing.net/th?id=OET.f6177ce313c344f88999cd33557c79e8&w=272&h=272&c=7&rs=1&o=5&pid=1.9" alt="">
              </div>
              <div class="proName">名称</div>
              <div class="proSize">规格</div>
              <div class="price">价格</div>
              <div class="num"></div>
            </div>
            <van-checkbox-group v-model="result">
              <van-checkbox :name="index">
                <!-- 复选框 {{ item }} -->
              </van-checkbox>
            </van-checkbox-group>
          </div>
        </div>
      </div>
    </div>
    <footer class="footer">
      <van-submit-bar
        :price="price"
        button-text="提交订单"
        @submit="onSubmit"
      >
        <!-- <van-checkbox v-model="checked">全选</van-checkbox> -->
        <!-- <span slot="tip" v-if="flag">
          你的收货地址不支持同城送, <span>修改地址</span>
        </span> -->
      </van-submit-bar>
    </footer>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import { NavBar, Checkbox, CheckboxGroup, SubmitBar } from 'vant'

Vue.use(NavBar)
Vue.use(Checkbox).use(CheckboxGroup)
Vue.use(SubmitBar)

export default {
  data () {
    return {
      checked: true,
      result: [],
      price: 10000,
      flag: false
    }
  },
  computed: {

  },
  methods: {
    onSubmit () {
      console.log(111)
    },
    onClickLeft () {
      this.$router.back()
    }
  },
  mounted () {
    axios.get('/api/list').then(data => console.log(data))
  }
}
</script>

<style lang="scss" scoped>
.van-hairline--bottom{
  background-color: #ff6867;
  .van-icon-arrow-left{
    color: #fff;
  }
  .van-nav-bar__title{
    color: #fff
  }
}
.title {
  padding: 0.1rem;
}
.cartItem {
  width: 96%;
  height: 0.8rem;
  margin:0.13rem 2%;
  padding: 1%;
  // background-color: #ff6867;
  box-shadow: 1px 1px 3px #f8c6c6;
  display: flex;
  .proitem{
    flex: 1;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: space-between;
    .proImg{
      height: 100%;
      margin-right:0.2rem;
      img{
        height: 100%;
      }
    }
  }
}
.van-checkbox-group {
  position: relative;
  top:35%;
  right: 0.12rem;
}
</style>
