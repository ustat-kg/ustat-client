<template>
  <v-dialog max-width="400px">
    <v-btn slot="activator" class="yellow accent-4 connect-btn"
      >Связаться</v-btn
    >
    <v-form class="popup">
      <v-flex>
        <myselect></myselect>
      </v-flex>
      <v-flex xs8>
        <v-textarea
          v-model="msg"
          auto-grow
          box
          color="black"
          label="Введите сообщение"
          rows="1"
        ></v-textarea>
      </v-flex>
      <v-flex xs4>
        <v-btn type="submit" flat class="request-btn">Отравить</v-btn>
      </v-flex>
    </v-form>
  </v-dialog>
</template>

<script>
import SelectFilter from "../components/SelectFilter";
export default {
  name: "popup",
  components: {
    myselect: SelectFilter
  },
  data() {
    return {
      msg: ""
    };
  }
};
</script>

<style scoped>
.connect-btn {
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  position: fixed;
  margin-top: 200px;
}
.popup {
  display: flex;
  flex-wrap: wrap;
  height: 300px;
  width: 100%;
  display: flex;
  padding-left: 16px;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  background-color: white;
  overflow: hidden;
}
.request-btn {
  background-color: #388e3c;
  font-family: "Montserrat", sans-serif;
  width: 50px;
  font-size: 12px;
  color: white;
  font-weight: bolder;
}
@media only screen and (min-width: 150px) and (max-width: 670px) {
  .connect-btn {
    font-family: "Montserrat", sans-serif;
    font-size: 10px;
    position: fixed;
    margin-top: 150px;
    width: 50px;
    height: 20px;
    margin-left: 2px;
  }
  .popup {
    display: flex;
    flex-wrap: wrap;
    height: 300px;
    width: 100%;
    display: flex;
    padding-left: 16px;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    background-color: white;
    overflow: hidden;
  }
  .request-btn {
    background-color: #388e3c;
    font-family: "Montserrat", sans-serif;
    width: 50px;
    font-size: 12px;
    color: white;
    font-weight: bolder;
  }
}
</style>
