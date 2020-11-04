<template>
  <div class="identification">
    <div v-if="sublevel">
      <BackTop :headertitle="headertitle"></BackTop>
      <div class="identification_main">
        <div class="idF_title">
          <img src="../../../assets/images/identification/hint.png" alt />
          <div class="idF_title_text">请选择您要认证的用户身份类型</div>
        </div>
        <div class="idF_center">
          <div class="idF_center_item">
            <router-link to="/identification/personage">
              <img src="../../../assets/images/identification/per.png" alt />
              <div class="idF_center_item_text">个人用户认证</div>
            </router-link>
          </div>
          <div class="idF_center_item">
            <router-link to="/identification/company">
              <img src="../../../assets/images/identification/com.png" alt />
              <div class="idF_center_item_text">企业用户认证</div>
            </router-link>
          </div>
          <button class="consult zhiCustomBtn" @click="zhichiBtn">咨询客服</button>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script src="./identification.controller.js">
</script>

<style lang='scss' scoped>
.identification_main {
  padding: 0.6933rem 0.6667rem;
  .idF_title {
    display: flex;
    align-items: center;
    img {
      width: 0.3733rem;
      height: 0.3467rem;
      display: block;
      margin-right: 14px;
    }
    .idF_title_text {
      font-size: 0.3733rem;
      font-weight: 500;
      color: rgba(0, 0, 0, 0.65);
      line-height: 0.5333rem;
    }
  }
  .idF_center {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 0.1867rem;
    .idF_center_item {
      margin-top: 1.0933rem;
      img {
        width: 3.72rem;
        height: 3.2rem;
        display: block;
      }
      .idF_center_item_text {
        font-size: 0.3733rem;
        font-weight: 600;
        color: rgba(0, 0, 0, 0.85);
        line-height: 0.32rem;
        margin-top: 0.2rem;
        text-align: center;
      }
    }
    .consult {
      width: 2.08rem;
      height: 0.8rem;
      background: #cc0000;
      box-shadow: 0px 0.0267rem 0.08rem 0px #d5d5d5;
      border-radius: 0.08rem;
      border: none;
      font-size: 0.3467rem;
      font-weight: 500;
      color: white;
      line-height: 0.8rem;
      margin-top: 1.3333rem;
    }
  }
}
</style>