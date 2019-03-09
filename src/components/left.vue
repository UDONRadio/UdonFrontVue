<template>
  <v-layout column fill-height justify-space-between align-space-between id="left" >
    <v-flex md1>

    </v-flex>
    <v-flex md2 pb-5>
      <div>
        <Calendar></Calendar>
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
    <v-flex md3 style="z-index:2">
      <Propos></Propos>
    </v-flex>
  </v-layout>
</template>

<script>
import Calendar from './calendar.vue'
import Propos from './propos.vue'
export default {
  name: 'left',
  components: {
    Calendar,
    Propos
  },
  data () {
    return {
      date: new Date(),
      month: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
      calendar: false
    }
  }
}
</script>

<style scoped lang="less">
#left {
  width: 100%;
}

#month{
  pointer-events: none;
  position:absolute;
  bottom:68vh;
  left:5vw;
  font-size:2vh;
  transform: rotate(-7deg);
}
#day{
  pointer-events: none;
  position:absolute;
  bottom: 56vh;
  left: 7vw;
  font-size: 8vh;
  transform: rotate(-4deg);
}
</style>
