<template>
  <div class="passwordLogin">
    <div class="login_title">中国东信云通信服务平台</div>
    <div class="passwordLogin_from">
      <div class="passwordLogin_from_item">
        <img class="icon_left" src="../../assets/images/safety_login/phone.png" alt />
        <van-field v-model="loginFrom.mobile" placeholder="手机号码" />
      </div>
      <div class="passwordLogin_from_item">
        <img class="icon_left" src="../../assets/images/safety_login/password.png" alt />
        <van-field v-show="eyes" v-model="loginFrom.password" type="password" placeholder="登录密码" />
        <van-field v-show="!eyes" v-model="loginFrom.password" placeholder="登录密码" />
        <div class="eyes" @click="eyesPassword">
          <img
            v-show="eyes"
            class="eyes_img"
            src="../../assets/images/safety_login/close_eyes.png"
            alt
          />
          <img
            v-show="!eyes"
            class="eyes_img"
            src="../../assets/images/safety_login/open_eyes.png"
            alt
          />
        </div>
        <router-link to="/safety/updatePassword" tag="div" class="passwordLogin_from_right separate">找回密码</router-link>
      </div>
      <van-button class="block_but" block @click="login">登录</van-button>
      <div class="passwordLogin_cut">
        <router-link to="/register" replace><div class="passwordLogin_cut_txt">注册新用户</div></router-link>
        <router-link to="/login/cloudLogin" replace><div class="passwordLogin_cut_txt">手机验证码登录</div></router-link>
      </div>
    </div>
    <!-- <div class="WeChatLogin">
      <div class="WeChatLogin_title" style="height: 0.5333rem"></div>
      <div class="WeChatLogin_title" style="height: 0.5333rem">其他登录方式</div>
      <div class="manner" style="height: 1.2rem;">
        <img class="WeChat_img" src="../../assets/images/safety_login/WeChat.png" alt />
      </div>
    </div> -->
     <div style="height: 2rem;"></div>
    <div class="Login_footer">
      登录即代表您同意我们的
      <router-link to="/agreement"><span>《东信在线用户协议》</span></router-link>
    </div>
  </div>
</template>

<script src="./passwordLogin.controller.js">
</script>

<style lang='scss'>
.passwordLogin {
  .login_title {
    font-size: 0.5333rem;
    font-weight: 600;
    color: rgba(0, 0, 0, 0.85);
    line-height: 0.7467rem;
    margin: 1.48rem auto 0.64rem auto;
    text-align: center;
  }
  .passwordLogin_from {
    .passwordLogin_from_item {
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
      .eyes {
        height: 100%;
        .eyes_img {
          width: 0.4rem;
          height: 0.25rem;
          display: block;
          margin: 0.4267rem 0;
          margin-right: 0.32rem;
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
      .passwordLogin_from_right {
        width: 2.1333rem;
        font-size: 0.3733rem;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.45);
        line-height: 1.0667rem;
        text-align: center;
      }
      .separate {
        border-left: 1px solid rgba(221, 221, 221, 1);
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
      margin-top: 1.0667rem;
      color: #fff;
    }
    .passwordLogin_cut {
      display: flex;
      justify-content: space-between;
      padding: 0.4667rem 1rem;
      .passwordLogin_cut_txt {
        font-size: 0.3733rem;
        font-weight: 500;
        color: rgba(204, 0, 0, 1);
        line-height: 0.48rem;
      }
    }
  }
  .WeChatLogin {
    margin-top: 2.1867rem;
    text-align: center;
    .WeChatLogin_title {
      font-size: 0.3733rem;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.45);
      line-height: 0.5333rem;
    }
    .manner {
      margin-top: 0.3333rem;
      .WeChat_img {
        width: 1.2rem;
        height: 1.2rem;
        display: block;
        margin: 0 auto;
      }
    }
  }
  .Login_footer {
    font-size: 0.32rem;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.25);
    line-height: 0.44rem;
    margin-top: 1.3333rem;
    padding-bottom: 0.9333rem;
    text-align: center;
    // position:absolute;
    // bottom: 0;
    // width: 100%;
    span{
        color: rgba(16, 142, 233, 1);
    }
  }
}
</style>