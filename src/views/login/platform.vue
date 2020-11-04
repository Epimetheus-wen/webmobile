<template>
  <div class="platform">
    <BackTop :headertitle="headertitle"></BackTop>
    <div class="platform_main">
      <div class="platform_title">请选择您要登录的平台</div>

      <button class="yuntongxin" @click="toPlatform('cloud')">中国东信云通信服务平台</button>
      <button class="yinsihao" @click="toPlatform('privacy')">隐私号产品平台</button>
    </div>
  </div>
</template>

<script src="./platform.controller.js">
</script>

<style lang='scss' scoped>
.platform_main {
  height: calc(100vh - 1.1733rem);
  background: url("../../assets/images/dataModule/bg.png");
  background-size: cover;
  .platform_title {
    padding-top: 2.4rem;
    font-size: 0.4rem;
    font-weight: 600;
    text-align: center;
  }
  .yuntongxin {
    font-size: 0.4rem;
    text-align: center;
    width: 7.4667rem;
    height: 1.8667rem;
    border: none;
    margin: 0 auto;
    display: block;
    margin-top: 0.6667rem;
    box-shadow: #ebebeb 0px 0px 0.0933rem 0.0133rem ;
    background: #fff;
  }
  .yinsihao {
    font-size: 0.4rem;
    text-align: center;
    width: 7.4667rem;
    height: 1.8667rem;
    border: none;
    margin: 0 auto;
    display: block;
    margin-top: 0.4rem;
    box-shadow: #ebebeb 0px 0px 0.0933rem 0.0133rem ;
    background: #fff;
  }
}
</style>