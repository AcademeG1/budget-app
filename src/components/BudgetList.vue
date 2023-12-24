<template>
  <div class="budget-list-wrap">
    <ElCard :header="header">
      <template v-if="isEmptyListItem">
        <BudgetListItem :list="list" @onDeleteItem="deleteItem" />
      </template>
      <ElAlert v-else type="info" :title="emptyTitle" :closable="false" />
    </ElCard>
  </div>
</template>

<script>
import BudgetListItem from "./BudgetListItem.vue";
export default {
  name: "BudgetList",
  components: {
    BudgetListItem,
  },
  props: {
    list: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    header: "Some text",
    emptyTitle: "List item empty",
  }),
  computed: {
    isEmptyListItem() {
      return Boolean(Object.keys(this.list).length);
    },
  },
  methods: {
    deleteItem(id) {
      this.$emit("delete-Item", id);
    },
  },
};
</script>

<style scoped>
.budget-list-wrap {
  text-align: center;
  max-width: 500px;
  margin: 0 auto;
}
</style>
