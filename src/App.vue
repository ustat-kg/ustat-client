<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>

<style>
  #app{
    left: 0;
    top: 0;
    height:auto;
    overflow-y:scroll;
    width: 100vw;
    background-color: var(--primary-color);
  }

  router-link{
    text-decoration: none;
  }
</style>
