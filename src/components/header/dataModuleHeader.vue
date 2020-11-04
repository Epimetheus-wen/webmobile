<template>
  <div>
    <div class="dataModuleTop">
      <div  v-if="sublevel" class="dataModuleTop_left" @click="toUser('user')">
        <i class="iconfont icon-x"></i>
      </div>
      <div v-else-if='!privacy' class="dataModuleTop_left" @click="back">
        <i class="fa fa-angle-left"></i>
      </div>
      <span>{{headertitle}}</span>
      <div v-if="privacy" class="dataModuleTop_rlght" @click="toUser('PrivacyAccount')">
        <img class="img" src="../../assets/images/dataModule/user.png" alt />
      </div>
      <!-- <div v-else class="dataModuleTop_rlght" @click="menu">
        <i class="iconfont icon-shenglvehao"></i>
      </div> -->
    </div>
    <div class="dataModuleTopHeight"></div>
  </div>
</template>

<script>
export default {
  props: {
    headertitle: String
  },
  data: function() {
    return {
      sublevel: true,
      privacy: true
    };
  },
  watch: {
    $route(to) {
      if (to.path != "/dataModule") {
        this.sublevel = false;
      } else {
        this.sublevel = true;
      }
      if (to.path != "/privacyData") {
        this.privacy = false;
      } else {
        this.privacy = true;
      }
    }
  },
  mounted() {
    let path = this.$route.path;
    if (path != "/dataModule") {
      this.sublevel = false;
    } else {
      this.sublevel = true;
    }
    if (path != "/privacyData") {
      this.privacy = false;
    } else {
      this.privacy = true;
    }
  },
  methods: {
    toUser(src) {
      if (src == "user") {
        this.$router.push("user");
      }
      if (src == "PrivacyAccount") {
        this.$router.push("PrivacyAccount");
      }
    },
    back() {
        this.$router.go(-1); //返回上一页
    },
    menu(){
        console.log('···')
    }
  }
};
</script>

<style lang='scss' scoped>
.dataModuleTopHeight {
  height: 1.1733rem;
  background: #fff;
}
.dataModuleTop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  text-align: center;
  height: 1.1733rem;
  background: #fff;
  z-index: 10;
  border-bottom: 1px solid #f5f5f5;
  .dataModuleTop_left {
    position: absolute;
    left: 0.2667rem;
    top: 0;
    bottom: 0;
    margin: auto 0;
    height: 1.1733rem;
    i {
      display: block;
      line-height: 1.1733rem;
      font-size: 0.5333rem;
      color: #636363;
    }
    .fa-angle-left {
      margin-left: 0.2667rem;
    }
  }
  .dataModuleTop_rlght {
    position: absolute;
    right: 0.2667rem;
    top: 0;
    bottom: 0;
    margin: auto 0;
    height: 1.1733rem;
    display: flex;
    align-items: center;
    i {
      display: block;
      width: 1rem;
      line-height: 1.1733rem;
      font-size: 0.56rem;
      color: #636363;
    }
    .img {
      width: 0.5333rem;
      height: 0.5333rem;
      display: block;
      margin-right: 0.1333rem;
    }
  }
  span {
    display: block;
    height: 1.1733rem;
    font-size: 0.4rem;
    // font-weight: 600;
    color: rgba(0, 0, 0, 1);
    line-height: 1.1733rem;
  }
}
</style>