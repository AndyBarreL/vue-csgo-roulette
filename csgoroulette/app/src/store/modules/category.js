import { http } from '../../plugins/http-common';

const initialState = {
  categories: [],
  facets: null,
};

const getters = {
  getCategories: (state) => state.categories,
};

const actions = {
  async getCategoryList(context) {
    const result = await http.get('/apps');
    context.commit('SET_CATEGORY_LIST', result.data.data);

    context.dispatch('getFacets', context.state.selectedCategoryId);
  },
  async getFacets(context, categoryId) {
    const result = await http.get(`/apps/${categoryId}/facets`);
    context.commit('SET_FACETS', result.data.data);
  }
};

const mutations = {
  SET_CATEGORY_LIST(state, payload) {
    state.categories = payload;
    state.selectedCategoryId = payload[0].steamId
  },
  SET_FACETS(state, payload) {
    state.facets = payload.reduce((obj, item) => (obj[item.name] = item.tags, obj), {});
  }
};

export default {
  namespaced: true,
  state: initialState,
  getters,
  mutations,
  actions,
};
