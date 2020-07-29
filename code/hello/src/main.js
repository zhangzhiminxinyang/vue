// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// 增加http支持
import VueReSource from 'vue-resource';
Vue.use(VueReSource);

Vue.config.productionTip = false

//增加post请求,做如下配置后，发出的post请求就不会被浏览器转为option请求了
Vue.http.options.emulateJSON = true;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
