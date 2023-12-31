<template>
  <div class="wrapper-button">
    <ElButton
      @click="onFilterSelect('outcome')"
      :type="getFilter === 'outcome' ? 'primary' : ''"
      plain
      >OUTCOME</ElButton
    >
    <ElButton
      @click="onFilterSelect('income')"
      :type="getFilter === 'income' ? 'primary' : ''"
      plain
      >INCOME</ElButton
    >
    <ElButton
      @click="onFilterSelect('all')"
      :type="getFilter === 'all' ? 'primary' : ''"
      plain
      >ALL</ElButton
    >
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { mapActions } from "vuex";

export default {
  name: "AppFilter",
  computed: {
    ...mapGetters("budgets", ["getFilter"]),
  },
  methods: {
    ...mapActions("budgets", ["updateFilter"]),
    onFilterSelect(active) {
      this.updateFilter(active);
    },
  },
};
</script>

<style scoped>
.wrapper-button {
  margin-bottom: 25px;
  text-align: center;
}
</style>
