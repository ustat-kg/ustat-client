<template>
  <div>
    <select-filter />
    <range-filter />
  </div>
</template>

<script>
import SelectFilter from "../components/SelectFilter";
import RangeFilter from "../components/RangeFilter";
export default {
  name: "total-filters",
  components: {
    SelectFilter,
    RangeFilter
  }
};
</script>

<style scoped></style>
