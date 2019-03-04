<template>
  <v-layout row fill-height pl-3 pb-3 id="player">
    <v-flex md4 >
      <div v-if="pause" @click="stop" >
        <v-img :src="require('../assets/play.png')" class="play" />
      </div>
      <div  v-else @click="stop" class="play">
        <v-img :src="require('../assets/pause.png')" class="play"/>
      </div>
    </v-flex>
    <v-flex md8>
      <v-layout d-flex fill-height column id="meta">
        <v-flex md6 mb-3 ml-3 >
          {{ artiste }} - {{ titre }}  {{ album }}
        </v-flex>
        <v-flex md6>
          <v-layout row fill-height align-space-between justify-space-between>
            <v-flex md6>
              <v-slider
              v-model="player.volume"
              min="0"
              max="1"
              step="0.05">

              </v-slider>
            </v-flex>
            <v-flex md5 >
              live1
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  name: 'player',
  data () {
    return {
      pause: false,
      player: '',
      prev_volume: 50,
      volume: 50,
      artiste: 'jean-mimi le hobbo',
      titre: 'The tarliest tarly wave',
      album: 'I can\'t be more tarly'
    }
  },
  mounted: function () {
    this.player = document.getElementById('media')
    this.getArtist();
    console.log(this.player)
  },
  methods: {
    stop: function () {
      if (this.pause) {
        this.pause = false
        this.player.play()
        console.log(this.pause)
      }
      else {
        this.pause = true
        this.player.pause()
        console.log(this.pause)
      }
    },
    getArtist: function () {
      fetch('http://udonradio.fr/api/radio/song/played', { mode: 'cors', headers: { 'Access-Control-Allow-Origin': '*' } })
        .then((response) => {
          console.log(response)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}

</script>

<style scoped lang="less">
#meta{
}
div.flex {
  background:white;
}
.play{
  max-width:13vw;
  max-height:16vh;
}
</style>
