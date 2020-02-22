<template>
  <div id="wySearch">
		<div class="header">
			<div class="searchArea">
				<van-search @search="autoComplete" @input="autoComplete" @clear="clearInput" background="#f4f4f4" v-model="value" :placeholder="pageData.defaultKeyword && pageData.defaultKeyword.keyword" />	
			</div>
			<div class="back" @click="goBack">
				取消
			</div>
		</div>
		<div class="hotSearch" v-if="resSearch.length===0">
			<div class="name">热门搜索</div>
			<div class="container">
				<div class="tag" v-for="(item,index) in pageData.hotKeywordVOList" :key="index" :class="{'red':item.highlight}">{{item.keyword}}</div>
			</div>
		</div>
		<ul class="autoCompleteList" v-if="resSearch.length">
			<li class="keyword" v-for="(item,index) in resSearch" :key="index">{{item}}</li>
		</ul>

	</div>
</template>

<script>
export default {
	data(){
		return {
			value:'',
			pageData:{},
			resSearch:[]
		}
	},
	methods:{
		autoComplete(val){
			//防抖处理
			if(this.timeId) clearTimeout(this.timeId)
			this.timeId = setTimeout(async ()=>{
				let res = await this.$API.searchAutoComplete(val);
				this.resSearch = res.data;
				delete this.timeId
			},300);
		},
		clearInput(){
			this.value = '';
			this.resSearch = []
		},
		goBack(){
			this.$router.back();
		}
	},
	async mounted(){
		let datas = await this.$API.initSearchWords();
		this.pageData = datas.data;
	}
}
</script>

<style lang="stylus">
	#wySearch
		height 100%
		background-color #eee
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
			.back
				font-size 26px
				width 100px
				text-align center
		.hotSearch
			padding 15px 26px 25px
			background-color #fff
			.name
				color #999
				font-size 28px
				line-height 90px
			.container
				display flex
				flex-wrap wrap
				justify-content space-between
				.tag
					font-size 20px
					border 2px solid #999
					border-radius 3px
					padding 6px 13px
					color #333
					margin-bottom 20px
					&.red
						border-color #DD1A21
						color #DD1A21
		.autoCompleteList
			position absolute
			left 0
			top 88px
			width 698px
			background-color #fff
			padding 20px 26px 0
			li
				line-height 80px
				height 80px
				font-size 30px
				border-bottom 1px solid #d9d9d9	
</style>