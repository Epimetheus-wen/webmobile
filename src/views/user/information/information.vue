<template>
  <div class="information">
    <BackTop :headertitle="headertitle"></BackTop>
    <div class="information_main">
      <div class="info_item">
        <div class="info_label">
          <div class="info_label_text">认证类型</div>
          <div class="info_label_icon">：</div>
        </div>
        <div v-if="UserCertInfo.user_type=='1'" class="info_item_text user_type">个人认证</div>
        <div v-if="UserCertInfo.user_type=='2'" class="info_item_text user_type">企业认证</div>
      </div>
      <div class="info_item">
        <div class="info_label">
          <div class="info_label_text">认证状态</div>
          <div class="info_label_icon">：</div>
        </div>
        <div v-if="UserCertInfo.oauth_status=='4'" class="info_item_text user_state_1">审核驳回</div>
        <div v-if="UserCertInfo.oauth_status=='2'" class="info_item_text user_state_2">正在审核</div>
        <div v-if="UserCertInfo.oauth_status=='3'" class="info_item_text user_state_3">审核通过</div>
      </div>
      <div class="info_item">
        <div class="info_label">
          <div v-if="UserCertInfo.user_type=='2'" class="info_label_text">企业全称</div>
          <div v-if="UserCertInfo.user_type=='1'" class="info_label_text">真实姓名</div>
          <div class="info_label_icon">：</div>
        </div>
        <div class="info_item_text">{{UserCertInfo.realname}}</div>
      </div>
      <div v-if="UserCertInfo.user_type=='1'" class="info_item">
        <div class="info_label">
          <div class="info_label_text">身份证号</div>
          <div class="info_label_icon">：</div>
        </div>
        <div class="info_item_text">{{UserCertInfo.corporation_idno}}</div>
      </div>
      <div v-if="UserCertInfo.user_type=='1'" class="info_item">
        <div class="info_label">
          <div class="info_label_text">联系电话</div>
          <div class="info_label_icon">：</div>
        </div>
        <div class="info_item_text">{{UserCertInfo.company_nbr}}</div>
      </div>
      <div class="info_item">
        <div class="info_label">
          <div class="info_label_text">银行类别</div>
          <div class="info_label_icon">：</div>
        </div>
        <div class="info_item_text">{{UserCertInfo.bank_name}}</div>
      </div>
      <div class="info_item">
        <div class="info_label">
          <div class="info_label_text">开户行名称</div>
          <div class="info_label_icon">：</div>
        </div>
        <div class="info_item_text">{{UserCertInfo.bank_branch_name}}</div>
      </div>
      <div class="info_item">
        <div class="info_label">
          <div class="info_label_text">开户行账号</div>
          <div class="info_label_icon">：</div>
        </div>
        <div class="info_item_text">{{UserCertInfo.bank_account}}</div>
      </div>
      <div v-if="UserCertInfo.user_type=='2'" class="info_item">
        <div class="info_label">
          <div class="info_label_text">统一社会信用</div>
          <div class="info_label_icon">：</div>
        </div>
        <div class="info_item_text">{{UserCertInfo.credit_code}}</div>
      </div>
      <div v-if="UserCertInfo.user_type=='2'" class="info_item">
        <div class="info_label">
          <div class="info_label_text">法人姓名</div>
          <div class="info_label_icon">：</div>
        </div>
        <div class="info_item_text">{{UserCertInfo.corporation_name}}</div>
      </div>
      <div v-if="UserCertInfo.user_type=='2'" class="info_item">
        <div class="info_label">
          <div class="info_label_text">公司电话</div>
          <div class="info_label_icon">：</div>
        </div>
        <div class="info_item_text">{{UserCertInfo.company_nbr}}</div>
      </div>
      <div v-if="UserCertInfo.user_type=='2'" class="info_item">
        <div class="info_label">
          <div class="info_label_text">工商注册地址</div>
          <div class="info_label_icon">：</div>
        </div>
        <div class="info_item_text">{{UserCertInfo.address}}</div>
      </div>
      <div v-if="UserCertInfo.user_type=='2'" class="info_item">
        <div class="info_label">
          <div class="info_label_text">增值税一般纳税人</div>
          <div class="info_label_icon">：</div>
        </div>
        <div v-if="UserCertInfo.ordinary_VAT_payer=='2'" class="info_label_text">否</div>
        <div v-if="UserCertInfo.ordinary_VAT_payer=='1'" class="info_label_text">是</div>
      </div>
      <div v-if="UserCertInfo.user_type=='2'" class="info_item">
        <div class="info_label">
          <div class="info_label_text">营业期限</div>
          <div class="info_label_icon">：</div>
        </div>
        <div
          v-if="UserCertInfo.business_deadline!='1'"
          class="info_label_text"
        >{{UserCertInfo.business_deadline}}</div>
        <div v-if="UserCertInfo.business_deadline=='1'" class="info_label_text">无期限</div>
      </div>
      <div v-if="UserCertInfo.user_type=='2'" class="info_item info_license">
        <div class="info_label">
          <div class="info_label_text">营业执照</div>
          <div class="info_label_icon">：</div>
        </div>
        <div class="info_item_img">
          <img :src="UserCertInfo.business_img" alt />
        </div>
      </div>
      <div v-if="UserCertInfo.user_type=='1'" class="info_item info_license_p">
        <div class="info_label">
          <div class="info_label_text">身份证照</div>
          <div class="info_label_icon">：</div>
        </div>
        <div class="info_item_img info_item_imgList">
          <img class="info_item_img_1" :src="UserCertInfo.corporation_card_img[0]" alt />
          <img class="info_item_img_2" :src="UserCertInfo.corporation_card_img[1]" alt />
        </div>
      </div>
    </div>
    <div class="information_footer">
      <div v-if="UserCertInfo.oauth_status=='4'" class="status">
        <div class="info_label">
          <div class="info_label_text">驳回原因</div>
          <div class="info_label_icon">：</div>
        </div>
        <div class="info_item_text user_type">{{UserCertInfo.refuse_reason}}</div>
      </div>
      <van-button v-if="UserCertInfo.oauth_status=='4'" class="block_but" @click="renzhengTo(UserCertInfo.user_type,UserCertInfo)" block>修改认证信息</van-button>
      <van-button v-if="UserCertInfo.user_type=='1'" class="block_but company_but" @click="companyTo(1)" block>企业认证</van-button>
      <van-button v-if="UserCertInfo.user_type=='2'&&UserCertInfo.oauth_status=='4'" class="block_but company_but" @click="everyoneTo(1)" block>个人认证</van-button>
      <van-button class="block_but cancel_but zhiCustomBtn" @click="zhichiBtn" block>需要帮助</van-button>
    </div>
  </div>
