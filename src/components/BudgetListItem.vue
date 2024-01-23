<template>
    <div class="list-item">
      <span class="budget-comment">{{ comment }}</span>
      <i v-if="type === 'INCOME'" class="el-icon-top"></i>
      <i v-else class="el-icon-bottom"></i>
      <span
        class="budget-value"
        :class="type === 'INCOME' ? 'green' : 'red'"
        >{{ value }}</span
      >
      <div>
        <ElButton type="danger" size="mini" @click="dialogVisible = true"
        >Delete</ElButton>
      </div>
      <ElDialog v-model="dialogVisible" title="Delete" width="30%">
        <span>Delete item?</span>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogVisible = false">Cancel</el-button>
            <el-button type="primary" @click="dialogVisible = false, onDelete(id)">
              Confirm
            </el-button>
          </span>
        </template>
      </ElDialog>
    </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
    name: "BudgetListItem",
    data() {
      return {
        dialogVisible: false,
      }
    },
    props: {
        type: String,
        value: Number,
        comment: String,
        id: Number,
    },
    methods: {
        ...mapActions("budgets", ["onDelete"]),
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
