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
    getList: ({list, filter}) => {
      switch (filter) {
        case "income":
          return Object.fromEntries(
              Object.entries(list).filter(
                  (value) => value[1].type === "INCOME"
              )
          );
        case "outcome":
          return Object.fromEntries(
              Object.entries(list).filter(
                  (value) => value[1].type === "OUTCOME"
              )
          );
        default:
          return list;
      }
    },
    getTotalBalance: ({list}) => {return Object.values(list).reduce(
        (acc, item) => acc + item.value,
        0
    );},
  },
  mutations: {
    UPDATE_FILTER(state, newFilter) {
      state.filter = newFilter;
    },
    ADD_NEW_BUDGET(state, data) {
      state.list[data.id] = data;
    },
    DELETE_ITEM(state, deleteId) {
      delete state.list[deleteId];
    },
  },
  actions: {
    onDelete({commit}, deleteId) {
      commit('DELETE_ITEM', deleteId)
    },
    addNewSubmit({commit}, data) {
      console.log(data)
      commit('ADD_NEW_BUDGET', data);
    },
    updateFilter({ commit }, filter) {
      //  commit берется из context
      commit("UPDATE_FILTER", filter);
    },
  },
};

export default budgetStore;
