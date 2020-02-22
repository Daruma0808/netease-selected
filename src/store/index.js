import Vue from "vue";
import Vuex from "vuex";
import state from "./state";
import mutations from "./mutations";
import actions from "./actions";
import getters from "./getters";

import firstView from "./modules/firstView";

Vue.use(Vuex);
//输出store
export default new Vuex.Store({
	modules: {
		firstView
	},
	state,
	mutations,
	actions,
	getters
});
