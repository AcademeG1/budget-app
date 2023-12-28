<template>
  <div class="wrapper-button">
    <ElButton
      @click="onFilterSelect('outcome')"
      :type="active === 'outcome' ? 'primary' : ''"
      plain
      >OUTCOME</ElButton
    >
    <ElButton
      @click="onFilterSelect('income')"
      :type="active === 'income' ? 'primary' : ''"
      plain
      >INCOME</ElButton
    >
    <ElButton
      @click="onFilterSelect('all')"
      :type="active === 'all' ? 'primary' : ''"
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
    active: function () {
      return this.getFilter;
    },
  },
  methods: {
    ...mapActions("budgets", ["updateFilter"]),
    onFilterSelect(active) {
      console.log(active);
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
