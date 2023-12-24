<template>
  <div class="total-value">
    {{totalBalance}}
  </div>
</template>

<script>
export default {
  name: 'TotalBalance',
  props: {
    totalBalance: {
      type: Number,
      default: 0,
    }
  }
}
</script>

<style>
  .total-value {
    font-size: 26px;
    text-transform: uppercase;
    padding: 20px;
    text-align: center;
  }
</style>