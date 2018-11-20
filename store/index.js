import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
Vue.use(Vuex)
/*導出Vuex，創建一個倉庫store*/
export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters
})