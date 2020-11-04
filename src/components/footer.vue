<template>
  <div class="footer">
    <img class="footer_logo" src="../assets/images/home/logo_fff.png" alt />
    <div class="footer_text">
      桂ICP备16005301号-7<br>桂公安网备 45010802000099号
    </div>
  </div>
</template>

<script>
</script>

<style lang='scss' scoped>
.footer {
  height: 4.6667rem;
  background: rgba(51, 51, 51, 1);
  display: flex;
  flex-direction: column;
  align-items: center;
  .footer_logo {
    display: block;
    width: 5.3333rem;
    height: 1.1333rem;
    margin-top: 1rem;
  }
  .footer_text {
      margin-top: 0.9333rem;
      text-align: center;
      height:0.88rem;
      font-size: 0.32rem;
      font-weight: 400;
      color: rgba(255, 255, 255, 0.25);
      line-height: 0.44rem;
  }
}
</style>