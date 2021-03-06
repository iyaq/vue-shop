// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload'
import 'styles/border.css'
import 'styles/reset.css'
import 'styles/iconfont.css'
import 'lib-flexible/flexible.js'
import './utils/rem.js'
import ElementUI from 'element-ui';
import {Button,AddressList,AddressEdit,Area,Icon,Card} from 'vant';
import '@/assets/css/overwrite.css'
import store from '../store'

Vue.use(Button).use(AddressList).use(AddressEdit).use(Area).use(Icon).use(Card);
Vue.config.productionTip = false
Vue.use(VueLazyload,{loading:'/static/img/ajax-loader.gif'});
Vue.use(ElementUI);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
    store,
    components: { App },
    template: '<App/>'
})
