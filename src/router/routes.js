//路由懒加载
const FirstView = () => import('../pages/FirstView/FirstView');
const Category = () => import('../pages/Category/Category');
const Buying = () => import('../pages/Buying/Buying');
const ShopCart = ()=> import('../pages/ShopCart/ShopCart');
const Personal = () => import('../pages/Personal/Personal');


export default [
    // {
    //   path: '路由路径',
    //   component: 路由组件
    // }
    {
      path: '/firstView',
      component: FirstView
    },{
        path:'/category',
        component:Category
    },{
        path:'/buying',
        component:Buying
    },{
        path:'/shopCart',
        component:ShopCart
    },{
        path:'/personal',
        component:Personal
    },{
       path:'/',
       redirect: '/firstView' 
    }]