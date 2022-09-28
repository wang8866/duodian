<template>
  <div class="login">
    <header>
      <h3>手机快捷登录</h3>
      <p>未注册过的手机号将自动创建账号</p>
    </header>
    <div class="content">
      <div class="item">
        <input
          type="text"
          v-model="loginForm.phone"
          placeholder="请输入手机号"
        >
      </div>
      <div class="item">
        <input
          type="text"
          v-model="loginForm.code"
          placeholder="请输入验证码"
        >
        <button
          :disabled="codeDisabled"
          @click="sendCode"
        >
          {{time > 0 ?`${time}秒后重新获取` : '获取验证码'}}
        </button>
      </div>
    </div>
    <button
      class="log"
      @click="login"
    >
      登录
    </button>
  </div>
</template>

<script>
export default {
  name: 'login-index',
  data () {
    return {
      time: 0,
      loginForm: {
        phone: '',
        code: ''
      }
    }
  },
  computed: {
    codeDisabled () {
      return this.loginForm.phone.length !== 11 || this.time !== 0
    }
  },
  methods: {
    async login () {
      const res = await this.$api.user.login(this.loginForm)
      const callbackUrl = this.$route.query.callback || '/home'
      console.log(res)
      localStorage.setItem('token', res.token)
      this.$store.dispatch('user/getUserInfo').then(res => {
        this.$router.replace(callbackUrl)
      })
    },
    async sendCode () {
      const res = await this.$api.user.sendCode({
        phone: this.loginForm.phone
      })
      this.time = 60
      const interval = setInterval(() => {
        this.time -= 1
        if (this.time <= 0) {
          clearInterval(interval)
        }
      }, 2000)
      console.log(res)
    }
  }
}
</script>

<style lang="scss" scoped>
  .login {
    padding: 140px 60px 0;
    box-sizing: border-box;
    header {
      h3 {
        font-size: 52px;
        color: #333;
        font-weight: bold;
      }
      p {
        font-size: 28px;
        color: #999;
        margin-top: 30px;
      }
    }
    .content {
      margin-top: 160px;
      .item {
        @include wh (100%, auto);
        &:nth-child(2) {
          position: relative;
          margin-top: 20px;
          button {
            position: absolute;
            top: 22px;
            right: 0;
            border: 0;
            background: transparent;
            color: #06b7f1;
            font-weight: bold;
            &:disabled {
              color: lightblue;
            }
          }
        }
        input {
          @include wh (100%, 80px);
          outline: none;
          border: 0;
          border-bottom: 1px solid #eee;
        }
      }
    }
    .log {
      @include wh (100%, 80px);
      margin-top: 50px;
      background: #06b7f1;
      border: 0;
      border-radius: 80px;
      font-size: 32px;
      color: #fff;
      font-weight: bold;
    }
  }
</style>
