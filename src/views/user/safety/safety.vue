<template>
  <div class="safety">
    <div v-if="sublevel">
      <BackTop :headertitle="headertitle"></BackTop>
      <div class="safety_main">
        <div class="safety_title">
          <img src="../../../assets/images/safety_login/safety.png" alt />
          <div class="safety_title_txt">安全设置</div>
        </div>
        <router-link to="/safety/updatePhone">
          <div class="safety_main_item" style="border-top:0.0133rem solid rgba(221,221,221,1);">
            <div class="safety_item_label">绑定手机号</div>
            <div class="safety_right">
              <div class="safety_right_text">{{newPhone}}</div>
              <img src="../../../assets/images/cloudService/right.png" alt />
            </div>
          </div>
        </router-link>
        <router-link to="/safety/updatePassword">
          <div class="safety_main_item">
            <div class="safety_item_label">账号密码</div>
            <div class="safety_right">
              <div class="safety_right_text safety_right_password">{{password}}</div>
              <img src="../../../assets/images/cloudService/right.png" alt />
            </div>
          </div>
        </router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script src="./safety.controller.js">
</script>

<style lang='scss' scoped>
.safety {
  .safety_main {
    .safety_title {
      display: flex;
      align-items: center;
      height: 1.5333rem;
      padding: 0 0.6667rem;
      img {
        display: block;
        width: 0.3467rem;
        height: 0.4267rem;
        margin-right: 0.2267rem;
      }
      .safety_title_txt {
        font-size: 0.3733rem;
        font-weight: 600;
        color: rgba(0, 0, 0, 0.85);
        line-height: 0.68rem;
      }
    }
    .safety_main_item {
      background: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.4267rem 0.6667rem;
      border-bottom:0.0133rem solid rgba(221,221,221,1);;
      .safety_item_label {
        font-size: 0.3733rem;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.85);
        line-height: 0.68rem;
      }
      .safety_right {
        display: flex;
        align-items: center;
        .safety_right_text {
          font-size: 0.32rem;
          font-family: ArialMT;
          color: rgba(204, 199, 199, 1);
          line-height: 0.4rem;
          margin-right: 0.16rem;
        }
        img {
          width: 0.1867rem;
          height: 0.3333rem;
          display: block;
        }
        .safety_right_password {
          margin-top: 0.1067rem;
        }
      }
    }
  }
}
</style>