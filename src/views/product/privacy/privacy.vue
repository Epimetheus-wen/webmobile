<template>
  <div class="product privacy">
    <!-- 展示图 -->
    <div class="banner">
      <img class="banner_img" src="../../../assets/images/privacy/banner.png" alt />
      <div class="banner_mod">
        <div class="banner_mod_title">隐私号</div>
        <div class="banner_mod_text">
          基于基础运营商通信网络，集成隐私号能力后，企业平台的业务员与用户通话时，对双方的手机号码进行隐藏保护，有效防止个人号码泄露及业务跳单，同时可
          <br />通过录音分析管控平台安全性、
          <br />提升服务质量
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
              <li :class="{active: navIndex===0}" @click="scrollTo(0)">行业痛点</li>
              <li :class="{active: navIndex===1}" @click="scrollTo(1)">产品优势</li>
              <li :class="{active: navIndex===2}" @click="scrollTo(2)">应用场景</li>
              <li :class="{active: navIndex===3}" @click="scrollTo(3)">配套服务</li>
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
                <img src="../../../assets/images/privacy/list1.png" alt />
              </div>
              <div class="comp_list__txt">
                号码标记
                <div>手机软件的电话标记造成业务号码体验极差</div>
              </div>
            </div>
            <div class="comp_item_center_list1">
              <div class="comp_list__img">
                <img src="../../../assets/images/privacy/list2.png" alt />
              </div>
              <div class="comp_list__txt">
                恶意刷单
                <div>缺少用户隐私管控，产生恶意刷单等行为</div>
              </div>
            </div>
            <div class="comp_item_center_list1">
              <div class="comp_list__img">
                <img src="../../../assets/images/privacy/list3.png" alt />
              </div>
              <div class="comp_list__txt">
                客源流失
                <div>平台无法管控业务，业务员离职带走大量客源</div>
              </div>
            </div>
            <div class="comp_item_center_list1">
              <div class="comp_list__img">
                <img src="../../../assets/images/privacy/list4.png" alt />
              </div>
              <div class="comp_list__txt">
                隐私泄露
                <div>因网购、快递单致个人信息泄露产生骚扰</div>
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
              <div class="comp_list__title">号码丰富</div>
              <div class="comp_list__txt">可提供100多个城市的虚商码号，以及全国31个省市中国联通码号</div>
            </div>
            <div class="comp_item_center_list2">
              <div class="hr_red"></div>
              <div class="comp_list__title">稳定性高</div>
              <div class="comp_list__txt">排除运营商因素外，电话接通率90%以上</div>
            </div>
            <div class="comp_item_center_list2">
              <div class="hr_red"></div>
              <div class="comp_list__title">可定制化</div>
              <div class="comp_list__txt">提供短信收发，白名单管理，屏显名片，漏话提醒，全程录音，话务分析等能力，为个性化需求做定制化服务</div>
            </div>
            <div class="comp_item_center_list2">
              <div class="hr_red"></div>
              <div class="comp_list__title">经验丰富</div>
              <div class="comp_list__txt">作为滴滴出行等互联网巨头企业安全隐私号业务的主要合作方，承载了日呼千万级业务量</div>
            </div>
          </div>
        </div>
        <div class="comp_item">
          <div class="comp_item_top">应用场景</div>
          <hr class="hr_strip" />
          <div class="comp_item_center animated1">
            <van-tabs class="card_animated" animated>
              <van-tab title="中介服务">
                <div class="card_animated_main">
                  <div class="card_animated_title">痛点担忧</div>
                  <div class="card_animated_conter">
                    <div>· 手机软件的电话标记造成客户对业务号码体验极差</div>
                    <div>· 客户无法判断陌生号码意图，常常拒接业务员电话</div>
                    <div>· 平台无法管控业务，业务员离职带走大量客源</div>
                  </div>
                  <div class="card_animated_title">方案机制</div>
                  <div
                    class="card_animated_conter"
                  >后台为员工绑定专属隐私号，一线业务人员通过此号对外开展业务。业务人员拨打电话时，客户手机显示业务员隐私号，搭配企业名片定制服务，增加来电接起效率。但业务员侧无法看到客户真实号码，即使离职，企业后台仍然保留存客源详情</div>
                  <div class="card_animated_title">解决问题</div>
                  <div class="card_animated_conter">
                    <div>· 提高企业电话拜访的接通率</div>
                    <div>· 后台通话全程录音，有效帮助服务平台留存客源信息</div>
                  </div>
                </div>
              </van-tab>
              <van-tab class="card_animated" title="用车出行">
                <div class="card_animated_main">
                  <div class="card_animated_title">痛点担忧</div>
                  <div
                    class="card_animated_conter"
                  >打车场景中，乘客与司机通过真实号码联系，订单结束后，司机通过短信、拨打电话方式频繁骚扰乘客，使乘客苦不堪言投诉客服且对打车平台失去信任，导致用户流失。</div>
                  <div class="card_animated_title">方案机制</div>
                  <div
                    class="card_animated_conter"
                  >在打车出行场景中，用车订单生成后，司机与乘客的手机号在平台上建立绑定关系，服务过程双方通过隐私号码联系对方，双方均看不到对方号码，有效保护隐私，服务结束后，解除绑定，避免后续纠纷</div>
                  <div class="card_animated_title">解决问题</div>
                  <div class="card_animated_conter">
                    <div>· 全程保护双方号码安全</div>
                    <div>· 后台通话全程录音，有效帮助商家管控司机服务质量，查找纠纷原因、司乘人员人身安全问题</div>
                  </div>
                </div>
              </van-tab>
              <van-tab class="card_animated" title="电商物流">
                <div class="card_animated_main">
                  <div class="card_animated_title">痛点担忧</div>
                  <div class="card_animated_conter">
                    <div>· 网购用户个人信息泄露的痛点广泛存在，因快递单等泄漏信息导致用户收到诈骗电话，甚至上门骚扰</div>
                    <div>· 隐私保护是保障平台利益的重要手段，平台缺少用户隐私管控，因而产生刷单、交叉营销等损害平台长期发展利益的恶性事件</div>
                  </div>
                  <div class="card_animated_title">方案机制</div>
                  <div
                    class="card_animated_conter"
                  >在用户成功下单时为其绑定一个隐私号，支持数据同步到平台商家、物流企业系统中， 保证商家与物流企业可通过隐私号顺利沟通，同时在结束订单后解绑号码。提供全程录音、白名单管理与话务数据报表功能，帮助平台有效管控各经营主体的服务质量。</div>
                  <div class="card_animated_title">解决问题</div>
                  <div class="card_animated_conter">
                    <div>· 实现全流程全单据流的号码保护</div>
                    <div>· 保障双方沟通的同时提升平台对第三方卖家的服务管控力</div>
                    <div>· 搭配扫码呼等定制服务，可大大优化配送员工作效率与工作体验</div>
                  </div>
                </div>
              </van-tab>
            </van-tabs>
          </div>
        </div>
        <div class="comp_item">
          <div class="comp_item_top">配套服务</div>
          <hr class="hr_strip" />
          <div class="comp_item_center">
            <div class="comp_item_center_listT">
              <div class="comp_item_listT_item">
                <div class="listT_item_left">
                  <img src="../../../assets/images/privacy/voice.png" alt />
                </div>
                <div class="listT_item_right">
                  <div class="listT_item_right_title">语音通话</div>
                  <div class="listT_item_right_text">拨打隐私号可接通主被叫绑定的真实号码，用户进行语音通话的通话感知与普通通话无异</div>
                </div>
              </div>
              <div class="comp_item_listT_item">
                <div class="listT_item_left">
                  <img src="../../../assets/images/privacy/guanli.png" alt />
                </div>
                <div class="listT_item_right">
                  <div class="listT_item_right_title">话务管理</div>
                  <div class="listT_item_right_text">平台提供实时话单，可协助客户通过通话行为模型的分析，并对异常通话进行预警</div>
                </div>
              </div>
              <div class="comp_item_listT_item">
                <div class="listT_item_left">
                  <img src="../../../assets/images/privacy/bai.png" alt />
                </div>
                <div class="listT_item_right">
                  <div class="listT_item_right_title">白名单管理</div>
                  <div class="listT_item_right_text">客户使用白名单增加，编辑，删减管理中间号的接通权限</div>
                </div>
              </div>
              <div class="comp_item_listT_item">
                <div class="listT_item_left">
                  <img src="../../../assets/images/privacy/louhua.png" alt />
                </div>
                <div class="listT_item_right">
                  <div class="listT_item_right_title">漏话提醒</div>
                  <div class="listT_item_right_text">当双方联系人漏接电话时，平台可通过短信推送方式提醒</div>
                </div>
              </div>
              <div class="comp_item_listT_item">
                <div class="listT_item_left" style="width:0.5067rem;margin-left:0.0267rem">
                  <img src="../../../assets/images/privacy/luyin.png" alt />
                </div>
                <div class="listT_item_right">
                  <div class="listT_item_right_title">录音管控</div>
                  <div class="listT_item_right_text">通话过程可全程录音并供客户提取，帮助客户管控服务质量</div>
                </div>
              </div>
              <div class="comp_item_listT_item">
                <div class="listT_item_left">
                  <img src="../../../assets/images/privacy/qiye.png" alt />
                </div>
                <div class="listT_item_right">
                  <div class="listT_item_right_title">企业名片</div>
                  <div class="listT_item_right_text">当被叫手机振铃时，向被叫推送一条闪信的信息，提高被叫接听率</div>
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
                  <img src="../../../assets/images/privacy/ydx-45.png" alt />
                  <div class="product_title_leftTxt">云电销</div>
                </div>
                <div class="product_title_right">
                  <router-link
                    to="/product/cloudelectricpin"
                    tag="div"
                    class="product_title_rightTxt"
                  >了解更多</router-link>
                  <img src="../../../assets/images/cloudService/right.png" alt />
                </div>
              </div>
              <div
                class="comp_product_text"
              >用户外呼营销场景，是为中小企业客户提供的轻量化呼叫中心软件产品，主要包含呼叫任务管理、员工外呼检测、呼叫结果统计等，帮助客户提高销售转化率，促进客户成交</div>
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

