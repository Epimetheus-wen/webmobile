<template>
  <div class="userinfo">
    <div class="userinfo_top">
      <div class="userinfo_top_photo">
        <img src="@/assets/images/user/header_photo.png" alt />
      </div>
      <div class="userinfo_top_info">
        <div v-if="UserCenterInfo.authName==''"  class="top_info_name">{{LoginFrom.mobile}}</div>
        <div v-if="UserCenterInfo.authName!=''" class="top_info_name">{{UserCenterInfo.authName}}</div>
        <div class="top_info_attribute">
          <div v-if="UserCenterInfo.userType!=''&&UserCenterInfo.oauthStatus!='4'" class="info_attribute_id">{{LoginFrom.mobile}}</div>
          <div v-if="UserCenterInfo.userType==''" class="info_attribute_id_text">您还没有提交认证 <router-link to="/identification">点击认证</router-link></div>
          <div v-if="UserCenterInfo.oauthStatus=='4'" class="info_attribute_id_text">您的申请被驳回<router-link to="/information"> 点击查看原因</router-link></div>
          <img v-if="UserCenterInfo.userType=='2'&&UserCenterInfo.oauthStatus=='3'" class="info_attribute_tag" src="@/assets/images/user/enterprise_tag.png" />
          <img v-if="UserCenterInfo.userType=='1'&&UserCenterInfo.oauthStatus=='3'" class="info_attribute_tag" src="@/assets/images/user/personage.png" />
          <div v-if="UserCenterInfo.oauthStatus=='2'" class="info_attribute_id_text">正在审核认证</div>
        </div>
      </div>
      <router-link :to="UserCenterInfo.userType==''?'/identification':'/information'" class="userinfo_top_go" tag="div">
        <img src="@/assets/images/user/right_info.png" alt />
      </router-link>
    </div>
    <div class="userinfo_bottom">
      <div class="remaining">
        <div class="remaining_sum">{{UserCenterInfo.balance}}</div>
        <div class="remaining_txt userinfo_bottom_txt">余额</div>
      </div>
      <div class="outstanding">
        <div class="outstanding_sum">{{UserCenterInfo.unSettleMoney}}</div>
        <div class="outstanding_txt userinfo_bottom_txt">未结清金额</div>
      </div>
      <div class="invoice">
        <div class="invoice_sum">{{UserCenterInfo.invoiceMoney}}</div>
        <div class="invoice_txt userinfo_bottom_txt">可开票金额</div>
      </div>
    </div>
  </div>
</template>

<script src="./userinfo.controller.js">
</script>

<style lang='scss' scoped>
.userinfo {
    border-bottom:1px solid rgba(221, 221, 221, 0.8);
  .userinfo_top {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 0.6933rem;
    margin-bottom: 0.5867rem;
    .userinfo_top_photo {
      width: 1.6rem;
      height: 1.6rem;
      margin-right: 0.32rem;
      img {
        display: block;
        width: 1.6rem;
        height: 1.6rem;
      }
    }
    .userinfo_top_info {
      .top_info_name {
        width: 5.8rem;
        height: 0.56rem;
        font-size: 0.4rem;
        font-weight: 600;
        color: rgba(0, 0, 0, 1);
        line-height: 0.56rem;
        margin-bottom: 0.24rem;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .top_info_attribute {
        display: flex;
        // margin-right: 1.3067rem;
        // justify-content: space-between;
        align-items: center;
        .info_attribute_id {
          //   width: 2.2267rem;
          height: 0.4933rem;
          font-size: 0.3467rem;
          font-weight: 600;
          color: rgba(0, 0, 0, 0.65);
          line-height: 0.4933rem;
          margin-right: 0.32rem;
        }
        .info_attribute_id_text{
            font-size: 0.32rem;
            color: rgba(0, 0, 0, 0.25);
            a{
                color: rgba(204, 0, 0, 1);
            }
        }
        .info_attribute_tag {
          display: block;
          width: 2.2667rem;
          height: 0.5333rem;
        }
      }
    }
    .userinfo_top_go{
        width: 0.6667rem;
        height: 0.6667rem;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }
    .userinfo_top_go img {
      display: block;
      width: 0.1867rem;
      height: 0.3333rem;
    }
  }
  .userinfo_bottom {
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    margin-bottom: 0.5867rem;
    &:before,
    &:after {
      content: "";
      display: block;
    }
    .remaining,.outstanding,.invoice{
        width: 2.6667rem;
    }
    .userinfo_bottom_txt {
      font-weight: 400;
      color: rgba(0, 0, 0, 0.65);
      line-height: 0.44rem;
      height: 0.44rem;
      font-size: 0.32rem;
      margin-top: 0.2667rem;
    }
    .remaining_sum {
      height: 0.3733rem;
      font-size: 0.4267rem;
      font-weight: 600;
      color: rgba(255, 99, 0, 1);
      line-height: 0.3733rem;
    }
    .outstanding_sum {
      height: 0.3733rem;
      font-size: 0.4267rem;
      font-weight: 600;
      color: rgba(0, 0, 0, 1);
      line-height: 0.3733rem;
    }
    .invoice_sum {
      height: 0.3733rem;
      font-size: 0.4267rem;
      font-weight: 600;
      color: rgba(0, 0, 0, 1);
      line-height: 0.3733rem;
    }
  }
}
</style>