</template>

<script src="./information.controller.js"></script>

<style lang="scss" scoped>
.information {
  .information_main {
    .info_item:nth-child(2n) {
      background: #fff;
    }
    .info_item {
      display: flex;
      font-size: 0.3733rem;
      padding: 0 0.6667rem;
      height: 1.5333rem;
      align-items: center;
      .info_label {
        display: flex;
        width: 1.8667rem;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.65);
        line-height: 0.68rem;
        margin-right: 0.2667rem;
        .info_label_text {
          text-align: right;
        }
        .info_label_icon {
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
        }
      }
      .info_item_text {
        font-weight: 500;
        color: rgba(0, 0, 0, 0.85);
        line-height: 0.68rem;
      }
      .user_type {
        font-weight: 600;
      }
      .user_state_1 {
        color: rgba(204, 0, 0, 1);
      }
      .user_state_2 {
        color: rgba(250, 173, 20, 1);
      }
      .user_state_3 {
        color: rgb(145, 205, 107);
      }
      img {
        display: block;
        width: 3.0667rem;
        height: 3.0667rem;
        background: url("../../../assets/images/identification/business_license.png");
        background-size: cover;
        margin: 0;
        margin-right: 0.1867rem;
        border-radius: 0.08rem;
      }
      .info_item_imgList {
        display: flex;
        img {
          height: 1.7333rem;
        }
        .info_item_img_1 {
          background: url("../../../assets/images/identification/front.png");
          background-size: cover;
        }
        .info_item_img_2 {
          background: url("../../../assets/images/identification/back.png");
          background-size: cover;
        }
      }
    }
    .info_license {
      height: 3.0667rem;
      align-items: flex-start;
      padding: 0.4267rem 0.6667rem;
    }
    .info_license_p {
      height: 1.7333rem;
      align-items: flex-start;
      padding: 0.4267rem 0.6667rem;
    }
  }
  .information_footer {
    padding-bottom: 1.7333rem;
    .status {
      margin-top: 0.4267rem;
      background: #fff;
      display: flex;
      font-size: 0.3733rem;
      padding: 0 0.6667rem;
      height: 1.5333rem;
      align-items: center;
      margin-bottom: 0.4267rem;
      .info_label {
        display: flex;
        width: 1.8667rem;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.65);
        line-height: 0.68rem;
        margin-right: 0.2667rem;
        .info_label_text {
          text-align: right;
        }
        .info_label_icon {
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
        }
      }
      .info_item_text {
        font-weight: 500;
        color: rgba(204, 0, 0, 1);
        line-height: 0.68rem;
      }
    }
    .block_but {
      margin: 0 auto;
      width: 8rem;
      height: 1.1467rem;
      font-size: 0.4267rem;
      box-shadow: 0px 0.0267rem 0.08rem 0px rgba(213, 213, 213, 1);
      border-radius: 0.08rem;
      background: rgba(204, 0, 0, 1);
      border: 1px solid rgba(204, 0, 0, 1);
    //   margin-top: 1.3333rem;
      color: #fff;
    }
    .block_but:nth-child(1){
        margin-top: 1.3333rem;
    }
    .cancel_but {
      margin-top: 0.5067rem;
      background: rgba(245, 245, 245, 1);
      border: 1px solid rgba(194, 194, 194, 1);
      box-shadow: none;
      color: rgba(0, 0, 0, 0.85);
    }
    .company_but {
      margin-top: 0.5067rem;
    }
  }
}
</style>
