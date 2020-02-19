//路由懒加载
//一级
const FirstView = () => import('../pages/FirstView/FirstView');
const Category = () => import('../pages/Category/Category');
const Buying = () => import('../pages/Buying/Buying');
const ShopCart = ()=> import('../pages/ShopCart/ShopCart');
const Personal = () => import('../pages/Personal/Personal');
//二级
const Recommended = ()=> import('../pages/FirstView/Recommended/Recommended');


export default [
    // {
    //   path: '路由路径',
    //   component: 路由组件
    // }
    {
      path: '/firstView',
      component: FirstView,
      children:[
          {
              path: 'recommended',
              component: Recommended
          }
      ]
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
       redirect: '/firstView/recommended' 
    }]