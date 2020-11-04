<template>
  <div class="dataModule">
    <div v-if="sublevel">
      <DataModuleHeader :headertitle="headertitle"></DataModuleHeader>
      <div class="dataModule_main">
        <!-- 金额信息 -->
        <div class="dataModule_money">
          <router-link to="/dataModule/income" class="balance">
            <div class="money_title">账户金额 (元)</div>
            <div class="money_num">{{dataModule.remainingSum}}</div>
          </router-link>
          <hr class="sj_long" />
          <div class="elseMoney">
            <div class="money">
              <div class="money_title">待支付金额 (元)</div>
              <div class="money_num">{{dataModule.noPayment}}</div>
            </div>
            <router-link tag="div" to="/dataModule/monitoring" class="money">
              <div class="money_title">今日消费 (元)</div>
              <div class="money_num">{{dataModule.todayConsume}}</div>
            </router-link>
          </div>
        </div>
        <!-- 产品信息 -->
        <div class="dataModule_list">
          <div class="dataModule_list_title">产品监控</div>
          <div class="center">
            <div class="product_item" @click="toproductData(1)">
              <img
                class="product_item_leftImg"
                src="../../assets/images/dataModule/SMS_notification.png"
                alt
              />
              <div class="product_item_right">
                <div class="product_item_rightTitle">
                  <div class>通知短信</div>
                  <div class="init">
                    <img v-if="informNote.is_activate==1" src="../../assets/images/dataModule/active@1x.png" alt />
                    <img v-else src="../../assets/images/dataModule/notactive@1x.png" alt="">
                  </div>
                </div>
                <div class="product_item_rightjRecord">
                  <div class="rightjRecord">
                    <div class="rightjRecord_num">
                      <span class="num">{{informNote.count}}</span>
                      <span class="danwei">条</span>
                    </div>
                    <div class="rightjRecord_text">今日发送</div>
                  </div>
                  <img
                    class="product_item_rightImg"
                    src="../../assets/images/dataModule/left@1x.png"
                    alt
                  />
                </div>
              </div>
            </div>
            <div class="product_item" @click="toproductData(2)">
              <img
                class="product_item_leftImg"
                src="../../assets/images/dataModule/VIP_SMS.png"
                alt
              />
              <div class="product_item_right">
                <div class="product_item_rightTitle">
                  <div class>会员推广短信</div>
                  <div class="init">
                    <img v-if="vipNote.is_activate==1" src="../../assets/images/dataModule/active@1x.png" alt />
                    <img v-else src="../../assets/images/dataModule/notactive@1x.png" alt="">
                  </div>
                </div>
                <div class="product_item_rightjRecord">
                  <div class="rightjRecord">
                    <div class="rightjRecord_num">
                      <span class="num">{{vipNote.count}}</span>
                      <span class="danwei">条</span>
                    </div>
                    <div class="rightjRecord_text">今日发送</div>
                  </div>
                  <img
                    class="product_item_rightImg"
                    src="../../assets/images/dataModule/left@1x.png"
                    alt
                  />
                </div>
              </div>
            </div>
            <div class="product_item" @click="toproductData(3)">
              <img
                class="product_item_leftImg"
                src="../../assets/images/dataModule/code.png"
                alt
              />
              <div class="product_item_right">
                <div class="product_item_rightTitle">
                  <div class>验证码短信</div>
                  <div class="init">
                    <img v-if="codeNote.is_activate==1" src="../../assets/images/dataModule/active@1x.png" alt />
                    <img v-else src="../../assets/images/dataModule/notactive@1x.png" alt="">
                  </div>
                </div>
                <div class="product_item_rightjRecord">
                  <div class="rightjRecord">
                    <div class="rightjRecord_num">
                      <span class="num">{{codeNote.count}}</span>
                      <span class="danwei">条</span>
                    </div>
                    <div class="rightjRecord_text">今日发送</div>
                  </div>
                  <img
                    class="product_item_rightImg"
                    src="../../assets/images/dataModule/left@1x.png"
                    alt
                  />
                </div>
              </div>
            </div>
            <div class="product_item" @click="toproductData(4)">
              <img
                class="product_item_leftImg"
                src="../../assets/images/dataModule/voice.png"
                alt
              />
              <div class="product_item_right">
                <div class="product_item_rightTitle">
                  <div class>语音通知</div>
                  <div class="init">
                    <img v-if="voice.is_activate==1" src="../../assets/images/dataModule/active@1x.png" alt />
                    <img v-else src="../../assets/images/dataModule/notactive@1x.png" alt="">
                  </div>
                </div>
                <div class="product_item_rightjRecord">
                  <div class="rightjRecord">
                    <div class="rightjRecord_num">
                      <span class="num">{{voice.count}}</span>
                      <span class="danwei">条</span>
                    </div>
                    <div class="rightjRecord_text">今日发送</div>
                  </div>
                  <img
                    class="product_item_rightImg"
                    src="../../assets/images/dataModule/left@1x.png"
                    alt
                  />
                </div>
              </div>
            </div>
            <div class="product_item" @click="toproductData(5)">
              <img
                class="product_item_leftImg"
                src="../../assets/images/dataModule/shenfenheyan.png"
                alt
              />
              <div class="product_item_right">
                <div class="product_item_rightTitle">
                  <div class>身份核验</div>
                  <div class="init">
                    <img v-if="idData.is_activate==1" src="../../assets/images/dataModule/active@1x.png" alt />
                    <img v-else src="../../assets/images/dataModule/notactive@1x.png" alt="">
                  </div>
                </div>
                <div class="product_item_rightjRecord">
                  <div class="rightjRecord">
                    <div class="rightjRecord_num">
                      <span class="num">{{idData.count}}</span>
                      <span class="danwei">条</span>
                    </div>
                    <div class="rightjRecord_text">今日发送</div>
                  </div>
                  <img
                    class="product_item_rightImg"
                    src="../../assets/images/dataModule/left@1x.png"
                    alt
                  />
                </div>
              </div>
            </div>
            <div class="product_item" @click="toproductData(6)">
              <img
                class="product_item_leftImg"
                src="../../assets/images/dataModule/haomayanzhen.png"
                alt
              />
              <div class="product_item_right">
                <div class="product_item_rightTitle">
                  <div class>号码验真</div>
                  <div class="init">
                    <img v-if="phoneData.is_activate==1" src="../../assets/images/dataModule/active@1x.png" alt />
                    <img v-else src="../../assets/images/dataModule/notactive@1x.png" alt="">
                  </div>
                </div>
                <div class="product_item_rightjRecord">
                  <div class="rightjRecord">
                    <div class="rightjRecord_num">
                      <span class="num">{{phoneData.count}}</span>
                      <span class="danwei">条</span>
                    </div>
                    <div class="rightjRecord_text">今日发送</div>
                  </div>
                  <img
                    class="product_item_rightImg"
                    src="../../assets/images/dataModule/left@1x.png"
                    alt
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script src='./dataModule.controller.js'>
</script>

