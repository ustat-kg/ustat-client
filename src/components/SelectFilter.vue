<template>
  <v-layout class="request">
    <v-flex xs12 sm-4 md-6 class="msg">
      <span>Выберите предмет</span>
    </v-flex>
    <v-flex xs12 sm-6 md-6 class="my-select">
      <v-select
        v-model="options"
        label="Выберите предмет"
        @change="onChange"
        value="options"
      >
        <template slot="option" slot-scope="option">
          {{ option.title }}
        </template>
      </v-select>
    </v-flex>
    <v-flex> </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: "myselect",
  data() {
    return {
      options: ""
    };
  },
  methods: {
    onChange(event) {
      console.log(event.target.value);
    }
  }
};
</script>

<style scoped>
.my-select {
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
}
.msg {
  margin-left: 35px;
  margin-top: 8px;
  width: 350px;
}
.request {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
}
</style>
