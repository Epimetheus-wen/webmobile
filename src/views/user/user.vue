<template>
  <div class="uesr">
    <!-- 头部 -->
    <!-- <BackTop :headertitle="headertitle"></BackTop> -->
    <!-- 用户信息 -->
    <Userinfo :UserCenterInfo="UserCenterInfo" :LoginFrom="LoginFrom"></Userinfo>
    <!-- 实名认证 -->
    <div v-if="!UserCenterInfo.userType" class="autonym interval">
      <div class="autonym_left">
        <div class="autonym_left_tit">
          <img src="@/assets/images/user/hint.png" alt />
          <div class="autonym_left_title">实名认证</div>
        </div>
        <div class="autonym_left_text">您还未完成实名认证，请尽快提交认证信息</div>
      </div>
      <div class="autonym_right">
        <router-link to="/identification">
          <img src="@/assets/images/user/attestation1.png" alt />
        </router-link>
      </div>
    </div>
    <!-- 数据监控 -->
    <router-link to="/dataModule" tag="div" class="interval">
      <div class="interval_item">
        <img class="interval_item_leftImg" src="@/assets/images/user/dataModule.png" alt />
        <div class="interval_item_right">
          <div class="interval_item_rightTitle">数据监控</div>
          <img class="interval_item_rightImg" src="@/assets/images/user/right-list.png" alt />
        </div>
      </div>
    </router-link>
    <!-- 数据明细 -->
    <div class="interval">
      <div class="interval_item" @click="reminder('income')">
        <img class="interval_item_leftImg" src="@/assets/images/user/income.png" alt />
        <div class="interval_item_right">
          <div class="interval_item_rightTitle">收支明细</div>
          <img class="interval_item_rightImg" src="@/assets/images/user/right-list.png" alt />
        </div>
      </div>
      <div class="interval_item" @click="reminder('monitoring')">
        <img class="interval_item_leftImg" src="@/assets/images/user/consume.png" alt />
        <div class="interval_item_right">
          <div class="interval_item_rightTitle">消费明细</div>
          <img class="interval_item_rightImg" src="@/assets/images/user/right-list.png" alt />
        </div>
      </div>
    </div>
    <!-- 账号信息 -->
    <div class="interval">
      <router-link v-if="UserCenterInfo.userType" to="/information" tag="div">
        <div class="interval_item">
          <img class="interval_item_leftImg" src="@/assets/images/user/Idinfo.png" alt />
          <div class="interval_item_right">
            <div class="interval_item_rightTitle">账号信息</div>
            <img class="interval_item_rightImg" src="@/assets/images/user/right-list.png" alt />
          </div>
        </div>
      </router-link>
      <router-link v-if="!UserCenterInfo.userType" to="/identification" tag="div">
        <div class="interval_item">
          <img class="interval_item_leftImg" src="@/assets/images/user/Idinfo.png" alt />
          <div class="interval_item_right">
            <div class="interval_item_rightTitle">账号信息</div>
            <img class="interval_item_rightImg" src="@/assets/images/user/right-list.png" alt />
          </div>
        </div>
      </router-link>
      <router-link to="/safety" tag="div">
        <div class="interval_item">
          <img class="interval_item_leftImg" src="@/assets/images/user/Idsafety.png" alt />
          <div class="interval_item_right">
            <div class="interval_item_rightTitle">账号安全</div>
            <img class="interval_item_rightImg" src="@/assets/images/user/right-list.png" alt />
          </div>
        </div>
      </router-link>
    </div>
    <!-- 客服 -->
    <div class="interval zhiCustomBtn" @click="zhichiBtn">
      <div class="interval_item">
        <img class="interval_item_leftImg" src="@/assets/images/user/service.png" alt />
        <div class="interval_item_right">
          <div class="interval_item_rightTitle">我的客服</div>
          <img class="interval_item_rightImg" src="@/assets/images/user/right-list.png" alt />
        </div>
      </div>
    </div>

    <!-- 底部按钮 -->
    <div class="uesr_bottom">
      <button class="log_out" @click="logout">退出登录</button>
    </div>
  </div>
</template>

<script src="./user.controller.js"></script>

<style lang='scss' scoped>
.uesr {
  background: rgba(245, 245, 245, 1);
  .interval {
    background: rgba(255, 255, 255, 1);
    padding-left: 0.6667rem;
    margin-top: 0.4267rem;
    .interval_item {
      height: 1.5333rem;
      display: flex;
      align-items: center;
      .interval_item_leftImg {
        width: 0.6rem;
        height: 0.6rem;
        display: block;
        margin-right: 0.32rem;
      }
      .interval_item_right {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 1.5333rem;
        width: 8.4133rem;
        border-bottom: 1px solid rgba(221, 221, 221, 1);
        .interval_item_rightTitle {
          height: 0.68rem;
          font-size: 0.3733rem;
          font-weight: 400;
          color: rgba(0, 0, 0, 1);
          line-height: 0.68rem;
        }
        .interval_item_rightImg {
          width: 0.1867rem;
          height: 0.3333rem;
          display: block;
          padding-right: 0.6667rem;
        }
      }
    }
  }
  //   实名认证
  .autonym {
    background: rgba(255, 255, 255, 1);
    padding: 0.3867rem 0.6667rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .autonym_left {
      .autonym_left_tit {
        display: flex;
        margin-bottom: 0.1867rem;
        .autonym_left_title {
          height: 0.3733rem;
          font-size: 0.32rem;
          font-weight: 600;
          color: rgba(0, 0, 0, 0.86);
          line-height: 0.3733rem;
        }
        img {
          width: 0.3733rem;
          height: 0.3467rem;
          display: block;
          margin-right: 0.16rem;
        }
      }
      .autonym_left_text {
        font-size: 0.2933rem;
        font-weight: 400;
        color: rgba(0, 0, 0, 0.65);
        line-height: 0.4rem;
      }
    }
    .autonym_right {
      img {
        display: block;
        width: 2.08rem;
        height: 0.64rem;
      }
    }
  }
  //   底部按钮
  .uesr_bottom {
    margin-top: 1.3333rem;
    margin-bottom: 0.9333rem;
    .log_out {
      width: 4.0533rem;
      height: 1.0667rem;
      border-radius: 0.08rem;
      border: 1px solid rgba(221, 221, 221, 1);
      background: rgba(245, 245, 245, 1);
      display: block;
      margin: 0 auto;
      font-size: 0.3467rem;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.85);
      line-height: 0.3467rem;
    }
  }
}
</style>