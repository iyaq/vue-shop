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
Vue.config.productionTip = false
Vue.use(VueLazyload,{loading:'/static/img/ajax-loader.gif'});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
