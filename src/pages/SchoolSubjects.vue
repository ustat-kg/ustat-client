<template>
  <div>
    <app-header/>
    <div class="container- fluid list">
      <subject-lists/>
    </div>
  </div>
</template>

<script>
import SubjectLists from '../components/SubjectLists'
import AppHeader from '../components/AppHeader'
export default {
  name: 'schoolsubjects',
  components: {
    SubjectLists,
    AppHeader
  }
}
</script>

<style>
.list {
  background-image: url('../assets/images/lisr.png');
  background-size: cover;
  background-repeat: no-repeat;
  padding: 250px 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
}
</style>
