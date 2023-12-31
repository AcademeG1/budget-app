<template>
  <ElCard class="form-card">
    <ElForm :model="formData" ref="addItemForm" :rules="rules" lable-position="top">
      <ElFormItem label="Type" prop="type">
        <ElSelect class="type-select" v-model="formData.type" placeholder="Choose type">
          <ElOption lable="Income" value="INCOME"></ElOption>
          <ElOption lable="Outcome" value="OUTCOME"></ElOption>
        </ElSelect>
      </ElFormItem>
      <ElFormItem label="Comments" prop="comment">
        <ElInput v-model="formData.comment" />
      </ElFormItem>
      <ElFormItem label="Value" prop="value">
        <ElInput v-model.number="formData.value" />
      </ElFormItem>
      <ElButton @click="onSubmit" type="primary">Submit</ElButton>
    </ElForm>
  </ElCard>
</template>

<script>
import {mapActions} from "vuex";
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "FormA",
    data: () => ({
        formData: {
            type: 'INCOME',
            value: 0,
            comment: '',
        },
        rules: {
          type: [{required: true, message: 'Please select type', trigger: 'change'}],
          comment: [{required: true, message: 'Plese input text', trigger: 'blur'}],
          value: [
            {required: true, message: 'Value mast be number', trigger: 'change'},
            {type: 'number', message: 'Value must be a number', trigger: 'change'}
          ]
        }
    }),
    methods: {
      ...mapActions('budgets', ['addNewSubmit']),
      onSubmit() {
        this.$refs.addItemForm.validate((valid) => {
          if (valid) {
            const newObj = {
              ...this.formData,
              id: String(Math.random()),
              value: this.formData.type === "OUTCOME" ? -this.formData.value : this.formData.value,
            };
            this.addNewSubmit(newObj);
            this.$refs.addItemForm.resetFields();
          }
        })
      }
    },

}
</script>

<style scoped>
  .form-card {
    max-width: 500px;
    margin: auto;
  }
  .type-select {
    width: 100%;
  }
</style>