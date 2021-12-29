import { http } from '../../plugins/http-common';

const initialState = {
  list: [],
};

const getters = {
  getList: (state) => state.list,
};

const actions = {
  async getMarketPlaceList(context, id) {
    const result = await http.get(`/steamapps/${id}/facets`);
    context.commit('SET_MARKETPLACE_LIST', result.data.data);
  },
};

const mutations = {
  SET_MARKETPLACE_LIST(state, payload) {
    state.list = payload;
  },
};

export default {
  namespaced: true,
  state: initialState,
  getters,
  mutations,
  actions,
};
