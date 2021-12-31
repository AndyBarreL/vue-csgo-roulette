import { http } from '../../plugins/http-common';

const initialState = {
  categories: [],
};

const getters = {
  getCategories: (state) => state.categories,
};

const actions = {
  async getCategoryList(context) {
    const result = await http.get('/api/steamapps');
    context.commit('SET_CATEGORY_LIST', result.data.data);
  },
};

const mutations = {
  SET_CATEGORY_LIST(state, payload) {
    state.categories = payload;
  },
};

export default {
  namespaced: true,
  state: initialState,
  getters,
  mutations,
  actions,
};
