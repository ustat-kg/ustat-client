<template>
<v-layout class="request">
  <v-flex  xs4 sm-4 md-6 class="msg" >
    <div>Выберите предмет</div>
  </v-flex>
  <v-flex xs8 sm-6 md-6 class="my-select">
    <v-select :options="options" label="Выберите предмет">
    <template slot="option" slot-scope="option">
        {{ option.title }}
    </template>
  </v-select>
</v-flex>
<v-flex>
</v-flex>
</v-layout>
</template>

<script>
export default {
  name: 'myselect',
  data() {
    return {
      options: [
        {
          title: 'Школьные предметы'},
        {
          title: 'Иностранные языки'},
        {
          title: 'Творчество'},
        {
          title: 'Бизнес-планирование'
        },
        {
          title: 'Повышение квалификации'},
        {
          title: 'IT-development'}

      ]

    }
  }
}

</script>

<style scoped>
.my-select {
 font-family: "Montserrat", sans-serif;
 font-weight: 400;
}
.msg {
  margin-left: 25px;
  margin-top: 8px;
}
.request {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
}

</style>
