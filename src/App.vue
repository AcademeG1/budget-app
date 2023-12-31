<template>
  <div>
    <FormA />
    <TotalBalance />
    <AppFilter />
    <BudgetList />
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
