<template>
  <v-layout column fill-height align-center justify-center id="replays" >
    <v-flex md10>
      <v-layout row fill-height justify-space-between >
        <v-flex md7 pr-3>
          <v-layout column fill-height justify-space-between align-space-between>
            <v-flex md1 pb-3>
              <Mixcloud :episode="episode"></Mixcloud>
            </v-flex>
            <v-flex md11 pt-3>
              <Emissions></Emissions>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex md5 pl-3>
          <Emission :emission="emission"></Emission>
        </v-flex>
      </v-layout>
    </v-flex>
  </v-layout>
</template>

<script>
import Mixcloud from '../components/mixcloud.vue'
import Emissions from '../components/emissions.vue'
import Emission from '../components/emission.vue'

export default {
  name: 'Home',
  components: {
    Mixcloud,
    Emission,
    Emissions
  },
  data () {
    return {
      episode: this.ep,
      emission: this.em,
      emissions: [
        {
          id: 1,
          titre: 'placeholder',
          episodes: [
            {
              titre: ''
            }
          ]
        }
      ]
    }
  },
  props: ['ep', 'em'],
  mounted: function () {
    if (this.emission === undefined) this.emission = '1'
    if (this.episode === undefined) this.episode = '2'
  }
}
</script>

<style scoped lang="less">
  #replays{
  }
  .flex{
    border: solid black 1px;
  }
</style>
