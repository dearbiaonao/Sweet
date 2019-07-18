<template>
  <div class="box">
    <div class="container">
      <van-nav-bar
        left-text="确认订单"
        left-arrow
        @click-left="onClickLeft"
      />
      <div class="content">
        <!-- 联系人卡片 -->
        <van-contact-card
          :type="cardType"
          :name="currentContact.name"
          :tel="currentContact.tel"
          @click="showList = true"
        />
        <!-- 联系人列表 -->
        <van-popup v-model="showList" position="bottom">
          <van-address-list
            v-model="chosenAddressId"
            :list="list"
            @add="onAdd"
            @edit="onEdit"
          />
        </van-popup>
        <!-- 联系人编辑 -->
        <van-popup v-model="showEdit" :is-edit="isEdit" position="bottom">
          <van-address-edit
            :area-list="areaList"
            show-postal
            show-delete
            show-set-default
            show-search-result
            :search-result="searchResult"
            @save="onSave"
            @delete="onDelete"
            @change-detail="onChangeDetail"
          />
        </van-popup>
      </div>
    </div>
    <van-submit-bar
      :price="allMoney"
      button-text="提交订单"
      @submit="onSubmit"
    />
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
import { SubmitBar, NavBar, ContactCard, Area, Toast, AddressList, ContactList, AddressEdit, ContactEdit, Popup } from 'vant'
Vue.use(SubmitBar)
Vue.use(NavBar)
Vue.use(ContactCard).use(ContactList).use(ContactEdit)
Vue.use(Popup)
Vue.use(AddressEdit)
Vue.use(Toast)
Vue.use(Area)
Vue.use(AddressList)

export default {
  data () {
    return {
      allMoney: 0,
      num: '',
      price: '',
      chosenContactId: null,
      editingContact: {},
      showList: false,
      showEdit: false,
      isEdit: false,
      areaList: {},
      searchResult: [],
      chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室'
        }
      ]
    }
  },
  computed: {
    cardType () {
      return this.chosenContactId !== null ? 'edit' : 'add'
    },
    currentContact () {
      const id = this.chosenContactId
      return id !== null ? this.list.filter(item => item.id === id)[0] : {}
    }
  },
  mounted () {
    const { $route: { params: { num } } } = this
    this.num = num.split('&')[1]
    const id = num.split('&')[0]
    axios.get('/api/list').then(res => {
      const product = res.data[0].Tag.Section1
      product.forEach(item => {
        // console.log(item)
        item.MenuProduct.forEach(itm => {
          // console.log(itm.Name)
          if (itm.Name === id) {
            console.log(itm)
            this.price = itm.Price
            this.allMoney = this.num * this.price * 100
          }
        })
      })
    })
    axios.get('/api/address').then(res => {
      // console.log(res.data[0].ads)
      this.areaList = res.data[0].ads
    })
  },
  methods: {
    onSave () {
      Toast('save')
    },
    onDelete () {
      Toast('delete')
    },
    onChangeDetail (val) {
      if (val) {
        this.searchResult = [{
          name: '黄龙万科中心',
          address: '杭州市西湖区'
        }]
      } else {
        this.searchResult = []
      }
    },
    onSubmit () {
      console.log(111)
    },
    onClickLeft () {
      this.$router.back(-2)
    },
    // 添加联系人
    onAdd () {
      this.editingContact = { id: this.list.length }
      this.isEdit = false
      this.showEdit = true
    },
    // 编辑联系人
    onEdit (item) {
      this.isEdit = true
      this.showEdit = true
      this.editingContact = item
    },
    // 选中联系人
    onSelect () {
      this.showList = false
    }
  }
}
</script>
