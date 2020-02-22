<template>
    <div id="recommended">
        <div class="banner">
            <van-swipe
                class="my-swipe"
                :autoplay="3000"
                indicator-color="white"
				v-if="pageData.focusList"
            >
                <van-swipe-item v-for="(banner,index) in pageData.focusList" :key="index">
                    <img
                        :src="banner.picUrl"
                    />
                </van-swipe-item>
            </van-swipe>
        </div>
        <div class="servicePolicy">
            <div class="item" v-for="(serve,index) in pageData.policyDescList" :key="index">
                <img class="icon" :src="serve.icon"/>
                <span>{{serve.desc}}</span>
            </div>
        </div>
        <div class="categories" v-if="pageData.kingKongModule && pageData.kingKongModule.kingKongList">
            <div class="item" v-for="(item,index) in pageData.kingKongModule.kingKongList" :key="index">
                <img
                    :src="item.picUrl"
                />
                <p class="title">{{item.text}}</p>
            </div>
        </div>
        <div class="promotionModule">
            <div class="top">
                <img
                    src="https://yanxuan.nosdn.127.net/5db28c137605ea7576c986e9c285e1c6.png?quality=75&type=webp&imageView&thumbnail=750x0"
                />
            </div>
			<div class="floor">
				<div class="first">
					<img
						src="https://yanxuan.nosdn.127.net/a4187bffa2a0431ec5d6e2dd1070d6c5.gif?imageView&quality=75"
					/>
				</div>
				<div class="part">
					<div class="item" v-for="index in 4" :key="index">
						<img
							src="https://yanxuan.nosdn.127.net/28244c6ae7ef78424ea5317a0d72dd6a.png?quality=75&type=webp&imageView&thumbnail=375x0"
						/>
					</div>
				</div>
			</div>
        </div>
        <div class="freshmanModule">
            <div>
                <span class="module-title">新人专享礼</span>
            </div>
            <div class="content">
                <div class="left">
                    <div class="title">新人专享礼包</div>
                    <div class="gift-bag">
                        <img
                            src="http://yanxuan.nosdn.127.net/ba4d635ec94ad95b28bfab6500900659.png"
                            alt
                        />
                    </div>
                </div>
                <div class="right">
                    <div class="top">
                        <div class="title">福利社</div>
                        <div class="subTitle">今日特价</div>
                        <div src class="promProduct" alt></div>
                        <div class="disCount">
                            <div class="cur">¥79</div>
                            <div class="old">
                                <s>¥97</s>
                            </div>
                        </div>
                    </div>
                    <div class="bot">
                        <div class="title">新人拼团</div>
                        <div class="tag">1元起包邮</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="hotSellModule">
            <div class="module-title">类目热销榜</div>
            <div class="modules">
                <div class="module hotModule" v-for="(m,index) in twoCats" :key="index">
                    <div class="title">{{m.categoryName}}</div>
                    <img :src="m.picUrl" class="module-img" />
                </div>
                
            </div>
            <div class="partment">
                <div class="part" v-for="(cat,index) in hotCats" :key="index">
                    <div class="part-name">{{cat.categoryName}}</div>
                    <img :src="cat.picUrl" class="pic" />
                </div>
            </div>
        </div>
        <div class="timeBuyModule">
            <div class="module-title">
                <div class="title">限时购</div>
                <div class="timeCounter">
                    <span>00</span>
                    <em>:</em>
                    <span>00</span>
                    <em>:</em>
                    <span>00</span>
                </div>
                <div class="more">更多&gt;</div>
            </div>
			<div class="prod-list" v-if="pageData.flashSaleModule">
				<div class="prod" v-for="(item,index) in pageData.flashSaleModule.itemList" :key="index">
					<img :src="item.picUrl" alt="" class="prodPic">
					<div class="price">
						<span class="cur">¥{{item.activityPrice}}</span>
						<del>¥{{item.originPrice}}</del>
					</div>
				</div>
			</div>
        </div>
				<div class="freshProdModule">
					<div class="module-title">
							<div class="title">新品首发</div>
							<div class="more">更多&gt;</div>
					</div>
					<div class="prodList">
						<div class="prod" v-for="(item,index) in newList" :key="index">
							<img :src="item.primaryPicUrl" alt="" class='prodPic'>
							<div class="desc">{{item.name}}</div>
							<div class="price">¥{{item.retailPrice}}</div>
							<div class="tagWrap" v-if="item.itemTagList[0]">
								<span class="tag">{{item.itemTagList[0].name}}</span>
							</div>
						</div>
					</div>
				</div>
				<div class="otherModule" v-if="pageData.sceneLightShoppingGuideModule">
					<div class="part" v-for="(item,index) in pageData.sceneLightShoppingGuideModule" :key="index">
						<div class="title">{{item.styleItem.title}}</div>
						<div class="desc">{{item.styleItem.desc}}</div>
						<div class="prods">
							<img :src="item.styleItem.picUrlList[0]" alt="" class="one">
							<img :src="item.styleItem.picUrlList[1]" alt="" class="two">
						</div>
					</div>
				</div>
				<div class="footer">
					<div class="center">
						<div class="download">
							<div class="btn app"><span>下载APP</span></div>
							<div class="btn pc"><span>电脑版</span></div>
						</div>
						<p class="copyright">
	网易公司版权所有 © 1997-2020<br>
	食品经营许可证：JY13301080111719
						</p>
					</div>
				</div>
    </div>
