<template>
    <div id="shopCart">
        <header>
            <div class="title">购物车</div>
            <div class="act">领券</div>
        </header>
        <div class="policy">
            <div>30天无忧退货</div>
            <div>48小时快速退款</div>
            <div>满88元免邮费</div>
        </div>
				<div class="center">
					<p>去添加点什么吧</p>
					<div class="btn">登录</div>
				</div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="stylus">
	#shopCart
		background-color #f4f4f4
		height calc(100vh - 200px)
		header
			padding 0 28px
			height 90px
			line-height 90px
			background-color #ffffff
			display flex
			justify-content space-between
			font-size 30px
			.act
				width 100px
				color #DD1A21
		.policy
			display flex
			justify-content flex
			background-color #eee
			div
				background-image url(http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/servicePolicy-de15fb68d3.png?imageView&type=webp)
				background-position 35px 28px
				background-repeat no-repeat
				background-size 10px
				line-height 72px
				height 72px
				padding-left 60px
				padding-right 30px
				color #666
		.center
			text-align center
			p
				padding-top 560px
				font-size 28px
				color #999
				background-repeat no-repeat
				background-position center 310px
				background-size 270px
				background-image url(http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png?imageView&type=webp)
			.btn
				width 480px
				height 90px
				margin 54px auto 0
				line-height 90px
				background-color #DD1A21
				color #ffffff
				font-size 32px
</style>
