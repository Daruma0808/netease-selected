<template>
    <div id="recommended">
        <div class="banner">
            <van-swipe
                class="my-swipe"
                :autoplay="3000"
                indicator-color="white"
            >
                <van-swipe-item v-for="index in 4" :key="index">
                    <img
                        src="https://yanxuan.nosdn.127.net/6b1ebd19470cea9a7b8e81a52485f414.jpg?type=webp&imageView&quality=75&thumbnail=750x0"
                        alt
                    />
                </van-swipe-item>
            </van-swipe>
        </div>
        <div class="servicePolicy">
            <div class="item">
                <span class="icon yi"></span>
                <span>网易自营品牌</span>
            </div>
            <div class="item">
                <span class="icon right"></span>
                <span>30天无忧退货</span>
            </div>
            <div class="item">
                <span class="icon yuan"></span>
                <span>48小时快速退款</span>
            </div>
        </div>
        <div class="categories">
            <div class="item" v-for="index in 10" :key="index">
                <img
                    src="http://yanxuan.nosdn.127.net/12e8efd15b9b210ab156a7ee9b340548.gif"
                    alt
                />
                <p class="title">新品首发</p>
            </div>
        </div>
        <div class="promotionModule">
            <div class="top">
                <img
                    src="https://yanxuan.nosdn.127.net/5db28c137605ea7576c986e9c285e1c6.png?quality=75&type=webp&imageView&thumbnail=750x0"
                    alt
                />
            </div>
            <div class="first">
                <img
                    src="https://yanxuan.nosdn.127.net/5db28c137605ea7576c986e9c285e1c6.png?quality=75&type=webp&imageView&thumbnail=750x0"
                    alt
                />
            </div>
            <div class="part">
                <div class="item" v-for="index in 4" :key="index">
                    <img
                        src="https://yanxuan.nosdn.127.net/28244c6ae7ef78424ea5317a0d72dd6a.png?quality=75&type=webp&imageView&thumbnail=375x0"
                        alt
                    />
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
                <div class="module hotModule">
                    <div class="title">热销榜</div>
                    <img src alt class="module-img" />
                </div>
                <div class="module praiseModule">
                    <div class="title">热销榜</div>
                    <img src alt class="module-img" />
                </div>
            </div>
            <div class="partment">
                <div class="part" v-for="index in 8" :key="index">
                    <div class="part-name">美食酒水类</div>
                    <img src class="pic" />
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
						<div class="prod-list">
							<div class="prod" v-for="index in 6" :key="index">
								<img src="" alt="" class="prodPic">
								<div class="price">
									<span class="cur">¥987</span>
									<del>¥1370</del>
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
						<div class="prod" v-for="index in 6" :key="index">
							<img src="" alt="" class='prodPic'>
							<div class="desc">【UV紫外线杀菌】水质净化加湿器 5L大容量</div>
							<div class="price">¥137</div>
							<div class="tagWrap">
								<span class="tag">满88顺丰包邮</span>
							</div>
							
						</div>
					</div>
				</div>
    </div>
</template>

<script>
import Vue from "vue";
import { Swipe, SwipeItem } from "vant";
Vue.use(Swipe);
Vue.use(SwipeItem);
export default {};
</script>

<style lang="stylus">
@import '../../../assets/stylus/mixins.styl'
#recommended
	width 100%
	.banner
		height 370px
    .servicePolicy
			display flex
			padding 0 20px
			justify-content space-between
			background-color #ffffff
			.item
				height 72px
				line-height 72px
				span
					display inline-block
					vertical-align middle
					.icon
						width 32px;
						height 32px;
						margin-right 10px;
						background-size 32px;
						&.yi
							background-image url('http://yanxuan.nosdn.127.net/a03dd909803b9ac032eba58b7253a2f6.png')
						&.right
							background-image url('http://yanxuan.nosdn.127.net/2d0402ffcd52b3ec3b07422681c42a89.png')
						&.yuan
							background-image url('http://yanxuan.nosdn.127.net/eb61ee48e8942dbd1784c9ee75ebe955.png')
	.categories
		display flex
		flex-wrap wrap
		background-color #fff
		.item
			width 20%
			height 150px
			img
				margin 0 auto
				border-radius 7px
			.title
				text-align center
				margin-top 10px
	.promotionModule
		.part
			display flex
			flex-wrap wrap
			.item
				width 375px
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
				&.hotModule
					background-color #F9F3E4
				&.praiseModule
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
					background-color aqua
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
					background-color aqua
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
			.more
				font-size 26px
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
					background-color aqua
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
						padding 3px 4px
						color #DD1A21
						border 1.2px solid #DD1A21
						border-radius 5px















</style>