</template>

<script>
export default {
	data(){
		return{
			pageData:{}
		}
	},
	computed:{
		twoCats(){
			return this.pageData.categoryHotSellModule && this.pageData.categoryHotSellModule.categoryList && this.pageData.categoryHotSellModule.categoryList.slice(0,2);
		},
		hotCats(){
			return this.pageData.categoryHotSellModule && this.pageData.categoryHotSellModule.categoryList && this.pageData.categoryHotSellModule.categoryList.slice(2);
		},
		newList(){
			return this.pageData.newItemList && this.pageData.newItemList.slice(0,6)
		}
	},
	methods:{
		async getDatas(){
			let datas = await this.$API.getRecommendData();
			const {code,data} = datas;
			if(code===0){
				this.pageData = data
			}
		}
	},
	mounted(){
		this.getDatas();
	}
};
</script>

<style lang="stylus">
@import '../../../assets/stylus/mixins.styl'
#recommended
	width 100%
	.banner
		height 370px
		img
			height 370px
    .servicePolicy
			display flex
			padding 0 20px
			justify-content space-between
			background-color #ffffff
			.item
				height 72px
				line-height 72px
				font-size 28px
				.icon
					width 32px
					height 32px
					margin-right 7px		
					display inline-block
					vertical-align middle
	.categories
		display flex
		flex-wrap wrap
		background-color #fff
		.item
			width 20%
			height 180px
			img
				width 120px
				margin 0 auto
				border-radius 7px
			.title
				text-align center
				margin-top 10px
	.promotionModule
		.floor
			background-color #1674e3
			padding 0 20px 20px
			.part
				display flex
				justify-content space-between
				flex-wrap wrap
				.item
					width 350px
					margin-top 10px
	.freshmanModule
		margin 20px 0
		padding-bottom 30px
		background-color #ffffff
		>div
			text-align center
			.module-title
				height 104px
				font-size 34px
				line-height 104px
				position relative
				&:before
					sideDecorateLine()
					left -50px
				&:after
					sideDecorateLine()
					left auto
					right -50px
		.content
			clearFix()
			padding 0 30px
			text-align left
			.left
				width 343px
				margin-right 4px
				height 420px
				background-color #F9E9CF
				border-radius 2px
				float left
				.title
					margin 32px
					font-size 32px
				.gift-bag
					margin 0 auto
					width 250px
					height 250px
			.right
				width 343px
				float left
				.top
					position relative
					height 208px
					margin-bottom 4px
					background-color #FBE2D3
					border-radius 4px
					.title
						font-size 32px
						padding 23px 0 7px 28px
					.subTitle
						padding-left 28px
						font-size 30px
						color #7f7f7f
					.promProduct
						position absolute
						top 25px
						right 0
						width 150px
						height 150px
						background-color aqua
					.disCount
						position absolute
						z-index 7
						top 25px
						right 40px
						width 80px
						height 80px
						border-radius 50%
						background-color orange
						opacity .8
						color #fff
						text-align center
						.cur
							margin 15px 0 1px 0
				.bot
					height 208px
					background-color #FFECC2
					border-radius 4px
					.title
						font-size 32px
						padding 23px 0 6px 25px
					.tag
						margin-left 25px
						width 134px
						line-height 32px
						text-align center
						background-color #CBB693
						color #fff
						font-size 24px
	.hotSellModule
		width 690px
		background-color #fff
		padding 0 30px 30px
		margin-bottom 20px
		.module-title
			height 104px
			line-height 104px
			font-size 34px
		.modules
			display flex
			justify-content space-between
			.module
				position relative
				width 340px
				height 200px
				margin-bottom 10px
				&:nth-of-type(1)
					background-color #F9F3E4
				&:nth-of-type(2)
					background-color #EBEFF6									
				.title
					font-size 30px
					padding 20px 0 0 20px
					line-height 120px
					position relative
					&:after
						underDecorateLine()
				.module-img
					position absolute
					width 200px
					height 200px
					right 0
					top 0
		.partment
			display flex
			flex-wrap wrap
			justify-content space-between
			.part
				width 161px
				height 200px
				text-align center
				margin-bottom 10px
				background-color #F5F5F5
				.part-name
					line-height 60px
				.pic
					width 120px
					height 120px
					margin 0 auto
	.timeBuyModule
		width 690px
		background-color #fff
		padding 0 30px
		margin-bottom 20px
		.module-title
			display flex
			line-height 104px
			font-size 34px
			.timeCounter
				display flex
				line-height 42px
				margin-top 30px
				margin-left 16px
				width 470px
				span
					width 40px
					height 40px
					border-radius 3px
					background-color #000
					font-size 26px
					color #fff
					text-align center
					margin 0 8px
				em
					font-style normal
		.prod-list
			display flex
			justify-content space-between
			flex-wrap wrap
			.prod
				width 216px
				height 290px
				display flex
				flex-direction column
				.prodPic
					height 216px
					background-color aqua
				.price
					height 50px
					padding-left 20px					
					line-height 66px
					.cur
						padding-right 10px
						font-size 26px
						color #DD1A21
					del
						color #7F7F7F						
	.freshProdModule
		width 690px
		background-color #fff
		padding 0 30px
		margin-bottom 20px
		.module-title
			line-height 104px
			font-size 34px
			clearFix()
			.title
				float left
			.more
				float right
		.prodList
			display flex
			flex-wrap wrap
			justify-content space-between
			.prod
				width 216px
				height 420px
				display flex
				flex-direction column
				.prodPic
					height 216px
				.desc
					margin-top 8px
					line-height 40px
					overflow hidden
					display -webkit-box
					text-overflow ellipsis
					-webkit-line-clamp 2
					-webkit-box-orient vertical
					white-space normal
				.price
					font-size 28px
					line-height 44px
					color #DD1A21
				.tagWrap	 
					.tag
						display inline-block
						font-size 20px
						padding 2px 4px
						color #DD1A21
						border 1.2px solid #DD1A21
						border-radius 5px
	.otherModule
		display flex
		flex-wrap wrap
		justify-content space-between
		width 690px
		background-color #fff
		padding 15px 30px 30px
		margin 20px 0
		.part
			width 310px
			height 264px
			padding 15px 15px 0 15px
			background-color #F5F5F5
			margin-bottom 5px
			.title
				line-height 44px
				font-size 34px
			.desc
				color #7f7f7f
			.prods
				margin-top 4px
				display flex
				justify-content space-between
				img
					width 150px
					height 150px
	.footer
		height 260px
		background-color #414141
		border-top 1px solid rgba(0,0,0,.15)
		text-align center
		.center
			width 450px
			margin 0 auto
			.download
				padding-top 50px
				height 70px
				display flex
				justify-content space-between
				.btn
					span
						display inline-block
						width 172px
						height 62px
						border-radius 4px
						line-height 62px
						border 1.8px solid #999
						color #fff
			.copyright
				line-height 38px
				color #999

</style>
