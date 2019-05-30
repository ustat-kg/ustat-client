<template>
  <v-container>
    <v-layout row wrap>
      <v-card>
        <v-container fluid>
          <v-layout row>
            <v-flex xs12 md8>
              <v-card color="red" class="white--text">
                <v-card-title primary-title class="headline">{{profile.title}}</v-card-title>
              </v-card>
            </v-flex>
            <v-flex xs2 md4 class="title">
              <v-card-title>
                <div>{{profile.id}}</div>
              </v-card-title>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: {
    profile: {
      type: Object,
      required: true
    },
    teacherId: {
      required: true
    }
  }
}
</script>

<style scoped>
</style>
