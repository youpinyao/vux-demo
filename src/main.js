// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import {
  sync,
} from 'vuex-router-sync';

import 'vux/src/styles/index.less';
import {
  ConfigPlugin,
  LocalePlugin,
  BusPlugin,
} from 'vux';

import store from './store';
import router from './router';
import routerEach from './router/each';

import App from './App';

sync(store, router);
routerEach(store, router);

Vue.use(ConfigPlugin, {
  $layout: 'VIEW_BOX', // global config for VUX, since v2.5.12
});
Vue.use(LocalePlugin);
Vue.use(BusPlugin);

if (/zh/.test(Vue.locale.get())) {
  Vue.i18n.set('zh-CN');
} else {
  Vue.i18n.set('en');
}

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: {
    App,
  },
});
