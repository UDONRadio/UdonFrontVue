<template>
  <v-layout fill-height id="infobox" >
    <v-flex pa-3 md12 id="textbox" v-if="active === 1">
      <h1 class="blue--text">Ma parole ! au 6b</h1>
      <br>Organisée par Guillaume Garnier, membre de UDON, Ma Parole ! est un évènement unique qui met la poésie hors livre à l’honneur. <br/> La team UDON y tient un petit studio improvisé pour retransmettre les concerts, des interviews de tous les artistes présents, des discussions avec les visiteurs.
        Le Festival Ma Parole !, c’est au 6b à Saint Denis, c’est en live pendant toute l’après-midi.<br/>
        N’hésitez pas à participer à cette journée de live sur le chat, juste là ===></p>
    </v-flex>
    <v-flex pa-3 md12 id="textbox" v-if="active === 2">
      <h1 class="green--text">La recree</h1>
      <p>a venir</p>
    </v-flex>
    <v-flex pa-3 md12 id="textbox" v-if="active === 3">
      <h1 class="red--text">Grande tambouille</h1>
    <br/>
      <p>
        La Grande Tambouille, c’est le programme par défaut sur UDON. On t’invite à discuter sur le chat pendant que la musique sélectionnée par les membres d’UDON défile.<br/>
        À terme, tu pourras voter pour les chansons qui te plaisent afin d’inspirer notre équipe 🙂
      </p>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'infobox',
  data () {
    return {
      active: 1
    }
  }
}
</script>

<style scoped lang="less">
#infobox {
  background-color: white;
  border: black 5px solid;
  border-radius: 2%;
  #textbox{
    max-height: 55vh;
    overflow-y:auto;
  }
}
</style>
