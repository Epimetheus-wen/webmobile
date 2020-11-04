<template>
  <div class="product smartCall">
    <!-- 展示图 -->
    <div class="banner">
      <img class="banner_img" src="../../../assets/images/cloudelectricpin/banner.png" alt />
      <div class="banner_mod">
        <div class="banner_mod_title">智能外呼</div>
        <div class="banner_mod_text">
          运用语音识别(ASR)、语义理解(NLP)、语音合成(TTS)技术，智能外呼机器人可按照预设的外呼逻辑与客户沟通，经过多轮对话、话术引导，完成呼叫任务。并可代替人工进行大批量的重复性沟通，大幅降低人工成本，提升
          <br />作业效率，为企业客户降本增效
        </div>
        <div class="banner_mod_button zhiCustomBtn"  @click="zhichiBtn">
          <img src="../../../assets/images/cloudService/consult.png" alt />
        </div>
      </div>
    </div>
    <!-- tab导航 -->
    <div class="product_main">
      <div class="product_tab">
        <div class="product_tab_left product_tab_img" @click="scrollLeft">
          <img src="../../../assets/images/cloudService/left.png" alt />
        </div>
        <div class="product_tab_center">
          <div class="searchBar navigate__bar">
            <ul :class="searchBarFixed == true ? 'isFixed' :''">
              <li :class="{active: navIndex===0}" @click="scrollTo(0)">行业痛点</li>
              <li :class="{active: navIndex===1}" @click="scrollTo(1)">产品优势</li>
              <li :class="{active: navIndex===2}" @click="scrollTo(2)">应用场景</li>
              <li :class="{active: navIndex===3}" @click="scrollTo(3)">适用行业</li>
              <li :class="{active: navIndex===4}" @click="scrollTo(4)">相关产品</li>
            </ul>
          </div>
        </div>
        <div class="product_tab_right product_tab_img" @click="scrollRight">
          <img src="../../../assets/images/cloudService/right.png" alt />
        </div>
      </div>
      <div class="home__content_comp">
        <div class="comp_item">
          <div class="comp_item_top">行业痛点</div>
          <hr class="hr_strip" />
          <div class="comp_item_center">
            <div class="comp_item_center_list1">
              <div class="comp_list__img">
                <img src="../../../assets/images/smartCall/list1.png" alt />
              </div>
              <div class="comp_list__txt">
                支撑难度高
                <div>外呼任务规模大，时间紧，人工难以支撑</div>
              </div>
            </div>
            <div class="comp_item_center_list1">
              <div class="comp_list__img">
                <img src="../../../assets/images/smartCall/list2.png" alt />
              </div>
              <div class="comp_list__txt">
                管理难度高
                <div>重复性任务多，人工外呼易懈怠，质量难保障</div>
              </div>
            </div>
            <div class="comp_item_center_list1">
              <div class="comp_list__img">
                <img src="../../../assets/images/smartCall/list3.png" alt />
              </div>
              <div class="comp_list__txt">
                管理成本高
                <div>人工外呼成本高，员工管理难度大</div>
              </div>
            </div>
          </div>
        </div>
        <div class="comp_item">
          <div class="comp_item_top">产品优势</div>
          <hr class="hr_strip" />
          <div class="comp_item_center comp_item_center2">
            <div class="comp_item_center_list2">
              <div class="hr_red"></div>
              <div class="comp_list__title">一站式服务</div>
              <div class="comp_list__txt">可提供外呼平台、线路、真人录音、质检、模型优化等资源及服务</div>
            </div>
            <div class="comp_item_center_list2">
              <div class="hr_red"></div>
              <div class="comp_list__title">全业务承接</div>
              <div class="comp_list__txt">可为用户提供从话术设计到模型持续优化等全流程打包服务</div>
            </div>
          </div>
        </div>
        <div class="comp_item">
          <div class="comp_item_top">应用场景</div>
          <hr class="hr_strip" />
          <div class="comp_item_center">
            <div class="comp_item_text3">智能营销、智能回访、语音通知、问卷调查、信息确认</div>
            <div class="scene">
              <div class="scene_left">
                <img src="../../../assets/images/smartCall/sw.png" alt />
              </div>
              <div class="scene_jia">
                <img src="../../../assets/images/smartCall/jia.png" alt />
              </div>
              <div class="scene_right">
                <div>语音识别</div>
                <div>语音信号处理</div>
                <div>声学事件监测</div>
                <div>声音画像</div>
                <div>情绪识别</div>
                <div>自然语音理解</div>
                <div>语音合成</div>
                <div>······</div>
              </div>
            </div>
          </div>
        </div>
        <div class="comp_item">
          <div class="comp_item_top">适用行业</div>
          <hr class="hr_strip" />
          <div class="comp_item_center">
            <div class="comp_item_text3">有多渠道客户咨询沟通场景的企业客户</div>
            <div class="swiper-container" id="swiper-container4">
              <div class="swiper-wrapper">
                <div v-for="(el,index) in arrItem4" :key="index" class="swiper-slide">
                  <div class="slide-item">
                    <div class="title">{{el.title}}</div>
                    <img class="img" :src="el.imgUrl" alt />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="comp_item">
          <div class="comp_item_top">相关产品</div>
          <hr class="hr_strip" />
          <div class="comp_item_center">
            <div class="comp_item_product">
              <div class="comp_product_title comp_product_title1">
                <div class="product_title_left">
                  <img src="../../../assets/images/cloudService/note.png" alt />
                  <div class="product_title_leftTxt">短信服务</div>
                </div>
                <div class="product_title_right">
                  <router-link to="/product/message" tag="div" class="product_title_rightTxt">了解更多</router-link>
                  <img src="../../../assets/images/cloudService/right.png" alt />
                </div>
              </div>
              <div class="comp_product_text">提供覆盖三网的短信发送接口，简单易用的API，免切换环境，即可快速接入短信业务</div>
            </div>
            <!-- <div class="comp_item_product">
              <div class="comp_product_title comp_product_title2">
                <div class="product_title_left">
                  <img src="../../../assets/images/privacy/yyx_45.png" alt />
                  <div class="product_title_leftTxt">语音线路</div>
                </div>
                <div class="product_title_right">
                  <router-link to="/product/voice" class="product_title_rightTxt">了解更多</router-link>
                  <img src="../../../assets/images/cloudService/right.png" alt />
                </div>
              </div>
              <div
                class="comp_product_text"
              >汇集覆盖国际及全国各地市的三网线路和码号资源，支持客户一站式选购，为客户提供多种对接方式，降低线路和码号资源获取难度，提高业务执行效率</div>
            </div> -->
          </div>
        </div>
        <div class="service">
          <div class="service_top">服务中心</div>
          <hr class="hr_strip" />
          <div class="service_center">
            <div class="service_center_item zhiCustomBtn">
              <img
                class="service_img"
                src="@/assets/images/home/consult.png"
                @click="zhichiBtn"
                alt
              />
              <div class="service_item_title">
                <a href="javascript:;" style="color:rgba(0,0,0,1)" @click="zhichiBtn">在线咨询</a>
              </div>
              <div class="service_item_text" @click="zhichiBtn">免费咨询产品详请</div>
            </div>
            <div class="service_center_item">
              <a
                style="display: flex;flex-direction: column;align-items: center;color:rgba(0,0,0,1)"
                href="tel:400 005 7696"
              >
                <img class="service_img" src="@/assets/images/home/hot_line.png" alt />
                <div class="service_item_title">
                  <a style="color:rgba(0,0,0,1)">热线服务</a>
                </div>
                <div class="service_item_text">1V1专家解答服务</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script src="./smartCall.controller.js"></script>

