<template>
  <v-layout row fill-height pl-3 pb-3 id="player" justify-space-around align-space-around>
    <v-flex md4 >
      <div v-if="pause" @click="stop" >
        <v-img :src="require('../assets/play.png')" class="play" contain/>
      </div>
      <div  v-else @click="stop" class="play">
        <v-img :src="require('../assets/pause.png')" class="play" contain/>
      </div>
    </v-flex>
    <v-flex md8>
      <v-layout d-flex fill-height column id="meta">
        <v-flex md6 mb-3 ml-3 pa-3>
          {{ metadata.artist }} - {{ metadata.title }}  {{ metadata.album }}
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
            <v-flex md5 pa-3>
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
      metadata: {
        artist: 'truc',
        title: 'muche',
        album: 'chose'
      }
    }
  },
  mounted: function () {
    this.getArtist()
    setInterval(this.getArtist, 10000)
    this.player = document.getElementById('media')
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

      fetch('https://udonradio.fr/api/radio/song/played', { mode: 'cors', headers: { 'Access-Control-Allow-Origin': '*' } })
        .then((response) => response.json())
        .then((data) => {
          console.log(data)
          this.metadata.artist = data[0].artist
          this.metadata.title = data[0].title
          this.metadata.album = data[0].album
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
