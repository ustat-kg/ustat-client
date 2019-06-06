<template>
   <div class="text-xs-center my-pag">
    <v-pagination v-model="page"   :length="6" ></v-pagination>
  </div>
</template>

<script>
export default {
  name: 'app-pagination',
  data () {
    return {
      page: 1
    }
  }
}
</script>

<style scoped>

</style>
