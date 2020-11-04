<template>
  <div class="product message">
    <!-- 展示图 -->
    <div class="banner">
      <img class="banner_img" src="../../../assets/images/message/banner.png" alt />
      <div class="banner_mod">
        <div class="banner_mod_title">短信服务</div>
        <div class="banner_mod_text">
          通知短信 / 验证码短信 / 会员推广短信
          <br />覆盖三网的短信发送接口，简单易用的API，免切换环境，即可快速接入短信业务
        </div>
        <div class="banner_mod_button zhiCustomBtn" @click="zhichiBtn">
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
              <li :class="{active: navIndex===0}" @click="scrollTo(0)">产品详情</li>
              <li :class="{active: navIndex===1}" @click="scrollTo(1)">产品优势</li>
              <li :class="{active: navIndex===2}" @click="scrollTo(2)">应用场景</li>
              <!-- <li :class="{active: navIndex===3}" @click="scrollTo(3)">适用行业</li> -->
              <li :class="{active: navIndex===3}" @click="scrollTo(3)">相关产品</li>
            </ul>
          </div>
        </div>
        <div class="product_tab_right product_tab_img" @click="scrollRight">
          <img src="../../../assets/images/cloudService/right.png" alt />
        </div>
      </div>
      <div class="home__content_comp">
        <div class="comp_item">
          <div class="comp_item_top" style="height:1.5733rem;line-height:1.5733rem;">新用户注册，立享免费测试包！</div>
          <!-- <hr class="hr_strip" /> -->
          <div class="comp_item_center" style="padding-top:0;">
            <div class="comp_item_text3 msmtext3">
              <p>
                企业用户认证成功即享
                <span style="font-size:0.3733rem;">1000条免费 </span>测试短信额度，
              </p>
              <p>
                个人用户认证成功即享
                <span style="font-size:0.3733rem;">300条免费 </span>测试额度，
              </p>快速接入我们吧！
            </div>
            <div class="msm_mod" style="justify-content: center;">
              <div class="msm_mod_button zhiCustomBtn" @click="zhichiBtn">
                <img src="../../../assets/images/cloudService/consult.png" alt />
              </div>
              <div class="msm_mod_text" style="display:none;">
                活动规则
                <img src="../../../assets/images/message/directionkey.png" alt />
              </div>
            </div>
            <van-tabs type="card recommend">
              <van-tab title="通知短信">
                <div class="price">
                  <div class="price_name">通知短信</div>
                  <div class="price_month">
                    <span class="price_num">￥0.04</span>
                    <span class="price_unit">元/条起</span>
                  </div>
                  <!-- <button class="consult zhiCustomBtn">立即咨询</button> -->
                </div>
                <div class="introduce">
                  <div class="introduce_title">适合以下场景使用</div>
                  <div class="introduce_line">
                    <img src="../../../assets/images/cloudService/Get_in.png" alt />
                    <div class="introduce_txt">
                      <div class="introduce_txt-1">会议通知、物流通知</div>
                    </div>
                  </div>
                  <div class="introduce_line">
                    <img src="../../../assets/images/cloudService/Get_in.png" alt />
                    <div class="introduce_txt">
                      <div class="introduce_txt-1">系统通知、预警通知等</div>
                    </div>
                  </div>
                  <div class="introduce_line">
                    <img src="../../../assets/images/cloudService/Get_in.png" alt />
                    <div class="introduce_txt">
                      <div class="introduce_txt-1">秒级可达</div>
                    </div>
                  </div>
                  <hr class="hr_str" />
                  <div class="introduce_line">
                    <img src="../../../assets/images/cloudService/Get_in.png" alt />
                    <div class="introduce_txt">
                      <div class="introduce_txt-1">国内短信三网合一专属通道</div>
                    </div>
                  </div>
                  <div class="introduce_line">
                    <img src="../../../assets/images/cloudService/Get_in.png" alt />
                    <div class="introduce_txt">
                      <div class="introduce_txt-1">支持变量，内容灵活</div>
                    </div>
                  </div>
                  <div class="introduce_line">
                    <img src="../../../assets/images/cloudService/Get_in.png" alt />
                    <div class="introduce_txt">
                      <div class="introduce_txt-1">可适应各种业务场景</div>
                    </div>
                  </div>
                  <router-link tag="button" to="/register" button class="zhuce">立即注册</router-link>
                </div>
              </van-tab>
              <van-tab title="验证码短信">
                <div class="price">
                  <div class="price_name">验证码短信</div>
                  <div class="price_month">
                    <span class="price_num">￥0.04</span>
                    <span class="price_unit">元/条起</span>
                  </div>
                  <!-- <button class="consult zhiCustomBtn">立即咨询</button> -->
                </div>
                <div class="introduce">
                  <div class="introduce_title">适合以下场景使用</div>
                  <div class="introduce_line">
                    <img src="../../../assets/images/cloudService/Get_in.png" alt />
                    <div class="introduce_txt">
                      <div class="introduce_txt-1">密码找回、账号绑定</div>
                    </div>
                  </div>
                  <div class="introduce_line">
                    <img src="../../../assets/images/cloudService/Get_in.png" alt />
                    <div class="introduce_txt">
                      <div class="introduce_txt-1">APP / 网站注册、安全登陆</div>
                    </div>
                  </div>
                  <hr class="hr_str" />
                  <div class="introduce_line">
                    <img src="../../../assets/images/cloudService/Get_in.png" alt />
                    <div class="introduce_txt">
                      <div class="introduce_txt-1">支付认证、身份认证</div>
                    </div>
                  </div>
                  <div class="introduce_line">
                    <img src="../../../assets/images/cloudService/Get_in.png" alt />
                    <div class="introduce_txt">
                      <div class="introduce_txt-1">快速下发用户账号注册验证</div>
                    </div>
                  </div>
                  <div class="introduce_line">
                    <img src="../../../assets/images/cloudService/Get_in.png" alt />
                    <div class="introduce_txt">
                      <div class="introduce_txt-1">异常登录提醒</div>
                    </div>
                  </div>
                  <div class="introduce_line">
                    <img src="../../../assets/images/cloudService/Get_in.png" alt />
                    <div class="introduce_txt">
                      <div class="introduce_txt-1">重要信息变更</div>
                    </div>
                  </div>
                  <div class="introduce_line">
                    <img src="../../../assets/images/cloudService/Get_in.png" alt />
                    <div class="introduce_txt">
                      <div class="introduce_txt-1">关键资料修改确保用户体验</div>
                    </div>
                  </div>
                  <router-link tag="button" to="/register" button class="zhuce">立即注册</router-link>
                </div>
              </van-tab>
              <van-tab title="会员推广短信">
                <div class="price">
                  <div class="price_name">会员推广短信</div>
                  <div class="price_month">
                    <span class="price_num">￥0.06</span>
                    <span class="price_unit">元/条起</span>
                  </div>
                  <!-- <button class="consult zhiCustomBtn">立即咨询</button> -->
                </div>
                <div class="introduce">
                  <div class="introduce_title">适合以下场景使用</div>
                  <div class="introduce_line">
                    <img src="../../../assets/images/cloudService/Get_in.png" alt />
                    <div class="introduce_txt">
                      <div class="introduce_txt-1">周年庆、双十一</div>
                    </div>
                  </div>
                  <div class="introduce_line">
                    <img src="../../../assets/images/cloudService/Get_in.png" alt />
                    <div class="introduce_txt">
                      <div class="introduce_txt-1">618等购物节活动促销提示</div>
                    </div>
                  </div>
                  <div class="introduce_line">
                    <img src="../../../assets/images/cloudService/Get_in.png" alt />
                    <div class="introduce_txt">
                      <div class="introduce_txt-1">会员生日温馨祝福</div>
                    </div>
                  </div>
                  <div class="introduce_line">
                    <img src="../../../assets/images/cloudService/Get_in.png" alt />
                    <div class="introduce_txt">
                      <div class="introduce_txt-1">业务推广介绍</div>
                    </div>
                  </div>
                  <hr class="hr_str" />
                  <div class="introduce_line">
                    <img src="../../../assets/images/cloudService/Get_in.png" alt />
                    <div class="introduce_txt">
                      <div class="introduce_txt-1">帮助企业激活“睡眠”客户</div>
                    </div>
                  </div>
                  <div class="introduce_line">
                    <img src="../../../assets/images/cloudService/Get_in.png" alt />
                    <div class="introduce_txt">
                      <div class="introduce_txt-1">自定义内容提供精准触达</div>
                    </div>
                  </div>
                  <router-link tag="button" to="/register" button class="zhuce">立即注册</router-link>
                </div>
              </van-tab>
            </van-tabs>
          </div>
          <div class="comp_item_top xiangqing_top">
            产品详情
            <hr class="hr_strip" />
          </div>

          <div class="comp_item_center xiangqing_center">
            <div class="comp_item_text3">
              云消息（泛文字类云通信业务，短消息+USSD+Push推送)，提供自定义信息内容、通知推送、注册验证等短信 (SMS)平
              <br />台服务，满足企业及个人多种场景下品牌宣传及业务推广需求。此外满足短信发送需求，提供USSD（非结构化补充数据业务）产品，可应用于“阅后即焚”验证码、企业名片、防诈骗提醒等，为客户消息送达诉求提供新的技术解决方案。
            </div>
            <div class="comp_item_details">
              <img src="../../../assets/images/message/details.png" alt />
            </div>
          </div>
        </div>
        <!-- <div class="comp_item"></div> -->
        <div class="comp_item" style="background:#fff">
          <div class="comp_item_top">产品优势</div>
          <hr class="hr_strip" />
          <div class="comp_item_center comp_item_center2">
            <div class="comp_item_center_list2">
              <div class="hr_red"></div>
              <div class="comp_list__title">号码资源丰富</div>
              <div class="comp_list__txt">支持客户三网合一、自定义签名等各类发送需求</div>
            </div>
            <div class="comp_item_center_list2">
              <div class="hr_red"></div>
              <div class="comp_list__title">99%以上高到达率</div>
              <div class="comp_list__txt">排除黑名单、停机等状态异常号码因素，平均短信到达率99%以上</div>
            </div>
            <div class="comp_item_center_list2">
              <div class="hr_red"></div>
              <div class="comp_list__title">业务监控和自动预警设置</div>
              <div class="comp_list__txt">随时监控短信发送与接收情况，及时响应问题</div>
            </div>
            <div class="comp_item_center_list2">
              <div class="hr_red"></div>
              <div class="comp_list__title">分布式容灾</div>
              <div class="comp_list__txt">多点部署，规避突发风险</div>
            </div>
          </div>
        </div>
        <div class="comp_item" style="background:#f5f5f5">
          <div class="comp_item_top" style="background-color:transparent;">应用场景</div>
          <hr class="hr_strip" style />
          <div class="comp_item_center animated1" style="background-color: unset;">
            <van-tabs class="card_animated" animated>
              <van-tab title="通知短信">
                <div class="card_animated_main">
                  <div class="card_animated_title">通知短信介绍</div>
                  <div class="card_animated_conter">支持各类业务场景的短信通知发送，国内短信三网合一专属通道，秒级可达。支持变量，内容灵活</div>
                  <div class="card_animated_title">应用场景</div>
                  <div class="card_animated_conter">订单通知、支付通知、物流通知、会议通知、政府通知、生活服务类通知、跨境订单通知、跨境物流通知等</div>
                </div>
              </van-tab>
              <van-tab class="card_animated" title="验证码短信">
                <div class="card_animated_main">
                  <div class="card_animated_title">验证码短信介绍</div>
                  <div class="card_animated_conter">快速下发用户账号注册验证、异常登录提醒、重要信息变更、关键资料修改确保用户体验</div>
                  <div class="card_animated_title">应用场景</div>
                  <div class="card_animated_conter">密码找回、账号绑定、APP / 网站注册、安全登陆、支付认证、身份认证</div>
                </div>
              </van-tab>
              <van-tab class="card_animated" title="会员推广短信">
                <div class="card_animated_main">
                  <div class="card_animated_title">会员推广短信介绍</div>
                  <div class="card_animated_conter">向潜在客户、会员推送活动邀约、促销预告等信息，及时送达用户福利</div>
                  <div class="card_animated_title">应用场景</div>
                  <div class="card_animated_conter">新品宣传、会员关怀、商品促销、活动邀请、跨境营销等</div>
                </div>
              </van-tab>
            </van-tabs>
          </div>
        </div>
        <!-- <div class="comp_item">
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
        </div>-->
        <div class="comp_item" style="background:#fff">
          <div class="comp_item_top">相关产品</div>
          <hr class="hr_strip" />
          <div class="comp_item_center">
            <div class="comp_item_product">
              <div class="comp_product_title comp_product_title1">
                <div class="product_title_left">
                  <img src="../../../assets/images/message/yinsi.png" alt />
                  <div class="product_title_leftTxt">隐私号</div>
                </div>
                <div class="product_title_right">
                  <router-link to="/product/privacy" tag="div" class="product_title_rightTxt">了解更多</router-link>
                  <img src="../../../assets/images/cloudService/right.png" alt />
                </div>
              </div>
              <div
                class="comp_product_text"
              >集成隐私号能力后，企业平台业务员与用户通话时，对双方的手机号码进行隐藏保护，有效防止个人号码泄露及业务跳单，同时可通过录音分析管控平台安全性、提升服务质量</div>
            </div>
            <div class="comp_item_product">
              <div class="comp_product_title comp_product_title2">
                <div class="product_title_left">
                  <img src="../../../assets/images/cloudService/voice.png" alt />
                  <div class="product_title_leftTxt">语音通知</div>
                </div>
                <div class="product_title_right">
                  <router-link to="/product/voice" tag="div" class="product_title_rightTxt">了解更多</router-link>
                  <img src="../../../assets/images/cloudService/right.png" alt />
                </div>
              </div>
              <div
                class="comp_product_text"
              >为客户致电需要通知的用户，接通后自动播报语音通知，可代替人工进行大批量的业务通知，便于最大效率的触达用户，降本增效</div>
            </div>
            <div class="comp_item_product">
              <div class="comp_product_title comp_product_title1">
                <div class="product_title_left">
                  <img src="../../../assets/images//cloudService/Smart_call.png" alt />
                  <div class="product_title_leftTxt">智能外呼</div>
                </div>
                <div class="product_title_right">
                  <router-link to="/product/smartCall" tag="div" class="product_title_rightTxt">了解更多</router-link>
                  <img src="../../../assets/images/cloudService/right.png" alt />
                </div>
              </div>
              <div
                class="comp_product_text"
              >运用语音识别(ASR)、语义理解(NLP)、语音合成(TTS)技术，智能外呼机器人可按照预设的外呼逻辑与客户沟通，经过多轮对话、话术引导，完成呼叫任务。智能外呼机器人可代替…</div>
            </div>
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

