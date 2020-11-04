<template>
  <div class="updatePassword">
    <BackTop :headertitle="headertitle"></BackTop>
    <div class="updatePassword_main">
      <div class="upPassword_step">
        <div class="upPassword_step-item upPassword_step_left step_blue">
          <div class="num">
            1
            <div class="long_right"></div>
          </div>
          <div class="text">验证账号</div>
        </div>
        <div
          :class="step<2?'upPassword_step-item upPassword_step_center':'upPassword_step-item upPassword_step_center step_blue'"
        >
          <div class="num">
            <div class="long_left"></div>2
            <div class="long_right"></div>
          </div>
          <div class="text">重置密码</div>
        </div>
        <div
          :class="step!==3?'upPassword_step-item upPassword_step_right':'upPassword_step-item upPassword_step_right step_blue'"
        >
          <div class="num">
            <div class="long_left"></div>3
          </div>
          <div class="text">完成重置</div>
        </div>
      </div>
      <div v-if="step==1">
        <div class="upPassword_hint">
          <div class="upPassword_hint_title">请验证您的账号</div>
          <div class="upPassword_hint_Password" v-if="oldPhone!=='0'">
            <div class="upPassword_label">手机号：</div>
            <div class="upPassword_num">{{oldPhone}}</div>
          </div>
        </div>
        <div class="upPassword_from" >
          <div class="upPassword_from_item" v-if="oldPhone=='0'">
            <van-field v-model="mobileInput" label="手机号码" placeholder="请输入手机号码" />
          </div>
          <div class="upPassword_from_item">
            <van-field v-model="stepTop.noteCode" label="短信验证码" placeholder="输入短信验证码" />
            <div v-if="oldPhone!=='0'"
              v-show="countDown==60"
              class="upPassword_from_right separate"
              @click="getCloudCode"
            >获取验证码</div>
            <div v-if="oldPhone=='0'"
              v-show="countDown==60"
              class="upPassword_from_right separate"
              @click="getfind"
            >获取验证码</div>
            <div v-show="countDown!=60" class="upPassword_from_right separate">
              <span>{{countDown}}</span>s后重发
            </div>
          </div>
          <van-button v-if="oldPhone!=='0'" class="block_but" block @click="nextStep">下一步</van-button>
          <van-button v-if="oldPhone=='0'" class="block_but" block @click="nextStep1">下一步</van-button>
        </div>
      </div>
      <div v-if="step==2">
        <div class="upPassword_hint upPassword_step2">
          <div class="upPassword_hint_title">请填写新的密码</div>
        </div>
        <div class="upPassword_from">
          <div class="upPassword_from_item">
            <van-field
              class="upPassword_step2_field"
              v-model="stepCenter.newPassword"
              label="新密码"
              placeholder="输入新密码，8-16位字符，区分大小写"
            />
          </div>
          <div class="upPassword_from_item">
            <van-field
              class="upPassword_step2_field"
              v-model="stepCenter.verifyPassword"
              label="确认密码"
              placeholder="请再次输入新密码"
            />
          </div>
          <van-button v-if="oldPhone!=='0'" class="block_but" block @click="verifyStep">确认重置</van-button>
          <van-button v-if="oldPhone=='0'" class="block_but" block @click="verifyStep1">确认重置</van-button>
        </div>
      </div>
      <div v-if="step==3">
        <div class="upPassword_hint upPassword_step3">
          <div class="upPassword_step3_img">
            <img src="../../../../assets/images/safety_login/tick_big.png" alt />
          </div>
          <div class="upPassword_hint_title">密码重置成功</div>
        </div>
        <div class="upPassword_from">
          <div class="upPassword_from3_text">
            已完成账号密码重置，
            <span>{{timerLogin}}</span>
            <span>秒</span>后将自动跳转至登录页
          </div>
          <van-button class="block_but" block @click="goLogin">去登录</van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./updatePassword.controller.js">
