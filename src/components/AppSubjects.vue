<template>
  <div class="container">
    <div class="row content-box-two">
      <div class="col-8 offset-2 ">
        <div class="row">
          <router-link
            class="col-4 subject-card"
            v-for="(subjectCard, index) in subjectsCards"
            :style="{background: `url(${subjectCard.img})`}"
            :key="index"
            :to="subjectCard.route"
            >
            <h3>{{subjectCard.name}}</h3>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import image1 from '../assets/images/school.png'
import image2 from '../assets/images/language.png'
import image3 from '../assets/images/art.png'
import image4 from '../assets/images/develop.png'
import image5 from '../assets/images/bussiness.png'
import image6 from '../assets/images/it.png'

export default {
  name: 'app-subjects',
  data () {
    return {
      subjectsCards: [
        {
          name: 'Школьные предметы',
          img: image1,
          route: '/schoolsubjects-page'
        },
        {
          name: 'Иностранные языки',
          img: image2,
          route: '/langsubjects-page'
        },
        {
          name: 'Творчество',
          img: image3,
          route: '/artsubjects-page'
        },
        {
          name: 'Повышение квалификации',
          img: image4,
          route: '/developsubjects-page'
        },
        {
          name: 'Бизнес',
          img: image5,
          route: '/businesssubjects-page'
        },
        {
          name: 'IT-development',
          img: image6,
          route: '/itsubjects-page'
        }
      ]
    }
  }
}
</script>

<style scoped>
.subject-card {
  width: 160px;
  height: 150px;
  border: 1 px solid black;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

}

.content-box-two {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  margin-top: 3%;
}

.subject-card h3 {
  font-family: "Montserrat", sans-serif;
  font-weight: bolder;
  color:white;
}
.subject-card {
  margin: 30px;
  border-radius: 20px;

}
</style>
