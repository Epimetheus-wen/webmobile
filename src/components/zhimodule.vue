<template>
  <div class="zhimodule">
    <div class="zhimodule_top">
      <div class="backTop_left" @click="back">
        <i class="fa fa-angle-left"></i>
        返回
      </div>
    </div>
    <iframe
      class="zhimodule_main"
      src="https://dxykf.caih.com/chat/h5/index.html?sysNum=3677f2094abc4fada9b6e657de8b2cfc"
      frameborder="0"
    ></iframe>
  </div>
</template>

<script>
export default {
  data: function() {
    return {};
  },
  methods: {
    back() {
      this.$router.go(-1); //返回上一页
    }
  }
};
</script>

<style lang='scss' scoped>
.zhimodule {
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  .zhimodule_top {
    width: 100%;
    height: 1.1733rem;
    line-height: 1.1733rem;
    background-color: #cf0000 !important;
    .backTop_left {
      display: flex;
      height: 1.1733rem;
      color: #fff;
      font-size: 0.4267rem;
      i {
        display: block;
        width: 1rem;
        text-align: center;
        line-height: 1.1733rem;
        font-size: 0.6667rem;
      }
    }
  }
  .zhimodule_main {
    // height: 100%;
    width: 100%;
    flex: 1;
  }
}
</style>