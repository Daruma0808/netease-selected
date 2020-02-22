<template>
  <div id="category">
    <div class="header">
			<div class="searchArea">
				<van-search @focus="toSearch"  background="#f4f4f4" :placeholder="defaultSearch?defaultSearch:'搜索商品, 共22035款好物'" />	
			</div>
		</div>
		<div class="content">
			<div class="leftNav">
				<van-sidebar v-model="activeKey" @change="selCat">
					<van-sidebar-item v-for="(item,index) in navs" :key="index" :title="item.name" />
				</van-sidebar>
			</div>
			<div class="actView">
				<div class="container">
					<div class="banner">
						<img class="bannerPic" src=""/>
					</div>
					<div class="partment">
						<div class="part" v-for="(item,index) in curCateDatas.categoryList" :key="index" >
							<img class="pic" :src="item.bannerUrl"/>
							<span class="name">{{item.name}}</span>
						</div>
					</div>
				</div>
			</div>
		</div>	
  </div>
</template>

<script>
	import Vue from 'vue';
	import { Sidebar, SidebarItem } from 'vant';
	import BScroll from 'better-scroll';
	Vue.use(Sidebar);
	Vue.use(SidebarItem);
	export default {
		data(){
			return {
				defaultSearch:'',
				activeKey:0,
				navs:[],
				curCateDatas:{},
				allCateDatas:[],
				pageData:{}
			}
		},
		methods:{
			//获取左侧导航分类数据
			async getCateNavs(){
				let res = await this.$API.getCateNavData();
				this.navs = res.data.categoryL1List;
			},
			//获取内容区数据
			async getCateData(){
				let res = await this.$API.getCateLists();
				this.allCateDatas = res.data;
				this.curCateDatas = this.allCateDatas[0];
				
			},
			toSearch(){
				this.$router.push('/wysearch');
			},
			selCat(info){
				this.curCateDatas = this.allCateDatas[info];
			}
		},
		mounted(){
			this.getCateNavs();
			this.getCateData();
			this.$nextTick(()=>{
				new BScroll('.leftNav',{
					scrollY: true,
					probeType: 2, //实时派发，但不计算惯性移动的距离
					click: true
				});
				new BScroll('.actView',{
					scrollY: true,
					probeType: 2, //实时派发，但不计算惯性移动的距离
					click: true
				});
			});
		},
		computed:{
			
		}
	}
</script>

<style lang="stylus">
	#category
		height calc(100vh - 120px)
		overflow hidden
		background-color #fff
		.header
			background-color #fff
			padding 15px 30px 25px
			border-bottom 1px solid #eee
			width 690px
			height 58px
			display flex
			line-height 58px
			position fixed
			top 0
			left 0
			z-index 100
			.searchArea
				width 100%
				border-radius 3px
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
		.content
			margin-top 98px
			height calc(100vh - 180px)
			overflow hidden
			display flex
			.leftNav
				width 180px
				padding 0 0 25px
				height calc(100vh - 250px)
				overflow hidden
				border-right 1px solid #eee
				.van-sidebar
					width 100%
					padding-top 10px
					height calc(100vh - 200px)
					.van-sidebar-item
						background-color #fff
						line-height 24px
						padding-left 20px
						margin-top 28px
						font-size 30px
						&.van-sidebar-item--select
							color #ab2b2b
							border-color #ab2b2b
							border-width 4px
			.actView
				padding 30px
				width 510px
				height calc(100vh - 270px)
				overflow hidden
				.container
					padding-top 30px
					height calc(100vh - 205px)
					.banner
						height 180px
						margin-bottom 30px
						.bannerPic
							height 180px
							background-color aqua
			.partment
				display flex
				flex-wrap wrap
				.part
					width 150px
					margin-right 18px
					height 260px
					display flex
					flex-direction column
					.pic
						height 150px
					.name
						padding 0 5px
						text-align center
						line-height 36px
</style>