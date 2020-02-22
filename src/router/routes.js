//路由懒加载
//一级
const FirstView = () => import('../pages/FirstView/FirstView');
const Category = () => import('../pages/Category/Category');
const Buying = () => import('../pages/Buying/Buying');
const ShopCart = () => import('../pages/ShopCart/ShopCart');
const Personal = () => import('../pages/Personal/Personal');
const WySearch = () => import('../pages/Search/Search');
//二级
const Recommended = () => import('../pages/FirstView/Recommended/Recommended');
const LifeHome = ()=> import('../pages/FirstView/LifeHome/LifeHome');

export default [
	// {
	//   path: '路由路径',
	//   component: 路由组件
	// }
	{
		path: '/firstView',
		component: FirstView,
		children: [
			{
				path: 'recommended',
				component: Recommended,
				meta:{
					showFooterBar:true
				}
			}, {
				path: 'lifeHome',
				component: LifeHome,
				meta:{
					showFooterBar:true
				}
			}
		]
	}, {
		path: '/category',
		component: Category,
		meta:{
			showFooterBar:true
		}
	}, {
		path: '/buying',
		component: Buying,
		meta:{
			showFooterBar:true
		}
	}, {
		path: '/shopCart',
		component: ShopCart,
		meta:{
			showFooterBar:true
		}
	}, {
		path: '/personal',
		component: Personal
	},{
		path: '/wysearch',
		component: WySearch
	}, {
		path: '/',
		redirect: '/firstView/recommended'
	}]