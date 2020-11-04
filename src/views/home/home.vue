<template>
  <div>
    <!-- 顶部搜索框组件 -->
    <Header></Header>
    <main class="main">
      <!-- 轮播图 -->
      <div class="swiper-container" id="swiper-container1">
        <div class="swiper-wrapper">
          <div v-for="(el,index) in arrItem1" :key="index" class="swiper-slide">
            <img class="img" :src="el.imgUrl" />
            <div class="swiper_item" :class="el.to=='/product/voice'?'swiper_item voice':'swiper_item'">
              <p class="swiper_item_title" v-text="el.title">注册享免费体验</p>
              <p class="swiper_item_text" v-text="el.text">新用户立即注册可享短信免费体验！</p>
              <router-link :to="el.to" class="swiper_item_botton">
                <img tag="img" :src="el.botton_img" />
              </router-link>
            </div>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
      <!-- 产品 -->
      <HeaderProduct></HeaderProduct>
      <!-- 公告栏 -->
      <div class="textBox" v-if="TrumpetList.length>0">
        <div class="trumpet">
          <img src="@/assets/images/home/trumpet.png" alt />
        </div>
        <!-- v-for="value in TrumpetList[text.id]" :key="value" -->
        <transition name="slide">
          <p class="text" v-if="TrumpetList.length>0" :key="text.id">
            <span @click="goTrumpet(TrumpetList[text.id])">{{TrumpetList[text.id].title}}</span>
          </p>
        </transition>
        <div class="particulars">
          <img src="@/assets/images/home/particulars.png" alt />
        </div>
      </div>
      <!-- 热门产品 -->
      <div class="popular">
        <div class="popular_top">
          <span>热门产品</span>
          <a href="#" v-if="false">更多</a>
        </div>
        <hr class="hr_strip" />
        <div class="popular_center">
          <router-link tag="div" to="/product/privacy" class="popular_center_item">
            <img class="cart_img" src="@/assets/images/home/privacy_cart.png" alt />
            <div class="popular_center_text">
              <span>隐私号</span>
              <p>隐藏双方通话号码，防止个人信息泄漏</p>
            </div>
          </router-link>
          <router-link tag="div" to="/product/voice" class="popular_center_item">
            <img class="cart_img" src="@/assets/images/home/voice_cart.png" alt />
            <div class="popular_center_text">
              <span>语音通知+挂机短信</span>
              <p>最大效率触达客户，确保用户知晓信息</p>
            </div>
          </router-link>
          <router-link tag="div" to="/product/message" class="popular_center_item">
            <img class="cart_img" src="@/assets/images/home/note_cart.png" alt />
            <div class="popular_center_text">
              <span>短信服务</span>
              <p>发送场景多，高到达率，支持API，稳定安全</p>
            </div>
          </router-link>
          <router-link tag="div" to="/product/numbercheck" class="popular_center_item">
            <img class="cart_img" src="@/assets/images/home/phone_cart.png" alt />
            <div class="popular_center_text">
              <span>号码检测</span>
              <p>基于权威数据筛选、验证、过滤、准确高效</p>
            </div>
          </router-link>
        </div>
      </div>
      <!-- 解决方案 -->
      <Solution></Solution>
      <!-- 服务中心 -->
      <div class="service">
        <div class="service_top">服务中心</div>
        <hr class="hr_strip" />
        <div class="service_center">
          <div class="service_center_item zhiCustomBtn">
            <img class="service_img" src="@/assets/images/home/consult.png" @click="zhichiBtn" alt />
            <div class="service_item_title">
              <a href="javascript:;" style="color:rgba(0,0,0,1)" @click="zhichiBtn">在线咨询</a>
            </div>
            <div class="service_item_text" @click="zhichiBtn">免费咨询产品详请</div>
          </div>
          <div class="service_center_item">
            <a style="display: flex;flex-direction: column;align-items: center;color:rgba(0,0,0,1)" href="tel:400 005 7696">
            <img class="service_img" src="@/assets/images/home/hot_line.png" alt />
            <div class="service_item_title">
              <a style="color:rgba(0,0,0,1)">热线服务</a>
            </div>
            <div class="service_item_text">1V1专家解答服务</div></a>
          </div>
        </div>
      </div>
      <!-- 品牌荣誉 -->
      <div class="brand">
        <div class="brand_top">品牌荣誉</div>
        <hr class="hr_strip" />
        <div class="brand_center">
          <div class="brand_center_text">资深产品、技术专家护航，多项专利、资质认证，产品完备，质量保障</div>
          <div class="brand_center_list">
            <div class="brand_list_item">
              <div class="list_item_title">
                <span class="list_item_num">8000+</span>
                <span class="list_item_unit">万</span>
              </div>
              <div class="list_item_txt">短信日发送总量</div>
            </div>
            <div class="brand_list_item">
              <div class="list_item_title">
                <span class="list_item_num">3000+</span>
                <span class="list_item_unit">万</span>
              </div>
              <div class="list_item_txt">隐私号日外呼总量</div>
            </div>
            <div class="brand_list_item">
              <div class="list_item_title">
                <span class="list_item_num">100+</span>
                <span class="list_item_unit">家</span>
              </div>
              <div class="list_item_txt">行业领军合作伙伴</div>
            </div>
            <div class="brand_list_item">
              <div class="list_item_title">
                <span class="list_item_num">20+</span>
                <span class="list_item_unit">项</span>
              </div>
              <div class="list_item_txt">专利及权威认证</div>
            </div>
          </div>
        </div>
      </div>
      <!-- 优秀服务案例 -->
      <!-- <div class="case">
        <div class="case_top">优秀服务案例</div>
        <hr class="hr_strip" />
        <div class="case_center">
          <div class="case_center_text">高标准、严追求，对极致用户体验的探索让我们不断共赢</div>
          <div class="swiper-container" id="swiper-container3">
            <div class="swiper-wrapper">
              <div v-for="(el,index) in arrItem3" :key="index" class="swiper-slide">
                <div class="slide-item">
                  <div class="title">{{el.title}}</div>
                  <img class="img" :src="el.imgUrl" alt />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> -->
      <!-- 合作伙伴 -->
      <div class="case">
        <div class="case_top">合作伙伴</div>
        <!-- <hr class="hr_strip" /> -->
        <div class="center" style="margin-bottom:0.4267rem;padding-bottom:0.4667rem">
            <div class="case_center_img" style="width:100%;height:100%;">
                <img style="width:100%;height:100%;" src="../../assets/images/home/pct.png" alt="">
            </div>
        </div>
      </div>
      <!-- 底部信息区 -->
      <Footer></Footer>
    </main>
  </div>
