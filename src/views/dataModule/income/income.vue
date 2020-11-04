<template>
  <div class="income">
    <div v-if="sublevel">
      <DataModuleHeader :headertitle="headertitle"></DataModuleHeader>
      <div class="income_main">
        <div class="select">
          <!-- <div class="select_item">
            <van-cell @click="Time.showPicker = true">
              <div class="title">选择日期</div>
              <div class="value">
                <span v-text="Time.value"></span>
                <i class="fa fa-caret-down"></i>
              </div>
            </van-cell>
            <van-popup v-model="Time.showPicker" position="bottom">
              <van-datetime-picker
                :formatter="formatter"
                :min-date="Time.minDate"
                :max-date="Time.maxDate"
                title="选择日期"
                type="date"
                @confirm="onTime"
                @cancel="Time.showPicker = false"
              />
            </van-popup>
          </div>-->
          <div class="select_item" style="width:65%">
            <van-cell @click="calendar.show = true">
                <div class="title">选择日期</div>
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
          <div class="select_item" style="width:35%">
            <van-cell @click="showPopup" style="padding-left:0">
              <div class="title">选择产品</div>
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
              :style="{ height: '30%' }"
            >
              <div class="product_popup_top">
                <button class="left" @click="cancel">取消</button>
                <button class="right" @click="affirm">确认</button>
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
        </div>

        <div v-if="dataShow" class="income_list">
          <div
            class="income_item"
            v-for="(item,index) in RecordList"
            :key="index"
            @click="toParticulars(item)"
          >
            <img
              v-if="item.chargeType=='充值'"
              class="income_item_leftImg"
              src="../../../assets/images/dataModule/deposit@1x.png"
              alt
            />
            <img
              v-if="item.chargeType=='退款'"
              class="income_item_leftImg"
              src="../../../assets/images/dataModule/refund@1x.png"
              alt
            />
            <img
              v-if="item.chargeType=='购买套餐包'"
              class="income_item_leftImg"
              src="../../../assets/images/dataModule/buy@1x.png"
              alt
            />
            <div class="income_item_right">
              <div class="income_item_rightTitle">
                <div class="txt">{{item.chargeType}}</div>
                <div class="init">
                  <span>{{item.createDate}}</span>
                </div>
              </div>
              <div class="income_item_rightjRecord">
                <div class="rightjRecord">
                  <div class="rightjRecord_num">
                    <span :style="item.chargeType=='充值'?'color:#f9613f':''" class="num">
                      <span v-if="item.chargeType=='充值'">+</span>
                      <span v-else>-</span>
                      <span>{{item.pay_money}}</span>
                    </span>
                  </div>
                  <div class="rightjRecord_text">{{item.status}}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="dataShow" class="income_bottom"></div>
      <div v-if="dataShow" class="income_footer">
        <img src="../../../assets/images/dataModule/line@1x.png" alt />
        <span class="income_footer_txt">仅显示近一年收支情况，更多信息请移PC端查看</span>
        <img src="../../../assets/images/dataModule/lineR@1x.png" alt />
      </div>
      <div v-if="!dataShow" class="income_kong">
        <img src="../../../assets/images/dataModule/nodata@1x.png" alt />
        <div>暂无数据</div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script src='./income.controller.js'>
</script>

<style lang='scss' >
.income {
  position: relative;
  min-height: 100vh;
  background: #f5f5f5;
  .income_main {
    margin-top: 1px;
    .select {
      display: flex;
      .select_item {
        width: 50%;
        .van-calendar__popup{
            border-radius: 0.08rem 0.08rem 0 0;
        }
        .van-calendar__day {
          font-size: 0.3333rem;
          height: 1.7333rem;
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
          padding: 0.3467rem 0 0.3467rem 0.5333rem;
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
    .income_list {
      background: #fff;
      padding-left: 0.56rem;
      margin-top: 0.2667rem;
      .income_item {
        display: flex;
        align-items: center;
        height: 1.8933rem;
        .income_item_leftImg {
          width: 0.8533rem;
          height: 0.8533rem;
          display: block;
          margin-right: 0.32rem;
        }
        .income_item_right {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 1.8933rem;
          width: 8.5733rem;
          border-bottom: 1px solid #dddddd;
          .income_item_rightTitle {
            display: flex;
            flex-direction: column;
            font-size: 0.3867rem;
            line-height: 0.3867rem;
            margin-top: 0.2667rem;
            .txt {
              margin-bottom: 0.2133rem;
            }
            .init {
              height: 0.4rem;
              span {
                font-size: 0.2667rem;
                line-height: 0.2667rem;
              }
            }
          }
          .income_item_rightjRecord {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-right: 0.5067rem;
            .rightjRecord {
              margin-top: 0.1333rem;
              .rightjRecord_num {
                font-size: 0.32rem;
                color: #232324;
                margin-bottom: 0.1067rem;
                text-align: right;
                font-size: 0.3733rem;
                font-weight: 600;
                .danwei {
                  font-size: 0.2933rem;
                }
              }
              .rightjRecord_text {
                font-size: 0.2667rem;
                color: #797979;
                text-align: right;
              }
            }
            .income_item_rightImg {
              width: 0.1867rem;
              height: 0.3333rem;
              display: block;
              padding-right: 0.3733rem;
              padding-left: 0.5333rem;
            }
          }
        }
      }
      .income_item:last-child {
        margin-bottom: 0.7733rem;
        .income_item_right {
          border-bottom: none;
        }
      }
    }
  }
  .income_footer {
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
    .income_footer_txt {
      font-size: 0.2933rem;
      color: #8e8e8e;
      margin: 0 0.1333rem;
      text-align: center;
    }
  }
  .income_bottom {
    height: 1.3333rem;
  }
  .income_kong {
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      margin-top: 2.24rem;
      width: 2.6667rem;
      height: 2.2533rem;
      display: block;
    }
    div {
      color: #9a9999;
      font-size: 0.3333rem;
    }
  }
}
</style>