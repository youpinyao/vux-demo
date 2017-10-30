const store = {
  state: {
    isLoading: false,
    direction: 'forward',
  },
  mutations: {
    updateLoadingStatus(state, payload) {
      state.isLoading = payload.isLoading;
    },
    updateDirection(state, payload) {
      state.direction = payload.direction;
    },
  },
  actions: {

  },
};

module.exports = store;
