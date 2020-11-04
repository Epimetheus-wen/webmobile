<template>
  <div class="header">
    <div class="header_left">
      <router-link to="/" tag="a">
        <img src="@/assets/images/home/Cloud_communication.png" alt />
      </router-link>
    </div>
    <div class="header_center">
      <div class="header_center_search">
        <img src="@/assets/images/home/search.png" alt />
        <input
          type="text"
          v-model="productname"
          @input="productSearch(productname)"
          placeholder="大家都在搜“语音通知”"
        />
      </div>
    </div>
    <div class="header_right">
      <router-link to="/user" tag="a">
        <img src="@/assets/images/home/user.png" alt />
      </router-link>
    </div>
    <ul class="header_search_list" >
      <router-link v-for="(item,index) in arrSearch" :key="index" :to="item.url"  tag="li" class="header_search_product">
        <div>{{item.name}}</div>
        <img src="../../assets/images/cloudService/right.png" alt />
      </router-link>
    </ul>
  </div>
</template>

<script src="./header.controller.js">
</script>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 1.1733rem;
  line-height: 1.1733rem;
  background: #f5f5f5;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 10;
  &:before,
  &:after {
    content: "";
    display: block;
  }
  .header_left {
    font-size: 0.48rem;
    width: 1.44rem;
    height: 0.48rem;
    line-height: 0.48rem;
    font-weight: 600;
    img {
      width: 1.44rem;
      height: 0.48rem;
      display: block;
    }
  }
  .header_center {
    width: 6.48rem;
    height: 0.7467rem;
    background: rgba(255, 255, 255, 1);
    border-radius: 6px;
    position: relative;
    .header_center_search {
      width: 6.48rem;
      height: 0.7467rem;
      img {
        position: absolute;
        left: 0.3267rem;
        top: 0;
        bottom: 0;
        margin: auto;
        display: block;
        width: 0.38rem;
        height: 0.4rem;
      }
      input {
        display: block;
        width: 6.48rem;
        height: 0.7467rem;
        border: none;
        line-height: 0.7467rem;
        outline: none;
        border-radius: 6px;
        text-indent: 0.88rem;
        font-size: 0.32rem;
      }

      input::-webkit-input-placeholder {
        color: rgba(187, 187, 187, 1);
      }

      input::-moz-placeholder {
        color: rgba(187, 187, 187, 1);
      }

      input:-moz-placeholder {
        color: rgba(187, 187, 187, 1);
      }

      input:-ms-input-placeholder {
        color: rgba(187, 187, 187, 1);
      }
    }
  }
  .header_right {
    img {
      display: block;
      width: 0.4rem;
      height: 0.4rem;
    }
  }
  .header_search_list {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 1.1733rem;
    left: 0;
    right: 0;
    .header_search_product {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 0.4rem;
      background: #fff;
      padding: 0 0.6667rem;
      border-bottom: 1px solid rgba(221, 221, 221, 1);
      img {
        // position: absolute;
        // right: 0;
        display: block;
        width: 0.2rem;
        height: 0.4rem;
      }
    }
  }
}
</style>