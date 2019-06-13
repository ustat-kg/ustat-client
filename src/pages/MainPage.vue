<template>
  <div>
    <app-modal />
    <app-progress />
  </div>
</template>

<script>
import AppModal from "../components/AppModal";
import AppProgress from "../components/AppProgress.vue";
// import AppHeader from '../components/AppHeader'
export default {
  name: "main-page",
  components: {
    // AppHeader,
    AppModal,
    AppProgress
  }
};
</script>

<style></style>
