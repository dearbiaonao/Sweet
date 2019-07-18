<template>
  <div class="container">
    <header class="header">
      <van-nav-bar
        title="登录"
        right-text="注册"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </header>
    <div class="content">
      <van-cell-group>
        <van-field
          v-model="phone"
          required
          :right-icon="phonePassed"
          label="手机号"
          placeholder="请输入手机号"
        />

        <van-field
          v-model="password"
          type="password"
          label="密码"
          placeholder="请输入密码"
          required
          :right-icon="passwordPassed"
        />
        <van-button type="primary" block size="normal" @click="register">注册</van-button>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import { Cell, CellGroup, NavBar, Field, Button, Dialog, Toast } from 'vant'

Vue.use(NavBar)
Vue.use(Field)
Vue.use(Cell).use(CellGroup)
Vue.use(Button)

export default {
  data () {
    return {
      phone: '',
      password: '',
      sms: '',
      codeEerr: null
    }
  },
  computed: {
    // 匹配手机号和密码的正则
    phonePassed () {
      if (this.phone === '') {
        return null
      } else {
        return 'passed'
      }
    },
    // 密码正则:不全是大写字母,不全是小写字母,不全是数组的8位以上的字符
    passwordPassed () {
      if (this.password === '') {
        return null
      } else {
        return 'passed'
      }
    }
  },
  methods: {
    // 点击注册,验证信息
    register () {
      // console.log(this.phone)
      if (this.phonePassed !== 'passed') {
        Toast('手机号格式错误')
        return null
      }
      if (this.passwordPassed !== 'passed') {
        Toast('密码不能为空')
        return null
      }
      this.registerFn()
    },
    // 提交数据注册
    registerFn () {
      fetch('https://www.daxunxun.com/users/login', {
        method: 'post',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: 'username=' + this.phone + '&password=' + this.password
      }).then(res => res.json()).then((data) => {
        // console.log(data)
        if (data === -1) {
          Toast('用户名或密码错误')
        } else if (data === 0) {
          Toast('登录失败')
        } else if (data === 2) {
          Toast('该用户不存在')
        } else {
          // 将状态提交到状态管理器
          // console.log(this.$store.state.loginState)
          this.$store.commit('changeLoginState', 'ok')
          // console.log(this.$store.state.loginState)
          Dialog.confirm({
            title: '提示',
            message: '登录成功'
          }).then(() => {
            this.$router.back()
          }).catch(() => {
            return null
          })
        }
      })
    },
    // 点击左侧按钮返回上一页
    onClickLeft () {
      this.$router.back()
    },
    // 点击右侧按钮跳转到登录页面
    onClickRight () {
      this.$router.replace('/register')
    }
  }
}
</script>
