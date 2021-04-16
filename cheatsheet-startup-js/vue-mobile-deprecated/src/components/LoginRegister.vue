<template>
  <ion-content padding class="login">
    <!--    标题部分-->
    <ion-row>
      <ion-col text-center>
        <h3>
          <ion-text>
            {{$t('app.name')}}
          </ion-text>
        </h3>
        <ion-avatar class="logo">
          <img :src="`${rootPath}img/icons/512x512.png`"/>
        </ion-avatar>
      </ion-col>
    </ion-row>
    <div class="form">
      <!--      登录表单数据-->
      <ion-grid data-vv-scope="loginfrm" v-show="showLoginForm">
        <ion-row>
          <ion-col>
            <ion-item>
              <ion-input
                type="tel" pattern="[0-9]*"
                data-vv-name="login.username"
                v-validate.initial="{required: true,mobile: true}"
                placeholder="请输入登录用户名或者手机号"
                :value="login.username"
                @ionChange="login.username=$event.target.value; validateLoginHasErrors();"
                mode="ios"
                clear-input
              ></ion-input>
            </ion-item>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-item>
              <ion-input
                :type="closeEyes? 'password': 'text'"
                data-vv-name="login.passwd"
                v-validate.initial="{required: true, pwd: true}"
                placeholder="请输入登录密码"
                :value="login.passwd"
                @ionChange="login.passwd=$event.target.value; validateLoginHasErrors();"
                clear-input
              ></ion-input>
              <svg slot='end' v-if="closeEyes" class="eye" aria-hidden="true" @click="togggleEyes">
                <use xlink:href="#icon-eye-off"></use>
              </svg>
              <svg slot="end" v-else class="eye" aria-hidden="true" @click="togggleEyes">
                <use xlink:href="#icon-eye-on"></use>
              </svg>
            </ion-item>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <p text-right>
              <ion-note
                @click="goForgetPage">
                <a>忘记密码？</a>
              </ion-note>
            </p>
          </ion-col>
        </ion-row>
        <ion-row responsive-sm padding-top>
          <ion-col>
            <ion-button color="primary" expand="block" shape="round"
                        :disabled="loginBtnDisabled"
                        @click="submitForm('loginfrm')"
            >
              登录
            </ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
      <!--      找回密码部分-->
      <ion-grid data-vv-scope="forgetfrm" v-show="showForgetPwdForm">
        <ion-row>
          <ion-col>
            <ion-item>
              <ion-input
                type="tel" pattern="[0-9]*"
                data-vv-name="forget.username"
                v-validate.initial="{required: true,mobile: true}"
                placeholder="请输入手机号"
                :value="forget.username"
                @ionChange="forget.username=$event.target.value; validateForgetHasErrors(); validateForgetSmsCaptchaErrors();"
                mode="ios"
                clear-input
              ></ion-input>
            </ion-item>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-item>
              <ion-input
                type="tel" pattern="[0-9]"
                data-vv-name="forget.code"
                v-validate.initial="{required: true, digits: code.length}"
                placeholder="请输入短信验证码"
                :value="forget.code"
                @ionChange="forget.code=$event.target.value; validateForgetHasErrors();"
              >
              </ion-input>
              <ion-button size="small" @click.stop.prevent="sendCode(forget.username)"
                          :disabled="smsCodeBtnDisabled">{{ smsCodeBtnDisabled && code.clicked ? (code.timer+'秒'):
                code.text }}
              </ion-button>
            </ion-item>
          </ion-col>
        </ion-row>
        <ion-row responsive-sm padding-top>
          <ion-col>
            <ion-button color="primary" expand="block" shape="round"
                        :disabled="forgetBtnDisabled"
                        @click="submitForm('forgetfrm')"
            >
              提交
            </ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
      <!--      注册账号-->
      <ion-grid data-vv-scope="registerfrm" v-show="showRegisterForm">
        <ion-row>
          <ion-col>
            <ion-item>
              <ion-input
                type="tel" pattern="[0-9]*"
                data-vv-name="register.username"
                v-validate.initial="{required: true,mobile: true}"
                placeholder="请输入登录手机号"
                :value="register.username"
                @ionChange="register.username=$event.target.value; validateRegisterHasErrors(); validateRegisterSmsCaptchaErrors();"
                mode="ios"
                clear-input
              ></ion-input>
            </ion-item>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-item>
              <ion-input
                type="tel" pattern="[0-9]"
                data-vv-name="register.code"
                v-validate.initial="{required: true, digits: code.length}"
                placeholder="请输入短信验证码"
                :value="register.code"
                @ionChange="register.code=$event.target.value; validateRegisterHasErrors()"
              >
              </ion-input>
              <ion-button size="small" @click.stop.prevent="sendCode(register.username)"
                          :disabled="smsCodeBtnDisabled">{{ smsCodeBtnDisabled && code.clicked ? (code.timer+'秒'):
                code.text }}
              </ion-button>
            </ion-item>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-item>
              <ion-input
                :type="closeEyes? 'password': 'text'"
                data-vv-name="register.passwd"
                v-validate.initial="{required: true, pwd: true}"
                placeholder="请输入登录密码"
                :value="register.passwd"
                @ionChange="register.passwd=$event.target.value; validateRegisterHasErrors();"
                clear-input
              ></ion-input>
              <svg slot='end' v-if="closeEyes" class="eye" aria-hidden="true" @click="togggleEyes">
                <use xlink:href="#icon-eye-off"></use>
              </svg>
              <svg slot="end" v-else class="eye" aria-hidden="true" @click="togggleEyes">
                <use xlink:href="#icon-eye-on"></use>
              </svg>
            </ion-item>
          </ion-col>
        </ion-row>
        <ion-row>
          <ion-col>
            <ion-item>
              <ion-input
                :type="closeEyes? 'password': 'text'"
                data-vv-name="register.passwd2"
                v-validate.initial="{required: true, pwd: true,checkpwd: register.passwd}"
                placeholder="请再次输入登录密码"
                :value="register.passwd2"
                @ionChange="register.passwd2=$event.target.value; validateRegisterHasErrors();"
                clear-input
              ></ion-input>
              <svg slot='end' v-if="closeEyes" class="eye" aria-hidden="true" @click="togggleEyes">
                <use xlink:href="#icon-eye-off"></use>
              </svg>
              <svg slot="end" v-else class="eye" aria-hidden="true" @click="togggleEyes">
                <use xlink:href="#icon-eye-on"></use>
              </svg>
            </ion-item>
          </ion-col>
        </ion-row>
        <ion-row responsive-sm padding-top>
          <ion-col>
            <ion-button color="success" expand="block" shape="round"
                        :disabled="registerBtnDisabled"
                        @click="submitForm('registerfrm')"
            >
              注册
            </ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
    </div>
    <div text-center>
      <ion-text color="medium" v-show="showRegisterForm || showForgetPwdForm">
        已有账号? <a @click="goLoginPage"><strong>立即登录</strong></a>
      </ion-text>
      <ion-text color="medium" v-show="showLoginForm">
        没有账号? <a @click="goRegisterPage"><strong>立即注册</strong></a>
      </ion-text>
    </div>

    <copy-right/>
  </ion-content>
