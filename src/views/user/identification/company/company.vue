<template>
  <div class="company">
    <BackTop :headertitle="headertitle"></BackTop>
    <div class="company_main">
      <div class="company_info">
        <div class="company_title">
          <img src="../../../../assets/images/identification/basic.png" alt />
          <div class="company_title_txt">基本资料</div>
        </div>
        <div class="company_idF">
          <van-form @submit="onSubmit">
            <div class="Realname">
              <van-field
                v-model="from.realname"
                name="企业全称"
                label="企业全称："
                placeholder="输入企业名称"
                @input="Realname"
                @blur="RealnameBlur"
                @focus="RealnameFocus"
                :rules="[{ required: true, message: '请输入企业名称'}]"
              />
              <ul class>
                <li v-for="(item,idx) in RealnameArr" :key="idx" v-html="item" @click="getCompanyInfo(item)"></li>
              </ul>
            </div>
            <van-field
              class="code"
              v-model="from.credit_code"
              name="身份证号"
              label="统一社会 信用代码"
              placeholder="输入统一社会信用代码"
              :rules="[{ required: true, message: '请输入统一社会信用代码' }]"
            />
            <van-field
              v-model="from.corporation_name"
              name="法人姓名"
              label="法人姓名："
              placeholder="输入法人姓名"
              :rules="[{ required: true, message: '请输入法人姓名' }]"
            />
            <van-field
              v-model="from.company_nbr"
              name="公司电话"
              label="公司电话："
              placeholder="输入公司电话(座机)"
              :rules="[{ required: true, message: '请输入公司电话' }]"
            />
            <van-field
              v-model="from.bankName"
              name="银行类别"
              label="银行类别："
              placeholder="输入银行类别"
              :rules="[{ required: true, message: '请输入银行类别' }]"
            />
            <van-field
            class="code"
              v-model="from.bankBranchName"
              name="开户行名称"
              label="开户行名称"
              placeholder="输入开户行名称"
              :rules="[{ required: true, message: '请输入开户行名称' }]"
            />
            <van-field
            class="code"
              v-model="from.bankAccount"
              name="开户行账号"
              label="开户行账号"
              placeholder="输入开户行账号"
              :rules="[{ required: true, message: '请输入开户行账号' }]"
            />
            <van-field
              class="code"
              v-model="from.address"
              name="工商注册地址"
              label="工商注册 地址"
              placeholder="输入工商注册地址"
              :rules="[{ required: true, message: '请输入工商注册地址' }]"
            />
            <van-field
              class="code right_item"
              readonly
              clickable
              name="picker"
              :value="confirm.value"
              label="增值税一 般纳税人"
              placeholder="是"
              @click="confirm.showPicker = true"
              :rules="[{ required: true, message: '请选择身份' }]"
            />
            <van-popup v-model="confirm.showPicker" position="bottom">
              <van-picker
                show-toolbar
                :columns="confirm.columns"
                @confirm="onConfirm"
                @cancel="confirm.showPicker = false"
              />
            </van-popup>
            <van-field
              class="right_item"
              readonly
              clickable
              name="picker"
              :value="confirmTime.value"
              label="营业期限："
              placeholder="是"
              @click="confirmTime.showPicker = true"
              :rules="[{ required: true, message: '请选择身份' }]"
            />
            <van-popup v-model="confirmTime.showPicker" position="bottom">
              <van-picker
                show-toolbar
                :columns="confirmTime.columns"
                @confirm="onConfirmTime"
                @cancel="confirmTime.showPicker = false"
              />
            </van-popup>
            <van-field
              v-if="confirmTime.value=='具体时长'"
              class="Time right_item right_item_Time"
              readonly
              clickable
              name="datetimePicker"
              :value="Time.value"
              label="至："
              placeholder="点击选择时间"
              @click="Time.showPicker = true"
              :rules="[{ required: true, message: '请选择日期' }]"
            />
            <van-popup v-if="confirmTime.value=='具体时长'" v-model="Time.showPicker" position="bottom">
              <van-datetime-picker
                :formatter="formatter"
                :min-date="Time.minDate"
                :max-date="Time.maxDate"
                type="date"
                @confirm="onTime"
                @cancel="Time.showPicker = false"
              />
            </van-popup>
            <div class="company_title">
              <div class="company_title_txt">照片上传</div>
            </div>
            <van-field
              class="uploader_field"
              name="uploader"
              label="营业执照上传："
            >
              <template #input>
                <van-uploader
                  class="uploader_front"
                  v-model="from.business_img"
                  multiple
                  :max-count="1"
                  upload-text="上传营业执照"
                  upload-icon
                />
                <div v-if="amend" class="img_amend">
                  <img :src="idCard_img" alt />
                  <div class="van-icon van-icon-clear img_amend_icon" @click="amendClear"></div>
                </div>
              </template>
            </van-field>
            <div>
              <van-button class="block_but" block type="info" native-type="submit">提交认证</van-button>
            </div>
          </van-form>
          <van-button class="block_but cancel_but" block @click="back">取消</van-button>
          <div class="service zhiCustomBtn" @click="zhichiBtn">咨询客服</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./company.controller.js"></script>

