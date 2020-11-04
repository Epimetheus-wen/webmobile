<template>
  <div class="privacyAccount" style="letter-spacing: 0.0133rem;">
    <BackTop :headertitle="headertitle"></BackTop>
    <div class="privacyAccount_main">
      <div class="privacyAccount_main_title">安全设置</div>
      <div class="privacyAccount_item">
        <div class="lab">账户名称</div>
        <div class="text">{{name}}</div>
      </div>
      <div class="privacyAccount_item">
        <div class="lab">绑定手机号</div>
        <div class="text">{{phone}}</div>
      </div>
      <div class="privacyAccount_item">
        <div class="lab">账号邮箱</div>
        <div class="text">{{email}}</div>
      </div>
    </div>
    <button class="privacyAccount_footer" @click="exit">退出登录</button>
  </div>
</template>

<script src="./privacyAccount.controller.js">
</script>

<style lang='scss' scoped>
.privacyAccount {
  .privacyAccount_main {
    margin-top: 0.2667rem;
    background: #fff;
    .privacyAccount_main_title {
      font-size: 0.4rem;
      font-weight: 600;
      height: 1.7333rem;
      border-bottom: 1px solid #f5f5f5;
      margin-left: 0.4rem;
      line-height: 1.7333rem;
    }
    .privacyAccount_item {
      display: flex;
      height: 1.3333rem;
      line-height: 1.3333rem;
      justify-content: space-between;
      margin-left: 0.4rem;
      border-bottom: 1px solid #f5f5f5;
      .lab {
        font-size: 0.3467rem;
        color: #232324;
      }
      .text {
        font-size: 0.3333rem;
        color: #787878;
        margin-right: 0.6533rem;
      }
    }
  }
  .privacyAccount_footer {
    margin-top: 8.1733rem;
    height: 1.3333rem;
    border: none;
    background: #fff;
    color: #f92f1a;
    line-height: 1.3333rem;
    font-size: 0.3333rem;
    width: 100%;
  }
}
</style>