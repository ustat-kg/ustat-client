<template>
    <v-layout row>
    <v-flex xs3 sm6 offset-xs8>
      <v-card>
        <v-flex class="connect">
          <v-flex>
            <v-card-media class="ava-connect"></v-card-media>
          </v-flex>
          <v-flex>
            <v-card-actions>
              <v-btn class="yellow accent-4 connect-btn" v-on="on">Связаться</v-btn>
            </v-card-actions>
          </v-flex>
        </v-flex>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'connect',
  data: () => ({

  })
  // props: {
  //   'connect': {
  //     type: Object,
  //     required: true
  //   }
  // }
}
</script>

<style scoped>
.connect {
  width: 140px;
  height: 180px;
  border: 1px grey solid;
  box-shadow: 2px 8px 32px -1px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
}
.ava-connect {
  border-radius: 100%;
  width: 80px;
  height: 80px;
  border: 1px grey solid;
  margin-top: 10%;
}
.connect-btn {
 font-family: "Montserrat", sans-serif;
}
</style>
