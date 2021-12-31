import { http } from '../../plugins/http-common';

const initialState = {
  status: '',
  token: localStorage.getItem('token') || '',
  user : {},
};

const getters = {};

const actions = {
  async createUser(context, data) {
    return await http.post('/auth/create', data);
  },
  async logIn(context, data) {
    const result = await http.post('/auth/login', data);
    console.log(result)
  }
};

const mutations = {
  isLoggedIn: state => !!state.token,
  authStatus: state => state.status,
};

export default {
  namespaced: true,
  state: initialState,
  getters,
  mutations,
  actions,
};
