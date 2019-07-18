<template>
  <div class="container">
    <van-search v-show="flag" placeholder="请输入搜索关键词" background="#ff6867" v-model="value" />
    <!-- <Kinds /> -->
    <div class="content" id="content">
      <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      </van-pull-refresh>
      <van-tabs sticky :background="bgcolor" :swipe-threshold="3" :title-active-color="activeColor" :color="color" :title-inactive-color="inColor">
        <van-tab v-for="(item, index) of this.product" :key="index" :title="item.MenuTabs.MenuName">
          <div class="prolist">
            <div v-for="(itm, idx) of item.MenuProduct" :key="idx" class="proitem" @click="goDetail(itm.Name)">
              <div class="proImg">
                <img :src="itm.ImgUrl ? 'https://res.bestcake.com/' + itm.ImgUrl : fasle">
              </div>
              <Detailmask :name="itm.Name" :price="itm.Price ? '¥' + itm.Price  : '' "/>
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
// import mymixins from '@/mixins/mymixins.js'
import Detailmask from '@/components/content/Detailsmask.vue'
import { Search, Tab, Toast, Tabs, PullRefresh } from 'vant'

Vue.use(PullRefresh)
Vue.use(Search)
Vue.use(Tab).use(Tabs)
Vue.use(Toast)

export default {
  // mixins: [mymixins],
  components: {
    Detailmask
  },
  data () {
    return {
      flag: true,
      activeColor: '#323233',
      inColor: '#7D7E80',
      bgcolor: '#fff',
      color: '#ff6867',
      value: '',
      title: '',
      index: '',
      name: '',
      price: '',
      product: '',
      proImg: '',
      alt: '',
      isLoading: false
    }
  },
  methods: {
    onRefresh () {
      setTimeout(() => {
        this.$toast('刷新成功')
        this.isLoading = false
      })
    },
    goDetail (name) {
      this.$router.push({ name: 'detail', params: { id: name } })
    },
    scrollEvent () {
      let content = document.querySelector('.content').scrollTop
      // console.log(content)
      if (content > 0) {
        this.flag = false
        this.bgcolor = '#ff6867'
        this.activeColor = '#fff'
        this.inColor = '#fff'
        this.color = '#efe9e9'
      } else {
        this.flag = true
        this.activeColor = '#323233'
        this.bgcolor = '#fff'
        this.inColor = '#7D7E80'
        this.color = '#ff6867'
      }
    }
  },
  mounted () {
    axios.get('/api/list').then(data => {
      this.product = data.data[0].Tag.Section1
      this.img = this.product[0].MenuTabs.MenuName
      console.log(this.title)
      console.log(this.product)
    })
    let content = document.querySelector('.content')
    // console.log(content)
    content.addEventListener('scroll', this.scrollEvent)
  }
}
</script>

<style lang="scss" scoped>
.van-search__content {
  // background-color: #ff6867;
  border:1px solid #fff;
  border-radius: 1rem;
  .van-field__control{
    color: #fff;
  }
}
.prolist{
  display: flex;
  flex-wrap: wrap;
  width: 96%;
  margin:2%;
  .proitem{
    width: 48%;
    // height: 2rem;
    margin:1%;
    // box-shadow:1px 0 3px #f8a6a6;
    // height: 3rem;
    background-color: #fff;
    position: relative;
    // border:1px solid #ff6867;
    .proImg{
      width: 100%;
      img{
        width: 100%;
      }
    }
  }
}
</style>