<script src="./message.controller.js"></script>

<style lang='scss' >
.message {
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
        margin-bottom: 0.36rem;
        padding: 0 0.6667rem;
        //   text-indent: 0.6rem;
      }
      .msmtext3 {
        // padding: 0 1.3067rem;
        line-height: 0.56rem;
        span {
          color: #cc0000;
          font-weight: 600;
        }
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
          padding: 0 0.16rem;
          border: 1px solid transparent;
          border-bottom: none;
          color: rgba(0, 0, 0, 0.65);
        }
      }
      .van-tabs__content {
        margin: 0 0.6667rem;
        border: none;
        .price_name {
          font-size: 0.5067rem;
          font-weight: 500;
          color: rgba(0, 0, 0, 0.85);
          line-height: 0.7067rem;
          margin-top: 0.56rem;
        }
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
            margin-top: 0;
            margin-bottom: 0.2267rem;
            align-items: flex-end;
          }
          span {
            display: block;
          }
          .price_num {
            height: 0.7067rem;
            font-size: 0.6133rem;
            font-weight: 600;
            color: rgba(0, 0, 0, 0.85);
            line-height: 0.7067rem;
            margin-right: 0.1333rem;
          }
          .price_unit {
            height: 0.5rem;
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
          padding: 0.6133rem 0.44rem;
          margin: 0;
          border: 1px solid rgba(248, 209, 166, 1);
          border-top: none;
          display: flex;
          flex-direction: column;
          .introduce_title {
            font-size: 0.32rem;
            font-weight: 600;
            color: rgba(0, 0, 0, 0.65);
            line-height: 0.44rem;
            margin-top: 0.5333rem;
            margin-bottom: 0.32rem;
          }
          .hr_str {
            border: 0.5px solid rgba(221, 221, 221, 1);
            // margin: 0 0.7467rem;\
            margin-top: 0.5733rem;
            margin-bottom: 0.6rem;
          }
          .zhuce {
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
            margin: auto;
            margin-top: 0.6133rem;
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
        font-weight: 600;
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

  .comp_item_details {
    padding: 0 0.6667rem;
    margin-bottom: 0.5333rem;
    img {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
  .recommend {
    background: url("../../../assets/images/message/recommend_top.png")
      no-repeat top;
    background-size: 8.88rem 3.3333rem;
    background-position: 0.6667rem 0.6133rem;
  }
  .comp_item .comp_item_center .van-tabs__nav {
    justify-content: unset;
  }
  .searchBar {
    ul {
      width: 11.0667rem;
    }
  }
  .msm_mod {
    padding: 0 2.7733rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 0.6rem;
    .msm_mod_button {
      width: 2.2667rem;
      height: 0.6667rem;
      img {
        width: 2.2667rem;
        height: 0.6667rem;
        display: block;
      }
    }
    .msm_mod_text {
      font-size: 0.32rem;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.65);
      line-height: 0.44rem;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-left: 0.4133rem;
      img {
        width: 0.4rem;
        height: 0.1467rem;
        display: block;
        margin-left: 0.08rem;
      }
    }
  }
  .xiangqing_center,
  .xiangqing_top {
    background: #f5f5f5;
  }
  .xiangqing_top {
    margin: 0 !important;
  }
  .xiangqing_center {
    .comp_item_text3 {
      padding: 0 0.64rem !important ;
      text-align: left !important;
    }
  }
  .van-hairline--top-bottom::after {
      border: none;
    }
  .animated1 {
    padding-top: 0 !important;
    
    .van-tab--active {
      font-weight: 600;
      color: rgba(204, 0, 0, 1);
      span {
        color: rgba(204, 0, 0, 1);
      }
    }
    .card_animated {
      background-color: unset;
      .van-tabs__wrap {
        height: 1rem;
        line-height: 1rem;
        .van-tabs__nav {
          height: 100%;
          .van-tab__text {
            line-height: 1rem;
          }
        }
      }
      .van-tabs__line {
        bottom: 0px !important;
        width: 1.3333rem !important;
      }
      .van-tabs__nav {
        justify-content: center;
        background-color: unset;
        .van-tab {
          padding: 0 0.3333rem;
        }
      }
      .van-tabs__content {
        width: 8.6rem;
        height: 5.3467rem;
        border-radius: 0.08rem;
        border: 1px dashed rgba(121, 121, 121, 0.65);
        margin-bottom: 0.6667rem;
      }
      .card_animated_main {
        .card_animated_title {
          font-size: 0.32rem;
          font-weight: 500;
          color: rgba(0, 0, 0, 0.65);
          line-height: 0.44rem;
          padding: 0 0.44rem;
          margin-top: 0.52rem;
          margin-bottom: 0.2667rem;
        }
        .card_animated_conter {
          font-size: 0.32rem;
          font-weight: 500;
          color: rgba(0, 0, 0, 0.45);
          line-height: 0.6133rem;
          padding: 0 0.44rem;
        }
      }
    }
  }
}
@media screen and (max-width: 320px) {
  .message .comp_item .comp_item_center .van-tabs__nav .van-tab {
    flex: 1;
    font-size: 0.32rem;
    border-right: none;
    line-height: 0.8rem;
    padding: 0 0.1333rem;
  }
}
</style>