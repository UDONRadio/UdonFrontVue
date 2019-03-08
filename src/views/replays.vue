<template>
  <v-layout column fill-height align-center justify-space-around id="replays" >
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
          <Emission :emission="emissions[selected]"></Emission>
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
      selected: 0,
      emissions: [
        {
          'img': 'https://picsum.photos/200',
          'title': 'JUL',
          'description': "J'aime les bites",
          'episode': [
            {
              'title': 'cyka',
              'key': '/UDONradio/attique-vingoss-project/'
            }
          ]
        },
        {
          'img': 'https://picsum.photos/200',
          'title': 'PEQ',
          'description': "J'aime vraiment les bites",
          'episode': [
            {
              'title': 'tommy',
              'key': '/UDONradio/%C3%A9mission-du-dimanche-la-masculinit%C3%A9/'
            },
            {
              'title': 'bite',
              'key': '/UDONradio/or-piste-po%C3%A8me-5-le-collectif-cln/'
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
