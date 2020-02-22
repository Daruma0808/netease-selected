<template>
    <div id="firstView">
        <div class="fixed-header">
            <div class="top">
                <div class="logo"></div>
                <div class="search" @click="toSearch">
                    <span class="icon"></span>
                    <span>搜索商品, 共20266款好物</span>
                </div>
                <div class="login">登录</div>
            </div>
            <div class="bot">
                <van-tabs class="tab-bar" v-if="pageData.indexCateModule" v-model="active" @click="selTag" swipeable>
                    <van-tab
                        v-for="(item,index) in pageData.indexCateModule"
                        :title="item.name"
                        :key="index"
                    > 
                    </van-tab>
                </van-tabs>
                <div class="all">
                    <van-cell is-link :arrow-direction="direction" @click="ctrlPopup"></van-cell>                   
                </div>
                <van-popup v-model="modalShow" @close="modalHide" position="top">
                    <div class="collapse-block">
                        <div class="name">全部频道</div>
                        <div class="tags" v-if="pageData.indexCateModule">
                            <div class="tagname" :class="{'active':index===active}" @click="selTag(index)" v-for="(item,index) in pageData.indexCateModule" :key="index">{{item.name}}</div>
                        </div>
                    </div>
                </van-popup>
            </div>
        </div>
        <router-view class="subView" :pageData="123"></router-view>
    </div>
</template>

<script>
import Vue from "vue";
import {
    Tab,
    Tabs,
    Cell,
    Popup 
} from "vant";

Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Cell);
Vue.use(Popup);


export default {
    data() {
        return {
            active: 0,
            pageData:{},
            direction: 'down',
            modalShow: false
        };
    },
    methods: {
        async getDatas(){
			let datas = await this.$API.getRecommendData();
			const {code,data} = datas;
			if(code===0){
				this.pageData = data
			}
        },
        toSearch(){
            this.$router.push('/wysearch');
        },
        ctrlPopup() {
            this.modalShow = !this.modalShow;
            this.direction = this.modalShow?'up':'down'
        },
        modalHide(){
            this.direction = 'down'
        },
        selTag(i){
            
            //if(this.active === i) return
            this.active = i;       
            if(this.modalShow){
                this.ctrlPopup();
            }
            if(i===0){
                this.$route.path !== '/firstView/recommended' && this.$router.push('/firstView/recommended')
            }else{
                this.$route.path !== '/firstView/lifeHome' && this.$router.push('/firstView/lifeHome')
            }
            
        }
    },
    mounted(){
		this.getDatas();
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
        z-index 3000
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
                width 400px
                height 56px
                margin 0 15px
                line-height 56px
                padding-left 80px
                background-size 28px
                background-image url('http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png?imageView&type=webp')
                background-repeat no-repeat
                background-position 40px 10px
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
                .van-hairline--top-bottom
                    &:after
                        border none
                    .van-tab
                        line-height 60px
                        text-align center
                        font-size 26px
            .all
                position absolute
                top 0
                right 0
                width 80px
                height 64px
                z-index 9999
                .van-cell
                    margin-top 8px
                    .van-cell__right-icon
                        font-size 36px
            .van-overlay
                    top auto
                    bottom 0
                    height calc(100vh - 88px)
            .van-popup--top
                top 88px
                .collapse-block
                    padding 10px 20px 20px
                    border-top 1px solid #eee
                    .name
                        margin-bottom 30px
                        font-size 26px
                    .tags
                        display flex
                        flex-wrap wrap
                        justify-content space-between
                        .tagname
                            border 2px solid #ccc
                            background-color #FAFAFA
                            border-radius 3px
                            width 160px
                            text-align center
                            height 60px
                            margin-bottom 18px
                            line-height 60px
                            color #333
                            &.active
                                border-color #DD1A21
                                color #DD1A21
    .subView
        margin-top 148px                

</style>
