<template>
  <v-layout row>
    <v-flex class="connect">
      <v-flex>
        <v-card-media class="ava-connect"></v-card-media>
      </v-flex>
    </v-flex>
    <v-flex class="my-popup">
      <popup></popup>
    </v-flex>
  </v-layout>
</template>

<script>
import Popup from "../components/Popup";
export default {
  name: "connect",
  components: {
    Popup
  },
  data: () => ({})
  // props: {
  //   'connect': {
  //     type: Object,
  //     required: true
  //   }
  // }
};
</script>

<style scoped>
.connect {
  width: 140px;
  height: 180px;
  border: 1px grey solid;
  box-shadow: 1px 2px 4px -1px rgba(0, 0, 0, 0.75);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  margin-top: 90px;
}
.ava-connect {
  border-radius: 100%;
  width: 80px;
  height: 80px;
  border: 1px grey solid;
  margin-top: 10%;
}
@media only screen and (min-width: 150px) and (max-width: 670px) {
  .connect {
    width: 100px;
    height: 120px;
    border: 1px grey solid;
    box-shadow: 1px 2px 4px -1px rgba(0, 0, 0, 0.75);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin-top: 90px;
  }
  .ava-connect {
    border-radius: 100%;
    width: 50px;
    height: 50px;
    border: 1px grey solid;
    margin-top: 5%;
  }
}
</style>
