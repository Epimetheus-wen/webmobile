<template>
  <div class="solution">
    <div class="solution_top">解决方案</div>
    <hr class="hr_strip" />
    <div class="solution_center">
      <div class="swiper-container" id="swiper-container2">
        <div class="swiper-wrapper">
          <div v-for="(el,index) in arrItem" :key="index" class="swiper-slide">
            <img class="img" :src="el.imgUrl" />
            <div class="swiper_item">
              <p class="swiper_item_title" v-text="el.title">注册享免费体验</p>
              <p class="swiper_item_text" v-text="el.text">新用户立即注册可享短信免费体验！</p>
              <a class="swiper_item_botton zhiCustomBtn" href="javascript:;">
                <span @click="zhichiBtn">免费咨询</span>
              </a>
            </div>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</template>

<script src="./solution.controller.js">
</script>

<style lang='scss' >
.solution {
  margin-top: 0.4267rem;
  background: #fff;
  //   padding: 0 0.3467rem;
  .solution_top {
    margin: 0 0.4rem;
    height: 1.2533rem;
    line-height: 1.2533rem;
    text-align: center;
    font-size: 0.3733rem;
    color: rgba(0, 0, 0, 1);
  }
  .solution_center {
    #swiper-container2 {
      .swiper-slide {
        //   width: 6.6667rem !important;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        .img {
          display: block;
          width: 8rem;
          height: 5.7333rem;
          padding: 0.4rem 0;
        }
        .swiper_item {
          width: 8rem;
          height: 5.7333rem;
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          margin: auto;
          .swiper_item_title {
            font-size: 0.4533rem;
            font-weight: 600;
            padding-left: 0.6rem;
            text-align: center;
            margin-top: 0.7067rem;
            color: #fff;
          }
          .swiper_item_text {
            font-size: 0.32rem;
            font-weight: 400;
            color: rgba(255, 255, 255, 1);
            line-height: 0.44rem;
            height: 1.76rem;
            margin: 0 0.8533rem;
            margin-top: 0.4533rem;
            text-align: center;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 4;
            overflow: hidden;
            opacity: 0.8;
          }
          .swiper_item_botton {
            display: block;
            text-decoration: none;
            width: 2.08rem;
            height: 0.8rem;
            background: rgba(204, 0, 0, 1);
            border-radius: 0.08rem;
            line-height: 0.8rem;
            margin: 0 auto;
            margin-top: 0.5733rem;
            span {
              display:block;
              font-size: 0.3467rem;
              font-weight: 400;
              height: 0.8rem;
              color: rgba(255, 255, 255, 1);
              line-height: 0.8rem;
              text-align: center;
            }
          }
        }
      }
    }
  }
}
</style>