<template>
  <div id="app">
    <transition name="moveInUp">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style scoped>
#app {
  left: 0;
  top: 0;
  height: auto;
  overflow-y: scroll;
  width: 100vw;
  background-color: var(--primary-color);
}

router-link {
  text-decoration: none;
}
.moveInUp--enter-active {
  opacity: 0;
  transition: opacity 1s ease-in;
}
</style>
