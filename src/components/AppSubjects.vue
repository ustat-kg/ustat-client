<template>
  <div class="container">
    <div class="row content-box-two">
      <div class="col-8 offset-4">
        <div class="row">
          <div class="col-4 subject-card"
            v-for="(subjectCard, index) in subjectsCards"
            :style="{background: `url(${subjectCard.img})`}"
            :key="index"
            :to="subjectCard.route">
            <h3>{{subjectCard.name}}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app-subjects',
  data () {
    return {
      subjectsCards: [
        {
          name: 'Школьные предметы',
          img: ('~@/assets/image.svg'),
          route: '/school-subjects'
        },
        {
          name: 'Иностранные языки',
          img: '../assets/language.png',
          route: '/ lang-subjects'
        },
        {
          name: 'Творчество',
          img: '../assets/art.png',
          route: '/art-subjects'
        },
        {
          name: 'Повышение квалификации',
          img: '../assets/develop.png',
          route: '/develop-subjects'
        },
        {
          name: 'Бизнес',
          img: '../assets/bussiness.png',
          route: '/business-subjects'
        },
        {
          name: 'IT-develop',
          img: '../assets/it.png',
          route: '/it-subjects'
        }
      ]
    }
  }
}
</script>

<style scoped>
.subject-card {
  width: 150px;
  height: 140px;
  border: 1 px solid black;
  background-image: url('./../../src/assets/it.png')
}

.content-box-two {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  position: absolute;
  margin-top: 2%;
}

.subject-card h3 {
  font-family: "Montserrat", sans-serif;
}
</style>