<style lang='scss' >
.van-dialog {
  width: 7.2rem !important;
  .van-dialog__header {
    font-size: 0.48rem;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.85);
    line-height: 0.48rem;
    padding-top: 0.56rem;
  }
  .van-dialog__message {
    padding: 0 0.56rem;
    padding-top: 0.24rem;
    height: 1.8rem;
    font-size: 0.4rem;
    font-weight: 500;
    color: rgba(136, 136, 136, 1);
    line-height: 0.6rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }
  .van-dialog__footer {
    margin-top: 0.4133rem;
    border-top: 1px solid rgba(221, 221, 221, 1);
    .van-button--large {
      height: 1.32rem;
      font-size: 0.48rem;
      font-weight: 500;
      color: rgba(16, 142, 233, 1);
      line-height: 0.48rem;
    }
  }
}
.van-overlay {
  background-color: rgba(0, 0, 0, 0.4) !important;
}

.company_main {
  .company_info {
    .company_title {
      display: flex;
      align-items: center;
      height: 1.5333rem;
      padding: 0 0.6667rem;
      img {
        display: block;
        width: 0.3467rem;
        height: 0.4267rem;
        margin-right: 0.2267rem;
      }
      .company_title_txt {
        font-size: 0.3733rem;
        font-weight: 600;
        color: rgba(0, 0, 0, 0.85);
        line-height: 0.68rem;
      }
    }
    .company_idF {
      .van-form {
        border-top: 1px solid rgba(221, 221, 221, 1);
        .van-field {
          display: flex;
          padding: 0.4267rem 0.6667rem;
          border-bottom: 1px solid rgba(221, 221, 221, 1);
          .van-field__label {
            width: 2.1867rem;
            display: flex;
            // text-align: center;
            font-size: 0.3733rem;
            line-height: 0.68rem;
          }
          .van-cell__value {
            display: flex;
            justify-content: center;
            flex-direction: column;
          }
          .van-field__label::before {
            content: "*";
            color: rgba(204, 0, 0, 1);
            margin-right: 0.1rem;
          }
          .van-field__control {
            font-size: 0.3733rem;
            line-height: 0.68rem;
          }
          .van-field__error-message {
            font-size: 0.32rem;
            line-height: 0.32rem;
          }
          input::-webkit-input-placeholder {
            color: rgba(0, 0, 0, 0.25);
          }

          input::-moz-placeholder {
            color: rgba(0, 0, 0, 0.25);
          }

          input:-moz-placeholder {
            color: rgba(0, 0, 0, 0.25);
          }

          input:-ms-input-placeholder {
            color: rgba(0, 0, 0, 0.25);
          }
        }
        .code {
          padding: 0.16rem 0.6667rem;
          .van-field__label {
            display: flex;
            font-size: 0.3733rem;
            line-height: 0.68rem;
            span {
              display: block;
              text-align: right;
            }
          }
          .van-field__label:after {
            content: "：";
            margin-top: 0.68rem;
          }
        }
        .Time {
          .van-field__label {
            justify-content: flex-end;
          }
        }
        .right_item {
          .van-field__body {
            position: relative;
            .van-field__control {
              color: rgba(0, 0, 0, 0.25);
            }
          }
          .van-field__body::after {
            content: "请选择";
            position: absolute;
            right: 0;
            padding-right: 0.32rem;
            background: url("../../../../assets/images/cloudService/right.png")
              no-repeat right;
            background-size: 0.1867rem 0.3333rem;
            color: rgba(0, 0, 0, 0.25);
            font-size: 0.32rem;
            height: 0.68rem;
            line-height: 0.68rem;
          }
        }
        .right_item_Time {
          .van-field__body::after {
            content: "请选择日期";
          }
        }
        .uploader_field {
          background: rgba(245, 245, 245, 1);
          margin-bottom: 1.3333rem;
          border-bottom: none;
          padding-top: 0.1333rem;
          .van-field__label {
            width: 3rem;
            margin-top: 0.2933rem;
          }
          .van-field__error-message {
            margin-top: 0.2667rem;
          }
          .van-uploader__preview {
            margin: 0;
          }
          .van-uploader__preview-delete {
            top: -0.1067rem;
            right: 0px;
            font-size: 0.3733rem;
          }
          .uploader_front {
            .van-uploader__upload {
              width: 3.0667rem;
              height: 3.0667rem;
              background: url("../../../../assets/images/identification/business_license.png");
              background-size: cover;
              margin: 0;
              margin-right: 0.1867rem;
              border-radius: 0.08rem;
            }
            .van-uploader__preview-image {
              width: 3.0667rem;
              height: 3.0667rem;
              margin: 0;
              margin-right: 0.1867rem;
              border-radius: 0.08rem;
            }
          }
          .van-uploader__upload-text {
            font-size: 0.32rem;
            font-weight: 500;
            color: rgba(0, 0, 0, 0.85);
            line-height: 0.2933rem;
            margin-top: 2.1333rem;
          }
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
        margin-bottom: 0.5067rem;
      }
      .cancel_but {
        background: rgba(245, 245, 245, 1);
        border: 1px solid rgba(194, 194, 194, 1);
        box-shadow: none;
      }
      .service {
        font-size: 0.3733rem;
        font-weight: 500;
        color: rgba(204, 0, 0, 1);
        line-height: 0.48rem;
        text-align: center;
        background: rgba(245, 245, 245, 1);
        padding-bottom: 1.6667rem;
        margin-bottom: 0;
      }
    }
  }
}
.Realname {
  position: relative;
  ul {
    font-size: 0.3733rem;
    line-height: 0.68rem;
    position: absolute;
    top: 1.5467rem;
    left: 0;
    right: 0;
    z-index: 10;
    margin: 0 0.6667rem;
    background: #fff;
    border-left: 1px solid #dddddd;
    border-right: 1px solid #dddddd;
    li {
      padding: 0.0667rem 0.4rem;
      border-bottom: 1px solid #dddddd;
      em{
         font-style:normal ;
         color:rgba(204, 0, 0, 1)
      }
    }
  }
}
.img_amend{
    position: absolute;
    left: 0;
    top: 0;
    width: 3.0667rem;
    height: 3.0667rem;
    img{
        width: 100%;
        height: 100%;
        display: block;
    }
    .img_amend_icon{
        font-size: 0.3733rem;
        position:absolute;
        color: #969799;
        right: -6px;
        top: -5px;
    }
  }
</style>