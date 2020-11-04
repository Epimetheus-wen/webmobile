<template>
  <div class="privacyData">
    <div class="prductData">
      <DataModuleHeader :headertitle="headertitle"></DataModuleHeader>
      <div class="prductData_main">
        <div class="prductData_top">
          <div class="prductData_name">
            <img class="img" src="../../assets/images/dataModule/secret.png" alt />
            <div class="title">
              <div class="name">隐私号</div>
              <div class="init">
                <img src="../../assets/images/dataModule/opened.png" alt />
              </div>
            </div>
          </div>
          <div class="prductData_info">
            <div class="item">
              <div class="item_num">
                <span class="item_shu">{{topData.tMoney}}</span>
              </div>
              <div class="item_txt">昨日费用(元)</div>
            </div>
            <div class="item">
              <div class="item_num">
                <span class="item_shu">{{topData.mMoney}}</span>
              </div>
              <div class="item_txt">本月费用(元)</div>
            </div>
          </div>
        </div>
        <div class="prductData_center">
          <van-tabs :lazy-render="false">
            <van-tab title="业务数据">
              <div class="employ">
                <div class="filter">
                  <div class="filter_item filter_item1">
                    <div class="filter_item_title">Appkey</div>
                    <div class="filter_item_buttom">
                      <div class="select_item select_item2">
                        <van-cell @click="showPopup('account')">
                          <div class="value">
                            <span v-text="account.value==''?'全部Appkey':account.value" style="width:2rem"></span>
                            <i class="fa fa-caret-down"></i>
                          </div>
                        </van-cell>
                        <van-popup
                          v-model="account.show"
                          round
                          position="bottom"
                          class="product_popup"
                        >
                          <div class="product_popup_top">
                            <button class="left" @click="cancel('account')">取消</button>
                            <button class="right" @click="affirm('account')">确认</button>
                          </div>
                          <!-- :class="item.APP_KEY==account.value?'put_item put_item_ation':'put_item'" -->
                          <div class="product_popup_center">
                            <div
                              v-for="(item,index) in appKeyList"
                              :key="index"
                              :class="index==account.n?'put_item put_item_ation':'put_item'"
                              @click="accountAction(item.APP_KEY,index)"
                              v-text="item.APP_KEY==''?'全部Appkey':item.APP_KEY"
                            ></div>
                          </div>
                        </van-popup>
                      </div>
                    </div>
                  </div>
                  <div class="filter_item">
                    <div class="filter_item_title">时间范围</div>
                    <div class="filter_item_buttom">
                      <div class="select_item">
                        <van-cell @click="employ.Time1.showPicker = true">
                          <div class="value">
                            <span v-text="employ.Time1.value"></span>
                            <i class="fa fa-caret-down"></i>
                          </div>
                        </van-cell>
                        <van-popup v-model="employ.Time1.showPicker" position="bottom">
                          <van-datetime-picker
                          v-model="employ.Time1.currentDate"
                            :formatter="formatter"
                            :min-date="employ.Time1.minDate"
                            :max-date="employ.Time1.maxDate"
                            title="选择日期"
                            type="date"
                            @confirm="onTime"
                            @cancel="employ.Time1.showPicker = false"
                          />
                        </van-popup>
                      </div>
                      <div class="zhi">至</div>
                      <div class="select_item">
                        <van-cell @click="employ.Time2.showPicker = true">
                          <div class="value">
                            <span v-text="employ.Time2.value"></span>
                            <i class="fa fa-caret-down"></i>
                          </div>
                        </van-cell>
                        <van-popup v-model="employ.Time2.showPicker" position="bottom">
                          <van-datetime-picker
                            v-model="employ.Time2.currentDate"
                            :formatter="formatter2"
                            :min-date="employ.Time2.minDate"
                            :max-date="employ.Time2.maxDate"
                            title="选择日期"
                            type="date"
                            @confirm="onTime2"
                            @cancel="employ.Time2.showPicker = false"
                          />
                        </van-popup>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="employ-main">
                  <div class="chart" id="chart">
                    <div class="title">数据概览</div>
                    <!-- <div class="lineChart" id="lineChart"></div> -->
                    <div class="leb_title">
                      <span class="title1">数据更新于：</span>
                      <span class="time">{{uptime}}</span>
                    </div>
                    <canvas class="lineChart" id="lineChart1"></canvas>
                  </div>

                  <!-- 表格 -->
                  <div class="collect_table">
                    <div class="top">通话汇总</div>
                    <div class="collect_table—title">
                      <div class="left">日期</div>
                      <div class="center">号码数</div>
                      <div class="center">话单量(条)</div>
                      <div class="right">
                        <van-cell @click="showPopup('tablefilter')">
                          <div class="value">
                            <span v-text="tablefilter.value"></span>
                            <i class="fa fa-caret-down"></i>
                          </div>
                        </van-cell>
                        <van-popup
                          v-model="tablefilter.show"
                          round
                          position="bottom"
                          class="product_popup"
                        >
                          <div class="product_popup_top">
                            <button class="left" @click="cancel('tablefilter')">取消</button>
                            <button class="right" @click="affirm('tablefilter')">确认</button>
                          </div>
                          <div class="product_popup_center" style="justify-content: start;">
                            <div
                                :style="item.name=='计费分钟数'?'':'margin-right:0.2667rem'"
                              v-for="(item,index) in tablefilter.list"
                              :key="index"
                              :class="item.value==tablefilter.n?'put_item put_item_ation':'put_item'"
                              @click="tablefilterAction(item.name,item.value)"
                            >{{item.name}}</div>
                          </div>
                        </van-popup>
                      </div>
                    </div>
                    <van-list
                      v-model="employLoad.loading"
                      :finished="employLoad.finished"
                      finished-text="没有更多了"
                      @load="onLoad"
                    >
                      <div class="list_item" v-for="(item,index) in employList" :key="index">
                        <div class="left">{{item.date}}</div>
                        <div class="center">{{item.phoneNum}}</div>
                        <div class="center">{{item.callNum}}</div>
                        <div class="right" v-show="tablefilter.value=='接听率'">{{item.rate}}</div>
                        <div
                          class="right"
                          v-show="tablefilter.value=='计费分钟数'"
                        >{{item.billingMin}}</div>
                        <div class="right" v-show="tablefilter.value=='费用'">{{item.money}}</div>
                      </div>
                    </van-list>
                  </div>
                </div>
              </div>
            </van-tab>
            <van-tab title="消费数据">
              <div class="allowance">
                <div class="employ-main">
                  <!-- <div class="chart">
                    <div class="title">余量占比</div>
                    <div class="doughnutChart" id="doughnutChart"></div>
                  </div>-->

                  <!-- 表格 -->
                  <div class="collect_info">
                    <div class="collect_info_total">
                      <div class="title">每日消费明细请前往PC端查看</div>
                    </div>
                    <div class="collect_info_time">
                      <div class="title">数据更新于：</div>
                      <div class="num">{{uptime}}</div>
                    </div>
                  </div>
                  <div class="collect_table">
                    <div class="top">
                      <div class="collect_filter">
                        <div class="select_item">
                          <van-cell @click="calendar.show = true">
                            <div class="value">
                              <span v-text="calendar.date"></span>
                              <i class="fa fa-caret-down"></i>
                            </div>
                          </van-cell>
                          <van-calendar
                            v-model="calendar.show"
                            :min-date="calendar.minDate"
                            :max-date="calendar.maxDate"
                            :default-date="calendar.defaultData"
                            :allow-same-day="true"
                            type="range"
                            :round="false"
                            @confirm="onConfirm"
                          />
                        </div>
                        <div class="select_item">
                          <van-cell @click="showPopup('consumer')">
                            <div class="value">
                              <span v-text="consumer.value"></span>
                              <i class="fa fa-caret-down"></i>
                            </div>
                          </van-cell>
                          <van-popup
                            v-model="consumer.show"
                            round
                            position="bottom"
                            class="product_popup"
                            :style="{ minHeight: '30%' }"
                          >
                            <div class="product_popup_top">
                              <button class="left" @click="cancel('consumer')">取消</button>
                              <button class="right" @click="affirm('consumer')">确认</button>
                            </div>
                            <div class="product_popup_center">
                              <div
                                v-for="(item,index) in consumer.list"
                                :key="index"
                                :class="item.value==consumer.n?'put_item put_item_ation':'put_item'"
                                @click="consumerAction(item.name,item.value)"
                              >{{item.name}}</div>
                            </div>
                          </van-popup>
                        </div>
                      </div>
                    </div>
                    <div class="collect_table—title">
                      <div class="left left1">日期</div>
                      <div class="center">消费数量</div>
                      <div class="right">消费总额(元)</div>
                    </div>
                    <van-list
                      v-model="allowanceLoad.loading"
                      :finished="allowanceLoad.finished"
                      finished-text="没有更多了"
                      @load="onLoad2"
                    >
                      <div class="list_item" v-for="(item,index) in allowanceList" :key="index">
                        <div class="left left1">{{item.date}}</div>
                        <!-- <div class="center">{{item.cost_count}}</div> -->
                        <div class="center" v-show="consumer.value=='全部消费项'">{{item.cost_count}}</div>
                        <div class="center" v-show="consumer.value=='号码费'">{{item.phone_count}}</div>
                        <div class="center" v-show="consumer.value=='通话费'">{{item.call_count}}</div>
                        <div class="right" v-show="consumer.value=='全部消费项'">{{item.total_money}}</div>
                        <div class="right" v-show="consumer.value=='号码费'">{{item.number_fee}}</div>
                        <div class="right" v-show="consumer.value=='通话费'">{{item.calling_fee}}</div>
                      </div>
                    </van-list>
                  </div>
                </div>
              </div>
            </van-tab>
          </van-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script src='./privacyData.controller.js'>
