<template>
  <div class="monitoring">
    <DataModuleHeader :headertitle="headertitle"></DataModuleHeader>
    <div class="monitoring_main">
      <van-tabs>
        <van-tab title="消费趋势">
          <div class="monitoring_tendency">
            <div class="filter">
              <div class="filter_item filter_item1">
                <div class="filter_item_title">选择时间</div>
                <div class="filter_item_buttom">
                  <div
                    :class="ationFilter1?'filter_buttom_left':'filter_buttom_left filter_buttom_ation'"
                    @click="filterTime(1)"
                  >本周</div>
                  <div
                    :class="ationFilter2?'filter_buttom_center':'filter_buttom_center filter_buttom_ation'"
                    @click="filterTime(2)"
                  >本月</div>
                  <div
                    :class="ationFilter3?'filter_buttom_right':'filter_buttom_right filter_buttom_ation'"
                    @click="filterTime(3)"
                  >本年</div>
                </div>
              </div>
              <div class="filter_item">
                <div class="filter_item_title">时间范围</div>
                <div class="filter_item_buttom">
                  <div class="select_item">
                    <van-cell @click="tendency.Time1.showPicker = true">
                      <div class="value">
                        <span v-text="tendency.Time1.value"></span>
                        <i class="fa fa-caret-down"></i>
                      </div>
                    </van-cell>
                    <van-popup v-model="tendency.Time1.showPicker" position="bottom">
                      <van-datetime-picker
                      v-model="tendency.Time1.currentDate"
                        :formatter="formatter"
                        :min-date="tendency.Time1.minDate"
                        :max-date="tendency.Time1.maxDate"
                        title="选择日期"
                        type="date"
                        @confirm="onTime"
                        @cancel="tendency.Time1.showPicker = false"
                      />
                    </van-popup>
                  </div>
                  <div class="zhi">至</div>
                  <div class="select_item">
                    <van-cell @click="tendency.Time2.showPicker = true">
                      <div class="value">
                        <span v-text="tendency.Time2.value"></span>
                        <i class="fa fa-caret-down"></i>
                      </div>
                    </van-cell>
                    <van-popup v-model="tendency.Time2.showPicker" position="bottom">
                      <van-datetime-picker
                      v-model="tendency.Time2.currentDate"
                        :formatter="formatter2"
                        :min-date="tendency.Time2.minDate"
                        :max-date="tendency.Time2.maxDate"
                        title="选择日期"
                        type="date"
                        @confirm="onTime2"
                        @cancel="tendency.Time2.showPicker = false"
                      />
                    </van-popup>
                  </div>
                </div>
              </div>
            </div>
            <div class="chart">
              <div class="title">消费趋势</div>
              <!-- <div class="lineChart" id="lineChart"></div> -->
              <div class="leb_title">
                <span class="title1">数据更新于：</span>
                <span class="time">{{uptime}}</span>
              </div>
              <canvas class="lineChart" id="lineChart1"></canvas>
            </div>
            <div class="chart">
              <div class="title">消费占比</div>
              <!-- <div class="doughnutChart" id="doughnutChart"></div> -->
              <canvas v-if="dataShow" class="doughnutChart" id="doughnutChart1"></canvas>
              <div v-if="!dataShow" class="kong">
                <img src="../../../assets/images/dataModule/nodata@1x.png" alt />
                <div>暂无数据</div>
              </div>
            </div>
          </div>
        </van-tab>
        <van-tab title="消费汇总">
          <div class="monitoring_collect">
            <div class="filter">
              <div class="filter_item filter_item1">
                <div class="filter_item_title">选择时间</div>
                <div class="filter_item_buttom">
                  <div
                    :class="ationFilter4?'filter_buttom_left':'filter_buttom_left filter_buttom_ation'"
                    @click="filterTime(4)"
                  >本周</div>
                  <div
                    :class="ationFilter5?'filter_buttom_center':'filter_buttom_center filter_buttom_ation'"
                    @click="filterTime(5)"
                  >本月</div>
                  <div
                    :class="ationFilter6?'filter_buttom_right':'filter_buttom_right filter_buttom_ation'"
                    @click="filterTime(6)"
                  >本年</div>
                </div>
              </div>
              <div class="filter_item">
                <div class="filter_item_title">时间范围</div>
                <div class="filter_item_buttom">
                  <div class="select_item">
                    <van-cell @click="collect.Time1.showPicker = true">
                      <div class="value">
                        <span v-text="collect.Time1.value"></span>
                        <i class="fa fa-caret-down"></i>
                      </div>
                    </van-cell>
                    <van-popup v-model="collect.Time1.showPicker" position="bottom">
                      <van-datetime-picker
                      v-model="collect.Time1.currentDate"
                        :formatter="formatter3"
                        :min-date="collect.Time1.minDate"
                        :max-date="collect.Time1.maxDate"
                        title="选择日期"
                        type="date"
                        @confirm="onTime3"
                        @cancel="collect.Time1.showPicker = false"
                      />
                    </van-popup>
                  </div>
                  <div class="zhi">至</div>
                  <div class="select_item">
                    <van-cell @click="collect.Time2.showPicker = true">
                      <div class="value">
                        <span v-text="collect.Time2.value"></span>
                        <i class="fa fa-caret-down"></i>
                      </div>
                    </van-cell>
                    <van-popup v-model="collect.Time2.showPicker" position="bottom">
                      <van-datetime-picker
                      v-model="collect.Time2.currentDate"
                        :formatter="formatter4"
                        :min-date="collect.Time2.minDate"
                        :max-date="collect.Time2.maxDate"
                        title="选择日期"
                        type="date"
                        @confirm="onTime4"
                        @cancel="collect.Time2.showPicker = false"
                      />
                    </van-popup>
                  </div>
                </div>
              </div>
            </div>
            <div class="collect-main" style="margin-bottom: 0.8rem;">
              <div class="collect_filter">
                <div class="select_item">
                  <van-cell @click="showPopup('product')">
                    <div class="value">
                      <span v-text="product.value"></span>
                      <i class="fa fa-caret-down"></i>
                    </div>
                  </van-cell>
                  <van-popup
                    v-model="product.show"
                    round
                    position="bottom"
                    class="product_popup"
                    :style="{ minHeight: '30%' }"
                  >
                    <div class="product_popup_top">
                      <button class="left" @click="cancel('product')">取消</button>
                      <button class="right" @click="affirm('product')">确认</button>
                    </div>
                    <div class="product_popup_center">
                      <div
                        v-for="(item,index) in product.list"
                        :key="index"
                        :class="item.value==product.n?'put_item put_item_ation':'put_item'"
                        @click="productAction(item.name,item.value)"
                      >{{item.name}}</div>
                    </div>
                  </van-popup>
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
              <div class="collect_info">
                <div class="collect_info_total">
                  <div class="title">当前消费</div>
                  <div class="num">
                    <span class="num_left">￥</span>
                    <span class="num_right">{{consumption}}</span>
                  </div>
                </div>
                <div class="collect_info_time">
                  <div class="title">数据更新于：</div>
                  <div class="num">{{uptime}}</div>
                </div>
              </div>
              <div class="collect_table">
                <div class="collect_table—title">
                  <div class="left">日期</div>
                  <div class="center">消费数量</div>
                  <div class="right">消费总额(元)</div>
                </div>
                <van-list
                  v-model="listLoad.loading"
                  :finished="listLoad.finished"
                  finished-text="没有更多了"
                  @load="onLoad"
                >
                  <div class="list_item" v-for="(item,index) in list" :key="index">
                    <div class="left">{{item.date}}</div>
                    <div class="center">{{item.charge_unit}}</div>
                    <div class="right">{{item.money}}</div>
                  </div>
                </van-list>
              </div>
            </div>
            <div class="monitoring_bottom"></div>
            <div class="monitoring_footer">
              <img src="../../../assets/images/dataModule/line@1x.png" alt />
              <span class="monitoring_footer_txt">仅显示近一年收支情况，更多信息请移PC端查看</span>
              <img src="../../../assets/images/dataModule/lineR@1x.png" alt />
            </div>
          </div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script src='./monitoring.controller.js'>
