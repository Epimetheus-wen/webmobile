<template>
  <div class="updatePhone">
    <BackTop :headertitle="headertitle"></BackTop>
    <div class="updatePhone_main">
      <div class="upPhone_step">
        <div class="upPhone_step-item upPhone_step_left step_blue">
          <div class="num">
            1
            <div class="long_right"></div>
          </div>
          <div class="text">验证账号</div>
        </div>
        <div
          :class="step<2?'upPhone_step-item upPhone_step_center':'upPhone_step-item upPhone_step_center step_blue'"
        >
          <div class="num">
            <div class="long_left"></div>2
            <div class="long_right"></div>
          </div>
          <div class="text">更换号码</div>
        </div>
        <div
          :class="step!==3?'upPhone_step-item upPhone_step_right':'upPhone_step-item upPhone_step_right step_blue'"
        >
          <div class="num">
            <div class="long_left"></div>3
          </div>
          <div class="text">完成重置</div>
        </div>
      </div>
      <div v-if="step==1">
        <div class="upPhone_hint" >
          <div class="upPhone_hint_title">请验证您的账号</div>
          <div class="upPhone_hint_Phone">
            <div class="upPhone_label">原手机号：</div>
            <div class="upPhone_num">{{oldPhone}}</div>
          </div>
        </div>
        <div class="upPhone_from">
          <div class="upPhone_from_item">
            <van-field v-model="stepTop.imgCode" label="图片验证码" placeholder="输入验证码" />
            <div class="upPhone_from_right" @click="refreshCode">
              <SIdentify :identifyCode="identifyCode"></SIdentify>
            </div>
          </div>
          <div class="upPhone_from_item">
            <van-field v-model="stepTop.noteCode" label="短信验证码" placeholder="输入短信验证码" />
            <div
              v-show="countDown1==60"
              class="upPhone_from_right separate"
              @click="getupCloudCode"
            >获取验证码</div>
            <div v-show="countDown1!=60" class="upPhone_from_right separate">
              <span>{{countDown1}}</span>s后重发
            </div>
          </div>
          <van-button class="block_but" block @click="nextStep">下一步</van-button>
        </div>
      </div>
      <div v-if="step==2">
        <div class="upPhone_hint upPhone_step2">
          <div class="upPhone_hint_title">更换号码</div>
        </div>
        <div class="upPhone_from">
          <div class="upPhone_from_item">
            <van-field
              class="upPhone_step2_field"
              v-model="stepcenter.newPhone"
              label="注册手机号"
              placeholder="输入新的注册手机号"
            />
          </div>
          <div class="upPhone_from_item">
            <van-field v-model="stepcenter.noteCode" label="短信验证码" placeholder="输入短信验证码" />
            <div
              v-show="countDown2==60"
              class="upPhone_from_right separate"
              @click="getnewCloudCode"
            >获取验证码</div>
            <div v-show="countDown2!=60" class="upPhone_from_right separate">
              <span>{{countDown2}}</span>s后重发
            </div>
          </div>
          <div class="upPhone_from_item">
            <van-field
              class="upPhone_step2_field"
              v-model="stepcenter.newPassword"
              label="新密码"
              placeholder="输入新密码，8-16位字符，区分大小写"
            />
          </div>
          <div class="upPhone_from_item">
            <van-field
              class="upPhone_step2_field"
              v-model="stepcenter.verifyPassword"
              label="确认密码"
              placeholder="请再次输入新密码"
            />
          </div>
          <van-button class="block_but" block @click="verifyStep">确认更改</van-button>
        </div>
      </div>
      <div v-if="step==3">
        <div class="upPhone_hint upPhone_step3">
          <div class="upPhone_step3_img">
            <img src="../../../../assets/images/safety_login/tick_big.png" alt />
          </div>
          <div class="upPhone_hint_title">手机号重置成功</div>
        </div>
        <div class="upPhone_from">
          <div class="upPhone_from3_text">
            已完成手机号码重置，
            <span>{{timerLogin}}</span>
            <span>秒</span>后将自动跳转至登录页
          </div>
          <van-button class="block_but" block @click="goLogin">去登录</van-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./updatePhone.controller.js">
</script>

<style lang='scss' >
* {
  margin: 0;
  padding: 0;
}
.updatePhone {
  .updatePhone_main {
    .upPhone_step {
      display: flex;
      justify-content: space-between;
      padding: 1.0533rem 0.8533rem;
      .upPhone_step-item {
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
    .upPhone_hint {
      .upPhone_hint_title {
        font-size: 0.5067rem;
        font-weight: 600;
        color: rgba(0, 0, 0, 0.85);
        line-height: 0.7067rem;
        margin-bottom: 0.36rem;
        text-align: center;
      }
      .upPhone_hint_Phone {
        font-size: 0.4267rem;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.45);
        line-height: 0.48rem;
        display: flex;
        justify-content: center;
        padding-bottom: 0.64rem;
      }
    }
    .upPhone_step2 {
      .upPhone_hint_title {
        margin-bottom: 0.64rem;
      }
    }
    .upPhone_step3 {
      .upPhone_step3_img {
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
    .upPhone_from {
      .upPhone_from_item {
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
        .upPhone_from_right {
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
        .upPhone_step2_field {
          width: 100%;
        }
      }
      .upPhone_from3_text {
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