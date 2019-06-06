<template>
  <v-footer dark height="auto" class='my-footer'>
    <v-card class="flex" flat tile>
      <v-card-title class="my-teal">
        <strong class="subheading">Get connected with us on social networks!</strong>
        <v-spacer></v-spacer>
        <v-btn v-for="icon in icons" :key="icon" class="mx-3" dark icon>
          <v-icon size="24px">{{ icon }}</v-icon>
        </v-btn>
      </v-card-title>
      <v-card-actions class="grey darken-3 justify-center">
        &copy;2019 —
        <strong>USTAT</strong>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'app-footer',
  data: () => ({
    icons: [
      'fab fa-facebook',
      'fab fa-twitter',
      'fab fa-google-plus',
      'fab fa-linkedin',
      'fab fa-instagram'
    ]
  })
}
</script>
<style scoped>
.my-footer {
 margin-top:50%;

}
.my-teal {
 background-color: #129490;
 opacity: 0.7;
}
</style>