</script>

<style lang='scss' >
* {
  margin: 0;
  padding: 0;
}
.updatePassword {
  .updatePassword_main {
    .upPassword_step {
      display: flex;
      justify-content: space-between;
      padding: 1.0533rem 0.8533rem;
      .upPassword_step-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        .num {
          font-size: 0.4rem;
          font-family: ArialMT;
          color: rgba(255, 255, 255, 1);
          line-height: 0.4533rem;
          width: 0.64rem;
          height: 0.64rem;
          background: rgba(221, 221, 221, 1);
          border-radius: 50%;
          text-align: center;
          line-height: 0.64rem;
          margin-bottom: 0.2133rem;
          position: relative;
          .long_right {
            position: absolute;
            right: -1.3867rem;
            top: 0;
            bottom: 0;
            margin: auto;
            width: 1.3867rem;
            height: 0.0533rem;
            background: rgba(221, 221, 221, 1);
          }
          .long_left {
            position: absolute;
            left: -1.3867rem;
            top: 0;
            bottom: 0;
            margin: auto;
            width: 1.3867rem;
            height: 0.0533rem;
            background: rgba(221, 221, 221, 1);
          }
        }
        .text {
          font-size: 0.3733rem;
          font-family: PingFangSC-Regular, PingFang SC;
          font-weight: 500;
          color: rgba(0, 0, 0, 0.25);
          line-height: 0.68rem;
        }
      }
      .step_blue {
        .num {
          background: rgba(1, 182, 230, 1);
          .long_right,
          .long_left {
            background: rgba(1, 182, 230, 1);
          }
        }
        .text {
          color: rgba(0, 0, 0, 0.85);
        }
      }
    }
    .upPassword_hint {
      .upPassword_hint_title {
        font-size: 0.5067rem;
        font-weight: 600;
        color: rgba(0, 0, 0, 0.85);
        line-height: 0.7067rem;
        margin-bottom: 0.36rem;
        text-align: center;
      }
      .upPassword_hint_Password {
        font-size: 0.4267rem;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.45);
        line-height: 0.48rem;
        display: flex;
        justify-content: center;
        padding-bottom: 0.64rem;
      }
    }
    .upPassword_step2 {
      .upPassword_hint_title {
        margin-bottom: 0.64rem;
      }
    }
    .upPassword_step3 {
      .upPassword_step3_img {
        width: 1.8667rem;
        height: 1.8667rem;
        margin: 0 auto;
        margin-bottom: 0.5733rem;
        img {
          width: 1.8667rem;
          height: 1.8667rem;
          display: block;
        }
      }
    }
    .upPassword_from {
      .upPassword_from_item {
        margin: 0 0.6667rem;
        display: flex;
        align-items: center;
        border-bottom: 1px solid rgba(221, 221, 221, 1);
        .van-field {
          width: 6.5333rem;
          background: rgba(245, 245, 245, 1);
          padding: 0.4267rem 0;
          .van-field__label {
            font-size: 0.3733rem;
            font-weight: 500;
            color: rgba(0, 0, 0, 0.85);
            line-height: 0.68rem;
            width: 1.9rem;
            margin-right: 0.38rem;
          }
          .van-field__control {
            font-size: 0.3733rem;
            font-weight: 500;
            color: rgba(0, 0, 0, 0.65);
            line-height: 0.68rem;
          }
        }
        .upPassword_from_right {
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
        }
        .upPassword_step2_field {
          width: 100%;
          .van-field__label {
            margin-right: 0;
          }
        }
      }
      .upPassword_from3_text {
        width: 5.8667rem;
        font-size: 0.3733rem;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.25);
        line-height: 0.5067rem;
        margin: 0 auto;
        text-align: center;
        margin-top: 0.2933rem;
        margin-bottom: 3.8533rem;
        span {
          color: rgba(204, 0, 0, 1);
        }
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
  }
}
</style>