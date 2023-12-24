<template>
  <div>
    <FormA @submitForm="onFormSubmit" />
    <TotalBalance :total-balance="sumTotal" />
    <BudgetList @delete-Item="onDeleteItem" :list="list" />
  </div>
</template>

<script>
import BudgetList from "@/components/BudgetList";
import TotalBalance from "@/components/TotalBalance";
import FormA from "@/components/FormA";

export default {
  name: "App",
  components: {
    BudgetList,
    TotalBalance,
    FormA,
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
