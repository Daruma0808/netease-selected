<template>
    <van-tabbar route class="tabbar" active-color="#DD1A21" >
        <van-tabbar-item
            to="/firstView/recommended"
            name="firstView"
            icon="wap-home-o"
        >
            首页
        </van-tabbar-item>
        <van-tabbar-item  to="/category" name="category" icon="coupon-o">
            分类
        </van-tabbar-item>
        <van-tabbar-item  to="/buying" name="buying" icon="paid">
            值得买
        </van-tabbar-item>
        <van-tabbar-item
            replace
            to="/shopCart"
            name="shopCart"
            icon="shopping-cart-o"
        >
            购物车
        </van-tabbar-item>
        <van-tabbar-item  to="/personal" name="personal" icon="user-o">
            个人
        </van-tabbar-item>
    </van-tabbar>
</template>

<script>
import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";
Vue.use(Tabbar);
Vue.use(TabbarItem);
export default {

};
</script>

<style>
.tabbar{
  height: 98px;
}
.van-tabbar-item{
  font-size: 24px;
}
.van-tabbar-item__icon{
  font-size: 36px;
}
</style>