</script>

<style lang='scss' >
.kong {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 5.3333rem;
  img {
    width: 2.6667rem;
    height: 2.2533rem;
    display: block;
  }
  div {
    color: #9a9999;
    font-size: 0.3333rem;
  }
}
// 折线图
.chart {
  position: relative;
  background: #fff;
  margin-bottom: 0.32rem;
  .choice_chart {
    display: flex;
    justify-content: center;
    padding-bottom: 0.3333rem;
  }
  .title_sum {
    position: absolute;
    top: 1.44rem;
    left: 1.8rem;
    font-size: 0.2933rem;
    color: #242424;
    z-index: 1;
  }
  .title {
    // position: absolute;
    // top: 0.6267rem;
    // left: 0.3733rem;
    padding: 0.5333rem 0 0 0.4rem;
    z-index: 1;
    font-size: 0.4rem;
    color: #242424;
    font-weight: 600;
  }
  .leb_title {
    position: absolute;
    top: 1.4rem;
    right: 0.4rem;
    font-size: 0.32rem;
    color: #959595;
    .title {
    }
  }
  .lineChart {
    height: 7.1067rem;
    background: #fff;
    width: 100%;
    .showBox {
      background: #f92f1a;
      padding: 0.08rem 0.2133rem;
      font-size: 0.2667rem;
      border-radius: 0.0533rem;
      line-height: 0.4rem;
      height: 0.4rem;
      position: relative;
      .jiao {
        position: absolute;
        bottom: -0.2667rem;
        right: 0.2133rem;
        width: 0;
        height: 0;
        border-width: 0.1467rem;
        border-style: solid;
        border-color: #f92f1a transparent transparent transparent;
      }
    }
  }
  .doughnutChart {
    height: 7.0667rem;
    margin-top: 0.2667rem;
    //   margin: 0 0 0 0.88rem;
  }
}

