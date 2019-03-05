<template>
  <v-layout row fill-height id="player" justify-space-around align-space-around>
    <v-flex md4 v-if="pause" @click="stop">
        <v-img :src="require('../assets/play.png')" class="play" contain aspect-ratio="1.5"/>
    </v-flex>
    <v-flex md4 v-else @click="stop" class="play" >
        <v-img :src="require('../assets/pause.png')" class="play" contain aspect-ratio="1.3"/>
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
              prepend-icon="volume_down"
              @click:prepend="mute"
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
      } else {
        this.pause = true
        this.player.pause()
        console.log(this.pause)
      }
    },
    mute () {
      if (this.player.volume === 0) {
        this.player.volume = this.prev_volume
      } else {
        this.prev_volume = this.player.volume
        this.player.volume = 0
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

#player{
  background-color: white;
  border: cadetblue 5px solid;
  border-radius: 2%;
}
</style>
