<template>
  <div id="personal">
		<Header>
			<div slot="mid" class="wyyx" ></div>
		</Header>
		<div class="logoWrap">
			<img src="http://yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png" alt="">
		</div>
		<div class="btnWrap">
			<div class="btnLogin phone">
				<i class="iconfont icon-mobile-phone"></i>
				<span>手机号快捷登录</span>
			</div>
			<div class="btnLogin email">
				<i class="iconfont icon-email"></i>
				<span>邮箱帐号登录</span>
			</div>
		</div>
		<div class="thirdWrap">
			<div class="thirdList">
				<div class="item wx">
					<i class="iconfont icon-weixin"></i>
					微信
				</div>
				<div class="item qq">
					<i class="iconfont icon-qq"></i>
					QQ
				</div>
				<div class="item wb">
					<i class="iconfont icon-weibo"></i>
					微博
				</div>
			</div>
		</div>
  </div>
</template>

<script>
import Header from '../../components/header/header';
export default {
	components:{Header},
}
</script>

<style lang="stylus">
	#personal
		background-color #F2F5F4
		padding-bottom 0
		#header
			.wyyx
				width 200px
				height 70px
				margin-top 14px
				background-repeat no-repeat
				background-size 180px
				background-position 16px -130px
				background-image url(http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/sprites/hd-s88c52a8caf-e895499c8e.png?imageView&type=webp)
		.logoWrap
			height 460px
			border-top 1px solid transparent
			img
				overflow hidden
				width 270px
				margin 230px auto 0
				transform translateY(-50%)
		.btnWrap
			padding 0 35px
			.btnLogin
				display flex
				font-size 28px
				line-height 86px
				padding-left 230px
				height 86px
				border 2px solid #DD1A21
				border-radius 3px
				i
					font-size 50px
					width 53px
					height 60px
				&.phone
					background-color #DD1A21
					margin-bottom 26px
					color #fff
				&.email
					color #DD1A21
					background-color transparent
		.thirdWrap
			height calc(100vh - 760px)
			position relative
			.thirdList
				position absolute
				bottom 60px
				left 120px
				width 510px
				height 50px
				display flex
				.item
					font-size 28px
					color #7F7F7F
					width 170px
					text-align center
					height 44px
					line-height 44px
					background-repeat no-repeat
					background-position 40px 20px
					background-size 30px 30px
					&.qq
						border-left 1px solid #7f7f7f
						border-right 1px solid #7f7f7f
</style>