</template>
<script src="./home.controller.js"></script>

<style lang="scss">
.main {
  padding-top: 1.1733rem;
  background: rgba(245, 245, 245, 1);
  //   轮播图
  #swiper-container1 {
    .swiper-pagination {
      z-index: 8;
      bottom: 0.1rem;
    }
    .swiper-pagination-bullet {
      background-color: rgba(255, 255, 255, 1);
      width: 0.9333rem;
      height: 0.08rem;
      border-radius: 0;
      opacity: 0.5;
      margin: 0 0.0667rem;
    }
    .swiper-pagination-bullet-active {
    //   background: rgba(204, 0, 0, 1);
    }
    .swiper-pagination-bullet-active::before{ 
        content: "";
        height: 0.08rem;
        display: block;
        animation: myfirst 7s;
        -moz-animation: myfirst 7s;	
        -webkit-animation: myfirst 7s;	
        -o-animation: myfirst 7s;
        background: rgba(204, 0, 0, 1);
    }
    @keyframes myfirst
    {
    from {width: 0;}
    to {width: 0.9333rem;}
    }
    @-moz-keyframes myfirst 
    {
    from {width: 0;}
    to {width: 0.9333rem;}
    }

    @-webkit-keyframes myfirst 
    {
    from {width: 0;}
    to {width: 0.9333rem;}
    }

    @-o-keyframes myfirst 
    {
    from {width: 0;}
    to {width: 0.9333rem;}
    }
    .swiper-wrapper {
      .swiper-slide {
        position: relative;
        .img {
          width: 10rem;
          height: 6rem;
          display: block;
        }
       
        .swiper_item {
          position: absolute;
          top: 0;
          bottom: 0;
          left: 0;
          right: 0;
          margin: 1.16rem 0 0 0.6933rem;
          .swiper_item_title {
            font-size: 0.5067rem;
            font-weight: 600;
            color: rgba(255, 255, 255, 1);
            line-height: 0.7067rem;
            // width: 3.55rem;
            height: 0.7067rem;
            text-shadow: 0px 2px 6px rgba(255, 112, 17, 0.88);
            margin-bottom: 0.24rem;
          }
          .swiper_item_text {
            font-size: 0.3733rem;
            // width: 6rem;
            height: 0.5333rem;
            font-weight: 500;
            color: rgba(255, 255, 255, 1);
            line-height: 0.5333rem;
            text-shadow: 0px 2px 6px rgba(255, 112, 17, 0.88);
            margin-bottom: 0.6267rem;
          }
          .swiper_item_botton img {
            display: block;
            width: 2.5333rem;
            height: 0.9333rem;
          }
        }
         .voice {
          .swiper_item_title {
            color: rgba(0, 0, 0, 0.85);
            text-shadow: none;
          }
          .swiper_item_text{
              color: rgba(121,121,121,1);
            text-shadow: none;
          }
        }
      }
    }
  }

  //   公告栏
  .textBox {
    position: relative;
    overflow: hidden;
    height: 1.0667rem;
    background: #fff;
    .trumpet {
      width: 0.4rem;
      height: 0.3467rem;
      position: absolute;
      left: 0.7733rem;
      bottom: 0;
      top: 0;
      margin: auto 0;
      img {
        display: block;
        width: 0.4rem;
        height: 0.3467rem;
      }
    }
    .particulars {
      width: 1.3333rem;
      height: 0.6933rem;
      position: absolute;
      bottom: 0;
      top: 0;
      right: 0.7733rem;
      margin: auto 0;
      img {
        display: block;
        width: 1.3333rem;
        height: 0.6933rem;
      }
    }
    .text {
      position: absolute;
      bottom: 0;
      top: 0;
      right: 0;
      left: 0;
      margin: auto 0;
      padding-left: 1.4667rem;
      font-size: 0.32rem;
      line-height: 1.0667rem;
      z-index: 9;
      span {
        display: block;
        //   width: 100%;
        height: 100%;
        padding-right: 2rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
    }
    .slide-enter-active,
    .slide-leave-active {
      transition: all 0.5s linear;
    }
    .slide-enter {
      transform: translateY(40px);
      opacity: 1;
    }
    .slide-leave-to {
      transform: translateY(-40px);
      opacity: 0;
    }
  }

  // 热门产品
  .popular {
    margin-top: 0.4267rem;
    background: #fff;
    .popular_top {
      margin: 0 0.7467rem;
      height: 1.2533rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        height: 0.68rem;
        font-size: 0.3733rem;
        color: rgba(0, 0, 0, 1);
        line-height: 0.68rem;
      }
      a {
        height: 0.4rem;
        font-size: 0.32rem;
        color: rgba(0, 0, 0, 1);
        line-height: 0.4rem;
        text-decoration: none;
        opacity: 0.65;
      }
    }
    .popular_center {
      display: flex;
      justify-content: space-between;
      padding: 0.3467rem;
      margin: 0 0.3467rem;
      flex-wrap: wrap;
      .popular_center_item:nth-child(1){
          margin-bottom:0.4rem;
      }
      .popular_center_item:nth-child(2){
          margin-bottom:0.4rem;
      }
      .popular_center_item {
        position: relative;
        .cart_img {
          width: 4.0533rem;
          height: 2.2667rem;
          display: block;
        }
        .popular_center_text {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          color: rgba(255, 255, 255, 1);
          span {
            display: block;
            height: 0.64rem;
            font-size: 0.32rem;
            font-weight: 600;
            margin-top: 0.2267rem;
            line-height: 0.64rem;
            padding-left: 0.9467rem;
            width: 3.0933rem;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          p {
            font-size: 0.3067rem;
            padding: 0 0.25rem;
            margin-top: 0.1733rem;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2;
            overflow: hidden;
          }
        }
      }
    }
  }

  // 服务中心
  .service {
    margin-top: 0.4267rem;
    background: #fff;
    .service_top {
      margin: 0 0.4rem;
      height: 1.2533rem;
      line-height: 1.2533rem;
      text-align: center;
      font-size: 0.3733rem;
      color: rgba(0, 0, 0, 1);
    }
    .service_center {
      height: 2.8267rem;
      margin: 0 0.7467rem;
      display: flex;
      justify-content: space-around;
      .service_center_item {
        display: flex;
        width: 50%;
        flex-direction: column;
        align-items: center;
        margin: 0.4rem 0;
        .service_img {
          display: block;
          width: 0.8533rem;
          height: 0.8533rem;
          margin-bottom: 0.2533rem;
        }
        .service_item_title {
          font-weight: 400;
          color: rgba(0, 0, 0, 1);
          line-height: 0.3733rem;
          height: 0.3733rem;
          font-size: 0.32rem;
          margin-bottom: 0.1067rem;
          a {
            color: rgba(0, 0, 0, 1);
          }
        }
        .service_item_text {
          font-weight: 400;
          color: rgba(121, 121, 121, 1);
          line-height: 0.44rem;
          height: 0.44rem;
          font-size: 0.32rem;
        }
      }
    }
  }

  //   品牌荣誉
  .brand {
    margin-top: 0.4267rem;
    background: #fff;
    .brand_top {
      margin: 0 0.4rem;
      height: 1.2533rem;
      line-height: 1.2533rem;
      text-align: center;
      font-size: 0.3733rem;
      color: rgba(0, 0, 0, 1);
    }
    .brand_center {
      padding-bottom: 0.6667rem;
      .brand_center_text {
        margin: 0 1.8533rem;
        margin-top: 0.4rem;
        height: 0.88rem;
        font-size: 0.32rem;
        font-weight: 400;
        color: #797979;
        line-height: 0.44rem;
        text-align: center;
      }
      .brand_center_list {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
        padding: 0 0.3467rem;
        .brand_list_item {
          width: 50%;
          text-align: center;
          .list_item_title {
            font-weight: 600;
            .list_item_num {
              font-size: 0.48rem;
              line-height: 0.3733rem;
              color: rgba(204, 0, 0, 1);
            }
            .list_item_unit {
              font-size: 0.32rem;
              line-height: 0.3733rem;
              color: rgba(58, 58, 58, 1);
            }
          }
          .list_item_txt {
            font-weight: 400;
            color: rgba(121, 121, 121, 1);
            line-height: 0.4267rem;
            height: 0.4267rem;
            font-size: 0.32rem;
          }
        }
      }
    }
  }
  .case {
    margin-top: 0.4267rem;
    background: #fff;
    .case_top {
      margin: 0 0.4rem;
      height: 1.2533rem;
      line-height: 1.2533rem;
      text-align: center;
      font-size: 0.3733rem;
      color: rgba(0, 0, 0, 1);
    }
    .case_center {
      margin: 0 0.6667rem;
      .case_center_text {
        margin: 0 1.8533rem;
        margin-top: 0.4rem;
        height: 0.88rem;
        font-size: 0.32rem;
        font-weight: 400;
        color: #797979;
        line-height: 0.44rem;
        text-align: center;
      }
      #swiper-container3 {
        padding: 0.5333rem 0 0.6667rem 0;
        .swiper-slide {
          display: flex;
          justify-content: center;
          align-items: center;
          .slide-item {
            width: 3.7333rem;
            height: 2.6667rem;
            background: #fff;
            box-shadow: 0px 0.08rem 0.2rem 0px rgba(0, 0, 0, 0.1);
            border-radius: 0.08rem;
            border: 1px solid rgba(232, 232, 232, 1);
            .title {
              height: 0.44rem;
              font-size: 0.32rem;
              font-weight: 400;
              color: rgba(0, 0, 0, 0.45);
              line-height: 0.44rem;
              text-align: center;
              margin: 0.3467rem 0;
            }
            .img {
              display: block;
              width: 2.6667rem;
              margin: auto;
            }
          }
        }
        .swiper-slide-active .slide-item .title {
          color: rgba(0, 0, 0, 1);
        }
      }
    }
  }
}
</style>