<template>
  <div>
    <div class="list-item" v-for="(item, index) in list" :key="index">
      <span class="budget-comment">{{ item.comment }}</span>
      <i v-if="item.type === 'INCOME'" class="el-icon-top"></i>
      <i v-else class="el-icon-bottom"></i>
      <span
        class="budget-value"
        :class="item.type === 'INCOME' ? 'green' : 'red'"
        >{{ item.value }}</span
      >
      <div>
        <ElButton type="danger" size="mini" @click="onDelete(item.id)"
        >Delete</ElButton>
      </div>

    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "BudgetListItem",
  props: {
    list: {
      type: Object,
      default: () => ({}),
    },
  },
  methods: {
    ...mapActions("budgets", ["onDelete"]),
  }
};
</script>

<style scoped>
.list-item {
  display: flex;
  align-items: center;
  padding: 10px 15px;
}

.budget-value {
  font-weight: bold;
  margin-left: auto;
  margin-right: 20px;
}
.green {
  color: green;
}
.red {
  color: red;
}
</style>
