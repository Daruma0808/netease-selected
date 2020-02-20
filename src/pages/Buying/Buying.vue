<template>
  <div id="buying">
    <Header title="值得买"></Header>
    <div class="banner">
      <div class="words">
        <img src="http://m.you.163.com/topic/index/img/topic_logo.c2284970.png" alt="">
        <span>严选好物 用心生活</span>
      </div>
      <div class="content">
        <van-swipe class="my-swipe" indicator-color="#DD1A21">
          <van-swipe-item>
            <div class="banner-page">
              <div class="item" v-for="index in 8" :key="index">
                <img src="" alt="" class="icon">
                <div class="title">9.9超值</div>
                <div class="desc">定价直降</div>
              </div>
            </div>
          </van-swipe-item>
          <van-swipe-item>2</van-swipe-item>
          <van-swipe-item>3</van-swipe-item>
        </van-swipe>
      </div>
      <div class="waterfull">
        <vue-waterfall-easy :imgsArr="imgsArr" @scrollReachBottom="getData"></vue-waterfall-easy>
      </div>
    </div>
  </div>
</template>

<script>
import vueWaterfallEasy from 'vue-waterfall-easy'
import Header from '../../components/header/header'
  export default {
    components:{
      vueWaterfallEasy,
      Header
    },
    data(){
      return {
        current:0,
        imgsArr:[],
        group:0
      }
    },
    methods:{
      onChange(index){
        this.current = index;
      }
    }
  }
</script>

<style lang="stylus">
  #buying
    .banner
      height 660px
      background-image url(http://m.you.163.com/topic/index/img/topic_title_bg.2373a140.png)
      background-size cover
      .words
        padding 60px 20px 24px
        display flex
        img
          width 130px
        span
          margin 21px 0 0 6px
          font-size 30px
          color #fff
      .content
        width 710px
        height 540px
        border-radius 12px
        margin 0 auto
        background-color #fff
        .my-swipe
          height 540px
          .van-swipe__indicator
            width 40px
            height 6px
            border-radius 2px
            background-color #ccc
          .banner-page
            padding-top 30px
            display flex
            flex-wrap wrap
            justify-content space-between
            .item
              width 177px
              height 220px
              text-align center
              margin-bottom 20px
              .icon
                width 120px
                height 120px
                margin 0 auto
                border-radius 50%
                background-color aqua
              .title
                font-size 30px
                font-weight bold
                margin 12px 0 0
              .desc
                color #999


</style>