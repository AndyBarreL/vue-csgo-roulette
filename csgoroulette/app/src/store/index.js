import Vue from 'vue';
import Vuex from 'vuex';

import category from './modules/category';
import marketplace from './modules/marketplace';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    category,
    marketplace,
  }
})