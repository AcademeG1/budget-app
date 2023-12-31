<template>
  <div
    class="total-value"
    :class="getTotalBalance > 0 ? 'green' : getTotalBalance < 0 ? 'red' : ''"
  >
    {{ getTotalBalance }}
  </div>
</template>

<script>
import {mapGetters} from "vuex";
export default {
  name: "TotalBalance",
  computed: {
    ...mapGetters('budgets', ['getTotalBalance']),
  }
};
</script>

<style>
.total-value {
  font-size: 26px;
  text-transform: uppercase;
  padding: 20px;
  text-align: center;
}
.green {
  color: green;
}
.red {
  color: red;
}
</style>