<style lang='scss' scoped>
.dataModule {
  .dataModule_main {
    .dataModule_money {
      height: 4.2667rem;
      background: url("../../assets/images/dataModule/bg.jpg") no-repeat;
      background-size: cover;
      .balance {
        height: 2.4rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        .money_title {
          font-size: 0.3467rem;
          color: #242424;
          text-align: center;
          margin-bottom: 0.1333rem;
        }
        .money_num {
          font-size: 0.48rem;
          color: #f83829;
          font-weight: 800;
          text-align: center;
        }
      }
      .sj_long {
        margin: 0 0.4rem;
        border: none;
        border-bottom: 1px solid #aeb0ba;
      }
      .elseMoney {
        display: flex;
        justify-content: space-around;
        .money {
          height: 1.8667rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          .money_title {
            font-size: 0.3067rem;
            color: #838383;
            text-align: center;
            margin-bottom: 0.1333rem;
          }
          .money_num {
            font-size: 0.36rem;
            color: #303b54;
            font-weight: 600;
            text-align: center;
          }
        }
      }
    }
    .dataModule_list {
      padding-top: 0.48rem;
      background: #fff;
      padding-left: 0.3733rem;
      .dataModule_list_title {
        font-size: 0.4rem;
        line-height: 1.04rem;
        font-weight: 600;
      }
      .center {
        .product_item {
          display: flex;
          align-items: center;
          height: 1.8667rem;
          .product_item_leftImg {
            width: 0.6rem;
            height: 0.6rem;
            display: block;
            margin-right: 0.32rem;
            margin-left: 0.1067rem;
          }
          .product_item_right {
            display: flex;
            justify-content: space-between;
            align-items: center;
            height: 1.8667rem;
            width: 8.5733rem;
            border-bottom: 1px solid #dddddd;
            .product_item_rightTitle {
              display: flex;
              flex-direction: column;
              font-size: 0.32rem;
              .init {
                height: 0.4rem;
                margin-top: 0.1333rem;
                img {
                  //   width: 1.0133rem;
                  height: 0.4rem;
                  display: block;
                }
              }
            }
            .product_item_rightjRecord {
              display: flex;
              justify-content: space-between;
              align-items: center;
              .rightjRecord {
                  text-align: right;
                .rightjRecord_num {
                  font-size: 0.32rem;
                  color: #232324;
                  margin-bottom: 0.1067rem;
                  .danwei {
                    font-size: 0.2933rem;
                  }
                }
                .rightjRecord_text {
                  font-size: 0.2667rem;
                  color: #797979;
                }
              }
              .product_item_rightImg {
                width: 0.1867rem;
                height: 0.3333rem;
                display: block;
                padding-right: 0.3733rem;
                padding-left: 0.5333rem;
              }
            }
          }
        }
        .product_item:last-child {
          margin-bottom: 0.7733rem;
          .product_item_right {
            border-bottom: none;
          }
        }
      }
    }
  }
}
</style>