<template>
  <div class="budget-list-wrap">
    <ElCard :header="header">
      <template v-if="isEmptyListItem">
        <BudgetListItem @onDeleteItem="deleteItem" v-for="(item) in list" :key="item.id" :id="item.id" :value="item.value" :type="item.type" :comment="item.comment" />
      </template>
      <ElAlert v-else type="info" :title="emptyTitle" :closable="false" />
    </ElCard>
  </div>
</template>

<script>
import BudgetListItem from "./BudgetListItem.vue";
import {mapGetters} from "vuex";
import {mapActions} from "vuex";
export default {
  name: "BudgetList",
  components: {
    BudgetListItem,
  },
  data: () => ({
    header: "Some text",
    emptyTitle: "List item empty",
  }),
  computed: { // возвращает значения
    ...mapGetters('budgets', ['getList']),
    list() { return this.getList },
    isEmptyListItem() {
      return Boolean(Object.keys(this.list).length);
    },
  },
  methods: {
    ...mapActions('budgets', ['onDelete']),
    deleteItem(id) {
      this.onDelete(id);
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
