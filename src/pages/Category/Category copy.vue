<template>
  <div id="category">
    <div class="searchArea">
			<van-search  background="#f4f4f4" :placeholder="pageData.defaultKeyword && pageData.defaultKeyword.keyword" />	
		</div>
		<div class="leftNav">

		</div>
		<div class="actView">
			<div class="banner"></div>
			<div class="partment">
				<div class="part">
					<img class="pic" src=""/>
					<span class="name"></span>
				</div>
			</div>	
		</div>	
  </div>
</template>

<script>
	export default {
		data(){
			return {
				pageData:{}
			}
		}
	}
</script>

<style lang="stylus">
	#category
		height 100%
		.header
			background-color #fff
			padding 15px 26px 25px
			height 58px
			display flex
			line-height 58px
			.searchArea
				width 630px
				background-color #fff
				font-size 34px
				.van-search__content
					background-color #f4f4f4
					.van-cell
						font-size 26px
						.van-field__left-icon
							margin-right 16px
							.van-icon-search
								font-size 34px
						.van-cell__value
							.van-field__clear
								font-size 34px
</style>