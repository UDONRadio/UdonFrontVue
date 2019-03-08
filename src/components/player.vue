<template>
  <v-layout row fill-height id="player" justify-space-around align-space-around>
    <v-flex md2 style="border-right: black solid 2px;">
      <v-layout row align-end justify-center fill-height>
        <v-flex md8 v-if="pause" @click="toggle" >
            <v-img :src="require('../assets/play.svg')" class="play" contain aspect-ratio="1"/>
        </v-flex>
        <v-flex md8 v-else @click="toggle" class="play">
            <v-img :src="require('../assets/pause.svg')" class="play" contain aspect-ratio="1"/>
        </v-flex>
      </v-layout>
    </v-flex>
    <v-flex md10>
      <v-layout d-flex fill-height column id="meta">
        <v-flex md6 pa-2 class="" style="border-bottom: black solid 2px;text-align:center;">
          {{ metadata.artist }} - {{ metadata.title }}  {{ metadata.album }}
        </v-flex>
        <v-flex md6>
          <v-layout row fill-height align-space-between justify-space-between>
            <v-flex md6 pa-2 style="border-right: black solid 1px;">
              <v-slider
              v-model="player.volume"
              prepend-icon="volume_down"
              @click:prepend="mute"
              :min="0"
              :max="1"
              :step="0.05">

              </v-slider>
            </v-flex>
            <v-flex md6 pa-4 style="border-left: black solid 1px;">
              live
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
      pause: true,
      player: new Audio(),
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
    this.toggle()
  },
  methods: {
    toggle: function () {
      if (this.pause) {
        this.pause = false
        this.updateURI()
        this.player.load()
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
    updateURI() {
      const base_uri = "https://udonradio.fr:8080/udon.mp3"

      this.player.src = base_uri + '?cache-buster=' + (new Date().getTime())
    },
    getArtist: function () {
      // fetch('https://udonradio.fr/api/radio/song/played', { mode: 'cors', headers: { 'Access-Control-Allow-Origin': '*' } })
      //   .then((response) => response.json())
      //   .then((data) => {
      //     console.log(data)
      //     this.metadata.artist = data[0].artist
      //     this.metadata.title = data[0].title
      //     this.metadata.album = data[0].album
      //   })
      //   .catch((err) => {
      //     console.log(err)
      //   })
    }
  }
}

</script>

<style scoped lang="less">

#player{
  background-color: white;
  border: black 5px solid;
  border-radius: 2%;
  .flex{

  }
}
</style>
