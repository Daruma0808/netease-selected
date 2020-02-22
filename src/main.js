import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "lib-flexible/flexible";
import * as API from './api'
import { Swipe, SwipeItem, Lazyload, Icon, Search } from "vant";

Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Lazyload);
Vue.use(Icon);
Vue.use(Search);

Vue.config.productionTip = false;
Vue.prototype.$API = API;

new Vue({
    router,
    render: h => h(App)
}).$mount("#app");

