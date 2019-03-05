<template>
  <v-layout column fill-height justify-end id="left" >
    <v-flex md3 offset-md1 style="postion:relative;">
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
    <v-flex md2>

    </v-flex>
    <v-flex md4>
      <div>
        <v-img :src="require('../assets/propos.svg')" contain aspect-ratio="0.95"/>
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
  },

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
  bottom:67vh;
  left:8vw;
  font-size:100%;
  transform: rotate(-9deg);
}
#day{
  position:absolute;
  bottom: 57vh;
  left: 9vw;
  font-size: 350%;
  transform: rotate(-4deg);
}
</style>
