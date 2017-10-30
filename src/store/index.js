import Vue from 'vue';
import Vuex from 'vuex';
import vuexI18n from 'vuex-i18n';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    vux: require('./vux'),
    i18n: require('./i18n'),
  },
});

Vue.use(vuexI18n.plugin, store);

const vuxLocales = require('json-loader!yaml-loader!vux/src/locales/all.yml');

Object.keys(vuxLocales).forEach((key) => {
  Vue.i18n.add(key, vuxLocales[key]);
});


export default store;
