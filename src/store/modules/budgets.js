const budgetStore = {
  namespaced: true,
  state: {
    filter: "all",
    list: {
      1: {
        type: "INCOME",
        value: 100,
        comment: "Some comment",
        id: 1,
      },
      2: {
        type: "OUTCOME",
        value: -50,
        comment: "Some outcome comment",
        id: 2,
      },
    },
  },
  getters: {
    getFilter: ({ filter }) => filter,
  },
  mutations: {
    UPDATE_FILTER(state, newFilter) {
      state.filter = newFilter;
    },
  },
  actions: {
    updateFilter({ commit }, filter) {
      //  commit берется из context
      commit("UPDATE_FILTER", filter);
    },
  },
};

export default budgetStore;
