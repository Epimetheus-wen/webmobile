<template>
  <div class="product identitycheck">
    <!-- 展示图 -->
    <div class="banner">
      <img class="banner_img" src="../../../assets/images/identitycheck/banner.png" alt />
      <div class="banner_mod">
        <div class="banner_mod_title">身份核验系列产品</div>
        <div class="banner_mod_text">基于运营商等权威数据，检测并返回：用户姓名、身份证号、手机号、银行卡号等信息一致性情况</div>
        <div class="banner_mod_button zhiCustomBtn" @click="zhichiBtn">
          <img src="../../../assets/images/cloudService/consult.png" alt />
        </div>
      </div>
    </div>
    <!-- tab导航 -->
    <div class="product_main">
      <div class="product_tab">
        <div class="product_tab_left product_tab_img">
          <!-- <img src="../../../assets/images/cloudService/left.png" alt /> -->
        </div>
        <div class="product_tab_center">
          <div class="searchBar navigate__bar">
            <ul :class="searchBarFixed == true ? 'isFixed' :''">
              <li :class="{active: navIndex===0}" @click="scrollTo(0)">产品类型</li>
              <li :class="{active: navIndex===1}" @click="scrollTo(1)">相关产品</li>
            </ul>
          </div>
        </div>
        <div class="product_tab_right product_tab_img">
          <!-- <img src="../../../assets/images/cloudService/right.png" alt /> -->
        </div>
      </div>
      <div class="home__content_comp">
        <div class="comp_item">
          <div class="comp_item_top">身份证号核验</div>
          <hr class="hr_strip" />
          <div class="comp_item_center">
            <div class="comp_item_text3">找到符合你需求的客服版本，可在线咨询我们的团队</div>
            <van-tabs type="card" class="recommend">
              <van-tab class="kongtext" title=" 身份证号核验 ">
                <div class="price">
                  <div class="price_name">
                    身份证号核验
                    <span>（身份证二要素）</span>
                  </div>
                  <div class="price_month">
                    <span class="price_num">￥0.15</span>
                    <span class="price_unit">/次</span>
                  </div>
                  <div class="price_text" style="margin:0 1.4rem">准确校验用户姓名和身份证号码是否同一人<br> </div>
                  <!-- <button class="consult zhiCustomBtn">立即咨询</button> -->
                </div>
                <div class="introduce">
                  <div class="introduce_title">产品亮点</div>
                  <div class="introduce_line">
                    <img src="../../../assets/images/cloudService/Get_in.png" alt />
                    <div class="introduce_txt">
                      <div class="introduce_txt-1">数据准确，直连运营商大数据，准确、权威、合规</div>
                    </div>
                  </div>
                  <div class="introduce_line">
                    <img src="../../../assets/images/cloudService/Get_in.png" alt />
                    <div class="introduce_txt">
                      <div class="introduce_txt-1">隐私保护，只返回认证通过与不通过，充分保护个人信息安全</div>
                    </div>
                  </div>
                  <hr class="hr_str" />
                  <div class="introduce_title introduce_title_1">适用场景</div>
                  <div class="introduce_line">
                    <img src="../../../assets/images/cloudService/Get_in.png" alt />
                    <div class="introduce_txt">
                      <div class="introduce_txt-1">呼叫中心、短信营销、人力资源、金融风控、担保等行业</div>
                    </div>
                  </div>
                  <div class="introduce_line">
                    <img src="../../../assets/images/cloudService/Get_in.png" alt />
                    <div class="introduce_txt">
                      <div class="introduce_txt-1">金融、快递、游戏、汽车租赁、网络直播等需要进行实名认证的场景</div>
                    </div>
                  </div>
                  <button class="zhuce zhiCustomBtn" @click="zhichiBtn">立即咨询</button>
                </div>
              </van-tab>
              <van-tab title="手机号实名核验">
                <div class="price">
                  <div class="price_name">手机号实名核验<span>（手机三要素）</span></div>
                  <div class="price_month">
                    <span class="price_num">￥0.50</span>
                    <span class="price_unit">/次</span>
                  </div>
                  <div class="price_text">验证用户提交的姓名、身份证号、手机号是否与运营商的登记信息一致</div>
                  <!-- <button class="consult zhiCustomBtn">立即咨询</button> -->
                </div>
                <div class="introduce">
                  <div class="introduce_title">产品亮点</div>
                  <div class="introduce_line">
                    <img src="../../../assets/images/cloudService/Get_in.png" alt />
                    <div class="introduce_txt">
                      <div class="introduce_txt-1">数据准确，直连运营商大数据，准确、权威、合规</div>
                    </div>
                  </div>
                  <div class="introduce_line">
                    <img src="../../../assets/images/cloudService/Get_in.png" alt />
                    <div class="introduce_txt">
                      <div class="introduce_txt-1">隐私保护，只返回认证通过与不通过，充分保护个人信息安全</div>
                    </div>
                  </div>
                  <hr class="hr_str" />
                  <div class="introduce_title introduce_title_1">适用场景</div>
                  <div class="introduce_line">
                    <img src="../../../assets/images/cloudService/Get_in.png" alt />
                    <div class="introduce_txt">
                      <div class="introduce_txt-1">金融、快递、游戏、汽车租赁、网络直播等需要进行实名认证的场景</div>
                    </div>
                  </div>
                  <button class="zhuce zhiCustomBtn" @click="zhichiBtn">立即咨询</button>
                </div>
              </van-tab>
              <van-tab title="银行卡实名核验">
                <div class="price">
                  <div class="price_name">银行卡实名核验<span>（银行卡四要素）</span></div>
                  <div class="price_month">
                    <span class="price_num">￥0.50</span>
                    <span class="price_unit">/次</span>
                  </div>
                  <div class="price_text">核对用户姓名、身份证号、银行卡号、手机号（银行预留）的一致性，用以核验银行卡信息真伪</div>
                  <!-- <button class="consult zhiCustomBtn">立即咨询</button> -->
                </div>
                <div class="introduce">
                  <div class="introduce_title">产品亮点</div>
                  <div class="introduce_line">
                    <img src="../../../assets/images/cloudService/Get_in.png" alt />
                    <div class="introduce_txt">
                      <div class="introduce_txt-1">数据准确，直连运营商大数据，准确、权威、合规</div>
                    </div>
                  </div>
                  <div class="introduce_line">
                    <img src="../../../assets/images/cloudService/Get_in.png" alt />
                    <div class="introduce_txt">
                      <div class="introduce_txt-1">隐私保护，只返回认证通过与不通过，充分保护个人信息安全</div>
                    </div>
                  </div>
                  <hr class="hr_str" />
                  <div class="introduce_title introduce_title_1">适用场景</div>
                  <div class="introduce_line">
                    <img src="../../../assets/images/cloudService/Get_in.png" alt />
                    <div class="introduce_txt">
                      <div class="introduce_txt-1">互联网金融、电商、团购、游戏等一切需要实现付费的应用场景</div>
                    </div>
                  </div>
                  <button class="zhuce zhiCustomBtn" @click="zhichiBtn">立即咨询</button>
                </div>
              </van-tab>
              <van-tab title="人像比对">
                <div class="price">
                  <div class="price_name">人像比对</div>
                  <div class="price_month">
                    <span class="price_num">￥0.39</span>
                    <span class="price_unit">/次</span>
                  </div>
                  <div class="price_text">将获取到的用户姓名、身份证号和人 脸照片与公安部的公民身份证照片进 行比对，返回是否本人信息</div>
                  <!-- <button class="consult zhiCustomBtn">立即咨询</button> -->
                </div>
                <div class="introduce">
                  <div class="introduce_title">产品亮点</div>
                  <div class="introduce_line">
                    <img src="../../../assets/images/cloudService/Get_in.png" alt />
                    <div class="introduce_txt">
                      <div class="introduce_txt-1">取代人工查验，节省人力成本</div>
                    </div>
                  </div>
                  <div class="introduce_line">
                    <img src="../../../assets/images/cloudService/Get_in.png" alt />
                    <div class="introduce_txt">
                      <div class="introduce_txt-1">大大提升比对效率</div>
                    </div>
                  </div>
                  <hr class="hr_str" />
                  <div class="introduce_title introduce_title_1">适用场景</div>
                  <div class="introduce_line">
                    <img src="../../../assets/images/cloudService/Get_in.png" alt />
                    <div class="introduce_txt">
                      <div class="introduce_txt-1">全行业，多领域，如金融、担保、互联网、法律、航空、物流、婚恋、旅游、租赁、传媒等各类</div>
                    </div>
                  </div>
                  <div class="introduce_line">
                    <img src="../../../assets/images/cloudService/Get_in.png" alt />
                    <div class="introduce_txt">
                      <div class="introduce_txt-1">有个人身份验证需求的企业、政府和相关单位</div>
                    </div>
                  </div>
                  <button class="zhuce zhiCustomBtn" @click="zhichiBtn">立即咨询</button>
                </div>
              </van-tab>
              <van-tab title="人脸 1:1 比对">
                <div class="price">
                  <div class="price_name">人脸 1:1 比对</div>
                  <div class="price_month">
                    <span class="price_num">￥0.003</span>
                    <span class="price_unit">/次</span>
                  </div>
                  <div class="price_text" style="margin:0 1.4rem">比对活体检测</div>
                  <!-- <button class="consult zhiCustomBtn">立即咨询</button> -->
                </div>
                <div class="introduce">
                  <div class="introduce_title">产品亮点</div>
                  <div class="introduce_line">
                    <img src="../../../assets/images/cloudService/Get_in.png" alt />
                    <div class="introduce_txt">
                      <div class="introduce_txt-1">精准识别、算法领先、稳定可靠、实时响应、简单易用、应用广泛</div>
                    </div>
                  </div>
                  <hr class="hr_str" />
                  <div class="introduce_title introduce_title_1">适用场景</div>
                  <div class="introduce_line">
                    <img src="../../../assets/images/cloudService/Get_in.png" alt />
                    <div class="introduce_txt">
                      <div class="introduce_txt-1">需将现场照片与身份证照片或预存的人脸照片进行比对的场景；</div>
                    </div>
                  </div>
                  <div class="introduce_line">
                    <img src="../../../assets/images/cloudService/Get_in.png" alt />
                    <div class="introduce_txt">
                      <div class="introduce_txt-1">包括人脸识别考勤、教育、金融、交通、海关、边检、物业管理等等领域</div>
                    </div>
                  </div>
                  <button class="zhuce zhiCustomBtn" @click="zhichiBtn">立即咨询</button>
                </div>
              </van-tab>
              <van-tab title="活体检测">
                <div class="price">
                  <div class="price_name">活体检测</div>
                  <div class="price_month">
                    <span class="price_num">￥0.045</span>
                    <span class="price_unit">/次</span>
                  </div>
                  <div class="price_text">在用户按照系统提示完成相应动作后， 后台对用户完成的动作进行识别，并提示用户活体检测是否通过</div>
                  <!-- <button class="consult zhiCustomBtn">立即咨询</button> -->
                </div>
                <div class="introduce">
                  <div class="introduce_title">产品亮点</div>
                  <div class="introduce_line">
                    <img src="../../../assets/images/cloudService/Get_in.png" alt />
                    <div class="introduce_txt">
                      <div class="introduce_txt-1">生物特征智能识别，实现人脸实时抓拍功能</div>
                    </div>
                  </div>
                  <div class="introduce_line">
                    <img src="../../../assets/images/cloudService/Get_in.png" alt />
                    <div class="introduce_txt">
                      <div class="introduce_txt-1">智能判断生物行为，如张嘴、眨眼、点头等动作</div>
                    </div>
                  </div>
                  <div class="introduce_line">
                    <img src="../../../assets/images/cloudService/Get_in.png" alt />
                    <div class="introduce_txt">
                      <div class="introduce_txt-1">具备识别精准、判断快、流畅等特点</div>
                    </div>
                  </div>
                  <div class="introduce_line">
                    <img src="../../../assets/images/cloudService/Get_in.png" alt />
                    <div class="introduce_txt">
                      <div class="introduce_txt-1">光线不足情况下表现上佳</div>
                    </div>
                  </div>
                  <div class="introduce_line">
                    <img src="../../../assets/images/cloudService/Get_in.png" alt />
                    <div class="introduce_txt">
                      <div class="introduce_txt-1">有效避免人为手持照片欺骗系统</div>
                    </div>
                  </div>
                  <div class="introduce_line">
                    <img src="../../../assets/images/cloudService/Get_in.png" alt />
                    <div class="introduce_txt">
                      <div class="introduce_txt-1">取代人工验证，大大节省人工成本</div>
                    </div>
                  </div>
                  <hr class="hr_str" />
                  <div class="introduce_title introduce_title_1">适用场景</div>
                  <div class="introduce_line">
                    <img src="../../../assets/images/cloudService/Get_in.png" alt />
                    <div class="introduce_txt">
                      <div class="introduce_txt-1">鉴定用户身份是否真实有效，包括金融借贷的贷款人认证、证券开户的开户人认证、网络直播的主播认证、电商平台的商家认证等</div>
                    </div>
                  </div>
                  <button class="zhuce zhiCustomBtn" @click="zhichiBtn">立即咨询</button>
                </div>
              </van-tab>
            </van-tabs>
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
                  <router-link to="/product/voice" tag="div" class="product_title_rightTxt">了解更多</router-link>
                  <img src="../../../assets/images/cloudService/right.png" alt />
                </div>
              </div>
              <div
                class="comp_product_text"
              >汇集覆盖国际及全国各地市的三网线路和码号资源，支持客户一站式选购，为客户提供多种对接方式，降低线路和码号资源获取难度，提高业务执行效率</div>
            </div> -->
            <div class="comp_item_product">
              <div class="comp_product_title comp_product_title2">
                <div class="product_title_left">
                  <img src="../../../assets/images/numbercheck/ys_45.png" alt />
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
              <div class="comp_product_title comp_product_title1">
                <div class="product_title_left">
                  <img src="../../../assets/images/privacy/yy_45.png" alt />
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
          </div>
        </div>
        <div class="service" style="margin-top: 0;">
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

