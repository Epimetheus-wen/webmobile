<template>
  <div class="register">
    <BackTop :headertitle="headertitle"></BackTop>
    <div class="register">
      <div class="login_title">中国东信云通信服务平台</div>
      <div class="register_from">
        <div class="register_from_item">
          <img style="height: 0.4rem;"
            class="icon_left icon_left_cloud"
            src="../../assets/images/safety_login/phone.png"
            alt
          />
          <van-field
            v-model="registerFrom.mobile"
            :readonly="inputRead"
            autocomplete="off"
            placeholder="手机号码"
          />
        </div>
        <div class="register_from_item">
          <img
            class="icon_left icon_left_cloud"
            src="../../assets/images/safety_login/cloud.png"
            alt
          />
          <van-field
            v-model="registerFrom.cloudCode"
            :readonly="inputRead"
            autocomplete="off"
            placeholder="短信验证码"
          />
          <div
            v-show="countDown==60"
            class="register_from_right separate"
            @click="getCloudCode"
          >获取验证码</div>
          <div v-show="countDown!=60" class="register_from_right separate">
            <span>{{countDown}}</span>s后重发
          </div>
        </div>
        <div class="register_from_item">
          <img class="icon_left" src="../../assets/images/safety_login/password.png" alt />
          <van-field
            v-show="eyes.neweyes"
            v-model="registerFrom.password1"
            autocomplete="off"
            :readonly="inputRead"
            type="password"
            placeholder="设置8-16位密码，区分大小写"
          />
          <van-field
            v-show="!eyes.neweyes"
            v-model="registerFrom.password1"
            autocomplete="off"
            placeholder="设置8-16位密码，区分大小写"
          />
          <div class="eyes" @click="eyesPassword">
            <img
              v-show="eyes.neweyes"
              class="eyes_img"
              src="../../assets/images/safety_login/close_eyes.png"
              alt
            />
            <img
              v-show="!eyes.neweyes"
              class="eyes_img"
              src="../../assets/images/safety_login/open_eyes.png"
              alt
            />
          </div>
        </div>
        <div class="register_from_item">
          <img class="icon_left" src="../../assets/images/safety_login/password.png" alt />
          <van-field
            v-show="eyes.affirm"
            v-model="registerFrom.password2"
            autocomplete="off"
            type="password"
            placeholder="请再次输入密码"
          />
          <van-field
            v-show="!eyes.affirm"
            v-model="registerFrom.password2"
            autocomplete="off"
            placeholder="请再次输入密码"
          />
          <div class="eyes" @click="eyesAffirmPassword">
            <img
              v-show="eyes.affirm"
              class="eyes_img"
              src="../../assets/images/safety_login/close_eyes.png"
              alt
            />
            <img
              v-show="!eyes.affirm"
              class="eyes_img"
              src="../../assets/images/safety_login/open_eyes.png"
              alt
            />
          </div>
        </div>
        <div class="register_agreement">
          <div class="register_agm_img" @click="agreementBtn">
            <img v-show="agreement" src="../../assets/images/safety_login/agreement_true.png" alt />
            <img v-show="!agreement" src="../../assets/images/safety_login/agreement_false.png" alt />
          </div>
          <div class="register_text">
            注册即接受
            <router-link to="/agreement">
              <span>《东信在线用户协议》</span>
            </router-link>
          </div>
        </div>
        <van-button class="block_but" block @click="register">立即注册</van-button>
        <div class="register_cut">
          <router-link to="/login/cloudLogin">
            <div class="register_cut_txt">已有账号？前往登录</div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./register.controller.js">
</script>

<style lang='scss'>
.register {
  .login_title {
    font-size: 0.5333rem;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.85);
    line-height: 0.7467rem;
    margin: 1.48rem auto 0.64rem auto;
    text-align: center;
  }
  .register_from {
    .register_from_item {
      margin: 0 0.6667rem;
      display: flex;
      align-items: center;
      border-bottom: 1px solid rgba(221, 221, 221, 1);
      .icon_left {
        width: 0.4rem;
        height: 0.4rem;
        display: block;
        margin-right: 0.3867rem;
      }
      .icon_left_cloud {
        height: 0.3067rem;
      }
      .eyes {
        height: 100%;
        .eyes_img {
          width: 0.4rem;
          height: 0.25rem;
          display: block;
          margin: 0.4267rem 0;
          margin-left: 0.7rem;
        }
      }
      .van-field {
        width: 6.5333rem;
        background: rgba(245, 245, 245, 1);
        padding: 0.4267rem 0;
        .van-field__label {
          font-size: 0.3733rem;
          font-weight: 500;
          color: rgba(0, 0, 0, 0.85);
          line-height: 0.68rem;
          width: 1.8667rem;
          margin-right: 0.4267rem;
        }
        .van-field__control {
          font-size: 0.3733rem;
          font-weight: 500;
          color: rgba(0, 0, 0, 0.65);
          line-height: 0.68rem;
        }
      }
      .register_from_right {
        width: 2.1333rem;
        font-size: 0.3733rem;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.45);
        line-height: 1.0667rem;
        text-align: center;
        span {
          font-size: 0.32rem;
        }
      }
      .separate {
        border-left: 1px solid rgba(221, 221, 221, 1);
        padding-left: 0.1333rem;
      }
    }
    .block_but {
      margin: 0 auto;
      width: 8rem;
      height: 1.1467rem;
      font-size: 0.4267rem;
      box-shadow: 0px 0.0267rem 0.08rem 0px rgba(213, 213, 213, 1);
      border-radius: 0.08rem;
      background: rgba(204, 0, 0, 1);
      border: 1px solid rgba(204, 0, 0, 1);
      margin-top: 0.36rem;
      color: #fff;
    }
    .register_cut {
      display: flex;
      justify-content: flex-end;
      padding: 0.4667rem 1rem;
      .register_cut_txt {
        font-size: 0.3733rem;
        font-weight: 500;
        color: rgba(204, 0, 0, 1);
        line-height: 0.48rem;
      }
    }
  }
  .register_agreement {
    display: flex;
    align-items: center;
    padding: 0 1rem;
    padding-top: 0.8533rem;
    .register_agm_img {
      margin-right: 0.1733rem;
      img {
        width: 0.5333rem;
        height: 0.5333rem;
        display: block;
      }
    }
    .register_text {
      font-size: 0.32rem;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.85);
      line-height: 0.44rem;
      display: flex;
      span {
        display: block;
        color: rgba(16, 142, 233, 1);
      }
    }
  }
  .Login_footer {
    font-size: 0.32rem;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.25);
    line-height: 0.44rem;
    margin-top: 1.3333rem;
    padding-bottom: 0.6267rem;
    text-align: center;
    span {
      color: rgba(16, 142, 233, 1);
    }
  }
}
</style>