<template>
  <div class="container">
    <header class="header">
      <van-nav-bar
        title="注册"
        right-text="登录"
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
          :error-message="phoneErr"
        />

        <van-field
          v-model="password"
          type="password"
          label="密码"
          placeholder="请输入密码"
          required
          :right-icon="passwordPassed"
          :error-message="passworEerr"
        />

        <van-field
          v-model="sms"
          required
          center
          clearable
          label="短信验证码"
          placeholder="请输入短信验证码"
          :error-message="codeEerr"
        >
          <van-button
            round
            slot="button"
            size="small"
            type="primary"
            @click="sendCode"
            :disabled="buttonFlag"
            :style="{opacity: buttoOopacity}"
          >
            发送验证码
          </van-button>
        </van-field>
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
      codeEerr: null,
      code: 'a' // 储存返回的验证码
    }
  },
  computed: {
    // 匹配手机号和密码的正则
    phonePassed () {
      if (this.phone === '') {
        return null
      } else if (!(/^1[34578]\d{9}$/.test(this.phone))) {
        return null
      } else {
        return 'passed'
      }
    },
    // 密码正则:不全是大写字母,不全是小写字母,不全是数组的8位以上的字符
    passwordPassed () {
      if (this.password === '') {
        return null
      } else if (!(/^(?![A-Z]+$)(?![a-z]+$)(?!\d+$)\S{8,}$/.test(this.password))) {
        return null
      } else {
        return 'passed'
      }
    },
    // 设置按钮的禁用状态
    buttonFlag () {
      if (this.passwordPassed && this.passwordPassed) {
        return false
      } else {
        return true
      }
    },
    // 设置按钮的透明度
    buttoOopacity () {
      if (this.passwordPassed && this.passwordPassed) {
        return '1'
      } else {
        return '0.5'
      }
    },
    // 显示错误提示信息
    phoneErr () {
      if (this.phone === '') {
        return null
      } else if (!(/^1[34578]\d{9}$/.test(this.phone))) {
        return '请输入正确手机号'
      } else {
        return null
      }
    },
    passworEerr () {
      if (this.password === '') {
        return null
      } else if (!(/^(?![A-Z]+$)(?![a-z]+$)(?!\d+$)\S{8,}$/.test(this.password))) {
        return '请输入数字字母组成的8位以上密码'
      } else {
        return null
      }
    }
  },
  methods: {
    // 点击发送验证码
    sendCode () {
      fetch('https://www.daxunxun.com/users/sendCode?tel=' + this.phone)
        .then(res => res.json())
        .then((data) => {
          console.log(data)
          if (data === 0) {
            Toast('获取验证码失败')
          } else if (data === 1) {
            Toast('该用户已被注册')
          } else {
            this.codeEerr = null
            this.code = data.code
          }
        })
    },
    // 点击注册,验证信息
    register () {
      // console.log(this.phone)
      if (this.sms !== this.code) {
        Toast('验证码错误')
        return null
      }
      if (this.phonePassed !== 'passed') {
        Toast('手机号格式错误')
        return null
      }
      if (this.passwordPassed !== 'passed') {
        Toast('密码格式错误')
        return null
      }
      this.codeEerr = null
      this.registerFn()
    },
    // 提交数据注册
    registerFn () {
      fetch('https://www.daxunxun.com/users/register', {
        method: 'post',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: 'username=' + this.phone + '&password=' + this.password
      }).then(res => res.json()).then((data) => {
        console.log(data)
        if (data === 0) {
          Toast('手机号格式错误')
        } else if (data === 2) {
          Toast('手机号格式错误')
        } else if (data === 1) {
          Dialog.confirm({
            title: '提示',
            message: '注册成功,请点击登录'
          }).then(() => {
            this.$router.push('/login')
          }).catch(() => {
            return null
          })
        } else {
          console.log(data)
        }
      })
    },
    // 点击左侧按钮返回上一页
    onClickLeft () {
      this.$router.back()
    },
    // 点击右侧按钮跳转到登录页面
    onClickRight () {
      this.$router.replace('/login')
    }
  }
}
</script>
