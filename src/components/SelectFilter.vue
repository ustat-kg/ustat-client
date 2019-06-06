<template>
  <v-container fluid grid-list-xl>
    <v-layout wrap align-center>
      <v-flex xs12 sm6 d-flex>
        <v-select
          :items="items"
          label="Укажите пол репетитора"
          solo
        ></v-select>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'select-filter',
  data: () => ({
    items: ['Мужской', 'Женский', 'Не имеет значения'
    ]
  })
}
</script>

<style scoped>
</style>