</template>

<script>
import User from '../api/services/user'
import vant from '../mixins/vant'
import CopyRight from './CopyRight'

const user = new User()
export default {
  name: 'LoginRegister',
  components: { CopyRight },
  mixins: [vant],
  props: {
    title: {
      type: String,
      require: false
    }
  },
  data () {
    return {
      rootPath: process.env.BASE_URL,
      closeEyes: true,
      // 登录相关数据
      showLoginForm: true,
      loginBtnDisabled: true,
      login: {
        username: '',
        passwd: ''
      },
      // 忘记密码相关数据
      showForgetPwdForm: false,
      forget: {
        username: '',
        code: ''
      },
      forgetBtnDisabled: true,
      // 注册账号相关数据
      showRegisterForm: false,
      register: {
        username: '',
        code: '',
        passwd: '',
        passwd2: ''
      },
      registerBtnDisabled: true,
      // 验证码相关数据
      smsCodeBtnDisabled: true,
      code: {
        intervalId: null,
        length: 6,
        text: '发送验证码',
        totalSeconds: 10,
        timer: 10,
        clicked: false
      }
    }
  },
  methods: {
    // 密码是否显示切换
    togggleEyes: function () {
      this.closeEyes = !this.closeEyes
    },
    // 页面切换
    goLoginPage: function () {
      this.showLoginForm = !this.showLoginForm
      this.showForgetPwdForm = false
      this.showRegisterForm = false
      // 验证码关闭
      this.resetCode()
      // 密码标记
      this.closeEyes = true
    },
    goForgetPage: function () {
      this.showForgetPwdForm = !this.showForgetPwdForm
      this.showLoginForm = false
      this.showRegisterForm = false
      // 验证码关闭
      this.resetCode()
    },
    goRegisterPage: function () {
      this.showRegisterForm = !this.showRegisterForm
      this.showLoginForm = false
      this.showForgetPwdForm = false
      // 验证码关闭
      this.resetCode()
      // 密码标记
      this.closeEyes = true
    },
    // 登录相关逻辑操作
    validateLoginHasErrors: function () {
      this.loginBtnDisabled =
          this.errors.has('login.username') ||
          this.errors.has('login.passwd')
    },
    // 忘记密码相关操作
    validateForgetHasErrors: function () {
      this.forgetBtnDisabled =
          this.errors.has('forget.username') ||
          this.errors.has('forget.code')
    },
    validateForgetSmsCaptchaErrors: function () {
      if (!this.code.clicked) {
        this.smsCodeBtnDisabled = this.errors.has('forget.username')
      }
    },
    // 注册相关逻辑
    validateRegisterHasErrors: function () {
      this.registerBtnDisabled =
          this.errors.has('register.username') ||
          this.errors.has('register.code') ||
          this.errors.has('register.passwd') ||
          this.errors.has('register.passwd2')
    },
    validateRegisterSmsCaptchaErrors: function () {
      if (!this.code.clicked) {
        this.smsCodeBtnDisabled = this.errors.has('register.username')
      }
    },
    // 提交登录，忘记密码，注册用户表单
    submitForm: function (scope) {
      this.$validator.validateAll(scope).then((valid) => {
        if (valid) {
          // 登录提交信息
          const loadingController = this.showLoading('请求中...')
          if (this.showLoginForm) {
            const loginfrm = this.login
            user.login(loginfrm).then((res) => {
              this.loginSuccess(res)
            }).catch(err => {
              this.loginFailed(err)
            }).finally(() => {
              this.loginBtnDisabled = false
              loadingController.clear()
            })
          } else if (this.showForgetPwdForm) { // 忘记密码提交
            const forgetfrm = this.forget
            user.forgetPwd(forgetfrm).then(res => {
              this.forgetSuccess(res)
            }).catch(err => {
              this.forgetFailed(err)
            }).finally(() => {
              this.forgetBtnDisabled = false
              loadingController.clear()
            })
          } else if (this.showRegisterForm) { // 注册用户提交
            const registerfrm = this.register
            user.register(registerfrm).then(resCode => {
              if (resCode === 1000) {
                console.log(`注册成功!`)
                this.$router.push({ name: 'home' })
              }
            }).catch(err => {
              this.registerFailed(err)
            }).finally(() => {
              this.registerBtnDisabled = false
              loadingController.clear()
            })
          }
        }
      })
    },
    loginSuccess: function (res) {
      console.log(res)
      this.$router.push({ name: 'home' })
      // 延迟 1 秒显示欢迎信息
      setTimeout(() => {
        this.showSuccess('操作成功!')
      }, 1000)
    },
    loginFailed: function (err) {
      this.showFailed(
        '登录请求出现错误，请稍后再试' || ((err.response || {}).data || {}).message
      )
    },
    forgetSuccess: function (res) {
      console.log(res)
      this.$router.push({ name: 'home' })
      // 延迟 1 秒显示欢迎信息
      setTimeout(() => {
        this.showSuccess('操作成功!')
      }, 1000)
    },
    forgetFailed: function (err) {
      this.showFailed(
        '忘记密码请求出现错误，请稍后再试' || ((err.response || {}).data || {}).message
      )
    },
    registerFailed: function (err) {
      this.showFailed(
        '注册请求出现错误，请稍后再试' || ((err.response || {}).data || {}).message
      )
    },
    sendCode: function (mobile) {
      // 每隔一秒减小一个数字
      this.smsCodeBtnDisabled = true
      this.code.clicked = true
      this.code.intervalId = window.setInterval(() => {
        if (this.code.timer-- <= 1) {
          this.resetCode()
        }
      }, 1000)

      const loadingController = this.showLoading('发送验证码...')
      user.getSmsCaptcha({ mobile: mobile }).then(res => {
        const resCode = res.status
        if (resCode === 1000) {
          const captcha = res.code
          this.showMessage(`验证码:${captcha}接收成功，请打开手机查看验证码!`)
        }
      }).catch(err => {
        this.resetCode()
        this.showFailed(
          '发送验证码请求出现错误，请稍后再试' || ((err.response || {}).data || {}).message
        )
      }).finally(() => {
        loadingController.clear()
      })
    },
    resetCode: function () {
      clearInterval(this.code.intervalId)
      this.code.timer = this.code.totalSeconds
      this.code.clicked = false
      this.smsCodeBtnDisabled = false
    }
  }
}
</script>

<style lang="less" scoped>
  .login {
    --background: url("../assets/img/login-bg.png") no-repeat center center / cover;

    .logo {
      margin: 0 auto;
    }

    .form {
      margin-top: 15px;
    }

    .eye {
      width: 2em;
      height: 2em;
      vertical-align: -0.15em;
      fill: currentColor;
      overflow: hidden;
    }
  }

  .scroll-content {
    padding-bottom: 0 !important;
  }
</style>
