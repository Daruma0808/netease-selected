<template>
    <div id="app">
        <router-view></router-view>
        <van-tabbar route class="tabbar" active-color="#DD1A21">
            <van-tabbar-item replace to="/firstView" icon="home-o">
                首页
            </van-tabbar-item>
            <van-tabbar-item replace to="/category" icon="search">
                分类
            </van-tabbar-item>
            <van-tabbar-item replace to="/buying" icon="search">
                值得买
            </van-tabbar-item>
            <van-tabbar-item replace to="/shopCart" icon="search">
                购物车
            </van-tabbar-item>
            <van-tabbar-item replace to="/personal" icon="home-o">
                个人
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";
Vue.use(Tabbar);

Vue.use(TabbarItem);
export default {
    name: "App",
    components: {},
    data() {
        return {};
    }
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
.tabbar{
  height: 98px;
}
</style>
