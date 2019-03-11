<template>
    <v-layout column fill-height justify-center align-space-around @click="dialog = true" id="calendar" class="text-md-center"  pa-5>
      <v-flex md6  id="month" class="headline font-weight-bold hidden-lg-and-up" >
        <p>{{month[date.getMonth()]}}</p>
        <p>{{date.getDate()}}</p>
      </v-flex>
      <v-flex md4 class="display-1 font-weight-bold hidden-md-and-down">
        <p>{{month[date.getMonth()]}}<p/>
        <br/>
        <p>{{date.getDate()}}</p>
      </v-flex>
      <v-dialog
        v-model="dialog"
        max-width="250"
      >
        <v-card style="text-align: center">
          <h1>Déso pas fini</h1>
        </v-card>
      </v-dialog>
    </v-layout>
</template>

<script>
export default {
  name: 'propos',
  data () {
    return {
      dialog: false,
      date: new Date(),
      month: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
      calendar: false
    }
  }
}
</script>

<style scoped lang="less">
#calendar{
  background: url(../assets/calendrier.svg) no-repeat center;
  background-size: 100% 100%;
}

</style>
