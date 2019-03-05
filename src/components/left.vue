<template>
  <v-layout column fill-height justify-space-between align-space-between id="left" >
    <v-flex md1>

    </v-flex>
    <v-flex md2 pb-5>
      <div>
        <v-img :src="require('../assets/calendrier.png')" contain aspect-ratio="1.25" />
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
    <v-flex md3>
      <div>
        <v-img :src="require('../assets/propos.svg')" contain aspect-ratio="1"/>
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
      month: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
    }
  }

}
</script>

<style scoped lang="less">
#left {
  width: 100%;
}

#month{
  position:absolute;
  bottom:66vh;
  left:5vw;
  font-size:2vh;
  transform: rotate(-7deg);
}
#day{
  position:absolute;
  bottom: 55vh;
  left: 7vw;
  font-size: 8vh;
  transform: rotate(-4deg);
}
</style>