<script src="./privacy.controller.js"></script>

<style lang='scss' >
.privacy {
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
          line-height: 0.5333rem;
          font-size: 0.3467rem;
          margin-left: 0.4267rem;
          margin-top: 0.1467rem;
          width: 6.5333rem;
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
      //   background: #f5f5f5;
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
        // background: #f5f5f5;
        .van-tab {
          padding: 0 0.3333rem;
        }
      }
      .van-tabs__content {
        width: 8.6rem;
        // height:10.2667rem;
        border-radius: 0.08rem;
        border: 1px dashed rgba(121, 121, 121, 0.65);
        margin-bottom: 0.6667rem;
        padding-bottom: 0.5867rem;
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
  .comp_item_center_listT {
    display: flex;
    flex-wrap: wrap;
    padding: 0 0.6667rem;
    .comp_item_listT_item {
      display: flex;
      width: 50%;
      flex-wrap: wrap;
      .listT_item_left {
        width: 0.5333rem;
        img {
          width: 100%;
          display: block;
          //   margin-top
        }
      }
      .listT_item_right {
        width: 3.2rem;
        margin-left: 0.2rem;
        // margin-right: 0.5rem;
        margin-bottom: 0.4267rem;
        .listT_item_right_title {
          font-size: 0.3467rem;
          font-weight: 500;
          color: rgba(0, 0, 0, 0.85);
          line-height: 0.3733rem;
          margin-bottom: 0.1867rem;
        }
        .listT_item_right_text {
          font-size: 0.32rem;
          font-weight: 500;
          color: rgba(0, 0, 0, 0.45);
          line-height: 0.48rem;
        }
      }
    }
  }
}
@media screen and (max-width: 320px) {
  .privacy .comp_item .comp_item_center .van-tabs__nav .van-tab {
    flex: 1;
    font-size: 0.32rem;
    border-right: none;
    line-height: 0.8rem;
    padding: 0 0.1333rem;
  }
}
</style>