</script>

<style lang='scss' >

.chart-wrapper {
  position: relative;
}
.f2-tooltip {
  position: absolute;
  z-index: 99;
  background-color: #f92f1a;
  border-radius: 0.0533rem;
  text-align: center;
//   width: 0.9333rem;
  height: 0.4rem;
  line-height: 0.4rem;
  padding: 0.04rem 0.1467rem;
  opacity: 0;
  // margin-top: 8.0025px;
}
.f2-tooltip:after {
  content: " ";
  width: 0;
  height: 0;
  border-left: 0.08rem solid transparent;
  border-right: 0.08rem solid transparent;
  border-top: 0.1067rem solid #f92f1a;
  position: absolute;
  left: 50%;
  margin-left: -0.08rem;
  bottom: -0.1067rem;
}
.f2-tooltip span {
  display: block;
  color: #fff;
  font-size: 0.32rem;
}

.privacyData {
  // 弹框
  .van-overlay {
    z-index: 999999998 !important;
  }
  .product_popup,
  .van-popup--bottom,
  .van-dropdown-item__content {
    z-index: 9999999999 !important;
  }

  // 表格
  .collect_filter {
    display: flex;
    align-items: center;
    .select_item:nth-child(2) {
      .van-cell {
        padding-left: 1.3333rem;
      }
    }
    .select_item {
      .van-calendar__day {
        font-size: 0.3333rem;
        height: 1.7333rem;
      }
      .van-calendar__popup{
            border-radius: 0.08rem 0.08rem 0 0;
        }
      .van-calendar__bottom-info {
        font-size: 0.32rem;
        line-height: 0.2667rem;
        display: none;
      }

      .van-calendar__header-subtitle,
      .van-calendar__header-title,
      .van-calendar__month-title {
        height: 1.1733rem;
        line-height: 1.1733rem;
        font-size: 0.3733rem;
      }
      .van-calendar__header-title {
        font-size: 0.4267rem;
        background: #fcf9f9;
      }
      .van-calendar__weekday {
        font-size: 0.32rem;
        line-height: 0.8rem;
      }
      .van-calendar__confirm {
        font-size: 0.3733rem;
        height: 0.96rem;
        margin: 0.2667rem 0;
        line-height: 0.9067rem;
      }
      .van-calendar__popup .van-popup__close-icon {
        font-size: 0.5867rem;
      }
      .van-cell {
        font-size: 0.2933rem;
        padding: 0;
        line-height: 100%;
        color: #797979;
        .van-cell__value--alone {
          display: flex;
          .title {
            margin-right: 0.2133rem;
            color: #969799;
          }
          .value {
            display: flex;
            align-items: center;
            span {
              margin-right: 0.1333rem;
              color: #242424;
            }
            i {
              font-size: 0.2rem;
              color: #242424;
            }
          }
        }
      }
      .product_popup {
        border-radius: 0.08rem 0.08rem 0 0;
        .product_popup_top {
          height: 1.4667rem;
          background: #fcf9f9;
          font-size: 0.4rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 0.8rem;
          .left {
            color: #797979;
            background: #fcf9f9;
            border: none;
          }
          .right {
            color: #f9543a;
            background: #fcf9f9;
            border: none;
          }
        }
        .product_popup_center {
          padding: 0.4667rem 0.3733rem;
          display: flex;
          justify-content:space-between;
          flex-wrap: wrap;
          .put_item {
            //   margin: 0 0.2667rem;
            text-align: center;
            line-height: 0.9333rem;
            height: 0.9333rem;
            width: 2.8267rem;
            border: 1px solid #e9e9e9;
            border-radius: 0.08rem;
            font-size: 0.3467rem;
            color: #797979;
            margin-bottom: 0.4267rem;
          }
          .put_item_ation {
            border: 1px solid #f9543a;
            color: #f9543a;
            background: #fff6f5;
          }
        }
      }
    }
  }
  .collect_info {
    margin-top: 1px;
    padding: 0.5333rem 0.3733rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #f5f5f5;
    .collect_info_total {
      font-size: 0.28rem;
      color: #959595;
      display: flex;
      align-items: center;
      .num {
        margin-left: 0.16rem;
        color: #242424;
      }
    }
    .collect_info_time {
      font-size: 0.2667rem;
      color: #959595;
      display: flex;
      align-items: center;
    }
  }
  .collect_table {
    background: #fff;
    .top {
      height: 1.5733rem;
      font-size: 0.4rem;
      color: #242424;
      font-weight: 600;
      line-height: 1.5733rem;
      margin-left: 0.3733rem;
      display: flex;
      align-items: center;
    }
    .collect_table—title {
      display: flex;
      font-size: 0.32rem;
      line-height: 1.2rem;
      padding-left: 0.4rem;
      color: #949494;
      background: #faf9f9;
      & > div {
        width: 33.3%;
      }
      .left1 {
        width: 30%;
      }
      .center,
      .right {
        text-align: center;
      }
      .center {
      }
      .van-cell {
        background: #faf9f9;
        font-size: 0.32rem;
        color: #949494;
        line-height: 1.2rem;
        height: 1.2rem;
        padding: 0;
        .value {
          text-align: center;
          color: #949494;
          background: #faf9f9;
          span {
            margin-right: 0.1333rem;
          }
        }
      }
      .product_popup {
        border-radius: 0.08rem 0.08rem 0 0;
        height: 7.4667rem;
        .product_popup_top {
          height: 1.4667rem;
          background: #fcf9f9;
          font-size: 0.4rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 0.8rem;
          .left {
            color: #797979;
            background: #fcf9f9;
            border: none;
          }
          .right {
            color: #f9543a;
            background: #fcf9f9;
            border: none;
          }
        }
        .product_popup_center {
          max-height: 5.0667rem;
          overflow-y: scroll;
          padding: 0.4667rem 0.3733rem;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          .put_item {
            text-align: center;
            line-height: 0.9333rem;
            height: 0.9333rem;
            width: 2.56rem;
            border: 1px solid #e9e9e9;
            border-radius: 0.08rem;
            font-size: 0.3467rem;
            color: #797979;
            margin-bottom: 0.4267rem;
            padding: 0 0.1333rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .put_item_ation {
            border: 1px solid #f9543a;
            color: #f9543a;
            background: #fff6f5;
          }
        }
      }
    }
    .list_item {
      display: flex;
      font-size: 0.2933rem;
      line-height: 1.2rem;
      padding-left: 0.4rem;
      color: #242424;
      div {
        width: 33.3%;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .left1 {
        width: 30%;
      }
      .center,
      .right {
        text-align: center;
      }
      .right {
        //   color: #ff7f14;
      }
    }
    .list_item:nth-child(2n) {
      background: #faf9f9;
    }
  }

  .employ,
  .allowance {
    padding-bottom: 0.6rem;
  }
  .prductData {
    .doughnutChart {
      margin-top: 0;
      height: 6.1333rem;
    }
  }

  .prductData_main {
    .prductData_top {
      display: flex;
      height: 2.1333rem;
      background: #fff;
      margin-top: 1px;
      align-items: center;
      padding: 0 0.5333rem;
      background: url("../../assets/images/dataModule/bg@1x.png");
      background-size: cover;
      .prductData_name {
        display: flex;
        align-items: center;
        width: 3.9867rem;
        // justify-content: center;
        border-right: 1px solid #eff0f3;
        .img {
          width: 0.6933rem;
          height: 0.6933rem;
          display: block;
          margin-right: 0.3467rem;
        }
        .title {
          .name {
            font-size: 0.3733rem;
            color: #232324;
            margin-bottom: 0.16rem;
          }
          .init {
            height: 0.4rem;
            img {
              height: 0.4rem;
              display: block;
            }
          }
        }
      }
      .prductData_info {
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
        width: 4.9333rem;
        .item {
          display: flex;
          align-items: center;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          .item_num {
            color: #232324;
            display: flex;
            width: 2.1333rem;
            .item_shu {
              font-size: 0.3733rem;
              display: block;
              line-height: 0.5067rem;
            }
            .item_danwei {
              font-size: 0.28rem;
              display: block;
              line-height: 0.5067rem;
            }
          }
          .item_txt {
            margin-top: 0;
            color: #797979;
            font-size: 0.2667rem;
          }
        }
      }
    }
    .prductData_center {
      .van-tabs--line .van-tabs__wrap {
        height: 1.0133rem;
      }
      .van-tab {
        font-size: 0.3733rem;
        line-height: 1.0667rem;
      }
      .van-tabs__content {
        min-height: calc(100vh - (2.2rem));
      }
      .van-tabs__line {
        width: 1.7333rem !important;
        height: 0.0533rem !important;
        background-color: #f9543a !important;
        border-radius: 0 !important;
      }
      .van-tab--active {
        color: #f9543a;
      }

      .filter {
        padding: 0.5333rem 0.3733rem;
        background: #f5f5f5;
        .filter_item {
          display: flex;
          align-items: center;
          font-size: 0.3067rem;
          height: 0.64rem;
          .filter_item_title {
            margin-right: 0.24rem;
            min-width: 1.28rem;
            color: #797979;
          }
          .filter_item_buttom {
            display: flex;
            align-items: center;
            font-size: 0.3333rem;
            color: #242424;
            .filter_buttom_left {
              width: 1.5733rem;
              height: 0.6133rem;
              text-align: center;
              line-height: 0.6133rem;
              border: 1px solid #e9e9e9;
              border-radius: 0.3333rem 0px 0px 0.3333rem;
              background: #fff;
            }
            .filter_buttom_center {
              width: 1.5733rem;
              height: 0.6133rem;
              text-align: center;
              line-height: 0.6133rem;
              border-top: 1px solid #e9e9e9;
              border-bottom: 1px solid #e9e9e9;
              border-right: 1px solid #fff;
              border-left: 1px solid #fff;
              background: #fff;
            }
            .filter_buttom_right {
              width: 1.5733rem;
              height: 0.6133rem;
              text-align: center;
              line-height: 0.6133rem;
              border: 1px solid #e9e9e9;
              border-radius: 0px 0.3333rem 0.3333rem 0px;
              background: #fff;
            }
            .filter_buttom_ation {
              border-color: #f9543a;
              color: #f9543a;
            }
            .zhi {
              margin: 0 0.2rem;
            }
            .select_item {
              border: 1px solid #e9e9e9;
              border-radius: 0.3333rem;
              overflow: hidden;
              line-height: 0.64rem;
              .van-cell {
                font-size: 0.2933rem;
                padding: 0;
                line-height: 100%;
                height: 0.64rem;
                width: 3.1733rem;
                text-align: center;
                color: #797979;

                .van-cell__value--alone {
                  display: flex;
                  // justify-content: center;
                  line-height: 0.64rem;
                  .title {
                    margin-right: 0.2133rem;
                    color: #969799;
                  }
                  .value {
                    display: flex;
                    align-items: center;
                    height: 0.64rem;
                    line-height: 0.64rem;
                    width: 100%;
                    justify-content: space-between;
                    padding: 0 0.3733rem;
                    span {
                      margin-right: 0.2667rem;
                      margin-left: 0.08rem;
                      color: #242424;

                      overflow: hidden;
                      text-overflow: ellipsis;
                      white-space: nowrap;
                    }
                    i {
                      font-size: 0.2rem;
                      color: #242424;
                    }
                  }
                }
              }
              .product_popup {
                border-radius: 0.08rem 0.08rem 0 0;
                height: 7.4667rem;
                .product_popup_top {
                  height: 1.4667rem;
                  background: #fcf9f9;
                  font-size: 0.4rem;
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  padding: 0 0.8rem;
                  .left {
                    color: #797979;
                    background: #fcf9f9;
                    border: none;
                  }
                  .right {
                    color: #f9543a;
                    background: #fcf9f9;
                    border: none;
                  }
                }
                .product_popup_center {
                  max-height: 5.0667rem;
                  overflow-y: scroll;
                  padding: 0.4667rem 0.3733rem;
                  display: flex;
                  justify-content: space-between;
                  flex-wrap: wrap;
                  .put_item {
                    text-align: center;
                    line-height: 0.9333rem;
                    height: 0.9333rem;
                    width: 2.56rem;
                    border: 1px solid #e9e9e9;
                    border-radius: 0.08rem;
                    font-size: 0.3467rem;
                    color: #797979;
                    margin-bottom: 0.4267rem;
                    padding: 0 0.1333rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                  }
                  .put_item_ation {
                    border: 1px solid #f9543a;
                    color: #f9543a;
                    background: #fff6f5;
                  }
                }
              }
              // 日期选择器
              .van-picker__toolbar {
                height: 1.4667rem;
                background: #fcf9f9;
                font-size: 0.4rem;
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 0 0.8rem;
                .van-picker__cancel,
                .van-picker__confirm {
                  padding: 0;
                  font-size: 0.4rem;
                }
                .van-picker__cancel {
                  color: #797979;
                  background: #fcf9f9;
                  border: none;
                }
                .van-picker__title {
                  font-size: 0.4rem;
                }
                .van-picker__confirm {
                  color: #f9543a;
                  background: #fcf9f9;
                  border: none;
                }
              }
              .van-picker-column__item--selected {
                color: #f9543a;
              }
              .van-picker-column__item {
                font-size: 0.3733rem;
                // height: 0.5867rem !important;
                // line-height: 0.5867rem !important;
              }
            }
            .select_item1 {
              width: 7.0667rem;
              .van-cell {
                width: 100%;
                .value {
                  span {
                    width: 6rem;
                  }
                }
              }
              .product_popup .product_popup_center .put_item {
                width: 100%;
                text-align: left;
              }
            }
            .select_item2 {
              // width: 3.1733rem;
              .product_popup .product_popup_center .put_item {
                width: 100%;
                text-align: left;
                padding: 0 0.3333rem;
              }
            }
          }
        }
        .filter_item1 {
          margin-bottom: 0.4267rem;
        }
      }
      .choice_chart {
        .lineChart_item_buttom {
          display: flex;
          align-items: center;
          font-size: 0.3333rem;
          color: #242424;
          .lineChart_buttom_left {
            width: 1.5733rem;
            height: 0.6133rem;
            text-align: center;
            line-height: 0.6133rem;
            border: 1px solid #e9e9e9;
            border-radius: 0.3333rem 0px 0px 0.3333rem;
            background: #fff;
          }
          .lineChart_buttom_center {
            width: 1.5733rem;
            height: 0.6133rem;
            text-align: center;
            line-height: 0.6133rem;
            border-top: 1px solid #e9e9e9;
            border-bottom: 1px solid #e9e9e9;
            border-right: 1px solid #fff;
            border-left: 1px solid #fff;
            background: #fff;
          }
          .lineChart_buttom_right {
            width: 1.5733rem;
            height: 0.6133rem;
            text-align: center;
            line-height: 0.6133rem;
            border: 1px solid #e9e9e9;
            border-radius: 0px 0.3333rem 0.3333rem 0px;
            background: #fff;
          }
          .lineChart_buttom_ation {
            border-color: #f9543a;
            color: #f9543a;
          }
        }
      }
    }
  }
}
</style>