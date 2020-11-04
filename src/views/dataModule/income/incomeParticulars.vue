<template>
  <div class="incomePar">
    <DataModuleHeader :headertitle="headertitle"></DataModuleHeader>
    <div class="incomePar_main">
      <div class="incomePar_main_money">
        <img v-if="content.status=='成功'" class="img" src="../../../assets/images/dataModule/success@1x.png" alt />
        <img v-if="content.status=='已支付'" class="img" src="../../../assets/images/dataModule/success@1x.png" alt />
        <img v-if="content.status=='待确认'" class="img" src="../../../assets/images/dataModule/wait@1x.png" alt />
        <img v-if="content.status=='未支付'" class="img" src="../../../assets/images/dataModule/wait@1x.png" alt />
        <img v-if="content.status=='失败'" class="img" src="../../../assets/images/dataModule/wait@1x.png" alt />
        <div class="num"><span v-if="content.chargeType=='充值'">+ </span><span v-if="content.chargeType=='退款'">- </span><span v-if="content.chargeType=='购买套餐包'">- </span><span>{{content.pay_money}}</span></div>
        <div class="text">{{content.chargeType}}</div>
      </div>
      <div class="incomePar_main_detailList">
        <div class="detail">
          <div class="left">状态</div>
          <div v-if="content.status=='成功'" class="right type_success">{{content.status}}</div>
          <div v-if="content.status=='已支付'" class="right type_success">{{content.status}}</div>
          <div v-if="content.status=='待确认'" class="right type_wait">{{content.status}}</div>
          <div v-if="content.status=='未支付'" class="right type_wait">{{content.status}}</div>
          <div v-if="content.status=='失败'" class="right type_wait">{{content.status}}</div>
        </div>
        <div class="detail">
          <div class="left">交易渠道</div>
          <div class="right">{{content.chargeMode}}</div>
        </div>
        <div class="detail">
          <div class="left">交易时间</div>
          <div class="right">{{content.createDate}}</div>
        </div>
        <div class="detail" v-if="content.order_sn!=''">
          <div class="left">渠道交易号</div>
          <div class="right">{{content.order_sn}}</div>
        </div>
        <div class="detail">
          <div class="left">平台交易号</div>
          <div class="right">{{content.platform_transaction_id}}</div>
        </div>
      </div>
    </div>
    <!-- 客服 -->
    <div class="kefu_footer" @click="zhichiBtn">
      <div class="left">对支付有疑问？</div>
      <div class="right">
        <div class="text">在线客服</div>
        <img src="../../../assets/images/dataModule/left@1x.png" alt />
      </div>
    </div>
  </div>
</template>

<script src='./incomeParticulars.controller.js'>
</script>

<style lang='scss' scoped>
.incomePar {
  .incomePar_main {
    margin-top: 1px;
    background: #fff;
    .incomePar_main_money {
      height: 4rem;
      border-bottom: 1px solid #eff0f3;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 0 0.5333rem;
      .img {
        margin-top: 0.8rem;
        width: 1.6rem;
        height: 1.6rem;
        display: block;
      }
      .num {
        font-size: 0.44rem;
        font-weight: 600;
        margin-right: 0.1333rem;
      }
      .text {
        margin-top: 0.2133rem;
        font-size: 0.3467rem;
        color: #797979;
      }
    }
    .incomePar_main_detailList {
      margin: 0 0.5333rem;
      padding-top: 0.3333rem;
      padding-bottom: 0.4rem;
      .detail {
        display: flex;
        font-size: 0.3333rem;
        height: 0.8rem;
        line-height: 0.8rem;
        .left {
          color: #848484;
          width: 2.4rem;
        }
        .right {
          color: #242424;
        }
        .type_success {
          color: #00ad45;
        }
        .type_wait{
            color: rgb(255, 141, 19);
        }
      }
    }
  }
  .kefu_footer {
    padding: 0 0.5333rem;
    height: 1.2rem;
    margin-top: 0.2667rem;
    display: flex;
    align-items: center;
    background: #fff;
    justify-content: space-between;
    .left {
      font-size: 0.3467rem;
      color: #242424;
      line-height: 1.2rem;
    }
    .right {
      font-size: 0.3467rem;
      color: #797979;
      display: flex;
      line-height: 1.2rem;
      align-items: center;
      .text{
          margin-right: 0.32rem;
      }
      img {
        width: 0.2533rem;
        height: 0.4rem;
        display: block;
      }
    }
  }
}
</style>