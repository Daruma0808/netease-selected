import api from "./api";
//首页推荐
export const getRecommendData = () =>
	api({
		url: "/recommend"
	});

//搜索页面初始化
export const initSearchWords = () => api({
	url: '/xhr/search/init.json',
	method: 'post'
});
//搜索页面关键字查询
export const searchAutoComplete = (keywordPrefix) => api({
	url: '/xhr/search/searchAutoComplete.json',
	method: 'post',
	data: {
		keywordPrefix
	}
});
//分类页面导航
export const getCateNavData = ()=>api({
	url:'/cateNav'
});
//分类页面切换区数据
export const getCateLists = ()=>api({
	url:'/cateList'
});

//值得买nav
export const getSwiperNav = () =>
	api({
		url: "/topic/v1/know/navWap.json"
	});
