<template>
  <v-layout column fill-height justify-end id="left" >
    <v-flex md4 ml-5 pl-5 mb-0 pb-0 pt-3 style="postion:relative;">
      <div style="position:absolute;">
        <img src="../assets/calendrier.svg" height="70%" width="90%"/>
      </div>
      <div id="month">
        <h1>
        {{month[date.getMonth()]}}
        </h1>
      </div>
      <div id="day">
        {{date.getDate()}}
      </div>
    </v-flex>
    <v-flex md4 pl-4 ml-3 style="position: relative;">
      <div style="position:absolute;width:100%;height: 100%;">
        <img src="../assets/propos.svg" height="98%" width="80%"/>
      </div>
      <div id="aprops">
        A propos
      </div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'left',
  data () {
    return {
      date: new Date(),
      month: ['Janvier','Février','Mars','Avril','Mai','Juin','Juillet','Aout','Septembre','Octobre','Novembre','Décembre']
    }
  }
}
</script>

<style scoped lang="less">
#left{
  width:100%;
}
div.flex{
  width:100%;
}
#month{
  position:absolute;
  margin-top:3vh;
  margin-left: 1vw;
  font-size:75%;
  transform: rotate(-8deg);
}
#day{
  position:absolute;
  margin-top:6vh;
  margin-left:2vw;
  font-size:305%;
  transform: rotate(-4deg);
}
#aprops{
  position:absolute;
  margin-top:8vh;
  margin-left:4vw;
  font-size:200%;
  transform: rotate(-25deg);
}
</style>