// 主体
.monitoring {
  min-height: 100vh;
  .monitoring_main {
    margin-top: 1px;
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
    .monitoring_tendency,
    .monitoring_collect {
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
                  justify-content: center;
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
                    span {
                      margin-right: 0.2667rem;
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
                  justify-content: space-between;
                  flex-wrap: wrap;
                  .put_item {
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
          }
        }
        .filter_item1 {
          margin-bottom: 0.4267rem;
        }
      }
      .collect_filter {
        display: flex;
        .select_item:nth-child(2) {
          .van-cell {
            padding: 0.32rem 0 0.32rem 1.4667rem;
          }
        }
        .select_item {
          width: 50%;
          .van-cell {
            font-size: 0.2933rem;
            padding: 0.32rem 0 0.32rem 0.3733rem;
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
              justify-content: space-between;
              flex-wrap: wrap;
              .put_item {
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
        padding: 0.4rem 0.3733rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: #fff;
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
        .collect_table—title {
          display: flex;
          font-size: 0.32rem;
          line-height: 1.2rem;
          padding: 0 0.32rem;
          color: #949494;
          div {
            width: 33.33%;
          }
          .center,
          .right {
            text-align: center;
          }
        }
        .list_item {
          display: flex;
          font-size: 0.2933rem;
          line-height: 1.2rem;
          padding: 0 0.32rem;
          color: #242424;
          div {
            width: 33.33%;
          }
          .center,
          .right {
            text-align: center;
          }
          .right {
            color: #ff7f14;
          }
        }
        .list_item:nth-child(2n-1) {
          background: #fff;
        }
      }
    }
    .monitoring_footer {
      display: flex;
      width: 100%;
      justify-content: center;
      align-items: center;
      position: absolute;
      bottom: 1.0667rem;
      left: 0;
      img {
        width: 1.1333rem;
        height: 5.0025px;
      }
      .monitoring_footer_txt {
        font-size: 0.2933rem;
        color: #8e8e8e;
        margin: 0 0.1333rem;
        text-align: center;
      }
    }
    .monitoring_bottom {
      height: 1.3333rem;
    }
  }
}
</style>