<script src="./identitycheck.controller.js"></script>

<style lang='scss' >
.identitycheck {
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
        padding: 0 1.3067rem;
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
        border: 1px solid rgba(248, 209, 166, 1);
        .price_name {
          font-size: 0.5067rem;
          font-weight: 500;
          color: rgba(0, 0, 0, 0.85);
          line-height: 0.7067rem;
          margin-top: 0.56rem;
          display: flex;
          align-items: center;
          margin-bottom: 0.1067rem;
          span {
            font-size: 0.3733rem;
            font-weight: 500;
            color: rgba(0, 0, 0, 0.45);
            line-height: 0.5333rem;
          }
        }
        .price_text {
          font-size: 0.32rem;
          font-weight: 500;
          color: rgba(0, 0, 0, 0.45);
          line-height: 0.44rem;
          padding: 0 0.6667rem;
          text-align: center;
        }
        .price {
          display: flex;
          flex-direction: column;
          align-items: center;
          background: rgba(254, 248, 242, 1);
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
            color: rgba(204, 0, 0, 1);
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
        //   background: rgba(245, 245, 245, 1);
        background: #fff;
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
    background: url("../../../assets/images/numbercheck/recommend.png")
      no-repeat top;
    background-size: 8.66rem 3.3333rem;
    background-position: 0.6667rem 1.6rem;
  }
  .comp_item .comp_item_center .van-tabs__nav {
    justify-content: space-between;
  }
  .searchBar {
    ul {
      width: 100%;
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
      background: #f5f5f5;
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
        background: #f5f5f5;
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
  .introduce_title_1 {
    margin-top: 0 !important;
  }
}
.identitycheck .comp_item .comp_item_center .van-tabs--card > .van-tabs__wrap {
  padding: 0 0.6667rem;
}
.identitycheck .comp_item .comp_item_center .van-tabs__nav .van-tab {
  flex-basis: inherit !important;
}
.identitycheck .comp_item .comp_item_center .van-tabs__nav {
  padding: 0;
}
@media screen and (max-width: 320px) {
  .identitycheck .comp_item .comp_item_center .van-tabs__nav .van-tab {
    flex: 1;
    font-size: 0.32rem;
    border-right: none;
    line-height: 0.8rem;
    padding: 0 0.1333rem;
  }
}
</style>