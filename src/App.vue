<template>
  <div id="app">
    <transition>
      <router-view></router-view>
    </transition>
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
