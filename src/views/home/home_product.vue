<template>
  <div class="product">
    <div class="product_item">
      <router-link tag="div" to="/product/privacy" class="product_item-mod">
        <img src="@/assets/images/home/Privacy.png" alt />
        <span>隐私号</span>
      </router-link>
    </div>
    <div class="product_item">
      <router-link tag="div" to="/product/voice" class="product_item-mod">
        <img src="@/assets/images/home/voice.png" alt />
        <span>语音通知</span>
      </router-link>
    </div>
    <div class="product_item">
      <router-link tag="div" to="/product/message" class="product_item-mod">
        <img src="@/assets/images/home/note.png" alt />
        <span>短信</span>
      </router-link>
    </div>
    <div class="product_item">
      <router-link tag="div" to="/product/numbercheck" class="product_item-mod">
        <img src="@/assets/images/home/Check_number.png" alt />
        <span>号码核验</span>
      </router-link>
    </div>
    <div class="product_item">
      <router-link tag="div" to="/product/identitycheck" class="product_item-mod">
        <img src="@/assets/images/home/identity.png" alt />
        <span>身份检验</span>
      </router-link>
    </div>
    <div class="product_item">
      <router-link tag="div" to="/product/cloudelectricpin" class="product_item-mod">
        <img src="@/assets/images/home/Cloud_electric_pin.png" alt />
        <span>云电销</span>
      </router-link>
    </div>
    <div class="product_item">
      <router-link tag="div" to="/product/cloudService" class="product_item-mod">
        <img src="@/assets/images/home/cloud_service.png" alt />
        <span>云客服</span>
      </router-link>
    </div>
    <div class="product_item">
      <router-link tag="div" to="/product/smartCall" class="product_item-mod">
        <img src="@/assets/images/home/Smart_call.png" alt />
        <span>智能外呼</span>
      </router-link>
    </div>
  </div>
</template>

<script>
</script>

<style lang='scss' scoped>
.product {
  display: flex;
  flex-wrap: wrap;
  height: 5.1333rem;
  background: rgba(245, 245, 245, 1);
  .product_item {
    width: 25%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    .product_item-mod {
      display: flex;
      flex-direction: column;
      align-items: center;
      img {
        display: block;
        width: 0.64rem;
        height: 0.64rem;
        margin-bottom: 0.5333rem;
      }
      span {
        font-weight: 400;
        color: rgba(0, 0, 0, 1);
        line-height: 0.44rem;
        height: 0.44rem;
        font-size: 0.32rem;
      }
    }
  }
}
</style>