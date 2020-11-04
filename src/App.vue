<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  mounted() {
    // this.goLogin();

    window.onload = function() {
      document.addEventListener("touchstart", function(event) {
        if (event.touches.length > 1) {
          event.preventDefault();
        }
      });
      document.addEventListener("gesturestart", function(event) {
        event.preventDefault();
      });
    };
  },
  methods: {
    // goLogin() {
    //   //   if(mobile&&)
    //   setInterval(() => {
    //     let mobile = window.localStorage.getItem("mobile");
    //     let token = window.localStorage.getItem("token");
    //     console.log(mobile);
    //     console.log(token);
    //   }, 1000 * 60*60);
    // }
  }
};
</script>

<style>
@import url("./assets/css/font_icon/iconfont.css");
* {
  padding: 0;
  margin: 0;
  /* letter-spacing: 0.0133rem */
}
.hr_strip {
  border: 0.5px solid rgba(221, 221, 221, 1);
  margin: 0 0.7467rem;
}
html,
body {
  padding: 0;
  margin: 0;
  border: none;
  background: rgba(245, 245, 245, 1);
}
#app {
  font-family: PingFangSC-Medium, PingFang SC;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#zhichiBtnBox {
  display: none;
}
.van-cell:not(:last-child)::after {
  border: none !important;
}
.van-dialog {
  z-index: 9999999999 !important;
}
</style>
