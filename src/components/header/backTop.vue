<template>
  <div class="backTop">
    <div class="backTop_left" @click="back">
      <i class="fa fa-angle-left"></i>
    </div>
    <span>{{headertitle}}</span>
  </div>
</template>

<script src="./backTop.controller.js"></script>

<style lang='scss' scoped>
.backTop {
  position: relative;
  text-align: center;
  height: 1.1733rem;
  background: #fff;
  .backTop_left {
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    margin: auto 0;
    height: 1.1733rem;
    i{
        display: block;
        width: 1rem;
        line-height: 1.1733rem;
        font-size: 0.6667rem;
    }
  }
  span {
    display: block;
    height: 1.1733rem;
    font-size: 0.4rem;
    // font-weight: 600;
    color: rgba(0, 0, 0, 1);
    line-height: 1.1733rem;
  }
}
</style>