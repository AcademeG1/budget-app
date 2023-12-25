<template>
  <div>
    <FormA @submitForm="onFormSubmit" />
    <TotalBalance :total-balance="sumTotal" />
    <AppFilter @on-filter-select="onFilterSelect" :active="filter" />
    <BudgetList @delete-Item="onDeleteItem" :list="filterBudget()" />
  </div>
</template>

<script>
import BudgetList from "@/components/BudgetList";
import TotalBalance from "@/components/TotalBalance";
import FormA from "@/components/FormA";
import AppFilter from "./components/AppFilter.vue";

export default {
  name: "App",
  components: {
    BudgetList,
    TotalBalance,
    FormA,
    AppFilter,
  },
  computed: {
    sumTotal() {
      return Object.values(this.list).reduce(
        (acc, item) => acc + item.value,
        0
      );
    },
  },
  data: () => ({
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
  }),
  methods: {
    onDeleteItem(id) {
      this.$delete(this.list, id);
    },
    onFormSubmit(data) {
      const newObj = {
        ...data,
        id: String(Math.random()),
        value: data.type === "OUTCOME" ? -data.value : data.value,
      };
      this.$set(this.list, newObj.id, newObj);
    },
    filterBudget() {
      switch (this.filter) {
        case "income":
          return Object.fromEntries(
            Object.entries(this.list).filter(
              (value) => value[1].type === "INCOME"
            )
          );
        case "outcome":
          return Object.fromEntries(
            Object.entries(this.list).filter(
              (value) => value[1].type === "OUTCOME"
            )
          );
        default:
          return this.list;
      }
    },
    onFilterSelect(filter) {
      this.filter = filter;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
