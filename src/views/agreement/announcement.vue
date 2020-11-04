<template>
  <div class="announcement">
    <BackTop :headertitle="headertitle"></BackTop>
    <div class="announcement_main" >
        <div class="announcement_title">{{content.title}}</div>
        <div class="announcement_time" >{{content.create_time}}</div>
        <div class="announcement_content" v-html="content.content"></div>

    </div>
  </div>
</template>

<script src="./announcement.controller.js">
</script>

<style lang='scss'>
.announcement_main{
    .announcement_title{
        font-size: 0.3733rem;
        font-weight: 600;
        text-align: center;
        margin-top: 0.6667rem;
        padding: 0 0.6667rem;
    }
    .announcement_time{
        font-size: 0.32rem;
        font-weight: 500;
        color: rgba(0,0,0,0.45);
        text-align: center;
        margin: 0.2667rem 0;
        padding: 0 0.6667rem;
    }
    .announcement_content{
        font-size: 0.3733rem;
        padding: 0 0.6667rem;
        p{
            font-size: 0.3733rem !important;
            background: #F5F5F5 !important;
            margin-bottom: 0.24rem !important;
        }
        img{
            width: 8.6667rem;
            display: block;
        }
    }
}


</style> 