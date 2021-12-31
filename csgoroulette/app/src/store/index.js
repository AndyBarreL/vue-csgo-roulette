import Vue from 'vue';
import Vuex from 'vuex';

import auth from './modules/auth';
import category from './modules/category';
import marketplace from './modules/marketplace';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    category,
    marketplace,
  }
})