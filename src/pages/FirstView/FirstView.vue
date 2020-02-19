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
                <van-tabs class="tab-bar" v-model="active" swipeable>
                    <van-tab
                        v-for="index in 7"
                        :title="'选项 ' + index"
                        :key="index"
                    >
                        
                    </van-tab>
                </van-tabs>
                <div class="all">
                    <div class="modalCtrl" @click="modalCtrl">
                        <van-collapse v-model="activeNames">
                            <van-collapse-item name="1">
                                <div>
                                    <h3>全部频道</h3>
                                </div>
                            </van-collapse-item>
                        </van-collapse>
                    </div>
                    <van-overlay :show="modalShow" @click.stop="hidModal">
                        <div class="wrapper" @click.stop></div>
                    </van-overlay>
                </div>
            </div>
        </div>
        <router-view class="subView"></router-view>
    </div>
</template>

<script>
import Vue from "vue";
import {
    Tab,
    Tabs,
    Collapse,
    CollapseItem,
    Overlay
} from "vant";
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Overlay);

export default {
    data() {
        return {
            active: 0,
            activeNames: [],
            modalShow: false
        };
    },
    methods: {
        modalCtrl() {
            this.modalShow = !this.modalShow;
            this.activeNames = this.modalShow ? ["1"] : [];
        },
        hidModal() {
            this.modalShow = false;
            this.activeNames = [];
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
        z-index 10
        .top
            background-color #fff
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
        .bot
            position relative
            .van-tabs
                >div
                    height 60px
                    .van-tab
                        line-height 60px
                        font-size 26px
            .all
                position absolute
                top 0
                right 0
                width 80px
                height 60px
                z-index 3
                .modalCtrl
                    height 100%
                    z-index 9
                    >div
                        height 100%
                        .van-collapse-item
                            height 100%
                .van-overlay
                    top auto
                    bottom 0
                    height 70%
    .subView
        margin-top 148px                

</style>