<style lang='scss' >
.smartCall {
  .banner {
    width: 10rem;
    height: 6rem;
    position: relative;
    .banner_img {
      width: 10rem;
      height: 6rem;
      display: block;
    }
    .banner_mod {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0.6667rem;
      right: 0.6667rem;
      .banner_mod_title {
        margin-top: 0.72rem;
        height: 0.6rem;
        font-size: 0.4267rem;
        font-weight: 600;
        color: rgba(0, 0, 0, 1);
        line-height: 0.6rem;
      }
      .banner_mod_text {
        margin-top: 0.1067rem;
        font-weight: 400;
        color: rgba(121, 121, 121, 1);
        line-height: 0.5333rem;
        font-size: 0.32rem;
      }
      .banner_mod_button {
        width: 2.2667rem;
        height: 0.6667rem;
        margin-top: 0.4267rem;
        img {
          width: 2.2667rem;
          height: 0.6667rem;
          display: block;
        }
      }
    }
  }
  .product_tab {
    height: 1.0667rem;
    //   padding: 0 0.6667rem;
    position: sticky; //粘性定位，初步方案兼容不好
    top: 1.1733rem;
    display: flex;
    align-items: center;
    background: #f5f5f5;
    z-index: 10;
    .product_tab_center {
      flex: 1;
      width: 8.2933rem;
      height: 1.0667rem;
    }
    .product_tab_left {
      justify-content: flex-end;
    }
    .product_tab_img {
      display: flex;
      align-items: center;
      width: 100%;
      height: 100%;
      img {
        width: 0.1867rem;
        height: 0.3333rem;
        display: block;
      }
    }
  }

  .searchBar {
    overflow-x: scroll;
    width: 8.2667rem;
    .isFixed {
      z-index: 999;
    }
    ul {
      height: 1.0667rem;
      line-height: 1.0667rem;
      display: flex;
      width: 13.8267rem;
      margin: 0;
      padding: 0;
      flex-wrap: wrap;
      li {
        font-size: 0.3733rem;
        width: 2.76rem;
        height: 1.0667rem;
        position: relative;
        text-align: center;
        &.active {
          &:after {
            content: " ";
            position: absolute;
            height: 0.0133rem;
            width: 60%;
            bottom: 0;
            left: 0;
            right: 0;
            margin: 0 auto;
            border-top: 0.0533rem rgba(204, 0, 0, 1) solid;
          }
        }
      }
    }
  }
  .home__content_comp {
    background-color: whitesmoke;
    width: 100%;
  }
  .home__content_comp .comp_item {
    width: 100%;
  }
  .comp_item {
    background: #fff;
    .comp_item_top {
      margin: 0 0.4rem;
      height: 1.2533rem;
      line-height: 1.2533rem;
      text-align: center;
      font-size: 0.3733rem;
      color: rgba(0, 0, 0, 1);
    }
    .comp_item_center {
      padding: 0.5333rem 0 0.1067rem 0;
      .comp_item_center_list1 {
        display: flex;
        margin: 0 0.7467rem;
        margin-bottom: 0.4267rem;
        .comp_list__img {
          img {
            width: 1.7333rem;
            height: 1.2rem;
            display: block;
          }
        }
        .comp_list__txt {
          font-weight: 500;
          color: rgba(0, 0, 0, 0.85);
          line-height: 0.48rem;
          font-size: 0.3467rem;
          margin-left: 0.4267rem;
          margin-top: 0.1467rem;
          div {
            font-size: 0.32rem;
            color: rgba(0, 0, 0, 0.45);
            width: 6.5333rem;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
        }
      }
      .comp_item_center_list2 {
        margin: 0 0.7467rem;
        margin-top: 0.6667rem;
        .hr_red {
          width: 1.0667rem;
          height: 0.1067rem;
          background: rgba(204, 0, 0, 1);
          margin-bottom: 0.2133rem;
        }
        .comp_list__title {
          height: 0.4933rem;
          font-size: 0.3467rem;
          font-weight: 600;
          color: rgba(0, 0, 0, 0.85);
          line-height: 0.4933rem;
          margin-bottom: 0.1733rem;
        }
        .comp_list__txt {
          font-size: 0.32rem;
          font-weight: 600;
          color: rgba(121, 121, 121, 1);
          line-height: 0.5067rem;
        }
      }
      .comp_item_text3 {
        text-align: center;
        font-size: 0.32rem;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.45);
        line-height: 0.44rem;
        margin-bottom: 0.5333rem;
      }
      .van-tabs--card {
        margin-bottom: 0.56rem;
      }
      .van-tabs--card > .van-tabs__wrap {
        height: 0.8rem;
      }
      .van-tabs__nav {
        justify-content: space-between;
        border: none;
        margin: 0;
        height: 0.8rem;
        padding: 0 0.6667rem;
        .van-tab {
          flex: none;
          font-size: 0.32rem;
          border-right: none;
          line-height: 0.8rem;
          padding: 0 0.08rem;
          border: 1px solid #fff;
          border-bottom: none;
        }
      }
      .van-tabs__content {
        margin: 0 0.6667rem;
        border: 1px solid rgba(248, 209, 166, 1);
        .price {
          display: flex;
          flex-direction: column;
          align-items: center;
          .price_month,
          .price_year {
            display: flex;
            align-items: center;
          }
          .price_month {
            margin-top: 0.52rem;
            margin-bottom: 0.2267rem;
          }
          span {
            display: block;
          }
          .price_num {
            height: 0.7067rem;
            font-size: 0.5067rem;
            font-weight: 600;
            color: rgba(204, 0, 0, 1);
            line-height: 0.7067rem;
            margin-right: 0.1333rem;
          }
          .price_unit {
            height: 0.44rem;
            font-size: 0.32rem;
            font-weight: 500;
            color: rgba(121, 121, 121, 1);
            line-height: 0.44rem;
          }
          .consult {
            width: 2.08rem;
            height: 0.8rem;
            background: rgba(204, 0, 0, 1);
            box-shadow: 0px 0.0267rem 0.08rem 0px rgba(213, 213, 213, 1);
            border-radius: 0.08rem;
            border: none;
            font-size: 0.3467rem;
            font-weight: 500;
            color: rgba(255, 255, 255, 1);
            line-height: 0.8rem;
            margin-top: 0.4933rem;
          }
        }
        .introduce {
          margin: 0.6133rem 0.44rem;
          .introduce_title {
            font-size: 0.32rem;
            font-weight: 600;
            color: rgba(0, 0, 0, 0.65);
            line-height: 0.44rem;
            margin-top: 0.5333rem;
            margin-bottom: 0.32rem;
          }
          .introduce_line {
            display: flex;
            margin-bottom: 0.32rem;
            img {
              width: 0.32rem;
              height: 0.2133rem;
              display: block;
              line-height: 0.44rem;
              margin-top: 0.1333rem;
              margin-right: 0.2667rem;
            }
            .introduce_txt {
              .introduce_txt-1 {
                font-size: 0.32rem;
                color: rgba(0, 0, 0, 0.65);
                line-height: 0.44rem;
              }
              .introduce_txt-2 {
                font-size: 0.32rem;
                font-weight: 500;
                color: rgba(0, 0, 0, 0.45);
                line-height: 0.5067rem;
              }
            }
          }
        }
      }
      .van-tabs__nav--card .van-tab.van-tab--active {
        background: rgba(248, 209, 166, 0.14);
        border: 1px solid rgba(248, 209, 166, 1);
        border-bottom: none;
        color: rgba(204, 0, 0, 1);
      }
      #swiper-container4 {
        margin-bottom: 0.56rem;
        padding-bottom: 2px;
        .swiper-wrapper {
          margin-left: 0.6667rem;
        }
        .slide-item {
          display: flex;
          align-items: center;
          position: relative;
          .img {
            width: 3.7333rem;
            height: 2.6667rem;
            border-radius: 0.08rem;
            box-shadow: 1px 1px 2px 0px rgba(0, 0, 0, 1);
          }
          .title {
            position: absolute;
            top: 0;
            width: 3.7333rem;
            bottom: 0;
            margin: 0 auto;
            font-size: 0.32rem;
            font-weight: 500;
            color: rgba(255, 255, 255, 1);
            line-height: 0.44rem;
            margin-top: 1.8667rem;
            text-align: center;
          }
        }
        .swiper-slide:last-child .img {
          display: none;
        }
      }
      .comp_item_product {
        margin-bottom: 0.4267rem;
        .comp_product_title1 {
          height: 1.2533rem;
          background: rgba(0, 0, 0, 1);
          box-shadow: 0px 0.08rem 0.1333rem 0px rgba(0, 0, 0, 0.2);
        }
        .comp_product_title2 {
          height: 1.2533rem;
          background: rgba(204, 0, 0, 1);
          box-shadow: 0px 0.08rem 0.1333rem 0px rgba(93, 93, 93, 0.2);
        }
        .comp_product_title {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 0.6667rem;
          .product_title_left {
            display: flex;
            align-items: center;
            img {
              width: 0.5733rem;
              height: 0.5467rem;
              display: block;
            }
            .product_title_leftTxt {
              font-size: 0.3733rem;
              font-weight: 500;
              color: rgba(255, 255, 255, 1);
              line-height: 0.68rem;
              margin-left: 0.3333rem;
            }
          }
          .product_title_right {
            font-size: 0.32rem;
            font-weight: 500;
            color: rgba(204, 199, 199, 1);
            line-height: 0.4rem;
            display: flex;
            align-items: center;
            img {
              width: 0.1867rem;
              height: 0.3333rem;
              display: block;
              margin-left: 0.16rem;
            }
          }
        }
        .comp_product_text {
          height: 1.52rem;
          font-size: 0.32rem;
          font-weight: 500;
          color: rgba(0, 0, 0, 0.65);
          line-height: 0.5067rem;
          padding: 0.3333rem 0.499rem 0.3333rem 0.6667rem;
          background: rgba(245, 245, 245, 1);
        }
      }
    }
    .comp_item_center2 {
      padding: 0;
      padding-bottom: 0.5867rem;
    }
  }
  // 服务中心
  .service {
    margin-top: 0.4267rem;
    margin-bottom: 0.4533rem;
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
  .comp_item:nth-child(2n) {
    background: rgba(245, 245, 245, 1);
  }
}
.smartCall .comp_item .comp_item_center .van-tabs__nav {
  justify-content: unset;
}
.smartCall
  .comp_item
  .comp_item_center
  .van-tabs__nav--card
  .van-tab.van-tab--active {
  font-weight: 600;
}
.scene {
  padding: 0 0.6667rem;
  display: flex;
  align-items: center;
  margin-bottom: 0.6533rem;
  .scene_left {
    width: 4.04rem;
    height: 7.8533rem;
    margin-right: 0.4933rem;
    img {
      display: block;
      width: 100%;
    }
  }
  .scene_jia {
    width: 0.4rem;
    height: 0.4rem;
    margin-right: 0.6533rem;
    img {
      display: block;
      width: 100%;
    }
  }
  .scene_right {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 7.8533rem;
    div {
      width: 3.2rem;
      height: 0.6933rem;
      background: rgba(255, 246, 247, 1);
      border-radius: 2px;
      border: 1px solid rgba(204, 0, 0, 1);
      font-size: 0.32rem;
      font-weight: 500;
      color: rgba(204, 0, 0, 1);
      line-height: 0.6933rem;
      text-align: center;
    }
  }
}
.smartCall .comp_item .comp_item_center .van-tabs__nav .van-tab {
  color: rgba(0, 0, 0, 0.65);
}
@media screen and (max-width: 320px) {
  .smartCall .comp_item .comp_item_center .van-tabs__nav .van-tab {
    flex: 1;
    font-size: 0.32rem;
    border-right: none;
    line-height: 0.8rem;
    padding: 0 0.1333rem;
  }
}
</style>