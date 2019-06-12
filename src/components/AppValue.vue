<template>
  <div class="box">
    <ul>
      <li v-for ="(rating,index) in ratings" :key="index" class="my-grade" >
        <div class="grade">Оценка {{rating.grade}}.0</div>
        <div class="bar">
          <div class="progress" v-bind:style = "{'background':rating.color, 'width':rating.percent + '%'}"></div>
          <span class="percent">{{rating.percent}} %</span>
        </div>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'app-value',
  data(){
    return {
      ratings: [
        {grade: 1, percent: 50, color: '#FFEA00'},
        {grade: 2, percent: 45, color: '#FFEA00'},
        {grade: 3, percent: 48, color: '#FFEA00'},
        {grade: 4, percent: 30, color: '#FFEA00'},
        {grade: 5, percent: 80, color: '#FFEA00'}

      ]

    }
  }
}
</script>

<style scoped>
.box {
  width: 350px;
  padding: 5px;
  margin: 20px auto;
}
 ul li {
   list-style-type: none;
   padding: 0px;
 }
 .grade {
   margin-left: 5px;
   margin-bottom: -3px;
   font-size: 15px;
   font-family: "Montserrat", sans-serif;

 }

 .bar {
   width: 100%;
   overflow: hidden;
   padding: 5px;

 }
 .progress {
   float: left;
   border-radius: 0px;
   height: 18px;

 }
 .percent {
   float: right;
   font-size: 15px;
   font-family: "Montserrat", sans-serif;
   font-weight: bold;
 }
 @media only screen
  and (min-width : 150px)
  and (max-width : 670px) {
    .box  {
    width: 380px;
    padding: 10px;
    margin: 25px -15px;
    }
  }

</style>
