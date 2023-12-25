<template>
  <div>
    <div class="list-item" v-for="(item, prop) in list" :key="prop">
      <span class="budget-comment">{{ item.comment }}</span>
      <i v-if="item.type === 'INCOME'" class="el-icon-top"></i>
      <i v-else class="el-icon-bottom"></i>
      <span
        class="budget-value"
        :class="item.type === 'INCOME' ? 'green' : 'red'"
        >{{ item.value }}</span
      >

      <ElButton type="danger" size="mini" @click="dialogVisible = true"
        >Delete</ElButton
      >
      <ElDialog title="Delete" :visible.sync="dialogVisible" width="30%">
        <span>Delete an item?</span>
        <span slot="footer" class="dialog-footer">
          <ElButton @click="dialogVisible = false">Cancel</ElButton>
          <ElButton
            type="primary"
            @click="(dialogVisible = false), handleClose(item.id)"
            >Confirm</ElButton
          >
        </span>
      </ElDialog>
    </div>
  </div>
</template>

<script>
export default {
  name: "BudgetListItem",
  props: {
    list: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    dialogVisible: false,
  }),
  methods: {
    handleClose(id) {
      this.$emit("onDeleteItem", id);
    },
  },
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
