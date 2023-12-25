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
export default {
  name: "AppFilter",
  props: {
    active: {
      type: String,
      default: "all",
    },
  },
  methods: {
    onFilterSelect(active) {
      this.$emit("on-filter-select", active);
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
