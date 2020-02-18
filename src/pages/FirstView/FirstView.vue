<template>
    <div id="firstView">
        <div class="fixed-header">
            <div class="top">
                <div class="logo"></div>
                <div class="search">
                    <span class="icon"></span>
                    <span>搜索商品, 共20266款好物</span>
                </div>
                <div class="login">登录</div>
            </div>
            <div class="bot">
                <van-tabs v-model="active" swipeable>
                    <van-tab v-for="index in 7" :title="'选项 ' + index">
                        内容 {{ index }}
                    </van-tab>
                </van-tabs>
            </div>
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import { Tab, Tabs } from 'vant';

Vue.use(Tab);
Vue.use(Tabs);
export default {
    data(){
        return {
            active:0
        }
    }
};
</script>

<style lang="stylus">
@import "../../assets/stylus/mixins.styl"
#firstView
    width 100%
    .fixed-header
        width 100%
        position fixed
        top 0
        .top
            display flex
            height 60px
            padding 14px 20px
            align-items center
            justify-content space-between
            .logo
                width 138px
                height 40px
                background-size cover
                background-image url(http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png?imageView&type=webp)
            .search
                width 442px
                height 56px
                margin 0 15px
                line-height 56px
                color #666
                background-color #ededed
            .login
                width 74px
                height 40px
                line-height 40px
                color #DD1A21
                border 2px solid #DD1A21
                border-radius 3px
                text-align center
</style>
