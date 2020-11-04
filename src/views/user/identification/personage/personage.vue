<template>
  <div class="personage">
    <BackTop :headertitle="headertitle"></BackTop>
    <div class="personage_main">
      <div class="personage_info">
        <div class="personage_title">
          <img src="../../../../assets/images/identification/basic.png" alt />
          <div class="personage_title_txt">基本资料</div>
        </div>
        <div class="personage_idF">
          <van-form @submit="onSubmit">
            <van-field
              v-model="from.name"
              name=" 真实姓名"
              label="真实姓名："
              placeholder="输入真实姓名"
              :rules="[{ required: true, message: '请输入真实姓名'}]"
            />
            <van-field
              v-model="from.idCard"
              name="身份证号"
              label="身份证号："
              placeholder="输入身份证号"
              :rules="[{ required: true, message: '请输入身份证号' }]"
            />
            <van-field
              v-model="from.iphone"
              name="联系电话"
              label="联系电话："
              placeholder="输入联系电话"
              :rules="[{ required: true, message: '请输入联系电话' }]"
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
            <div class="personage_title">
              <div class="personage_title_txt">照片上传</div>
            </div>
            <van-field
              class="uploader_field"
              name="uploader"
              label="身份证上传："
            >
              <template #input>
                <van-uploader
                  class="uploader_front"
                  v-model="from.idCard_img.front"
                  multiple
                  :max-count="1"
                  upload-text="身份证正面"
                  upload-icon
                />
                <div v-if="amend1" class="img_amend1">
                  <img :src="idCard_img.front" alt />
                  <div class="van-icon van-icon-clear img_amend_icon" @click="amendClear(1)"></div>
                </div>
                <van-uploader
                  class="uploader_back"
                  v-model="from.idCard_img.back"
                  multiple
                  :max-count="1"
                  upload-text="身份证背面"
                  upload-icon
                />
                <div v-if="amend2" class="img_amend2">
                  <img :src="idCard_img.back" alt />
                  <div class="van-icon van-icon-clear img_amend_icon" @click="amendClear(2)"></div>
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

<script src="./personage.controller.js"></script>

<style lang='scss' >
.personage_main {
  .personage_info {
    .personage_title {
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
      .personage_title_txt {
        font-size: 0.3733rem;
        font-weight: 600;
        color: rgba(0, 0, 0, 0.85);
        line-height: 0.68rem;
      }
    }
    .personage_idF {
      .van-form {
        border-top: 1px solid rgba(221, 221, 221, 1);
        .van-field {
          display: flex;
          padding: 0.4267rem 0.6667rem;
          border-bottom: 1px solid rgba(221, 221, 221, 1);
          .van-field__label {
            width: 2.1867rem;
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
            content: "* ";
            color: rgba(204, 0, 0, 1);
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
        .uploader_field {
          background: rgba(245, 245, 245, 1);
          margin-bottom: 1.7067rem;
          border-bottom: none;
          padding-top: 0.1333rem;
          .van-field__label {
            width: 2.56rem;
            margin-top: 0.2933rem;
          }
          .van-uploader__preview {
            margin: 0;
          }
          .van-uploader__preview-delete {
            top: -0.1067rem;
            right: 0px;
            font-size: 0.3733rem;
          }
          .van-field__error-message {
            margin-top: 0.2667rem;
          }
          .uploader_front {
            .van-uploader__upload {
              width: 3.0667rem;
              height: 1.7333rem;
              background: url("../../../../assets/images/identification/front.png");
              background-size: cover;
              margin: 0;
              margin-right: 0.1867rem;
              border-radius: 0.08rem;
            }
            .van-uploader__preview-image {
              width: 3.0667rem;
              height: 1.7333rem;
              margin: 0;
              margin-right: 0.1867rem;
              border-radius: 0.08rem;
            }
          }
          .uploader_back {
            .van-uploader__upload {
              width: 3.0667rem;
              height: 1.7333rem;
              background: url("../../../../assets/images/identification/back.png");
              background-size: cover;
              margin: 0;
              border-radius: 0.08rem;
            }
            .van-uploader__preview-image {
              width: 3.0667rem;
              height: 1.7333rem;
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
            margin-top: 0.8rem;
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
        padding-bottom: 0.8rem;
        margin-bottom: 0;
      }
    }
  }
  .img_amend1 {
    position: absolute;
    left: 0;
    top: 0;
    width: 3.0667rem;
    height: 1.7333rem;
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
    .img_amend2 {
    position: absolute;
    left: 3.2524rem;
    top: 0;
    width: 3.0667rem;
    height: 1.7333rem;
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
}
</style>